import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./style.css";

import logo from "../../assets/images/logo.svg";
import landing from "../../assets/images/landing.svg";

import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";
import api from "../../services/api";

const Landing = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get("/connections").then((response) => {
      setTotalConnections(response.data.total);
    });
  }, []);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="content">
        <div className="logo-container">
          <img src={logo} alt="Logo" />
          <h2>Sua plataforma de estudos online</h2>
        </div>

        <img src={landing} alt="Landing" className="hero-image" />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar Aulas" />
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de {totalConnections} conexões já realizadas
          <img src={purpleHeartIcon} alt="Coraçãozinho roxo" />
        </span>
      </div>
    </div>
  );
};

export default Landing;
