import path from 'path';
import { fileURLToPath } from 'url';
import { createWriteStream } from "node:fs";
const { stdin } = process;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathFile = path.join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
  const writeStream = createWriteStream(pathFile);
  stdin.on('data', (data) => writeStream.write(data));
};

await write();