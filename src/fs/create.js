import fs from "node:fs/promises";

const create = async () => {
  const exists = await fs
    .access("./files/fresh.txt")
    .then(() => true)
    .catch(() => false);
  if (exists) {
    throw new Error("FS operation failed");
  } else {
    const content = "I am fresh and young";
    await fs.writeFile("./files/fresh.txt", content);
  }
};

await create();
