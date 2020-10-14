import React, { useState, useEffect } from "react";
import AddPlayerForm from "./AddPlayer";
import Player from "./Player";

function compare_score(a, b) {
  return b.score - a.score;
}
function compare_name(a, b) {
  return a.name.localeCompare(b.name);
}
export default function Scoreboard() {
  const [players, setPlayers] = useState([
    { id: 1, name: "Benjamin", score: 0 },
    { id: 2, name: "Jennifer", score: 0 },
    { id: 3, name: "Phillip", score: 0 },
    { id: 4, name: "Theodore", score: 0 },
  ]);

  const [sort_by, set_sort_by] = useState("name");
  const change_sorting = (event) => {
    set_sort_by(event.target.value);
  };
  const compareFunction = sort_by === "score" ? compare_score : compare_name;
  const players_sorted = [...players].sort(compareFunction);

  const incrementScore = (id) => {
    console.log("sign clicked!", id);
    const increasedScore = players.map((player) => {
      return player.id === id ? { ...player, score: player.score + 1 } : player;
    });
    setPlayers(increasedScore);
  };

  const decrementScore = (id) => {
    console.log("sign clicked!", id);
    const decreasedScore = players.map((player) => {
      return player.id === id ? { ...player, score: player.score - 1 } : player;
    });
    setPlayers(decreasedScore);
  };

  const randomizedScore = (id) => {
    console.log("sign clicked!", id);
    const decreasedScore = players.map((player) => {
      return player.id === id
        ? { ...player, score: Math.floor(Math.random() * 100 + 1) }
        : player;
    });
    setPlayers(decreasedScore);
  };

  const onClickReset = () => {
    const resetScore = players.map((p) => {
      return { ...p, score: 0 };
    });
    setPlayers(resetScore);
  };

  return (
    <div className="Scoreboard">
      <h1 className="card-title my-4">ScoreBoard!!!</h1>
      <p>
        <select className="card" onChange={change_sorting} value={sort_by}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>
      <p>
        <button className="card" onClick={onClickReset}>
          Reset score
        </button>
      </p>
      <div>
        {players_sorted.map((player) => {
          return (
            <Player
              key={player.id}
              id={player.id}
              name={player.name}
              score={player.score}
              incrementScore={incrementScore}
              decrementScore={decrementScore}
              randomizedScore={randomizedScore}
            />
          );
        })}
      </div>
      <AddPlayerForm />
    </div>
  );
}
