import { currentPath } from "./path-module.js";
import fs from "node:fs";
import path from "node:path";
import stream from "node:stream";

const readFile = async (pathToRead) => {
  const readPath = path.join(currentPath, ...pathToRead);

  await fs.promises.access(readPath);

  return new Promise((resolve, reject) => {
    const readStream = fs.createReadStream(readPath, { encoding: "utf8" });

    readStream.on("data", (data) => {
      process.stdout.write(data + "\n\n");
      resolve();
    });
    readStream.on('error', ()=> {
      reject()
    })
  });
};

const addFile = async (filename) => {
  const readPath = path.join(currentPath, ...filename);
  
  await fs.promises.appendFile(readPath, "", { flag: "wx" });
};

const mkdirFile = async (foldername) => {
  const folderPath = path.join(currentPath, ...foldername);
  
  await fs.promises.mkdir(folderPath);
};

const renameFile = async ([pathToFile, newName]) => {
  const folderPath = path.resolve(currentPath, pathToFile);
  const pathToRename = path.resolve(path.dirname(folderPath), newName);
  await fs.promises.access(folderPath);

  await fs.promises.rename(folderPath, pathToRename);
};

const copyFile = async ([pathToFile, pathToCopy]) => {
  const folderPath = path.resolve(currentPath, pathToFile);
  const { base } = path.parse(folderPath);
  const copyPath = path.resolve(pathToCopy);

  await fs.promises.access(folderPath);

  const readStream = fs.createReadStream(folderPath);
  const writeStream = fs.createWriteStream(path.join(copyPath, base));

  await stream.promises.pipeline(readStream, writeStream);
};

const moveFile = async ([pathToFile, PathToMove]) => {
  const folderPath = path.resolve(currentPath, pathToFile);
  const { base } = path.parse(folderPath);
  const movePath = path.resolve(PathToMove);

  await fs.promises.access(folderPath);
  
  const readStream = fs.createReadStream(folderPath);
  const writeStream = fs.createWriteStream(path.join(movePath, base));

  await stream.promises.pipeline(readStream, writeStream);

  await fs.promises.unlink(folderPath);
};

const deleteFile = async ([pathToDelete]) => {
  const deletePath = path.resolve(currentPath, pathToDelete);
  await fs.promises.access(deletePath);

  await fs.promises.unlink(deletePath);
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
