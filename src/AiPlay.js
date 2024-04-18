export default function (currentGame, winCombi, playeName) {
   // check self win
   const selfWin = winnigMove(currentGame, winCombi, playeName);
   if (selfWin) {
      return selfWin;
   }
   // check other play win
   const otherPlayer = playeName === "X" ? "O" : "X";
   const otherWin = winnigMove(currentGame, winCombi, otherPlayer);
   if (otherWin) {
      return otherWin;
   }

   const sMove = secoundMove(currentGame, winCombi, playeName);

   if (sMove) {
      return sMove;
   }
   const fMove = firstMove(currentGame, winCombi, playeName);

   if (fMove) {
      return fMove;
   }
}

const winnigMove = (currentGame, winCombi, playeName) => {
   for (const combi of winCombi) {
      if (
         currentGame[combi[0]] === currentGame[combi[1]] &&
         currentGame[combi[2]] === 0 &&
         currentGame[combi[0]] === playeName
      ) {
         return combi[2];
      }
      if (
         currentGame[combi[1]] === currentGame[combi[2]] &&
         currentGame[combi[0]] === 0 &&
         currentGame[combi[1]] === playeName
      ) {
         return combi[0];
      }
      if (
         currentGame[combi[0]] === currentGame[combi[2]] &&
         currentGame[combi[1]] === 0 &&
         currentGame[combi[0]] === playeName
      ) {
         return combi[1];
      }
   }
};

const secoundMove = (currentGame, winCombi, playeName) => {
   for (const combi of winCombi) {
      if (
         currentGame[combi[0]] === playeName &&
         currentGame[combi[1]] === 0 &&
         currentGame[combi[2]] === 0
      ) {
         return combi[1];
      }
      if (
         currentGame[combi[1]] === playeName &&
         currentGame[combi[0]] === 0 &&
         currentGame[combi[2]] === 0
      ) {
         return combi[0];
      }
      if (
         currentGame[combi[2]] === playeName &&
         currentGame[combi[1]] === 0 &&
         currentGame[combi[0]] === 0
      ) {
         return combi[0];
      }
   }
};
const firstMove = (currentGame, winCombi, playeName) => {
   for (const combi of winCombi) {
      if (
         currentGame[combi[0]] === 0 &&
         currentGame[combi[1]] === 0 &&
         currentGame[combi[2]] === 0
      ) {
         return combi[1];
      }
      if (currentGame[combi[0]] === 0 && currentGame[combi[1]] === 0) {
         return combi[0];
      }
      if (currentGame[combi[2]] === 0 && currentGame[combi[1]] === 0) {
         return combi[1];
      }
      if (currentGame[combi[2]] === 0 && currentGame[combi[0]] === 0) {
         return combi[2];
      }
   }
};
