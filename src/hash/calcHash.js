import { createReadStream } from 'node:fs';
import path from "path";
import { fileURLToPath } from "url";
const { createHash } = await import('node:crypto');
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathFile = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');


const calculateHash = async () => {
    const hash = createHash('sha256');
    const stream = createReadStream(pathFile);
    stream.on("data", (chunk) => hash.update(chunk));
    stream.on("end", () => console.log(hash.digest('hex')));
};

await calculateHash();