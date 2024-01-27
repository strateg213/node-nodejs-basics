import path from 'path';
import { fileURLToPath } from 'url';
import { cp } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcDirectory = path.join(__dirname, 'files');
const destDirectory = path.join(__dirname, 'files_copy');

const copy = async () => {
    try {
      await cp(srcDirectory, destDirectory, { recursive: true, force: false, errorOnExist: true });
    } catch (error) {
        throw new Error ('FS operation failed');
    }
};

await copy();
