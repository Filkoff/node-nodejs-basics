import fs from "node:fs/promises";

const list = async () => {
  const folderExists = await fs
    .access("./files")
    .then(() => true)
    .catch(() => false);

  if (!folderExists) {
    throw new Error("FS operation failed");
  } else {
    const res = await fs.readdir("./files");
    console.log(res);
  }
};

await list();
