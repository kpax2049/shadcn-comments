import e, { useState as n } from "react";
import { Avatar as c, AvatarImage as o, AvatarFallback as s } from "./index.es3.js";
import { Input as p } from "./index.es5.js";
const v = ({
  value: u = "",
  onChange: r = () => {
  },
  currentUser: a
}) => {
  const [l, m] = n("");
  return /* @__PURE__ */ e.createElement("div", { className: "flex gap-2 w-full items-center" }, /* @__PURE__ */ e.createElement(c, { className: "w-[28px] h-[28px]" }, /* @__PURE__ */ e.createElement(o, { src: "https://github.com/shadcn.png" }), /* @__PURE__ */ e.createElement(s, null, "CN")), /* @__PURE__ */ e.createElement("div", { className: "w-full flex-1" }, /* @__PURE__ */ e.createElement(
    p,
    {
      className: "rounded-full",
      placeholder: `Reply as ${a?.firstName} ${a?.lastName}`,
      value: l,
      onChange: (t) => m(t.target.value),
      onKeyDown: (t) => {
        t.code === "Enter" && (r(l), m(""));
      }
    }
  )));
};
export {
  v as EditorCommentStyle2
};
//# sourceMappingURL=index.es10.js.map
