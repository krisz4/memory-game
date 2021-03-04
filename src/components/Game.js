import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newGame, endGame, setTable } from "../redux/actions";
import EndGame from "./EndGame";
import Board from "./Board";
import GameHeader from "./GameHeader.jsx";
import Rules from "./Rules";
import generateTable from "../generateTable";

export default function Game() {
  const dispatch = useDispatch();
  const navstate = useSelector((state) => state.nav.state);
  const table = useSelector((state) => state.game.table);
  const best = useSelector((state) => state.game.best);
  const tries = useSelector((state) => state.game.tries);
  const matches = useSelector((state) => state.game.matches);
  const deckSize = useSelector((state) => state.game.deckSize);
  const inProgress = useSelector((state) => state.game.inProgress);

  const [showEndGame, setShowEndGame] = React.useState(!inProgress);
  const [size, setDeckSize] = React.useState(deckSize);
  const handleEndGame = () => {
    setShowEndGame(true);
    dispatch(endGame());
  };
  const handleNewGame = () => {
    setShowEndGame(false);
    dispatch(newGame(size));
    dispatch(setTable(generateTable(size)));
  };

  return (
    <div>
      {navstate === 0 ? (
        <Rules />
      ) : (
        <>
          {showEndGame ? (
            <EndGame
              deckSize={size}
              best={best}
              setSize={(val, newval) => {
                setDeckSize(newval.props.value);
              }}
              newGame={() => handleNewGame()}
            />
          ) : (
            <>
              <GameHeader
                newGame={() => handleNewGame()}
                tries={tries}
                bestScore={best}
                score={matches}
              />
              <Board
                table={table}
                deckSize={size}
                newGame={() => handleNewGame()}
                endGame={() => handleEndGame()}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}
