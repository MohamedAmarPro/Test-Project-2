import React from "react";
import dayjs from "dayjs";
import Timer from "../timer/Timer";
import "./Card.scss";
import localizedFormat from "dayjs/plugin/localizedFormat";

const Card = ({ data }) => {
  dayjs.extend(localizedFormat);

  const date = dayjs().format("ll");

  return (
    <>
      <div className="card-main">
        <div className="card-content">
          <img src={data.image} alt="" />
          <div className="infos-card">
            <h1>{data.name}</h1> <br />
            <h3>{data.mission.name}</h3>
            <p>{data.mission.description}</p>
            <Timer data={data} />
            {date}
            <div className="card-button">
              <button>GO</button>
              <a href={data.pad.map_url} target="_blank">
                <button>Maps</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
