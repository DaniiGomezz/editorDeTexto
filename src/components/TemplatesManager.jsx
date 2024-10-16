// src/components/TemplateManager.js
import PropTypes from 'prop-types';
import { templates } from '../js/Templates'; // Asegúrate de que esto esté correctamente importado
import '../css/Templates.css';

export const TemplateManager = ({ editor }) => {
  if (!editor) return null;

  const loadTemplate = (templateContent) => {
    editor.commands.setContent(templateContent);
  };

  return (
    <div className="template-manager">
      <h4>Plantillas Legales</h4>
      <select onChange={(e) => loadTemplate(e.target.value)}>
        <option value="">Seleccione una plantilla a editar</option>
        {templates.map((template, index) => (
          <option key={index} value={template.content}>
            {template.name}
          </option>
        ))}
      </select>
    </div>
  );
};

TemplateManager.propTypes = {
  editor: PropTypes.object.isRequired,
};
