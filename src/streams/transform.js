import { Transform, pipeline } from "node:stream";

const transform = async () => {
const input = process.stdin;
const output = process.stdout;
const myTransform = new Transform({
    transform(chunk, encoding, callback) {
        const cnvInput = chunk.toString().trim();
        const reversedInput = cnvInput.split('').reverse().join('');
        callback(null, reversedInput + '\n' );
    } } );
    pipeline(input, myTransform, output, (err) => {
        if (err) {
            console.log('Error');
        }
    });
};

await transform();