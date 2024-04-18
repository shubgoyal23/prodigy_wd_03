import React, { useState } from "react";
function Game() {
   const winningCondition = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
   ];
   const [gameBox, setGameBox] = useState(Array(9).fill(0));
   const [isXTurn, setIsXTurn] = useState(true);
   const [gameWon, setGamewon] = useState(false);
   const handleBoxClick = (index) => {
      if (gameBox[index] == 0 && !gameWon) {
         const arr = [...gameBox];
         arr[index] = isXTurn ? "X" : "O";
         setGameBox(arr);
         checkWin(arr);
         setIsXTurn((prev) => !prev);
      }
   };

   const checkWin = (gameArr) => {
      for (const combi of winningCondition) {
         if (
            gameArr[combi[0]] === gameArr[combi[1]] &&
            gameArr[combi[0]] === gameArr[combi[2]] &&
            gameArr[combi[0]] !== 0
         ) {
            setGamewon(`${isXTurn === true ? "x won" : "o won"}`);
         }
      }
      if (gameArr.indexOf(0) == -1) {
         setGamewon(`Draw`);
      }
   };

   const restartGame = () => {
      setGameBox(Array(9).fill(0));
      setGamewon(false);
   };
   return (
      <div>
         {gameWon && <h1>{gameWon}</h1>}
         {gameWon && <button onClick={restartGame}>Restart Game</button>}
         <span>{isXTurn ? "X Turn" : "O Turn"}</span>
         <div className="grid grid-cols-3 w-52 h-52 grid-rows-3">
            {gameBox.map((item, i) => (
               <button
                  key={i}
                  onClick={() => handleBoxClick(i)}
                  className="size-full bg-gray-400 border border-black"
               >
                  {item != 0 ? item : ""}
               </button>
            ))}
         </div>
      </div>
   );
}

export default Game;
