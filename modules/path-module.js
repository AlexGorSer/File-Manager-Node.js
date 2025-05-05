import path from "node:path";
import { EOL } from "node:os";
import fs from "fs/promises";
import { stdout } from "node:process";

let currentPath = process.cwd();

const changePathUP = async () => {
  currentPath = path.resolve(currentPath, "../");
  process.chdir(currentPath);
};

const changePath = async (input) => {
  const newPath = path.resolve(...input);
  await fs.access(newPath);
  currentPath = newPath;
  process.chdir(newPath);
};

const directoryList = async () => {
  console.log("list");
};

const getCurrentPath = async () => {
  stdout.write(`You are currently in ${currentPath}${EOL}`);
};
export { changePathUP, directoryList, getCurrentPath, currentPath, changePath };
