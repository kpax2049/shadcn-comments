import e, { useState as c } from "react";
import { MDXEditor as s, toolbarPlugin as d, UndoRedo as u, ListsToggle as g, Separator as E, InsertImage as p, BoldItalicUnderlineToggles as f, BlockTypeSelect as h, CreateLink as k, InsertTable as x, headingsPlugin as N, listsPlugin as P, quotePlugin as v, thematicBreakPlugin as w, markdownShortcutPlugin as C, tablePlugin as b, imagePlugin as y, linkPlugin as T, linkDialogPlugin as U } from "@mdxeditor/editor";
import { Button as r } from "./index.es2.js";
const L = ({
  value: l = "",
  onChange: a = () => {
  },
  placeholder: m = "Add your comment here...",
  onUpload: o,
  theme: i,
  currentUser: B
}) => {
  const [t, n] = c(l);
  return /* @__PURE__ */ e.createElement("div", { className: "flex flex-col gap-2 w-full editor-content-container" }, /* @__PURE__ */ e.createElement("div", { className: "flex gap-4 w-full" }, /* @__PURE__ */ e.createElement("div", { className: "w-full flex-1" }, /* @__PURE__ */ e.createElement(
    s,
    {
      markdown: t,
      onChange: n,
      placeholder: m,
      className: `border rounded-lg prose-sm md:prose max-w-full editor-content ${i === "dark" ? "dark-theme" : "light-theme"}`,
      contentEditableClassName: "overflow-y-auto py-2 whitespace-normal text-start",
      plugins: [
        d({
          toolbarContents: () => /* @__PURE__ */ e.createElement("div", { className: "flex gap-1" }, " ", /* @__PURE__ */ e.createElement(u, null), /* @__PURE__ */ e.createElement(g, null), /* @__PURE__ */ e.createElement(E, null), /* @__PURE__ */ e.createElement(p, null), /* @__PURE__ */ e.createElement("div", { className: "hidden md:flex gap-1" }, /* @__PURE__ */ e.createElement(f, null), /* @__PURE__ */ e.createElement(h, null), /* @__PURE__ */ e.createElement(k, null), /* @__PURE__ */ e.createElement(x, null)))
        }),
        N(),
        P(),
        v(),
        w(),
        C(),
        b(),
        y({
          imageUploadHandler: o
        }),
        T(),
        U()
      ]
    }
  ))), /* @__PURE__ */ e.createElement("div", { className: "flex justify-end items-center gap-2" }, /* @__PURE__ */ e.createElement(
    r,
    {
      onClick: () => {
        a(l);
      },
      variant: "destructive",
      className: "h-8"
    },
    "Cancel"
  ), /* @__PURE__ */ e.createElement(
    r,
    {
      disabled: !t,
      onClick: () => {
        a(t), n("");
      },
      className: "h-8"
    },
    "Update Comment"
  )));
};
export {
  L as EditingEditorComment
};
//# sourceMappingURL=index.es15.js.map
