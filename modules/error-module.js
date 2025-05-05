const operationFailedErr =  async() => {
  process.stdout.write("Operation failed \n");
}

const invalidInputErr = async () => {
  process.stdout.write("Invalid input \n");
}

export {operationFailedErr, invalidInputErr}