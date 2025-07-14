import e, { useState as i, useEffect as s } from "react";
import { MDXEditor as u, toolbarPlugin as d, UndoRedo as g, ListsToggle as E, Separator as p, InsertImage as f, BoldItalicUnderlineToggles as h, BlockTypeSelect as x, CreateLink as k, InsertTable as v, headingsPlugin as N, listsPlugin as P, quotePlugin as w, thematicBreakPlugin as b, markdownShortcutPlugin as C, tablePlugin as y, imagePlugin as B, linkPlugin as I, linkDialogPlugin as T } from "@mdxeditor/editor";
import { Avatar as A, AvatarImage as S, AvatarFallback as U } from "./index.es3.js";
import { Button as D } from "./index.es2.js";
const j = ({
  value: a = "",
  onChange: n = () => {
  },
  placeholder: r = "Add your comment here...",
  onUpload: m,
  theme: o,
  currentUser: c
}) => {
  const [l, t] = i("");
  return s(() => {
    t(a);
  }, [a]), /* @__PURE__ */ e.createElement("div", { className: "flex flex-col gap-2 w-full editor-content-container" }, /* @__PURE__ */ e.createElement("div", { className: "flex gap-4 w-full" }, /* @__PURE__ */ e.createElement(A, { className: "w-[32px] h-[32px]" }, /* @__PURE__ */ e.createElement(S, { src: c?.profile?.avatarUrl }), /* @__PURE__ */ e.createElement(U, null, "GB")), /* @__PURE__ */ e.createElement("div", { className: "w-full flex-1" }, /* @__PURE__ */ e.createElement(
    u,
    {
      markdown: l,
      onChange: t,
      placeholder: r,
      className: `border rounded-lg prose-sm md:prose max-w-full editor-content ${o === "dark" ? "dark-theme" : "light-theme"}`,
      contentEditableClassName: "overflow-y-auto py-2 whitespace-normal text-start",
      plugins: [
        d({
          toolbarContents: () => /* @__PURE__ */ e.createElement("div", { className: "flex gap-1" }, " ", /* @__PURE__ */ e.createElement(g, null), /* @__PURE__ */ e.createElement(E, null), /* @__PURE__ */ e.createElement(p, null), /* @__PURE__ */ e.createElement(f, null), /* @__PURE__ */ e.createElement("div", { className: "hidden md:flex gap-1" }, /* @__PURE__ */ e.createElement(h, null), /* @__PURE__ */ e.createElement(x, null), /* @__PURE__ */ e.createElement(k, null), /* @__PURE__ */ e.createElement(v, null)))
        }),
        N(),
        P(),
        w(),
        b(),
        C(),
        y(),
        B({
          imageUploadHandler: m
        }),
        I(),
        T()
      ]
    }
  ))), /* @__PURE__ */ e.createElement("div", { className: "flex justify-end" }, /* @__PURE__ */ e.createElement(
    D,
    {
      disabled: !l,
      onClick: () => {
        n(l), t("");
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
