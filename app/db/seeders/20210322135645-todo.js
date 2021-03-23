"use strict";
const faker = require("faker");
const todo = [...Array(10)].map((item) => {
  return {
    userId: faker.random.number({ min: 1, max: 9 }),
    title: faker.lorem.word(),
    description: faker.lorem.sentences(),
    attachment: "",
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
  };
});

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkInsert("todos", todo);
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
  },
};
