"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert("Books", [
      {
        title: "Christine",
        author: "Stephen King",
        pageQuantity: 616,
        createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      {
        title: "Eragon",
        author: "Christopher Paolini",
        pageQuantity: 453,
        createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      {
        title: "Harry Potter",
        author: "J.K. Rowling",
        pageQuantity: 320,
        createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      {
        title: "Game of Thrones",
        author: "George R.R. Martin",
        pageQuantity: 543,
        createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete("Books", null, {});
  },
};
