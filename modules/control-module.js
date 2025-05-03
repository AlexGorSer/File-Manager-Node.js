const getName = () => {
  const startArguments = process.argv.slice(2);
  const userName = startArguments.filter((ar) =>
    ar.startsWith("--username=")
  )[0];
  return userName ? userName.replace("--username=", "") : "No name";
};

const welcomeMessage = `Welcome to the File Manager, ${getName()}!`;
const exitMessage = `Thank you for using File Manager, ${getName()}, goodbye!`;

export { welcomeMessage, exitMessage };
