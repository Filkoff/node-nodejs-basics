import fs from "node:fs";
import crypto from "node:crypto";

const calculateHash = async () => {
  const readable = fs.createReadStream("./files/fileToCalculateHashFor.txt");
  const hash = crypto.createHash("sha256");

  readable.on("readable", () => {
    const data = readable.read();
    if (data) {
      hash.update(data);
    } else {
      console.log(hash.digest("hex"));
    }
  });

  readable.on("error", (err) => {
    console.error("Error reading the file:", err);
  });
};

await calculateHash();
