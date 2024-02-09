const express = require('express');
const axios = require('axios');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use(express.json())

axios.defaults.baseURL = `http://localhost:5173`;

// axios.post('/api', {
//   params: {
//     name: 'Dmitry',
//     email: 'Dmitry@ya.ru',
//     posts: [{ title: 'Post 1' }, { title: 'Post 2' }],
//   }
// }).then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

  axios.get('/profile', {
    params: {
      name: 'Dmitry',
    }
  })
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log('done!');
  });  




app.post(`/signup`, async (req, res) => {
  const { name, email, posts } = req.body

  const postData = posts
    ? posts.map((post) => {
        return { title: post.title, content: post.content || undefined }
      })
    : []

  const result = await prisma.user.create({
    data: {
      name,
      email,
      posts: {
        create: postData,
      },
    },
  })
  res.json(result)
})

app.post(`/post`, async (req, res) => {
  const { title, content, authorEmail } = req.body
  const result = await prisma.post.create({
    data: {
      title,
      content,
      author: { connect: { email: authorEmail } },
    },
  })
  res.json(result)
})

app.put('/post/:id/views', async (req, res) => {
  const { id } = req.params

  try {
    const post = await prisma.post.update({
      where: { id: Number(id) },
      data: {
        viewCount: {
          increment: 1,
        },
      },
    })

    res.json(post)
  } catch (error) {
    res.json({ error: `Post with ID ${id} does not exist in the database` })
  }
})

app.put('/publish/:id', async (req, res) => {
  const { id } = req.params

  try {
    const postData = await prisma.post.findUnique({
      where: { id: Number(id) },
      select: {
        published: true,
      },
    })

    const updatedPost = await prisma.post.update({
      where: { id: Number(id) || undefined },
      data: { published: !postData.published || undefined },
    })
    res.json(updatedPost)
  } catch (error) {
    res.json({ error: `Post with ID ${id} does not exist in the database` })
  }
})

app.delete(`/post/:id`, async (req, res) => {
  const { id } = req.params
  const post = await prisma.post.delete({
    where: {
      id: Number(id),
    },
  })
  res.json(post)
})

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany()
  res.json(users)
})

app.get('/user/:id/drafts', async (req, res) => {
  const { id } = req.params

  const drafts = await prisma.user
    .findUnique({
      where: {
        id: Number(id),
      },
    })
    .posts({
      where: { published: false },
    })

  res.json(drafts)
})

app.get(`/post/:id`, async (req, res) => {
  const { id } = req.params

  const post = await prisma.post.findUnique({
    where: { id: Number(id) },
  })
  res.json(post)
})

app.get('/feed', async (req, res) => {
  const { searchString, skip, take, orderBy } = req.query

  const or = searchString
    ? {
        OR: [
          { title: { contains: searchString } },
          { content: { contains: searchString } },
        ],
      }
    : {}

  const posts = await prisma.post.findMany({
    where: {
      published: true,
      ...or,
    },
    include: { author: true },
    take: Number(take) || undefined,
    skip: Number(skip) || undefined,
    orderBy: {
      updatedAt: orderBy || undefined,
    },
  })

  res.json(posts)
})

app.listen(process.env.SERVER_PORT, () =>
  console.log('🚀 Server ready at port ' + process.env.SERVER_PORT + ' 🚀'),
)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// async function testDB() {

    // async function main() {
    //     const post = await prisma.post.update({
    //       where: { id: 1 },
    //       data: { published: true },
    //     })
    //     console.log(post)
    //   }

//     await prisma.users.create({
//         data: {
//             name: 'Dmitry',
//             email: 'Dmitry@ya.ru',
//             password: '12345'
//         }
//     })

//     const allUsers = await prisma.users.findMany({
//         include: {
//             posts: true
//         }
//     });
//     console.log(allUsers);

// }

// testDB()
//     .then(async() => {
//         await prisma.$disconnect()
//     })
//     .catch(async (err) => {
//         console.error(err)
//         await prisma.$disconnect()
//         process.exit(1);
//     });