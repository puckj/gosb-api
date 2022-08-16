import { diskStorage } from 'multer';
import path = require('path');
import Generator from '../../functions/Generator';
let fs = require('fs-extra');

type validMimeType = 'image/png' | 'image/jpg' | 'image/jpeg';
const validMimeTypes: validMimeType[] = [
  'image/png',
  'image/jpg',
  'image/jpeg',
];

export const saveImageToStorage = {
    storage: diskStorage({
      destination: async (req, file, cb) => {
        let d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        const dir = `./public/DELIVERY/IMAGE/${year}/${month}/${day}`
        fs.mkdirsSync(dir);
        cb(null, dir);
      },
      filename: async (req, file, cb) => {
        // const fileExtension: string = path.extname(file.originalname);
        const generatedName = await Generator.generateCharacter(32)
        // const fileName: string = 'img_' + generatedName + fileExtension;
        const fileName: string = 'img_' + generatedName;
        cb(null, fileName);
      },
    }),
    fileFilter: (req, file, cb) => {
        const allowedMimeTypes: validMimeType[] = validMimeTypes;
        allowedMimeTypes.includes(file.mimetype) ? cb(null, true) : cb(null, false);
    },
  };