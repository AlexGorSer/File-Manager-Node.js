const currentPath = path.dirname(import.meta.dirname);

const changePathUP = async (currentPath) => {
  return path.resolve(currentPath, "../");
};

const newPath = async (path) => {
  return path.join(currentPath, as);
};

const listCommand = async () => {
  console.log("list");
};

export { changePathUP, newPath, listCommand };
