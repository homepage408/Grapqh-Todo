const express = require("express");
const port = process.env.PORT || 3000;
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./app/schema");
const db = require("./app/db/models");
const { resolvers } = require("./app/resolvers");
const cloudinary = require("./app/utils/helpers/cloudinary");
const { uploadPhoto, uploadAttachment } = require("./app/utils/helpers/multer");
const morgan = require("morgan");
const path = require("path");

const app = express();
// app.use(morgan("dev"));
app.use(express.json());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const auth = req.headers.authorization;
    return {
      req,
      db,
      auth,
    };
  },
  playground: {
    settings: {
      "editor.theme": "dark",
    },
  },
  introspection: true,
});
server.applyMiddleware({ app });

app.get("/", async (req, res) => {
  return res.json({
    message: "welcome",
  });
});

app.patch("/upload/:id/photo", uploadPhoto.single("file"), async (req, res) => {
  const result = await cloudinary.uploader.upload(req.file.path);
  const newData = {
    photo: result.url,
  };
  const data = await db.user.update(newData, {
    where: {
      id: req.params.id,
    },
  });
  if (data) {
    res.json({ message: "berhasil" });
  }
});

app.patch(
  "/upload/:id/attachment",
  uploadAttachment.single("file"),
  async (req, res) => {
    try {
      const result = await cloudinary.uploader.upload(req.file.path);
      const newData = {
        attachment: result.url,
      };
      const data = await db.todo.update(newData, {
        where: {
          id: req.params.id,
        },
      });
      if (data) {
        res.json({ message: "berhasil" });
      }
    } catch (error) {
      res.json({
        message:error
      });
    }
  }
);

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
