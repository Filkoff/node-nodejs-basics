import fs from "node:fs/promises";

const rename = async () => {
  const initialFileExists = await fs
    .access("./files/wrongFilename.txt")
    .then(() => true)
    .catch(() => false);

  const renamedFileExists = await fs
    .access("./files/properFilename.md")
    .then(() => true)
    .catch(() => false);

  if (!initialFileExists || renamedFileExists) {
    throw new Error("FS operation failed");
  } else {
    await fs.rename("./files/wrongFilename.txt", "./files/properFilename.md");
  }
};

await rename();
