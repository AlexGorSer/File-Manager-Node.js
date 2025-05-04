import path from "node:path";
import { EOL } from "node:os";
import fs from 'fs/promises';
import { stdout } from "node:process";

let currentPath = path.dirname(process.cwd());

const changePathUP = async () => {
currentPath = path.resolve(currentPath, "../");
};

const changePath = async (input) => {
  const newPath = path.resolve(input);
  await fs.access(newPath);
  currentPath = newPath;
}

const newPath = async (input) => {
 const newPath = path.join(currentPath, input);
  await fs.access(newPath);
  currentPath = newPath;
};

const directoryList = async () => {
  console.log("list");
};

const getCurrentPath = async () => {
  stdout.write(`You are currently in ${currentPath}${EOL}`);
}
export { changePathUP, newPath, directoryList, getCurrentPath, currentPath, changePath };
