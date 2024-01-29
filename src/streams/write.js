import fs from "node:fs";

const write = async () => {
  const wStream = fs.createWriteStream("./files/fileToWrite.txt");
  process.stdin.on("data", (data) => {
    wStream.write(data);
  });
};

await write();
