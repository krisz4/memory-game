import images from "./config/cards";
export default function newTable(deckSize) {
  if (deckSize === 0) {
    return;
  }
  const newGame = [];
  for (let i = 0; i < deckSize; i++) {
    const firstOption = {
      id: 2 * i,
      imgId: images[i].id,
      img: images[i].img,
      flipped: false,
    };
    const secondOption = {
      id: 2 * i + 1,
      imgId: images[i].id,
      img: images[i].img,
      flipped: false,
    };

    newGame.push(firstOption);
    newGame.push(secondOption);
  }
  const shuffledGame = newGame.sort(() => Math.random() - 0.5);
  return shuffledGame;
}
