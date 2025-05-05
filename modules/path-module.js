import path from "node:path";
import { EOL } from "node:os";
import fs from "fs";
import { stdout } from "node:process";

let currentPath = process.cwd();

const changePathUP = async () => {
  currentPath = path.resolve(currentPath, "../");
  process.chdir(currentPath);
};

const changePath = async (input) => {
  const newPath = path.resolve(...input);
  await fs.promises.access(newPath);
  currentPath = newPath;
  process.chdir(newPath);
};

const directoryList = async () => {
  const table = [];
  const arrFiles = await fs.promises.readdir(currentPath);

  for (let index = 0; index < arrFiles.length; index++) {
    const pathToCheck = path.join(currentPath, arrFiles[index]);
    const fileCheck = await fs.promises.stat(pathToCheck);
    const objectToPush = {};

    objectToPush.Name = arrFiles[index];
    if (fileCheck.isFile()) {
      objectToPush.Type = "file";
    } else {
      objectToPush.Type = "directory";
    }

    table.push(objectToPush);
  }
  console.table(
    table.sort((a) => {
      return a.Type === "file" ? 1 : -1;
    })
  );
};

const getCurrentPath = async () => {
  stdout.write(`You are currently in ${currentPath}${EOL}`);
};
export { changePathUP, directoryList, getCurrentPath, currentPath, changePath };
