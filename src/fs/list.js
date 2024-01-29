import path from 'path';
import { fileURLToPath } from 'url';
import { readdir } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathDirectory = path.join(__dirname, 'files');

const list = async () => {
    try {
        const filesName = await readdir(pathDirectory);
        for (const file of filesName) {
            console.log(file); }
    } catch (error) {
        throw new Error ('FS operation failed');
    }
};

await list();