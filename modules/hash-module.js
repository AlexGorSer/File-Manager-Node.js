import crypto from "node:crypto";
import { createReadStream } from "node:fs";
import path from "node:path";

const calcHash = async ([pathToFile]) => {
  const folderPath = path.resolve(pathToFile);
  const readStream = createReadStream(folderPath);
  const hash = crypto.createHash('sha256');

  readStream.on("data", (data) => {
    if(data) hash.update(data);
  });

  readStream.on("end", () => {

    let data = hash.digest("hex");

    process.stdout.write(data);
    process.stdout.write('\n');
  });

};

export { calcHash };
