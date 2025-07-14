import e, { useState as n } from "react";
import { Avatar as o, AvatarImage as c, AvatarFallback as s } from "./index.es3.js";
import { Input as u } from "./index.es5.js";
const d = ({
  value: p = "",
  onChange: r = () => {
  },
  currentUser: a
}) => {
  const [t, m] = n("");
  return /* @__PURE__ */ e.createElement("div", { className: "flex gap-2 w-full items-center" }, /* @__PURE__ */ e.createElement(o, { className: "w-[28px] h-[28px]" }, /* @__PURE__ */ e.createElement(c, { src: a?.profile?.avatarUrl }), /* @__PURE__ */ e.createElement(s, null, "GB")), /* @__PURE__ */ e.createElement("div", { className: "w-full flex-1" }, /* @__PURE__ */ e.createElement(
    u,
    {
      className: "rounded-full",
      placeholder: `Reply as ${a?.fullName || a?.username}`,
      value: t,
      onChange: (l) => m(l.target.value),
      onKeyDown: (l) => {
        l.code === "Enter" && (r(t), m(""));
      }
    }
  )));
};
export {
  d as EditorCommentStyle2
};
//# sourceMappingURL=index.es10.js.map
