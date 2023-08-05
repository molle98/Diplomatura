import React, { useEffect, useState } from 'react';

const ContactoPage = () => {
  const [html, setHtml] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/contacto')
      .then((response) => response.text())
      .then((renderedHtml) => {
        setHtml(renderedHtml);
      })
      .catch((error) => {
        console.error('Error al obtener la página de contacto:', error);
      });
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default ContactoPage;


