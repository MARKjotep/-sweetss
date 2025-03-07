import { SweetSS } from "sweetss";
import { watch } from "chokidar";

//

export default (...sss: SweetSS[]) => {
  //
  const toWatch: string[] = [];
  sss.forEach((ss) => {
    toWatch.push(...ss.imported, ss.path);
  });

  const watcher = watch(toWatch, { persistent: true });

  watcher.on("change", (_path) => {
    sss.some((ss) => {
      const { imported, path } = ss;
      if (imported.includes(_path) || path === _path) {
        Bun.spawn(["bun", "run", path], {
          stdio: ["inherit", "inherit", "inherit"],
        });
        console.log(`sweetss ${ss.name} @ ${new Date().toLocaleTimeString()}`);
        return true;
      }
      return false;
    });
  });

  return;
};
