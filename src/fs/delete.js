import fs from "node:fs/promises";

const remove = async () => {
  const initialFileExists = await fs
    .access("./files/fileToRemove.txt")
    .then(() => true)
    .catch(() => false);

  if (!initialFileExists) {
    throw new Error("FS operation failed");
  } else {
    await fs.unlink("./files/fileToRemove.txt");
  }
};

await remove();
