const { verifyJWT, generateJWT } = require("../utils/middleware/authJwt");
const { hashing } = require("./../utils/helpers/hashPasword");
const bcrypt = require("bcrypt");

const resolvers = {
  Query: {
    async user(parent, _, { db }) {
      const data = await db.user.findAll({
        include: db.todo,
      });
      console.log(data);
      return data;
    },
  },

  Mutation: {
    //   Login
    async login(parent, args, { db }) {
      const dataEmail = await db.user.findOne({ where: { email: args.email } });
      if (dataEmail) {
        const check = bcrypt.compareSync(
          args.password,
          dataEmail.dataValues.password
        );
        if (check) {
          const payload = {
            id: dataEmail.dataValues.id,
            username: dataEmail.dataValues.username,
            email: dataEmail.dataValues.email,
            password: dataEmail.dataValues.password,
          };
          data = generateJWT(payload);
          return {
            id: dataEmail.dataValues.id,
            username: dataEmail.dataValues.username,
            email: dataEmail.dataValues.email,
            token: data,
          };
        }
      }
    },

    // User
    async createUser(parent, args, { db }) {
      const dataEmail = await db.user.findOne({
        where: { email: args.email },
      });
      if (dataEmail) {
        throw new Error("Email Harus Unique");
      }
      const { salt, hash } = hashing(args.password);
      const data = await db.user.create({
        username: args.username,
        email: args.email,
        password: hash,
        salt: salt,
        photo: args.photo,
      });
      return data;
    },

    async updateUser(parent, args, { db }) {
      const { salt, hash } = hashing(args.password);
      const newData = {
        username: args.username,
        email: args.email,
        password: hash,
        salt: salt,
      };
      const data = await db.user.update(newData, {
        where: { id: args.id },
      });
      if (data[0]) {
        const dataBaru = await db.user.findByPk(args.id);
        return dataBaru;
      }
    },

    async deleteUser(parent, args, { db }) {
      return await db.user.destroy({ where: { id: args.id } });
    },
  },
};

module.exports = {
  resolvers,
};
