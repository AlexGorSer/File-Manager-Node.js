import { stdin, stdout } from "node:process";
import { EOL } from "node:os";
import path from "node:path";
import { exitMessage, welcomeMessage } from "./modules/control-module.js";

const currentPath = path.dirname(import.meta.dirname);

const startFileManager = async () => {
  stdout.write(welcomeMessage + EOL);
  stdout.write(currentPath + EOL);

  stdin.on("data", (command) => {
    console.log(command.toString());
  });

  process.on("SIGINT", () => {
    stdout.write(exitMessage + EOL);
    process.exit();
  });
};

await startFileManager();
