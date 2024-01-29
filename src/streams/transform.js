import { Transform, pipeline } from "node:stream";

const transform = async () => {
  const readStream = process.stdin;
  const writeStream = process.stdin;

  const transform = new Transform({
    transform(chunk, enc, cb) {
      const inputString = chunk.toString().trim();
      const reversed = inputString.split("").reverse().join("");
      this.push(reversed + "\n");
    },
  });

  pipeline(readStream, transform, writeStream, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

await transform();
