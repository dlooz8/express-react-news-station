/* eslint-disable react/prop-types */
import '@mdxeditor/editor/style.css';
import { MDXEditor,
  headingsPlugin,
  toolbarPlugin,
  imagePlugin,
  codeBlockPlugin,
  linkPlugin,
  linkDialogPlugin,
  listsPlugin,
  UndoRedo,
  BoldItalicUnderlineToggles,
  InsertImage,
  BlockTypeSelect,
  CreateLink,
  ListsToggle } from '@mdxeditor/editor';

const MarkdownEditor = ({ editorText, setEditorText }) => {
  const handleEditorChange = (newValue) => {
    setEditorText(newValue);
  };

  return (
    <MDXEditor
      className="bg-gray rounded-xl min-h-[200px]"
      markdown={editorText}
      onChange={handleEditorChange}
      contentEditableClassName="md-edit"
      plugins={[
        toolbarPlugin({
          toolbarContents: () => (
            <>
              <UndoRedo />
              <BoldItalicUnderlineToggles />
              <InsertImage />
              <BlockTypeSelect />
              <CreateLink />
              <ListsToggle />
            </>
          ),
        }),
        imagePlugin(),
        codeBlockPlugin(),
        headingsPlugin(),
        linkPlugin(),
        linkDialogPlugin(),
        listsPlugin(),
      ]}
    />
  );
};

export default MarkdownEditor;