import e, { useState as A } from "react";
import { Avatar as y, AvatarImage as b, AvatarFallback as w } from "./index.es3.js";
import { ArrowUpIcon as S, SmileIcon as T, CircleIcon as O } from "lucide-react";
import { EditorComment as I } from "./index.es6.js";
import { ACTIONS as k, ACTIONS_TYPE as o } from "./index.es8.js";
import { EditorCommentStyle2 as D } from "./index.es10.js";
import { MDXProvider as h } from "@mdx-js/react";
import U from "./index.es11.js";
import { formatDistance as C } from "date-fns";
import { Popover as R, PopoverTrigger as V, PopoverContent as $ } from "./index.es12.js";
import j from "./index.es13.js";
import { DropdownMenu as z } from "./index.es14.js";
import { EditingEditorComment as _ } from "./index.es15.js";
const B = ({
  comment: t,
  onReply: g = () => {
  },
  currentUser: i,
  allowUpVote: n,
  onChange: r,
  onVoteChange: u,
  theme: f,
  onDelete: d
}) => {
  const [v, N] = A(!1), [E, a] = A(!1), c = k.filter(
    (l) => t.actions && t.actions[l.id] && t.selectedActions?.includes(l.id)
  ), p = (t.actions ?? {})[o.UPVOTE], x = t.selectedActions?.includes(o.UPVOTE);
  return /* @__PURE__ */ e.createElement("div", { className: "flex flex-col gap-1", id: `comment-${t.id}` }, /* @__PURE__ */ e.createElement("div", { className: "flex gap-4" }, /* @__PURE__ */ e.createElement(y, { className: "w-[32px] h-[32px]" }, /* @__PURE__ */ e.createElement(b, { src: i?.profile?.avatarUrl }), /* @__PURE__ */ e.createElement(w, null, "GB")), /* @__PURE__ */ e.createElement("div", { className: "flex flex-col w-full" }, /* @__PURE__ */ e.createElement("div", { className: "min-h-[30px] rounded-lg s-comment-card border" }, /* @__PURE__ */ e.createElement(
    "div",
    {
      className: "h-[37px] w-full user rounded-t-lg flex items-center justify-between border-b"
    },
    /* @__PURE__ */ e.createElement("div", { className: "flex items-center px-3" }, /* @__PURE__ */ e.createElement("span", { className: "font-semibold" }, t.user?.fullName || t.user?.username)),
    /* @__PURE__ */ e.createElement(
      z,
      {
        comment: t,
        currentUser: i,
        openEditor: () => {
          a(!0);
        },
        deleteComment: d
      }
    )
  ), /* @__PURE__ */ e.createElement("div", { className: "p-3" }, E ? /* @__PURE__ */ e.createElement(
    _,
    {
      currentUser: i,
      theme: f,
      value: t.text,
      onChange: (l) => {
        r({
          text: l
        }), a(!1);
      }
    }
  ) : /* @__PURE__ */ e.createElement(U, { source: t.text })), n && !E && /* @__PURE__ */ e.createElement(
    "div",
    {
      className: "flex flex-wrap items-center gap-2 md:gap-3 text-sm px-3 pb-2"
    },
    /* @__PURE__ */ e.createElement(
      "div",
      {
        onClick: () => {
          u(!x);
          const l = (t.actions || {})[o.UPVOTE];
          x ? l && r({
            selectedActions: t.selectedActions?.filter(
              (s) => s !== o.UPVOTE
            ),
            actions: {
              ...t.actions || {},
              [o.UPVOTE]: l - 1
            }
          }) : r({
            selectedActions: [
              ...t.selectedActions ?? [],
              o.UPVOTE
            ],
            actions: {
              ...t.actions || {},
              [o.UPVOTE]: l ? l + 1 : 1
            }
          });
        },
        className: `border ${x ? "border-[#4493f8] text-[#4493f8]" : ""} rounded-xl px-2 py-0.5 inline-flex gap-1 items-center cursor-pointer`
      },
      /* @__PURE__ */ e.createElement(S, { size: 16 }),
      /* @__PURE__ */ e.createElement("span", null, p ?? 0)
    ),
    /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(R, null, /* @__PURE__ */ e.createElement(V, { asChild: !0 }, /* @__PURE__ */ e.createElement(
      "div",
      {
        className: "p-0.5 rounded-full border cursor-pointer"
      },
      /* @__PURE__ */ e.createElement(T, { size: 16 })
    )), /* @__PURE__ */ e.createElement($, { className: "p-0.5", align: "start" }, /* @__PURE__ */ e.createElement(
      j,
      {
        value: t.selectedActions,
        onSelect: (l, s) => {
          const m = (t.actions || {})[s];
          r({
            selectedActions: l,
            actions: {
              ...t.actions || {},
              [s]: m ? m + 1 : 1
            }
          });
        },
        onUnSelect: (l, s) => {
          const m = (t.actions || {})[s];
          m && m > 0 && r({
            selectedActions: l.filter(
              (P) => P !== s
            ),
            actions: {
              ...t.actions || {},
              [s]: m - 1
            }
          });
        },
        className: ""
      }
    )))),
    c?.map((l) => /* @__PURE__ */ e.createElement(
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
        onClick: () => N(!0)
      },
      "Reply"
    ),
    /* @__PURE__ */ e.createElement(O, { size: 3 }),
    /* @__PURE__ */ e.createElement("span", { className: "text-opacity-80" }, t.createdAt && C(Date.now(), t.createdAt, {
      addSuffix: !0
    }))
  ))), v ? /* @__PURE__ */ e.createElement("div", { className: "ml-[48px]" }, /* @__PURE__ */ e.createElement(D, { onChange: g, currentUser: i })) : null, t.replies && t.replies.length > 0 ? /* @__PURE__ */ e.createElement("div", { className: "ml-[48px] flex flex-col gap-2" }, t.replies.map((l) => /* @__PURE__ */ e.createElement("div", { className: "w-full flex gap-2", key: l.id }, /* @__PURE__ */ e.createElement(y, { className: "w-[28px] h-[28px] text-sm" }, /* @__PURE__ */ e.createElement(b, { src: i?.profile?.avatarUrl }), /* @__PURE__ */ e.createElement(w, null, "GB")), /* @__PURE__ */ e.createElement("div", { className: "flex flex-col" }, /* @__PURE__ */ e.createElement("div", { className: "flex" }, l.text), /* @__PURE__ */ e.createElement(
    "div",
    {
      className: "inline-flex gap-1 text-sm font-semibold light:text-gray-600"
    },
    /* @__PURE__ */ e.createElement("div", { className: "text-primary" }, l.user?.fullName || l.user?.username),
    /* @__PURE__ */ e.createElement("div", { className: "text-opacity-80" }, l.createdAt && C(Date.now(), l.createdAt, {
      addSuffix: !0
    }))
  ))))) : null);
}, ee = ({
  className: t = "",
  formatDate: g,
  isMdxEditor: i = !0,
  value: n,
  onChange: r = () => {
  },
  onReply: u = () => {
  },
  theme: f = "light",
  currentUser: d,
  galleryId: v,
  allowUpVote: N = !1,
  onVoteChange: E = (a) => {
  }
}) => /* @__PURE__ */ e.createElement(
  h,
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
    i && /* @__PURE__ */ e.createElement(
      I,
      {
        currentUser: d,
        theme: f,
        onChange: (a) => {
        }
      }
    ),
    n.map((a) => /* @__PURE__ */ e.createElement(
      B,
      {
        currentUser: d,
        onReply: (c) => {
          n && u({
            parentId: a.id,
            userId: d?.id,
            text: c,
            galleryId: v
          });
        },
        onChange: (c) => {
          n && r(
            n.map(
              (p) => p.id === a.id ? {
                ...p,
                ...c
              } : p
            )
          );
        },
        onDelete: () => {
          r(n.filter((c) => c.id !== a.id));
        },
        comment: a,
        key: a.id,
        allowUpVote: N,
        theme: f,
        onVoteChange: E
      }
    ))
  )
);
export {
  B as CommentCard,
  ee as CommentSection
};
//# sourceMappingURL=index.es7.js.map
