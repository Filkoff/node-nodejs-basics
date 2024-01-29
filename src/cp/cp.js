import { fork } from "node:child_process";

const spawnChildProcess = async (args) => {
  const child = fork("./files/script.js", args, { silent: true });
  process.stdin.pipe(child.stdin);

  child.stdout.on("data", (data) => {
    process.stdout.write(data);
  });

  child.on("error", (err) => {
    console.error("Child process error:", err);
  });
};

spawnChildProcess();
// spawnChildProcess(["yuui", "uyuyu"]);
