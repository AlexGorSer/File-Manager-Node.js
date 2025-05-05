import { createWriteStream, createReadStream } from "node:fs";
import { createBrotliCompress, createBrotliDecompress } from "node:zlib";
import path from "node:path";
import stream from "node:stream";

const compressFile = async ([pathToFile, pathToCompress]) => {
  const pathFile = path.resolve(pathToFile);
  const pathCompress = path.resolve(pathToCompress);
  const { base } = path.parse(pathFile);

  const brotliZip = createBrotliCompress();
  const readStream = createReadStream(pathFile);
  const writeStream = createWriteStream(path.join(pathCompress, base+'.gz'));

  await stream.promises.pipeline(readStream, brotliZip, writeStream);
};

const decompressFile = async ([pathToFile, pathToCompress]) => {
  const pathFile = path.resolve(pathToFile);
  const pathCompress = path.resolve(pathToCompress);
  const { base } = path.parse(pathToFile);

  const brotliZip = createBrotliDecompress();
  const readStream = createReadStream(pathFile);
  const writeStream = createWriteStream(path.join(pathCompress, base.replace('.gz', '')));

  await stream.promises.pipeline(readStream, brotliZip, writeStream);
};

export { compressFile, decompressFile };
