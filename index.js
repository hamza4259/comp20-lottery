//storing the lucky numbers in an array
function getLottery() {
  let massLotteryNums = [];
  for (let i = 0; i < 5; i++) {
    let num = Math.floor(Math.random() * 47 + 1);
    massLotteryNums.push(num);
  }

  massLotteryNums.sort(function (x, y) {
    return x - y;
  });

  return massLotteryNums;
}

function getWinning() { 
  let string = prompt(
    "Enter 5 lottery numbers (1 through 48) with a space between each:"
  );
  
  let winningLotteryNums = [];
  let result = string.split(" "); //split string across spaces
  for (let i = 0; i < 5; i++) {
    let number = parseInt(result[i]);
    winningLotteryNums.push(number);
  }

  winningLotteryNums.sort(function (x, y) {
    return x - y;
  });

  return winningLotteryNums;
};

function checkLottery(winningLotteryNums, massLotteryNums) {
  let winningCount = 0;
  winningLotteryNums.forEach((num) => {
    if (massLotteryNums.includes(num)) {
      winningCount++;
    }
  });
  return winningCount;
}

function computePrize(winningCount, lucky) {
  let prize = null;
  if (winningCount === 5) {
    prize = lucky ? "$7,000 a WEEK for LIFE" : "$25,000 a YEAR for LIFE";
  } else if (winningCount === 4) {
    prize = lucky ? "$5,000" : "$200";
  } else if (winningCount === 3) {
    prize = lucky ? "$150" : "$20";
  } else if (winningCount === 2) {
    prize = lucky ? "$25" : "$3";
  } else if (winningCount === 1 && lucky) {
    prize = "$6";
  } else if (winningCount === 0 && lucky) {
    prize = "$4";
  } else {
    prize = "$0";
  }
  return prize;
}

function reportLottery(winningLotteryNums, massLotteryNums, luckyNum, winningCount, lucky, prize) {
  let lotteryResult = document.getElementById("result");

  let playerLotteryPrint = document.createElement("p");
  playerLotteryPrint.innerHTML =
    "Your pick: " + winningLotteryNums.join(" ");
  lotteryResult.appendChild(playerLotteryPrint);

  let massLotteryPrint = document.createElement("p");
  massLotteryPrint.innerHTML =
    "The Winning numbers were: " + massLotteryNums.join(" ");
  lotteryResult.appendChild(massLotteryPrint);

  let luckyNumPrint = document.createElement("p");
  luckyNumPrint.innerHTML = "The Lucky Ball Number was: " + luckyNum;
  lotteryResult.appendChild(luckyNumPrint);

  let winningCountPrint = document.createElement("p");
  winningCountPrint.innerHTML =
    winningCount + " lottery numbers matched with ours!";
  lotteryResult.appendChild(winningCountPrint);

  let luckyPrint = document.createElement("p");
  luckyPrint.innerHTML = lucky
    ? "The lucky ball matched!"
    : "The lucky ball did not match!";
  lotteryResult.appendChild(luckyPrint);

  let prizePrint = document.createElement("p");
  prizePrint.innerHTML = "The payout is " + prize;
  lotteryResult.appendChild(prizePrint);
}

function main() {
  let lucky = false; //if the user guessed the number correctly default is false
  let luckyNum = Math.floor(Math.random() * 17 + 1); //random lucky number
  let massLotteryNums = getLottery();
  console.log(massLotteryNums);
  let winningLotteryNums = getWinning();
  let winningLucky = parseInt(prompt("Enter 1 lucky number (1 through 18):"));

  if (winningLucky == luckyNum) {
    lucky = true;
  }

  let winningCount = checkLottery(winningLotteryNums, massLotteryNums);
  let prize = computePrize(winningCount, lucky);

  reportLottery(winningLotteryNums, massLotteryNums, luckyNum, winningCount, lucky, prize);
}

main();