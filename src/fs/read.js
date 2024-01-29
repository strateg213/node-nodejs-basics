import path from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathFile = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    try {
        const contents = await readFile(pathFile, { encoding: 'utf8' });
        console.log(contents);
    } catch (error) {
        throw new Error ('FS operation failed');
    }
};

await read();