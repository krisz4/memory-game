import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addMatches } from "../redux/actions";
import Card from "./Card";

export default function Board(props) {
  const dispatch = useDispatch();
  const [game, setGame] = useState(props.table);
  const [flippedCount, setFlippedCount] = useState(0);
  const [flippedIndexes, setFlippedIndexes] = useState([]);

  useEffect(() => {
    setFlippedCount(0);
    setFlippedIndexes([]);
    setGame([]);
    setGame(props.table);
  }, [props.table]);

  if (flippedIndexes.length === 2) {
    const match =
      game[flippedIndexes[0]].imgId === game[flippedIndexes[1]].imgId;

    if (match) {
      const newGame = [...game];
      newGame[flippedIndexes[0]].flipped = true;
      newGame[flippedIndexes[1]].flipped = true;
      //dispatch(setTable(newGame));
      dispatch(addMatches());
      const newIndexes = [...flippedIndexes];
      newIndexes.push(false);
      setFlippedIndexes(newIndexes);
      let finish = true;
      for (let i = 0; i < newGame.length; i++) {
        if (!newGame[i].flipped) {
          finish = false;
          break;
        }
      }
      if (finish) {
        props.endGame();
      }
    } else {
      const newIndexes = [...flippedIndexes];
      newIndexes.push(true);
      setFlippedIndexes(newIndexes);
    }
  }

  if (game.length === 0) return <div>loading...</div>;
  else {
    return (
      <div
        id="cards"
        style={{
          padding: 10,
          margin: 10,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        }}
      >
        {game.map((card, index) => (
          <div className="card" key={index}>
            <Card
              id={index}
              img={card.img}
              game={game}
              flippedCount={flippedCount}
              setFlippedCount={setFlippedCount}
              flippedIndexes={flippedIndexes}
              setFlippedIndexes={setFlippedIndexes}
            />
          </div>
        ))}
      </div>
    );
  }
}
