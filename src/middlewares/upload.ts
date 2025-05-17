// src/middlewares/upload.ts

import multer from 'multer';
import path from 'path';

const upload = multer({
  dest: 'uploads/',
  fileFilter: (_, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== '.csv') {
      return cb(new Error('Only CSV files are allowed'));
    }
    cb(null, true);
  },
});

export default upload;
