'use strict';
const faker = require("faker")
const comment = [...Array(15)].map((e)=>{
  return{
    todoId:faker.random.number({ min: 1, max: 10 }),
    body: faker.lorem.sentences(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
  }
})


module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkInsert("comments", comment);
    // await queryInterface.bulkInsert()
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
