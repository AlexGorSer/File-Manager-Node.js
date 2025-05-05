import { arch, cpus, EOL, homedir, hostname } from "node:os";
import { operationFailedErr, invalidInputErr } from "./error-module.js";

const osController = async ([command]) => {
  if (osOptions.hasOwnProperty(command)) {
    try {
      await osOptions[command](command);
    } catch (error) {
      await operationFailedErr();
      
    }
  } else {
    await invalidInputErr();
  }
};

const osEOL = async () => {
  process.stdout.write(JSON.stringify(EOL) + EOL);
};

const osCPUS = async () => {
  const cpuObj = cpus();
  process.stdout.write(`count CPU: ${cpuObj.length}` + EOL);
  cpuObj.forEach((element) => {
    process.stdout.write(`model: ${element.model}` + EOL);
    process.stdout.write(`clock rate: ${element.speed / 1000}` + EOL);
  });
};

const osHomeDir = async () => {
  process.stdout.write(homedir() + EOL);
};

const osSystemName = async () => {
  process.stdout.write(hostname() + EOL);
};

const osArchitecture = async () => {
  process.stdout.write(arch() + EOL);
};

const osOptions = {
  "--EOL": osEOL,
  "--cpus": osCPUS,
  "--homedir": osHomeDir,
  "--username": osSystemName,
  "--architecture": osArchitecture,
};
export { osArchitecture, osCPUS, osHomeDir, osSystemName, osEOL, osController };
