import React, { useEffect, useMemo, useState } from 'react';
import {
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  CreateLink,
  headingsPlugin,
  imagePlugin,
  InsertImage,
  InsertTable,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  ListsToggle,
  markdownShortcutPlugin,
  MDXEditor,
  quotePlugin,
  Separator,
  tablePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
  UndoRedo,
} from '@mdxeditor/editor';
import { Button } from './Button';
import { User } from '../types/user';
import { Avatar, AvatarFallback, AvatarImage } from './Avatar';
import { cn } from '../lib/utils';

interface EditorCommentProps {
  value?: string;
  onChange?: (val: string) => void;
  placeholder?: string;
  onUpload?: (image: File) => Promise<string>;
  theme: 'light' | 'dark' | 'system';
  currentUser?: User;
}

function initials(name?: string) {
  if (!name) return '?';
  const parts = name.trim().split(/\s+/);
  return ((parts[0]?.[0] || '') + (parts[1]?.[0] || '')).toUpperCase();
}

export const EditorComment = ({
  value = '',
  onChange = () => {},
  placeholder = 'Add your comment here...',
  onUpload,
  theme,
  currentUser,
}: EditorCommentProps) => {
  const [tempValue, setTempValue] = useState('');

  useEffect(() => {
    setTempValue(value);
  }, [value]);

  const currentName = currentUser?.fullName || currentUser?.username || 'You';

  return (
    <div className="editor-content-container flex w-full flex-col gap-2">
      <div className="flex w-full gap-3">
        <Avatar className="h-8 w-8 ring-1 ring-border/60">
          <AvatarImage src={currentUser?.profile?.avatarUrl} />
          <AvatarFallback>{initials(currentName)}</AvatarFallback>
        </Avatar>

        <div className="w-full flex-1">
          <MDXEditor
            markdown={tempValue}
            onChange={setTempValue}
            placeholder={placeholder}
            className={cn(
              'editor-content prose-sm md:prose max-w-full rounded-xl border border-border/60 bg-background/80',
              'focus-within:ring-2 focus-within:ring-primary/40',
              theme === 'dark' ? 'dark-theme' : 'light-theme'
            )}
            contentEditableClassName="overflow-y-auto whitespace-normal text-start py-2 px-3"
            plugins={[
              toolbarPlugin({
                toolbarContents: () => (
                  <div className="flex flex-wrap items-center gap-1 p-1">
                    <UndoRedo />
                    <ListsToggle />
                    <Separator />
                    <InsertImage />
                    <div className="hidden gap-1 md:flex">
                      <BoldItalicUnderlineToggles />
                      <BlockTypeSelect />
                      <CreateLink />
                      <InsertTable />
                    </div>
                  </div>
                ),
              }),
              headingsPlugin(),
              listsPlugin(),
              quotePlugin(),
              thematicBreakPlugin(),
              markdownShortcutPlugin(),
              tablePlugin(),
              imagePlugin({ imageUploadHandler: onUpload }),
              linkPlugin(),
              linkDialogPlugin(),
            ]}
          />
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          disabled={!tempValue}
          onClick={() => {
            onChange(tempValue);
            setTempValue('');
          }}
          className="h-8"
        >
          Comment
        </Button>
      </div>
    </div>
  );
};
