import e, { useState as A } from "react";
import { Avatar as b, AvatarImage as y, AvatarFallback as C } from "./index.es3.js";
import { ArrowUpIcon as h, SmileIcon as S, CircleIcon as T } from "lucide-react";
import { EditorComment as O } from "./index.es6.js";
import { ACTIONS as I, ACTIONS_TYPE as c } from "./index.es8.js";
import { EditorCommentStyle2 as k } from "./index.es10.js";
import { MDXProvider as D } from "@mdx-js/react";
import U from "./index.es11.js";
import { formatDistance as w } from "date-fns";
import { Popover as R, PopoverTrigger as V, PopoverContent as $ } from "./index.es12.js";
import j from "./index.es13.js";
import { DropdownMenu as z } from "./index.es14.js";
import { EditingEditorComment as _ } from "./index.es15.js";
const M = ({
  comment: t,
  onReply: g = () => {
  },
  currentUser: m,
  allowUpVote: i,
  onChange: r,
  onVoteChange: u,
  theme: f,
  onDelete: d
}) => {
  const [N, v] = A(!1), [E, a] = A(!1), n = I.filter(
    (l) => t.actions && t.actions[l.id] && t.selectedActions?.includes(l.id)
  ), p = (t.actions ?? {})[c.UPVOTE], x = t.selectedActions?.includes(c.UPVOTE);
  return /* @__PURE__ */ e.createElement("div", { className: "flex flex-col gap-1", id: `comment-${t.id}` }, /* @__PURE__ */ e.createElement("div", { className: "flex gap-4" }, /* @__PURE__ */ e.createElement(b, { className: "w-[32px] h-[32px]" }, /* @__PURE__ */ e.createElement(y, { src: "https://github.com/shadcn.png" }), /* @__PURE__ */ e.createElement(C, null, "CN")), /* @__PURE__ */ e.createElement("div", { className: "flex flex-col w-full" }, /* @__PURE__ */ e.createElement("div", { className: "min-h-[30px] rounded-lg s-comment-card border" }, /* @__PURE__ */ e.createElement(
    "div",
    {
      className: "h-[37px] w-full user rounded-t-lg flex items-center justify-between border-b"
    },
    /* @__PURE__ */ e.createElement("div", { className: "flex items-center px-3" }, /* @__PURE__ */ e.createElement("span", { className: "font-semibold" }, t.user?.firstName + " " + t.user?.lastName)),
    /* @__PURE__ */ e.createElement(
      z,
      {
        comment: t,
        currentUser: m,
        openEditor: () => {
          a(!0);
        },
        deleteComment: d
      }
    )
  ), /* @__PURE__ */ e.createElement("div", { className: "p-3" }, E ? /* @__PURE__ */ e.createElement(
    _,
    {
      currentUser: m,
      theme: f,
      value: t.text,
      onChange: (l) => {
        r({
          text: l
        }), a(!1);
      }
    }
  ) : /* @__PURE__ */ e.createElement(U, { source: t.text })), i && !E && /* @__PURE__ */ e.createElement(
    "div",
    {
      className: "flex flex-wrap items-center gap-2 md:gap-3 text-sm px-3 pb-2"
    },
    /* @__PURE__ */ e.createElement(
      "div",
      {
        onClick: () => {
          u(!x);
          const l = (t.actions || {})[c.UPVOTE];
          x ? l && r({
            selectedActions: t.selectedActions?.filter(
              (s) => s !== c.UPVOTE
            ),
            actions: {
              ...t.actions || {},
              [c.UPVOTE]: l - 1
            }
          }) : r({
            selectedActions: [
              ...t.selectedActions ?? [],
              c.UPVOTE
            ],
            actions: {
              ...t.actions || {},
              [c.UPVOTE]: l ? l + 1 : 1
            }
          });
        },
        className: `border ${x ? "border-[#4493f8] text-[#4493f8]" : ""} rounded-xl px-2 py-0.5 inline-flex gap-1 items-center cursor-pointer`
      },
      /* @__PURE__ */ e.createElement(h, { size: 16 }),
      /* @__PURE__ */ e.createElement("span", null, p ?? 0)
    ),
    /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(R, null, /* @__PURE__ */ e.createElement(V, { asChild: !0 }, /* @__PURE__ */ e.createElement(
      "div",
      {
        className: "p-0.5 rounded-full border cursor-pointer"
      },
      /* @__PURE__ */ e.createElement(S, { size: 16 })
    )), /* @__PURE__ */ e.createElement($, { className: "p-0.5", align: "start" }, /* @__PURE__ */ e.createElement(
      j,
      {
        value: t.selectedActions,
        onSelect: (l, s) => {
          const o = (t.actions || {})[s];
          r({
            selectedActions: l,
            actions: {
              ...t.actions || {},
              [s]: o ? o + 1 : 1
            }
          });
        },
        onUnSelect: (l, s) => {
          const o = (t.actions || {})[s];
          o && o > 0 && r({
            selectedActions: l.filter(
              (P) => P !== s
            ),
            actions: {
              ...t.actions || {},
              [s]: o - 1
            }
          });
        },
        className: ""
      }
    )))),
    n?.map((l) => /* @__PURE__ */ e.createElement(
      "div",
      {
        key: l.id,
        className: `border ${x ? "border-[#4493f8] text-[#4493f8]" : ""} rounded-xl px-2 py-0.5 inline-flex gap-1 items-center cursor-pointer`
      },
      /* @__PURE__ */ e.createElement("span", null, l.emoji),
      /* @__PURE__ */ e.createElement("span", null, (t.actions ?? {})[l.id])
    ))
  )), /* @__PURE__ */ e.createElement(
    "div",
    {
      className: "flex gap-2 items-center text-sm font-semibold light:text-gray-600 ml-1"
    },
    /* @__PURE__ */ e.createElement(
      "span",
      {
        className: "cursor-pointer text-primary",
        onClick: () => v(!0)
      },
      "Reply"
    ),
    /* @__PURE__ */ e.createElement(T, { size: 3 }),
    /* @__PURE__ */ e.createElement("span", { className: "text-opacity-80" }, t.createdAt && w(Date.now(), t.createdAt, {
      addSuffix: !0
    }))
  ))), N ? /* @__PURE__ */ e.createElement("div", { className: "ml-[48px]" }, /* @__PURE__ */ e.createElement(k, { onChange: g, currentUser: m })) : null, t.replies && t.replies.length > 0 ? /* @__PURE__ */ e.createElement("div", { className: "ml-[48px] flex flex-col gap-2" }, t.replies.map((l) => /* @__PURE__ */ e.createElement("div", { className: "w-full flex gap-2", key: l.id }, /* @__PURE__ */ e.createElement(b, { className: "w-[28px] h-[28px] text-sm" }, /* @__PURE__ */ e.createElement(y, { src: "https://github.com/shadcn.png" }), /* @__PURE__ */ e.createElement(C, null, "CN")), /* @__PURE__ */ e.createElement("div", { className: "flex flex-col" }, /* @__PURE__ */ e.createElement("div", { className: "flex" }, l.text), /* @__PURE__ */ e.createElement(
    "div",
    {
      className: "inline-flex gap-1 text-sm font-semibold light:text-gray-600"
    },
    /* @__PURE__ */ e.createElement("div", { className: "text-primary" }, l.user?.firstName + " " + l.user?.lastName),
    /* @__PURE__ */ e.createElement("div", { className: "text-opacity-80" }, l.createdAt && w(Date.now(), l.createdAt, {
      addSuffix: !0
    }))
  ))))) : null);
}, ee = ({
  className: t = "",
  formatDate: g,
  isMdxEditor: m = !0,
  value: i,
  onChange: r = () => {
  },
  onReply: u = () => {
  },
  theme: f = "light",
  currentUser: d,
  galleryId: N,
  allowUpVote: v = !1,
  onVoteChange: E = (a) => {
  }
}) => /* @__PURE__ */ e.createElement(
  D,
  {
    components: {
      wrapper(a) {
        return /* @__PURE__ */ e.createElement("div", { style: { backgroundColor: "lightblue" }, ...a });
      }
    }
  },
  /* @__PURE__ */ e.createElement(
    "div",
    {
      className: `max-w-screen-md flex flex-col gap-2 w-full ${t}`
    },
    m && /* @__PURE__ */ e.createElement(
      O,
      {
        currentUser: d,
        theme: f,
        onChange: (a) => {
        }
      }
    ),
    i.map((a) => /* @__PURE__ */ e.createElement(
      M,
      {
        currentUser: d,
        onReply: (n) => {
          i && u({
            parentId: a.id,
            userId: d?.id,
            text: n,
            galleryId: N
          });
        },
        onChange: (n) => {
          i && r(
            i.map(
              (p) => p.id === a.id ? {
                ...p,
                ...n
              } : p
            )
          );
        },
        onDelete: () => {
          r(i.filter((n) => n.id !== a.id));
        },
        comment: a,
        key: a.id,
        allowUpVote: v,
        theme: f,
        onVoteChange: E
      }
    ))
  )
);
export {
  M as CommentCard,
  ee as CommentSection
};
//# sourceMappingURL=index.es7.js.map
