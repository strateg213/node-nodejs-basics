import path from 'path';
import { fileURLToPath } from 'url';
import { createUnzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream} from 'node:fs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathArchive = path.join(__dirname, 'files', 'archive.gz');
const pathFile = path.join(__dirname, 'files', 'fileToCompress.txt');
const decompress = async () => {
    const source = createReadStream(pathArchive);
    const unzip = createUnzip();
    const destination = createWriteStream(pathFile);
    pipeline(source, unzip, destination, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = 1;
        }
    });
};

await decompress();