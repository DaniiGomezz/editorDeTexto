import { useEditor, EditorContent } from '@tiptap/react';
import { extensions } from '../js/EditorExtensions.js';
import { EditorToolbar } from './EditorToolbar.jsx';
import { TemplateManager } from './TemplatesManager.jsx';
import '../css/TextEditor.css';




export const TextEditor = () => {
  const editor = useEditor({
    extensions: extensions,
    
  });


  return (
    <div className="editor-container">
     <EditorToolbar editor={editor} />
      <TemplateManager editor={editor} />
      <EditorContent editor={editor} className="editor-content" />
    </div>
  );
};

