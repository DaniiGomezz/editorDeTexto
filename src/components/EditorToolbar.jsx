import PropTypes from "prop-types";
import { downloadPDF } from '../js/FunctionsDownloads.js'; // Importar la función de descarga de PDF
import "../css/EditorToolbar.css";
import "../css/Downloads.css"
import { FaBold, FaItalic, FaUnderline, FaStrikethrough, FaListUl, FaListOl, FaUndo, FaRedo, FaSave, FaFolderOpen, FaFilePdf } from 'react-icons/fa';

export const EditorToolbar = ({ editor }) => {
  if (!editor) return null;

  return (
    <div className="toolbar">
      <button onClick={() => editor.chain().focus().toggleBold().run()} className={editor.isActive('bold') ? 'active' : ''}><FaBold /></button>
      <button onClick={() => editor.chain().focus().toggleItalic().run()} className={editor.isActive('italic') ? 'active' : ''}><FaItalic /></button>
      <button onClick={() => editor.chain().focus().toggleUnderline().run()} className={editor.isActive('underline') ? 'active' : ''}><FaUnderline /></button>
      <button onClick={() => editor.chain().focus().toggleStrike().run()} className={editor.isActive('strike') ? 'active' : ''}><FaStrikethrough /></button>
      <button onClick={() => editor.chain().focus().toggleBulletList().run()} className={editor.isActive('bulletList') ? 'active' : ''}><FaListUl /></button>
      <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className={editor.isActive('orderedList') ? 'active' : ''}><FaListOl /></button>
      <button onClick={() => editor.chain().focus().undo().run()}><FaUndo /></button>
      <button onClick={() => editor.chain().focus().redo().run()}><FaRedo /></button>

      <button onClick = {() => downloadPDF('.editor-content', 'mi-documento.pdf')}title="Descargar como PDF"><FaFilePdf /></button>
      
    </div>
  );
};

EditorToolbar.propTypes = {
  editor: PropTypes.object.isRequired,
};
