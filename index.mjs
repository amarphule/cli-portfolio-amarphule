import { program } from "commander";

program
  .name("amarphule")
  .usage("[options]")
  .option("-r,--resume", "prints my developer resume");

program.parse(process.argv);

const res = process.opts();

console.log(res);
