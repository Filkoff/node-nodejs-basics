const parseEnv = () => {
  const variables = process.env;
  console.log(variables);

  const res = Object.keys(variables)
    .filter((k) => k.startsWith("RSS_"))
    .map((k) => `${k}=${variables[k]}`)
    .join("; ");

  console.log(res);
};

parseEnv();
