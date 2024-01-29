import fs from "node:fs/promises";

const copy = async () => {
  const filesExists = await fs
    .access("./files")
    .then(() => true)
    .catch(() => false);

  const filesCopyExists = await fs
    .access("./files_copy")
    .then(() => true)
    .catch(() => false);

  if (!filesExists || filesCopyExists) {
    throw new Error("FS operation failed");
  } else {
    fs.cp("./files", "./files_copy", { recursive: true }, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
};

await copy();
