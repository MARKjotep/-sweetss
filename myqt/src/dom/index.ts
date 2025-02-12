import { _var, CSS, med, f } from "sweetss";

export default (d: CSS) => {
  //
  d.html = [
    {
      fontSize: "10px",
      scrollBehavior: "smooth",
    },
  ];

  d.body = [
    {
      //   color: _clr,
      //   backgroundColor: _bgc,
      fontSize: 1.3,
      fontFamily: "Google Sans Mono, monospace",
    },
  ];

  d[`*, *:before, *:after`] = [
    {
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
    },
  ];

  d[`*:before, *:after`] = [
    {
      display: "flex",
      position: "absolute",
      flexShrink: 0,
    },
  ];
};
