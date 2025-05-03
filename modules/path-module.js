import path from "node:path";
import { EOL } from "node:os";
import { stdout } from "node:process";

let currentPath = path.dirname(process.cwd());

const changePathUP = async () => {
 currentPath = path.resolve(currentPath, "../");
};

const newPath = async (input) => {
  currentPath = path.join(currentPath, input);
};

const directoryList = async () => {
  console.log("list");
};

const getCurrentPath = async () => {
  stdout.write(`You are currently in ${currentPath}${EOL}`);
}
export { changePathUP, newPath, directoryList, getCurrentPath };
