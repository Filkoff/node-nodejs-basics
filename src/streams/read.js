import fs from "node:fs";

const read = async () => {
  const stream = fs.createReadStream("./files/fileToRead.txt");

  stream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });
};

await read();
