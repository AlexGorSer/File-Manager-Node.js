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
import { changePathUP, directoryList, changePath } from "./path-module.js";
import { compressFile, decompressFile } from "./zlib-module.js";
import { EOL } from "node:os";

const getStartName = () => {
  const startArguments = process.argv.slice(2);
  const userName = startArguments.filter((ar) =>
    ar.startsWith("--username=")
  )[0];
  return userName ? userName.replace("--username=", "") : "No name";
};

const welcomeMessage = `Welcome to the File Manager, ${getStartName()}!`;
const exitMessage = `Thank you for using File Manager, ${getStartName()}, goodbye!`;

const exitCommand = async () => {
  process.stdout.write(exitMessage + EOL);
  process.exit();
};

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
  cd: changePath,
  ".exit": exitCommand,
};

const getCommand = async (input) => {
  const [command, ...arg] = input.toString().trim().split(" ");

  if (objectOptions.hasOwnProperty(command)) {
    try {
      await objectOptions[command](arg);
    } catch (error) {
      console.error("Operation failed \n");
      console.log(error);
    }
  } else {
    console.log("Invalid input \n");
  }
};

export { welcomeMessage, exitMessage, getCommand, exitCommand };
