import React from 'react';
import alanmoore from '../img/nosotros/alanmoore.jpg'
import frankmiller from '../img/nosotros/frankmiller.jpg'


const NosotrosPage = () => {
  return (
    <div>
      <main className="holder">
        <div className="historia">
          <h2>Historia</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, aut optio neque architecto dignissimos
            perferendis? Totam, minus, harum hic in quis quibusdam itaque sint culpa voluptatum placeat voluptate
            ratione ipsam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquam accusantium eum ducimus
            perspiciatis iusto quos, reprehenderit et nihil, maxime incidunt suscipit quia! Sint ipsa ut mollitia
            provident perspiciatis soluta?
          </p>
        </div>
        <div className="Fundadores">
          <h2>Fundadores</h2>
          <div className="personas">
            <div className="persona">
              <img src={alanmoore} alt="Alan Moore" />
              <h5>Alan Moore</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse soluta dolor modi natus temporibus
                veritatis ipsa repudiandae numquam eaque, architecto sequi animi labore distinctio dolorem dolorum
                possimus maxime debitis odio.
              </p>
            </div>
            <div className="persona">
              <img src={frankmiller} alt="Frank Miller" />
              <h5>Frank Miller</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quisquam provident adipisci inventore
                quam eum cum, quis, minima non saepe obcaecati. Unde, accusamus mollitia ea at non eos ipsam aliquid.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NosotrosPage;
