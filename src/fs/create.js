import path from 'path';
import { fileURLToPath } from 'url';
import { writeFile } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathFile = path.join(__dirname, 'files', 'fresh.txt');

const create = async () => {
    try {
        await writeFile(pathFile, 'I am fresh and young', { flag: 'wx' } );
    } catch (error) {
        throw new Error ('FS operation failed');
    }
};

await create();