const resolvers = {
  Query: {
    async comment(parent, _, { db }) {
      return await db.comment.findAll();
    },

    async findComment(parent, args, { db }) {
      return await db.comment.findOne({
        where: { id: args.id },
      });
    },
  },

  Mutation: {
    async createComment(parent, args, { db }) {
      return await db.comment.create({
        todoId: args.todoId,
        body: args.body,
      });
    },

    async updateComment(parent, args, { db }) {
      const newData = {
        todoId: args.todoId,
        body: args.body,
      };
      const data = await db.comment.update(newData, {
        where: {
          id: args.id,
        },
      });
      if (data[0]) {
        return await db.comment.findOne({
          where: {
            id: args.id,
          },
        });
      } else {
        throw new Error("Gagal update");
      }
    },

    async deleteComment(parent, args, { db }) {
      // const { loggedIn, user } = isLoggedIn(auth);
      // if (loggedIn) {
      const data = await db.comment.destroy({ where: { id: args.id } });
      return data
      // }
    },
  },
};
module.exports = {
  resolvers,
};
