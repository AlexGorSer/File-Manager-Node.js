import {stdin, stdout} from "node:process"
import path from 'node:path';


const currentPath = path.dirname(import.meta.dirname);
const startArguments = process.argv.slice(2);
const userName = startArguments.filter((ar) => ar.startsWith('--username='))[0].replace("--username=", '');

const welcomeMessage = `Welcome to the File Manager, ${userName}!`
const exitMessage = `Thank you for using File Manager, ${userName}, goodbye!`;


const startFileManager  = async () => {

  stdout.write(welcomeMessage + '\n');
  stdout.write(currentPath + '\n');

  stdin.on('data', (command)=> {
    console.log(command.toString());
  })


  process.on('SIGINT', ()=> {
    stdout.write(exitMessage + '\n');
    process.exit();
  })
}


await startFileManager();