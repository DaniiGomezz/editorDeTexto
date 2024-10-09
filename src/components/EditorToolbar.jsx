// src/components/EditorToolbar.jsx

import PropTypes from 'prop-types'; // Importar PropTypes
import '../css/EditorToolbar.css';

export const EditorToolbar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  const addImage = () => {
    const url = window.prompt('Ingresa la URL de la imagen');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const addLink = () => {
    const url = window.prompt('Ingresa el enlace');
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  const saveDocument = () => {
    const content = editor.getHTML();
    localStorage.setItem('document', content);
    alert('Documento guardado!');
  };

  const loadDocument = () => {
    const content = localStorage.getItem('document');
    if (content) {
      editor.commands.setContent(content);
      alert('Documento cargado!');
    } else {
      alert('No hay documento guardado.');
    }
  };

  return (
    <div className="toolbar">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'active' : ''}
        title="Negrita"
      >
        <b>B</b>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'active' : ''}
        title="Cursiva"
      >
        <i>I</i>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive('underline') ? 'active' : ''}
        title="Subrayado"
      >
        <u>U</u>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive('strike') ? 'active' : ''}
        title="Tachado"
      >
        <s>S</s>
      </button>
      <button onClick={addLink} className={editor.isActive('link') ? 'active' : ''} title="Insertar Enlace">
        🔗
      </button>
      <button onClick={addImage} title="Insertar Imagen">
        🖼️
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'active' : ''}
        title="Lista Desordenada"
      >
        •••
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'active' : ''}
        title="Lista Ordenada"
      >
        1. 2. 3.
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'active' : ''}
        title="Título 1"
      >
        H1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'active' : ''}
        title="Título 2"
      >
        H2
      </button>
      <button onClick={() => editor.chain().focus().undo().run()} title="Deshacer">
        ↶
      </button>
      <button onClick={() => editor.chain().focus().redo().run()} title="Rehacer">
        ↷
      </button>
      <button onClick={saveDocument} title="Guardar Documento">
        💾
      </button>
      <button onClick={loadDocument} title="Cargar Documento">
        📂
      </button>
    </div>
  );
};

// Definir PropTypes para validar las props
EditorToolbar.propTypes = {
  editor: PropTypes.object.isRequired,
};


