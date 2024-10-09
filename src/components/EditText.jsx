// src/components/TextEditor.jsx
import { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Underline from '@tiptap/extension-underline';
import Strike from '@tiptap/extension-strike';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import Heading from '@tiptap/extension-heading';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';
import { EditorToolbar } from './EditorToolbar.jsx';
import '../css/TextEditor.css';

export const TextEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Bold,
      Italic,
      Underline,
      Strike,
      Link,
      Image,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableCell,
      Heading.configure({
        levels: [1, 2, 3],
      }),
      BulletList,
      OrderedList,
      ListItem,
    ],
    content: '<p>¡Comienza a editar!</p>',
  });

  // Guardado automático cada 30 segundos
  useEffect(() => {
    if (editor) {
      const interval = setInterval(() => {
        const content = editor.getHTML();
        localStorage.setItem('document', content);
        console.log('Documento guardado automáticamente.');
      }, 30000); // 30 segundos

      return () => clearInterval(interval);
    }
  }, [editor]);

  return (
    <div className="editor-container">
      <EditorToolbar editor={editor} />
      <EditorContent editor={editor} className="editor-content" />
    </div>
  );
};
