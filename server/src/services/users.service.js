const prisma = require('../config/prisma');


const getAll = async () => {
    const users = await prisma.users.findMany();
    console.log(users);
    return users;
}

module.exports = {
    getAll
}