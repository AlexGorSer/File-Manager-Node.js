import { stdin, stdout } from "node:process";
import { EOL } from "node:os";
import path from "node:path";
import {
  exitMessage,
  getCommand,
  welcomeMessage,
} from "./modules/control-module.js";
import { getCurrentPath } from "./modules/path-module.js";

const currentPath = path.dirname(import.meta.dirname);

const startFileManager = async () => {
  stdout.write(welcomeMessage + EOL);
  stdout.write(currentPath + EOL);

  stdin.on("data", (command) => {
    stdin.pause();
    getCommand(command);
    getCurrentPath();
    stdin.resume();
  });

  process.on("SIGINT", () => {
    stdout.write(exitMessage + EOL);
    process.exit();
  });
};

await startFileManager();
