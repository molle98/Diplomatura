import React from 'react';
import superheroes from '../img/home/superheroes.jpg'


const HomePage = () => {
  return (
    <div>
      <main className="holder">
        <div className="homeimg">
          <img src={superheroes} alt="Superheroes" />
        </div>
        <div className="columnas">
          <div className="bienvenidos">
            <h2>Bienvenidos</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, nihil? Molestiae aspernatur ipsam
              doloribus, voluptatem culpa sunt pariatur nulla dolorum ducimus dolore aliquam eum doloremque atque
              quo consequuntur odio quisquam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, cumque distinctio. Alias quod est sint,
              cumque accusamus animi omnis repellat assumenda ab modi officia cum atque magnam quasi molestias necessitatibus.
            </p>
          </div>
          <div className="Series">
            <h2>Series</h2>
            <p style={{ color: 'green' }}>
              En esta sección pondría imágenes de distintos superhéroes con enlaces al catálogo de cada uno de ellos
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod exercitationem blanditiis illum ipsa distinctio? Modi
              enim nulla ipsam sed illo, esse voluptas quam facilis aspernatur ipsa tenetur cumque, quod dolorem.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
