import { env } from 'node:process';
env.RSS_app = 'node';
env.RSS_school = 'node_js';

const parseEnv = () => {
    try {
        const listEnv = process.env;
        for (let key in listEnv) {
            if (key.includes('RSS_')) {
                console.log(key + '=' + listEnv[key]);
            }
        }
    } catch (error) {
        throw new Error ('ERROR!');
    }
};

parseEnv();