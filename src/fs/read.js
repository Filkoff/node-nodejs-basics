import fs from "node:fs/promises";

const read = async () => {
  const fileExists = await fs
    .access("./files/fileToRead.txt")
    .then(() => true)
    .catch(() => false);

  if (!fileExists) {
    throw new Error("FS operation failed");
  } else {
    const res = await fs.readFile("./files/fileToRead.txt", "utf-8");
    console.log(res);
  }
};

await read();
