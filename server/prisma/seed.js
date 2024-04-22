const prisma = require('../src/config/prisma');
const bcrypt = require('bcrypt');
const { fakerRU: faker } = require('@faker-js/faker');

const categories = ["Технологии", "Автомобили", "Мода", "Еда", "Спорт", "Животные", "Музыка", "Путешествия", "Общество", "Прочее"];

const count = 100;

function getRandomCategory() {
  return categories[Math.floor(Math.random() * categories.length)];
}

function loadingAnimation(
    text,
    chars = ["⠙", "⠘", "⠰", "⠴", "⠤", "⠦", "⠆", "⠃", "⠋", "⠉"],
    delay = 100
) {
    let x = 0;

    return setInterval(function() {
        process.stdout.write("\r" + chars[x++] + " " + text);
        x = x % chars.length;
    }, delay);
}

async function seed() {
    const loadingInterval = loadingAnimation("Seeding");
    const users = [];
    for (let i = 0; i < count; i++) {
        users.push({
            id: faker.string.uuid(),
            name: faker.person.fullName(),
            email: faker.internet.email(),
            created_at: faker.date.past(),
            password: await bcrypt.hash(faker.internet.password(), 10),
            avatar_url: faker.image.avatarLegacy()
        });
    }
    await prisma.Users.createMany({ data: users });
    
    const posts = [];
    for (let i = 0; i < count; i++) {
        const randomCategory = getRandomCategory();
        posts.push({
            post_id: faker.string.uuid(),
            theme: faker.lorem.paragraph({ min: 1, max: 3 }),
            text: faker.lorem.lines({ min: 25, max: 100 }),
            tags: faker.lorem.words(),
            title_img: faker.image.urlLoremFlickr(),
            created_at: faker.date.past(),
            user_id: faker.helpers.arrayElement(users).id,
            category: randomCategory,
            count_bookmarks: faker.number.int({ max: 100, min: 0 }),
            count_likes: faker.number.int({ max: 100, min: 0 }),
        });
    }
    await prisma.posts.createMany({ data: posts });

    const bookmarks = [];
    for (let i = 0; i < count; i++) {
        bookmarks.push({
            id: faker.string.uuid(),
            user_id: faker.helpers.arrayElement(users).id,
            post_id: faker.helpers.arrayElement(posts).post_id
        });
    }
    await prisma.bookmarks.createMany({ data: bookmarks });

    const comments = [];
    for (let i = 0; i < count; i++) {
        comments.push({
            id: faker.string.uuid(),
            text: faker.lorem.paragraph({ min: 1, max: 8 }),
            created_at: faker.date.past(),
            user_id: faker.helpers.arrayElement(users).id,
            post_id: faker.helpers.arrayElement(posts).post_id
        });
    }
    await prisma.comments.createMany({ data: comments });

    const nestedComments = [];
    for (let i = 0; i < count; i++) {
        nestedComments.push({
            id: faker.string.uuid(),
            text: faker.lorem.paragraph({ min: 1, max: 4 }),
            created_at: faker.date.past(),
            user_id: faker.helpers.arrayElement(users).id,
            post_id: faker.helpers.arrayElement(posts).post_id,
            parent_comment_id: faker.helpers.arrayElement(comments).id
        });
    }
    await prisma.nestedComments.createMany({ data: nestedComments });

    await prisma.$disconnect();
    clearInterval(loadingInterval);
    console.log('\nDatabase seeded!');
}

seed().catch(e => {
    console.error(e);
    process.exit(1);
});