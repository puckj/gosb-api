/* eslint-disable prefer-const */
import { diskStorage } from 'multer';
// import path = require('path');
import Generator from '../../functions/Generator';
import fs from 'fs-extra';

type validMimeType = 'image/png' | 'image/jpg' | 'image/jpeg';
const validMimeTypes: validMimeType[] = [
  'image/png',
  'image/jpg',
  'image/jpeg',
];

export const saveImageToStorage = {
  storage: diskStorage({
    destination: async (_req, _file, cb) => {
      let d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;
      const dir = `./public/DELIVERY/IMAGE/${year}/${month}/${day}`;
      fs.mkdirsSync(dir);
      cb(null, dir);
    },
    filename: async (_req, _file, cb) => {
      // const fileExtension: string = path.extname(file.originalname);
      const generatedName = await Generator.generateCharacter(32);
      // const fileName: string = 'img_' + generatedName + fileExtension;
      const fileName: string = 'img_' + generatedName;
      cb(null, fileName);
    },
  }),
  fileFilter: (_req: any, file: any, cb: any) => {
    const allowedMimeTypes: validMimeType[] = validMimeTypes;
    allowedMimeTypes.includes(file.mimetype) ? cb(null, true) : cb(null, false);
  },
};
