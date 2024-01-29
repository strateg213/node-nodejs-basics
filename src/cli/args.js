import { argv } from 'node:process';

const parseArgs = () => {
    try {
        argv.forEach((propName) => {
            if (propName.includes('--')) {
                let value = argv[argv.indexOf(propName) + 1];
                console.log(`${propName} is ${value}`);
            }
        });
        } catch (error) {
            throw new Error ('ERROR!');
        }
    };

    parseArgs();
