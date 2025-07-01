import e, { useState as c, useEffect as i } from "react";
import { MDXEditor as s, toolbarPlugin as u, UndoRedo as d, ListsToggle as g, Separator as p, InsertImage as E, BoldItalicUnderlineToggles as f, BlockTypeSelect as h, CreateLink as x, InsertTable as k, headingsPlugin as N, listsPlugin as P, quotePlugin as b, thematicBreakPlugin as v, markdownShortcutPlugin as w, tablePlugin as C, imagePlugin as y, linkPlugin as I, linkDialogPlugin as T } from "@mdxeditor/editor";
import { Avatar as A, AvatarImage as B, AvatarFallback as S } from "./index.es3.js";
import { Button as U } from "./index.es2.js";
const j = ({
  value: a = "",
  onChange: n = () => {
  },
  placeholder: r = "Add your comment here...",
  onUpload: m,
  theme: o,
  currentUser: D
}) => {
  const [t, l] = c("");
  return i(() => {
    l(a);
  }, [a]), /* @__PURE__ */ e.createElement("div", { className: "flex flex-col gap-2 w-full editor-content-container" }, /* @__PURE__ */ e.createElement("div", { className: "flex gap-4 w-full" }, /* @__PURE__ */ e.createElement(A, { className: "w-[32px] h-[32px]" }, /* @__PURE__ */ e.createElement(B, { src: "https://github.com/shadcn.png" }), /* @__PURE__ */ e.createElement(S, null, "CN")), /* @__PURE__ */ e.createElement("div", { className: "w-full flex-1" }, /* @__PURE__ */ e.createElement(
    s,
    {
      markdown: t,
      onChange: l,
      placeholder: r,
      className: `border rounded-lg prose-sm md:prose max-w-full editor-content ${o === "dark" ? "dark-theme" : "light-theme"}`,
      contentEditableClassName: "overflow-y-auto py-2 whitespace-normal text-start",
      plugins: [
        u({
          toolbarContents: () => /* @__PURE__ */ e.createElement("div", { className: "flex gap-1" }, " ", /* @__PURE__ */ e.createElement(d, null), /* @__PURE__ */ e.createElement(g, null), /* @__PURE__ */ e.createElement(p, null), /* @__PURE__ */ e.createElement(E, null), /* @__PURE__ */ e.createElement("div", { className: "hidden md:flex gap-1" }, /* @__PURE__ */ e.createElement(f, null), /* @__PURE__ */ e.createElement(h, null), /* @__PURE__ */ e.createElement(x, null), /* @__PURE__ */ e.createElement(k, null)))
        }),
        N(),
        P(),
        b(),
        v(),
        w(),
        C(),
        y({
          imageUploadHandler: m
        }),
        I(),
        T()
      ]
    }
  ))), /* @__PURE__ */ e.createElement("div", { className: "flex justify-end" }, /* @__PURE__ */ e.createElement(
    U,
    {
      disabled: !t,
      onClick: () => {
        n(t), l("");
      },
      className: "h-8"
    },
    "Comment"
  )));
};
export {
  j as EditorComment
};
//# sourceMappingURL=index.es6.js.map
