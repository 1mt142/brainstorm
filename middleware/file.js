const multer = require('multer');

const DIR = './public/';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, DIR);
    },
    filename: (req, file, cb) => {
      const ext = file.originalname.substr(file.originalname.lastIndexOf('.'));
      const fileName = file.fieldname + '-' + Date.now() + ext;
      cb(null, fileName)
    }
  });

  var addImage = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
      if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
      }
    }
  });
  
  module.exports = addImage;

  