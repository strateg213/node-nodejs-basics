import os from 'node:os';
import { Worker } from 'node:worker_threads';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathFile = path.join(__dirname, 'worker.js');

const worker = new Worker(pathFile, { workerData: os.cpus().length});
//worker.postMessage(os.cpus().length);

const performCalculations = async () => {
    worker.on('message', msg => {
        console.log(msg);
    });
};

await performCalculations();