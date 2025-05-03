const osEOL = async () => {
  console.log("EOL");
};

const osCPUS = async () => {
  console.log("cpus");
};

const osHomeDir = async () => {
  console.log("homedir");
};

const osSystemName = async () => {
  console.log("system name");
};

const osArchitecture = async () => {
  console.log("Arch");
};

export { osArchitecture, osCPUS, osHomeDir, osSystemName, osEOL };
