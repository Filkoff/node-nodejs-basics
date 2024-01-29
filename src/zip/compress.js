import fs from "node:fs";
import zlib from "node:zlib";
import { pipeline } from "node:stream";

const compress = async () => {
  const readStream = fs.createReadStream("./files/fileToCompress.txt");
  const writeStream = fs.createWriteStream("./files/archive.gz");
  const gzip = zlib.createGzip();

  pipeline(readStream, gzip, writeStream, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

await compress();
