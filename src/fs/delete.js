import path from 'path';
import { fileURLToPath } from 'url';
import { rm } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathFile = path.join(__dirname, 'files', 'fileToRemove.txt');


const remove = async () => {
    try {
        await rm(pathFile);
    } catch (error) {
        throw new Error ('FS operation failed');
    }
};

await remove();