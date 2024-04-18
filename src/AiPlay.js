export default function (currentGame, winCombi, playeName) {
   // check self win
   const selfWin = winnigMove(currentGame, winCombi, playeName);
   if (selfWin === 0 || selfWin) {
      return selfWin;
   }
   // check other play win
   const otherPlayer = playeName === "X" ? "O" : "X";
   const otherWin = winnigMove(currentGame, winCombi, otherPlayer);
   if (otherWin === 0 || otherWin) {
      return otherWin;
   }

   const sMove = secoundMove(currentGame, winCombi, playeName);

   if (sMove === 0 || sMove) {
      return sMove;
   }
   const fMove = firstMove(currentGame, winCombi, playeName);
   return fMove;
}

const winnigMove = (currentGame, winCombi, playeName) => {
   for (const combi of winCombi) {
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
      if (
         currentGame[combi[0]] === currentGame[combi[1]] &&
         currentGame[combi[2]] === 0 &&
         currentGame[combi[0]] === playeName
      ) {
         return combi[2];
      }
   }
};

const secoundMove = (currentGame, winCombi, playeName) => {
   const ran = Math.floor(Math.random() * 2);
   for (const combi of winCombi) {
      if (
         currentGame[combi[0]] === playeName &&
         currentGame[combi[1]] === 0 &&
         currentGame[combi[2]] === 0
      ) {
         return combi[ran === 0 ? 2 : 1];
      }
      if (
         currentGame[combi[1]] === playeName &&
         currentGame[combi[0]] === 0 &&
         currentGame[combi[2]] === 0
      ) {
         return combi[ran === 0 ? 2 : 0];
      }
      if (
         currentGame[combi[2]] === playeName &&
         currentGame[combi[1]] === 0 &&
         currentGame[combi[0]] === 0
      ) {
         return combi[ran === 0 ? 0 : 1];
      }
   }
};
const firstMove = (currentGame, winCombi, playeName) => {
   const ran = Math.floor(Math.random() * 3);
   if (currentGame[4] === 0) {
      return 4;
   }
   for (const combi of winCombi) {
      if (
         currentGame[combi[0]] === 0 &&
         currentGame[combi[1]] === 0 &&
         currentGame[combi[2]] === 0
      ) {
         return combi[ran === 0 ? 0 : ran === 1 ? 1 : 2];
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
