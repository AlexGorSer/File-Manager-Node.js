import { stdin, stdout } from "node:process";
import { EOL } from "node:os";
import {
  getCommand,
  welcomeMessage,
  exitCommand,
} from "./modules/control-module.js";
import { getCurrentPath } from "./modules/path-module.js";

const startFileManager = async () => {
  stdout.write(welcomeMessage + EOL);
  await getCurrentPath();
  
  stdin.on("data", async (command) => {
    stdin.pause();
    await getCommand(command);
    await getCurrentPath();
    stdin.resume();
  });

  process.on("SIGINT", () => {
    exitCommand();
  });
};

await startFileManager();
