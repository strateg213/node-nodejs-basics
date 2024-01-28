import path from 'path';
import { fileURLToPath } from 'url';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream} from 'node:fs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathFile = path.join(__dirname, 'files', 'fileToCompress.txt');
const pathArchive = path.join(__dirname, 'files', 'archive.gz');
const compress = async () => {
  const source = createReadStream(pathFile);
  const gzip = createGzip();
  const destination = createWriteStream(pathArchive);
  pipeline(source, gzip, destination, (err) => {
    if (err) {
        console.error('An error occurred:', err);
        process.exitCode = 1;
    }
  });
};

await compress();
