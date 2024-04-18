import React, { useState } from "react";
import AiPlay from "./AiPlay";
function Game({ Ai, chosePlayer }) {
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

   const gameHandler = (i) => {
      const arr = handleBoxClick(i, gameBox, isXTurn ? "X" : "O");
      if (!Ai) {
         setIsXTurn((prev) => !prev);
      }
      if (arr && Ai) {
         setTimeout(() => {
            const index = AiPlay(arr, winningCondition, isXTurn ? "O" : "X");
            handleBoxClick(index, arr, isXTurn ? "O" : "X");
         }, 200);
      }
   };

   const handleBoxClick = (index, gameBoard, turn) => {
      if (gameBoard[index] == 0 && !gameWon) {
         const arr = [...gameBoard];
         arr[index] = turn;
         setGameBox(arr);
         const w = checkWin(arr, turn);
         if (w) {
            setGamewon(w);
            return null;
         }
         return arr;
      }
   };

   const checkWin = (gameArr, turn) => {
      for (const combi of winningCondition) {
         if (
            gameArr[combi[0]] === gameArr[combi[1]] &&
            gameArr[combi[0]] === gameArr[combi[2]] &&
            gameArr[combi[0]] !== 0
         ) {
            return `${turn} Won`;
         }
      }
      if (gameArr.indexOf(0) == -1) {
         return `Draw`;
      }
      return null;
   };

   const restartGame = () => {
      setGameBox(Array(9).fill(0));
      setGamewon(false);
   };
   return (
      <div className="flex flex-col justify-center items-center">
         <div className="w-full px-2 mb-2 flex justify-between items-center mt-6 text-white capitalize">
            {gameWon && <h1>{gameWon}</h1>}
            <span>{isXTurn ? "X Turn" : "O Turn"}</span>
         </div>
         <div className="grid grid-cols-3 w-72 h-72 grid-rows-3 gap-1">
            {gameBox.map((item, i) => (
               <button
                  key={i}
                  onClick={() => gameHandler(i)}
                  className={`size-full bg-white/80 backdrop-blur-md border border-gray-500 text-3xl ${
                     item === "X"
                        ? "text-lime-500"
                        : item === "O"
                        ? "text-rose-500"
                        : ""
                  }`}
               >
                  {item != 0 ? item : ""}
               </button>
            ))}
         </div>
         <button
            className="mt-8 w-72 px-10 py-4 bg-yellow-500 rounded-full text-white"
            onClick={restartGame}
         >
            Restart Game
         </button>
         <button
            className="mt-8 w-72 px-10 py-4 bg-yellow-500 rounded-full text-white"
            onClick={() => chosePlayer((prev) => !prev)}
         >
            Change Player
         </button>
      </div>
   );
}

export default Game;
