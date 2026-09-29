import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const port = 3333;

const app = express();

app.use(express.static(path.join(dirname, './public')));

app.listen(port, () => console.log("prg2 is running at ", port));