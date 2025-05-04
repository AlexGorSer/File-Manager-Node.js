import { currentPath} from "./path-module.js";
import fs from 'node:fs';
import path from 'node:path';


const readFile = async (pathToRead) => {
const readPath = path.join(currentPath, pathToRead);

await fs.promises.access(readPath);

const readStream = fs.createReadStream(readPath, {encoding:'utf8'});

readStream.on('data', (data)=> {
  process.stdout.write(data + '\n\n');
})

};

const addFile = async (filename) => {
  const readPath = path.join(currentPath, filename);

  await fs.promises.appendFile(readPath, '', { flag: "wx" });
};

const mkdirFile = async (foldername) => {
  const folderPath = path.join(currentPath, foldername);

  await fs.promises.mkdir(folderPath);

};

const renameFile = async () => {
  console.log("rename");
};

const copyFile = async () => {
  console.log("copy");
};

const moveFile = async () => {
  console.log("move");
};

const deleteFile = async () => {
  console.log("delete");
};

export {
  readFile,
  addFile,
  mkdirFile,
  renameFile,
  copyFile,
  moveFile,
  deleteFile,
};
