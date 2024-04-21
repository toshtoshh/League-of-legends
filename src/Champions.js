import { useEffect, useState } from "react";
import "./yasuo.css";

const Champions = () => {
  const [champions, setChampions] = useState({
    post: {},
  });

  useEffect(() => {
    fetch(
      "https://ddragon.leagueoflegends.com/cdn/14.8.1/data/en_US/champion.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setChampions({ post: result.data });
      });
  }, []);

  return (
    <div className="container">
      {Object.keys(champions.post).map((key) => (
        <div key={key} className="fullcard">
          <h2>{champions.post[key].name}</h2>
          <div className="card">
            <div className="card_turn">
              <div className="card_front">
                <img
                  //src={`https://ddragon.leagueoflegends.com/cdn/14.8.1/img/champion/${champions.post[key].image.full}`}
                  src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champions.post[key].id}_0.jpg`}
                ></img>
              </div>
              <div className="card_back">
                <p>{champions.post[key].blurb}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Champions;
