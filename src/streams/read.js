import path from 'path';
import { fileURLToPath } from 'url';
import {createReadStream} from "node:fs";
const { stdout } = process;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathFile = path.join(__dirname, 'files', 'fileToRead.txt');
const read = async () => {
const stream = createReadStream(pathFile);
stream.on('data', (data) => stdout.write(data));
};

await read();