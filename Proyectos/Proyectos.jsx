import React from "react";

const Proyectos = () => {
  return (
    <>
      <div className="container mx-auto">
        <div
          className="text-center font-bold text-3xl lg:text-4xl pt-10 lg:pt-40 mb-20 text-purple-500 "
          id="proyectos"
        >
          Proyectos Personales
        </div>
        <div className="grid grid-rows-4 gap-2 lg:grid-rows-4 grid-flow-col lg:gap-2 text-center ml-2">
          <div className="card lg:card-side bg-black shadow-xl">
            <figure>
              <img
                src="/assets/farmacias.png"
                alt="Album"
                className="lg:w-350 lg:h-96"
              />
            </figure>
            <div className="card-body text-start text-white">
              <h2 className="card-title">Farmacias de Turno</h2>
              <p>Consulta farmacias de turnos.</p>
              <div className="card-actions justify-end">
                <a
                  className="btn btn-accent"
                  href="https://farmapp-livid.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visitar
                </a>
              </div>
            </div>
          </div>
          <div className="card lg:card-side  bg-black shadow-xl">
            <figure>
              <img
                //lorempicksun
                src="
								/assets/artemi.jpg"
                alt="Album"
                className="lg:w-350 lg:h-96"
              />
            </figure>
            <div className="card-body text-start text-white ">
              <h2 className="card-title">Artemi</h2>
              <p>Tienda online </p>
              <div className="card-actions justify-end">
                <a
                  className="btn btn-accent"
                  href="https://artemi-final.netlify.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Visitar
                </a>
              </div>
            </div>
          </div>
          <div className="card lg:card-side bg-black shadow-xl">
            <figure>
              <img
                src="/assets/birritas.jpg"
                alt="Album"
                className="lg:w-350 lg:h-96"
              />
            </figure>
            <div className="card-body text-start text-white">
              <h2 className="card-title">Birritas</h2>
              <p>Tienda de cervezas.</p>
              <div className="card-actions justify-end">
                <a
                  className="btn btn-accent"
                  href="https://birritas.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visitar
                </a>
              </div>
            </div>
          </div>

          <div className="card lg:card-side bg-black shadow-xl">
            <figure>
              <img
                src="/assets/portfolio.jpg"
                alt="Album"
                className="lg:w-350 lg:h-96"
              />
            </figure>
            <div className="card-body text-start text-white">
              <h2 className="card-title">Portfolio!</h2>
              <p>Mi portfolio personal.</p>
              <div className="card-actions justify-end">
                <a
                  className="btn btn-accent"
                  href="https://dewebs.com.ar/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visitar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Proyectos;
