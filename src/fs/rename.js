import path from 'path';
import { fileURLToPath } from 'url';
import { cp } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const oldPath = path.join(__dirname, 'files', 'wrongFilename.txt');
const newPath = path.join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
    try {
        await cp(oldPath, newPath, { force: false, errorOnExist: true });
    } catch (error) {
        throw new Error ('FS operation failed');
    }
};

await rename();
