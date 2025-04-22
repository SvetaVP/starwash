import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import kfzDiagnose from "../img/kfz_diagnose.jpg";
import motordiagnose from "../img/motordiagnose.jpg";
import inspektion from "../img/inspektion.jpg";
import autoreparatur from "../img/autoreparatur.jpg";
import autowerkstatt from "../img/autowerkstatt.jpg";

export default function Service() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div className="card">
            <h3 className="card-title">KFZ Diagnose</h3>
            <Image
              className="card-img"
              src={kfzDiagnose}
              alt="Moderne KFZ-Diagnosewerkstatt mit professionellem Mechaniker und High-Tech-Diagnosegeräten, die Fahrzeugdaten auf einem Bildschirm analysieren."
            />
            <div className="card-text">
              <div className="card-description">
                StarWash bietet präzise Fahrzeugdiagnose, um Probleme schnell zu
                erkennen und die beste Lösung für Ihr Auto zu finden.
              </div>
              <a className="card-link" href="#">
                Weitere Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  width="24px"
                  viewBox="0 -960 960 960"
                  fill="#fff"
                >
                  <path d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="card">
            <h3 className="card-title">
              Computergestützte Fehler- und Motordiagnose
            </h3>
            <Image
              className="card-img"
              src={motordiagnose}
              alt="Mechaniker führt computergestützte Fehler- und Motordiagnose an einem modernen Auto in einer gut beleuchteten Werkstatt durch."
            />
            <div className="card-text">
              <div className="card-description">
                Mit modernster Computerdiagnosetechnologie hilft StarWash, Fehler
                im Fahrzeug zu identifizieren und eine präzise Reparatur zu
                planen.
              </div>
              <a className="card-link" href="#">
                Weitere Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  width="24px"
                  viewBox="0 -960 960 960"
                  fill="#fff"
                >
                  <path d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="card">
            <h3 className="card-title">KFZ Inspektion</h3>
            <Image
              className="card-img"
              src={inspektion}
              alt="Mechaniker führt eine vollständige KFZ-Inspektion durch, überprüft Motor und Bremsen in einer gut beleuchteten Werkstatt."
            />
            <div className="card-text">
              <div className="card-description">
                StarWash führt gründliche Inspektionen durch, um die Sicherheit
                und Leistung Ihres Fahrzeugs zu garantieren und teure Reparaturen
                zu vermeiden.
              </div>
              <a className="card-link" href="#">
                Weitere Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  width="24px"
                  viewBox="0 -960 960 960"
                  fill="#fff"
                >
                  <path d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="card">
            <h3 className="card-title">Autoreparatur</h3>
            <Image
              className="card-img"
              src={autoreparatur}
              alt="Mechaniker repariert den Motor eines Autos in einer modernen Werkstatt, umgeben von Werkzeugen und Fahrzeugteilen."
            />
            <div className="card-text">
              <div className="card-description">
                StarWash repariert alle Fahrzeugtypen effizient, egal ob es sich
                um kleinere Schäden oder komplexe Reparaturen handelt.
              </div>
              <a className="card-link" href="#">
                Weitere Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  width="24px"
                  viewBox="0 -960 960 960"
                  fill="#fff"
                >
                  <path d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="card">
            <h3 className="card-title">Autowerkstatt</h3>
            <Image
              className="card-img"
              src={autowerkstatt}
              alt="Mechaniker repariert den Motor eines Autos in einer modernen Werkstatt, umgeben von Werkzeugen und Fahrzeugteilen."
            />
            <div className="card-text">
              <div className="card-description">
                StarWash bietet umfassende Werkstattservices für alle
                Fahrzeugarten, mit dem Fokus auf Qualität und schnelle Ausführung.
              </div>
              <a className="card-link" href="#">
                Weitere Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  width="24px"
                  viewBox="0 -960 960 960"
                  fill="#fff"
                >
                  <path d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="card">
            <h3 className="card-title">Motorinstandsetzung</h3>
            <Image
              className="card-img"
              src={autowerkstatt}
              alt="Mechaniker repariert den Motor eines Autos in einer modernen Werkstatt, umgeben von Werkzeugen und Fahrzeugteilen."
            />
            <div className="card-text">
              <div className="card-description">
                StarWash bietet umfassende Werkstattservices für alle
                Fahrzeugarten, mit dem Fokus auf Qualität und schnelle Ausführung.
              </div>
              <a className="card-link" href="#">
                Weitere Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  width="24px"
                  viewBox="0 -960 960 960"
                  fill="#fff"
                >
                  <path d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
