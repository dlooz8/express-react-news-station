const prisma = require('../config/prisma');


const getAll = async () => {
    const users = await prisma.users.findMany();
    console.log(users);
    return users;
}

const getById = async (id) => {
    const user = await prisma.users.findUnique({
        where: {
            id: id
        }
    });
    return user;
}


module.exports = {
    getAll,
    getById
}