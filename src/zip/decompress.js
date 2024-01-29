import fs from "node:fs";
import zlib from "node:zlib";
import { pipeline } from "node:stream";

const decompress = async () => {
  const readStream = fs.createReadStream("./files/archive.gz");
  const writeStream = fs.createWriteStream("./files/fileToCompress.txt");
  const gunzip = zlib.createGunzip();

  readStream.pipe(gunzip).pipe(writeStream);
};

await decompress();
