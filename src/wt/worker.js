import { workerData, parentPort } from 'node:worker_threads';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);
const data = nthFibonacci(workerData);
const sendResult = () => {
  parentPort.postMessage(data);
};

sendResult();