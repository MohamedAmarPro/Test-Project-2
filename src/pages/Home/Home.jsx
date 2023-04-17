import React from "react";
import Card from "../../components/card/Card";
import { useState } from "react";
import launch from "../../data/launch.json";
import "./Home.scss";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState("ariane 5");

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(userInput.toLowerCase());
    setUserInput("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="search">
        <label htmlFor="search"> Rechercher </label> <br />
        <input
          type="text"
          name="search"
          id="search"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
      </form>
      {launch.results
        ? launch.results
            .filter((vaiseau) => vaiseau.name.toLowerCase().includes(result))
            .map((launchSelected) => <Card key={launchSelected.id} data={launchSelected}

            />)
        : ""}
        <NavLink to="/payment">Aller paiment</NavLink>


    </>
  );
};


export default Home;
