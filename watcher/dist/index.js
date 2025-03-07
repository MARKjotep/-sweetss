// @bun
import { watch as a } from "chokidar";
var u = (...e) => {
  let r = [];
  e.forEach((t) => {
    r.push(...t.imported, t.path);
  }),
    a(r, { persistent: !0 }).on("change", (t) => {
      e.some((n) => {
        let { imported: i, path: o } = n;
        if (i.includes(t) || o === t)
          return (
            Bun.spawn(["bun", "run", o], {
              stdio: ["inherit", "inherit", "inherit"],
            }),
            console.log(
              `sweetss ${n.name} @ ${new Date().toLocaleTimeString()}`,
            ),
            !0
          );
        return !1;
      });
    });
  return;
};
export { u as default };
