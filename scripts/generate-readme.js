const fs = require("fs");
const readme = fs.readFileSync("README.md", "utf-8");
fs.mkdirSync("src/data", { recursive: true });
fs.writeFileSync("src/data/readme.ts", `export const readmeContent = ${JSON.stringify(readme)};\n`);
