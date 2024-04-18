import React, { useState } from "react";
import Game from "./Game";

function App() {
   const [player, setPlayer] = useState("ai");
   const [gameStart, setGameStart] = useState(false);
   return (
      <div className="min-h-screen w-full bg-gradient-to-tr from-violet-500 to-fuchsia-500 flex justify-center items-center flex-col">
         <h1 className="text-white text-6xl">Tic Tac Toe</h1>

         {gameStart ? (
            <Game Ai={player === "ai"} chosePlayer={setGameStart} />
         ) : (
            <div>
               <h2 className="text-xl mt-8 text-white">
                  Play Vs:{" "}
                  <span
                     className={`${
                        player === "human" ? "text-red-600" : ""
                     } underline cursor-pointer`}
                     onClick={() => setPlayer("human")}
                  >
                     Human
                  </span>{" "}
                  Or{" "}
                  <span
                     className={`${
                        player === "ai" ? "text-red-600" : ""
                     } underline cursor-pointer`}
                     onClick={() => setPlayer("ai")}
                  >
                     AI
                  </span>
               </h2>
               <button
                  className="mt-8 w-full px-10 py-4 bg-yellow-500 rounded-full text-white"
                  onClick={() => setGameStart(true)}
               >
                  Start Game
               </button>
            </div>
         )}
      </div>
   );
}

export default App;
