import {
  addFile,
  copyFile,
  deleteFile,
  mkdirFile,
  moveFile,
  readFile,
  renameFile,
} from "./file-module.js";
import { calcHash } from "./hash-module.js";
import { changePathUP, directoryList, newPath } from "./path-module.js";
import { compressFile, decompressFile } from "./zlib-module.js";

const getStartName = () => {
  const startArguments = process.argv.slice(2);
  const userName = startArguments.filter((ar) =>
    ar.startsWith("--username=")
  )[0];
  return userName ? userName.replace("--username=", "") : "No name";
};

const welcomeMessage = `Welcome to the File Manager, ${getStartName()}!`;
const exitMessage = `Thank you for using File Manager, ${getStartName()}, goodbye!`;

const objectOptions = {
  cat: readFile,
  add: addFile,
  mkdir: mkdirFile,
  rn: renameFile,
  cp: copyFile,
  mv: moveFile,
  rm: deleteFile,
  hash: calcHash,
  compress: compressFile,
  decompress: decompressFile,
  up: changePathUP,
  ls: directoryList,
  cd: newPath,
};

const getCommand = async (input) => {
  const arrCommands = input.toString().trim().split(" ");

  if (objectOptions.hasOwnProperty(arrCommands[0])) {
    // console.log(argument)
    await objectOptions[arrCommands[0]](arrCommands[1]);
  } else {
    console.log("Invalid input");
  }
};

export { welcomeMessage, exitMessage, getCommand };
