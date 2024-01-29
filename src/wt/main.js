import { Worker } from "node:worker_threads";
import { cpus } from "node:os";

const performCalculations = async () => {
  const numCores = cpus().length;
  const resultPromisesArray = [];
  const firstNumber = 10;
  const fibonacci = (workerData) =>
    new Promise((res) => {
      const worker = new Worker("./worker.js", { workerData });

      worker.on("message", (data) => res({ status: "resolved", data }));
      worker.on("error", () => res({ status: "error", data: null }));
    });

  for (let i = 0; i < numCores; i++) {
    resultPromisesArray.push(fibonacci(i + firstNumber));
  }
  console.log(await Promise.all(resultPromisesArray));
};

await performCalculations();
