import path from 'path';
import dotenv from 'dotenv';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const res = dotenv.config({
  path: path.resolve(__dirname, `../../.${process.env.NODE_ENV || 'dev'}.env`),
});

export default res