import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import MatCard from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { addTries } from "../redux/actions";
import { useDispatch } from "react-redux";

export default function Card({
  id,
  img,
  game,
  flippedCount,
  setFlippedCount,
  flippedIndexes,
  setFlippedIndexes,
}) {
  const dispatch = useDispatch();
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  useEffect(() => {
    if (flippedIndexes[2] === true && flippedIndexes.indexOf(id) > -1) {
      setTimeout(() => {
        set((state) => !state);
        setFlippedCount(flippedCount + 1);

        setFlippedIndexes([]);
      }, 1000);
    } else if (flippedIndexes[2] === false && id === 0) {
      setFlippedCount(flippedCount + 1);

      setFlippedIndexes([]);
    }
  }, [flippedIndexes]);

  useEffect(() => {
    set(game[id].flipped);
  }, [game]);

  const onCardClick = () => {
    if (!game[id].flipped && flippedCount % 3 === 0) {
      set((state) => !state);
      setFlippedCount(flippedCount + 1);
      dispatch(addTries());
      const newIndexes = [...flippedIndexes];
      newIndexes.push(id);
      setFlippedIndexes(newIndexes);
    } else if (
      flippedCount % 3 === 1 &&
      !game[id].flipped &&
      flippedIndexes.indexOf(id) < 0
    ) {
      set((state) => !state);
      setFlippedCount(flippedCount + 1);
      const newIndexes = [...flippedIndexes];
      newIndexes.push(id);
      setFlippedIndexes(newIndexes);
    }
  };
  return (
    <MatCard
      style={{ width: "100%", height: "250px", border: "2px solid", margin: 2 }}
      onClick={onCardClick}
    >
      <CardContent>
        <animated.div
          className="c back"
          style={{
            opacity: opacity.interpolate((o) => 1 - o),
            transform,
          }}
        />
        <animated.div
          className="c front"
          style={{
            opacity,
            transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
          }}
        >
          <img src={img} alt={id} />
        </animated.div>
      </CardContent>
    </MatCard>
  );
}
