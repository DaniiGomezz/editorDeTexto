// src/components/EditorToolbar.jsx

import PropTypes from "prop-types";
import "../css/EditorToolbar.css";
import { FaBold, FaItalic, FaUnderline, FaStrikethrough, FaLink, FaImage, FaListUl, FaListOl, FaUndo, FaRedo, FaSave, FaFolderOpen } from 'react-icons/fa';

export const EditorToolbar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  const addImage = () => {
    const url = window.prompt("Ingresa la URL de la imagen");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const addLink = () => {
    const url = window.prompt("Ingresa el enlace");
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  const saveDocument = () => {
    const content = editor.getHTML();
    localStorage.setItem("document", content);
    alert("Documento guardado!");
  };

  const loadDocument = () => {
    const content = localStorage.getItem("document");
    if (content) {
      editor.commands.setContent(content);
      alert("Documento cargado!");
    } else {
      alert("No hay documento guardado.");
    }
  };
  {
    /* Botón de Bloque de Código */
  }

  
  
  return (
    <div className="toolbar">
      {/* Botones de Formato Básico */}
      <button
    onClick={() => editor.chain().focus().toggleBold().run()}
    className={editor.isActive('bold') ? 'active' : ''}
    title="Negrita"
  >
    <FaBold />
  </button>
  <button
    onClick={() => editor.chain().focus().toggleItalic().run()}
    className={editor.isActive('italic') ? 'active' : ''}
    title="Cursiva"
  >
    <FaItalic />
  </button>
  <button
    onClick={() => editor.chain().focus().toggleUnderline().run()}
    className={editor.isActive('underline') ? 'active' : ''}
    title="Subrayado"
  >
    <FaUnderline />
  </button>
  <button
    onClick={() => editor.chain().focus().toggleStrike().run()}
    className={editor.isActive('strike') ? 'active' : ''}
    title="Tachado"
  >
    <FaStrikethrough />
  </button>
  
      <button
        onClick={addLink}
        className={editor.isActive("link") ? "active" : ""}
        title="Insertar Enlace"
      >
        🔗
      </button>
      <button onClick={addLink} className={editor.isActive('link') ? 'active' : ''} title="Insertar Enlace">
    <FaLink />
  </button>
  <button onClick={addImage} title="Insertar Imagen">
    <FaImage />
  </button>
        {/* Botones de Lista y Encabezados */}

  <button
    onClick={() => editor.chain().focus().toggleBulletList().run()}
    className={editor.isActive('bulletList') ? 'active' : ''}
    title="Lista Desordenada"
  >
    <FaListUl />
  </button>
  <button
    onClick={() => editor.chain().focus().toggleOrderedList().run()}
    className={editor.isActive('orderedList') ? 'active' : ''}
    title="Lista Ordenada"
  >
    <FaListOl />
  </button>
      {/* Botones de Alineación */}
      <button
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={editor.isActive({ textAlign: "left" }) ? "active" : ""}
        title="Alinear a la Izquierda"
      >
        ⬅️
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={editor.isActive({ textAlign: "center" }) ? "active" : ""}
        title="Centrar"
      >
        ⏺️
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={editor.isActive({ textAlign: "right" }) ? "active" : ""}
        title="Alinear a la Derecha"
      >
        ➡️
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        className={editor.isActive({ textAlign: "justify" }) ? "active" : ""}
        title="Justificar"
      >
        ↔️
      </button>

      {/* Botones de Deshacer y Rehacer */}
      <button onClick={() => editor.chain().focus().undo().run()} title="Deshacer">
        <FaUndo />
      </button>
      <button onClick={() => editor.chain().focus().redo().run()} title="Rehacer">
        <FaRedo />
      </button>

      {/* Botones de Guardar y Cargar */}
      <button onClick={saveDocument} title="Guardar Documento">
        <FaSave />
      </button>
      <button onClick={loadDocument} title="Cargar Documento">
        <FaFolderOpen />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive("codeBlock") ? "active" : ""}
        title="Bloque de Código"
      >
        💻
    
    </button>
    <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? "active" : ""}
        title="Cita en Bloque"
      >
        ❝❞
      </button>
    </div>
  );
};

// Definir PropTypes para validar las props
EditorToolbar.propTypes = {
  editor: PropTypes.object.isRequired,
};
