import { CreateCommentRequest, Comment } from '../types/comment';
import { User } from '../types/user';
interface CommentProps {
    className?: string;
    isMdxEditor?: boolean;
    formatDate?: string;
    value: Comment[];
    currentUser?: User;
    galleryId: number;
    onChange?: (value: Comment[]) => void;
    onReply?: (value: CreateCommentRequest) => void;
    theme: 'light' | 'dark' | 'system';
    allowUpVote?: boolean;
    onVoteChange?: (checked: boolean) => void;
}
interface CommentCardProps {
    comment: Comment;
    onReply: (val: string) => void;
    currentUser?: User;
    allowUpVote?: boolean;
    onChange: (change: any) => void;
    onDelete: () => void;
    onVoteChange: (change: boolean) => void;
    theme: 'light' | 'dark' | 'system';
}
export declare const CommentCard: ({ comment, onReply, currentUser, allowUpVote, onChange, onVoteChange, theme, onDelete, }: CommentCardProps) => import("react/jsx-dev-runtime").JSX.Element;
export declare const CommentSection: ({ className, formatDate, isMdxEditor, value, onChange, onReply, theme, currentUser, galleryId, allowUpVote, onVoteChange, }: CommentProps) => import("react/jsx-dev-runtime").JSX.Element;
export {};
//# sourceMappingURL=CommentSection.d.ts.map