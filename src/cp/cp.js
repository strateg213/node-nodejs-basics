import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathFile = path.join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
     spawn("node", [pathFile, ...args], { stdio: ['inherit', 'inherit', 'inherit', "ipc"] });
  };

await spawnChildProcess( ['--some-arg', 'value1', '--other', '1337', '--arg2', '42'] );