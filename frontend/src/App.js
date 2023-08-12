import React, { useState } from "react";

const gachaItems = [
  { id: 1, name: "キャラ1", rarity: "★", probability: 0.6 },
  { id: 2, name: "キャラ2", rarity: "★★", probability: 0.3 },
  { id: 3, name: "キャラ3", rarity: "★★★", probability: 0.1 },
];

function drawGacha() {
  let randomNum = Math.random();
  let cumulativeProbability = 0;

  for (let item of gachaItems) {
    cumulativeProbability += item.probability;
    if (randomNum <= cumulativeProbability) {
      return item;
    }
  }

  // ドローされない場合（理論上はありえないが、念のため）
  return null;
}

function Gacha() {
  const [result, setResult] = useState(null);

  const handleDraw = () => {
    const drawnItem = drawGacha();
    setResult(drawnItem);
  };

  return (
    <div>
      <button onClick={handleDraw}>Draw Gacha</button>
      {result && (
        <div>
          <h2>{result.name}</h2>
          <p>Rarity: {result.rarity}</p>
        </div>
      )}
    </div>
  );
}

export default Gacha;
