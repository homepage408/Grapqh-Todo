const multer = require("multer");
const path = require("path");

// Dengan function
function upload(path) {
  const diskStorage = multer.diskStorage({
    destination: path.join("./public/upload"),
    filename: (req, file, cb) => {
      // console.log(file);
      cb(
        null,
        `cover-${file.fieldname}-${Date.now()}-${path.extname(
          file.originalname
        )}`
      );
    },
  });
  return diskStorage;
}

const mulllter = multer({
  fileFilter: function (req, file, cb) {
    if (
      path.extname(file.originalname) !== ".jpg" &&
      path.extname(file.originalname) !== ".png"
    ) {
      return cb(new Error("Hanya jpg png"));
    }
    cb(null, true);
  },
});
