import React from 'react';


const ContactoPage = () => {
  return (
    <div>
      <main className="holder contacto">
        <div>
          <h2>Contacto</h2>
          <form action="process-form.php" method="POST">
            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje:</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <div className="form-group">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
        <br />
        <div className="datos">
          <h2>Otras vías de comunicación</h2>
          <ul>
            <li>Teléfono: 4845-2594</li>
            <li>Email: contacto@comicsensitive.com.ar</li>
            <li>Facebook: ComicSensitiveAr</li>
            <li>Twitter: ComicSensitiveAr</li>
            <li>Instagram: ComicSensitiveAr</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default ContactoPage;
