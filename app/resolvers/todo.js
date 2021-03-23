// const { verifyJWT, generateJWT } = require("../utils/middleware/authJwt");
// const { isLoggedIn } = require("./../utils/helpers/isLoggedIn");

const resolvers = {
  Query: {
    async todo(parent, _, { db, auth }) {
      //   console.log(auth);
      // const { loggedIn, user } = isLoggedIn(auth);
      //   console.log({ user });
      // if (loggedIn) {
      return await db.todo.findAll({
        include: db.comment,
      });
      // }
    },

    async findTodo(parent,args,{db}){
      return await db.todo.findOne({
        where:{
          id:args.id
        },
        include: db.comment
      })
    }
  },

  Mutation: {
    async createTodo(parent, args, { db, auth }) {
      // const { loggedIn, user } = isLoggedIn(auth);
      // if (loggedIn) {
      return await db.todo.create(args);
      // }
    },

    async updateTodo(parent, args, { db }) {
      // const { loggedIn, user } = isLoggedIn(auth);
      // if (loggedIn) {
      const newtodo = {
        title: args.title,
        description: args.description,
      };
      const data = await db.todo.update(newtodo, {
        where: { id: args.id },
      });

      if (data[0]) {
        return await db.todo.findOne({
          where: { id: args.id },
        });
        // } else {
        //   throw new Error("Tidak berhasil update");
        // }
      }
    },

    async deleteTodo(parent, args, { db }) {
      // const { loggedIn, user } = isLoggedIn(auth);
      // if (loggedIn) {
      return await db.todo.destroy({ where: { id: args.id } });
      // }
    },
  },
};
module.exports = {
  resolvers,
};
