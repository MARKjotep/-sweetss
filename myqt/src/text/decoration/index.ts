import { CSS } from "sweetss";
import { $$, __ } from "../../@";
import { DIVIDED_BY } from "../../config";

export default (c: CSS) => {
  c.underline = {
    textDecoration: "underline",
  };
  c.no_underline = {
    textDecoration: "none",
  };
  c.uppercase = {
    textTransform: "uppercase",
  };
  c.lowercase = {
    textTransform: "uppercase",
  };
  c.no_case = {
    textTransform: "none",
  };
};
