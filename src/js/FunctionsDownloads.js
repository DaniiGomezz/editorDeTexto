import html2pdf from 'html2pdf.js';

export const downloadPDF = (elementSelector, filename = 'documento.pdf') => {
  const content = document.querySelector(elementSelector); // Selecciona el contenido a descargar

  if (!content) {
    console.error(`Elemento no encontrado: ${elementSelector}`);
    return;
  }

  const options = {
    margin: 1,
    filename: filename,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  html2pdf().from(content).set(options).save();
};
