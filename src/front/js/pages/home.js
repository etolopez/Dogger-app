import React from "react";
import dog1 from "../../img/Dog_line.png";
import dogswalker from "../../img/dogger.png";
import dogleash from "../../img/dog_leash.png";
import "../../styles/home.css";
import Shape from "../component/shape";
import { Link } from "react-router-dom";


const imagesStyles = {

  height: "200px",
  width: "auto",
  color: "black",
};

const btns = {
  backgroundColor: "#C88B7D",
  color: "white",
  width: "20rem",
};


export const Home = () => {

  return (
    <div className="container-fluid">
      <div className="container m-auto">
        <br></br>
        <br></br>
        <div className="row pt-5 pb-5">
          <div className="col-sm-12 col-lg-6">
            <div className="row h-100 pb-5" style={{ marginRight: "5rem" }}>
              <div className="col my-auto text-justify">
                <h1>Encuentra paseadores de perros cerca de ti al instante.</h1>
                <h4>
                  El app que te ayuda a conectar con personas de confianza que
                  pasean a tu perro en el horario que mejor te funcione.
                </h4>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6">
            <iframe
              className="w-100"
              height="332"
              src="https://www.youtube.com/embed/FO1K41xJNIM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>

        <div className="row mt-5 mb-5">
          <div className="col-12 text-center">
            <h2>¿Cómo funciona?</h2>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-lg-4">
            <div className="card align-items-center " id="dogCard">
              <img
                src={dog1}
                className="card-img-top"
                alt="..."
                style={imagesStyles}
              ></img>

              <div className="card-body">
                <p className="card-text" style={{ color: "black" }}>
                  Registras a tu perro
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card align-items-center" id="dogCard">
              <img
                src={dogswalker}
                className="card-img-top"
                alt="..."
                style={imagesStyles}
              ></img>
              <div className="card-body">
                <p className="card-text" style={{ color: "black" }}>
                  Selecciona el caminador disponible mas cercano
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card align-items-center" id="dogCard">
              <img
                src={dogleash}
                className="card-img-top"
                alt="..."
                style={imagesStyles}
              ></img>
              <div className="card-body">
                <p className="card-text" style={{ color: "black" }}>
                  Alista a tu perro para el camino.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-12 text-center pb-3 pt-5">
            <Link to={"/registrodueno"}>
              <button className="btn rounded-pill pt-2" style={btns}>
                <h5>Comenzemos!</h5>
              </button>
            </Link>
          </div>
        </div>
        <br></br>
        <br></br>

        <Shape />
      </div>
    </div>
  );
};
