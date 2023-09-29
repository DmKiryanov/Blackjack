const computerCardsContainer = document.querySelector(".computer-cards-container");
const playerCardsContainer = document.querySelector(".player-cards-container");
const sectionBlackJack =document.getElementById("cardGame");
const anotherBtn = document.querySelector(".player-btn__another");
const passBtn = document.querySelector(".player-btn__pass");
const enterBetBtn = document.querySelector(".enter-bet-btn");
const enterBetBlock = document.querySelector(".enter-bet-block");
const playerBtnBlock = document.querySelector(".player-btn-block");
const enterBet = document.getElementById("enterBet");
const computerInfoMoney = document.querySelector(".computer__info__money");
const playerInfoMoney = document.querySelector(".player__info__money");
const menuMoney = document.querySelector(".menu-money");
const menuBet = document.querySelector(".menu-bet");
const computerInfoScore = document.querySelector(".computer__info__score");
const playerInfoScore = document.querySelector(".player__info__score");
const popupStart = document.querySelector(".popup-start");
const startBtn = document.querySelector(".popup-start__btn");
const btnRules = document.querySelector(".btn-rules");
const popupRules = document.querySelector(".popup-rules");
const popupResult = document.querySelector(".popup-result");
const popupResultText = document.querySelector(".popup-result__txt");
const popupResultButton = document.querySelector(".popup-result__btn");

const arrayCards = [
    { id: 1, src: "img/cards/Club2.svg", cardName: "2 clubs", score: 2 },
    { id: 2, src: "img/cards/Diamond2.svg", cardName: "2 diamond", score: 2 },
    { id: 3, src: "img/cards/Heart2.svg", cardName: "2 heart", score: 2 },
    { id: 4, src: "img/cards/Spade2.svg", cardName: "2 spade", score: 2 },
    { id: 5, src: "img/cards/Club3.svg", cardName: "3 clubs", score: 3 },
    { id: 6, src: "img/cards/Diamond3.svg", cardName: "3 diamond", score: 3 },
    { id: 7, src: "img/cards/Heart3.svg", cardName: "3 heart", score: 3 },
    { id: 8, src: "img/cards/Spade3.svg", cardName: "3 spade", score: 3 },
    { id: 9, src: "img/cards/Club4.svg", cardName: "4 clubs", score: 4 },
    { id: 10, src: "img/cards/Diamond4.svg", cardName: "4 diamond", score: 4 },
    { id: 11, src: "img/cards/Heart4.svg", cardName: "4 heart", score: 4 },
    { id: 12, src: "img/cards/Spade4.svg", cardName: "4 spade", score: 4 },
    { id: 13, src: "img/cards/Club5.svg", cardName: "5 clubs", score: 5 },
    { id: 14, src: "img/cards/Diamond5.svg", cardName: "5 diamond", score: 5 },
    { id: 15, src: "img/cards/Heart5.svg", cardName: "5 heart", score: 5 },
    { id: 16, src: "img/cards/Spade5.svg", cardName: "5 spade", score: 5 },
    { id: 17, src: "img/cards/Club6.svg", cardName: "6 clubs", score: 6 },
    { id: 18, src: "img/cards/Diamond6.svg", cardName: "6 diamond", score: 6 },
    { id: 19, src: "img/cards/Heart6.svg", cardName: "6 heart", score: 6 },
    { id: 20, src: "img/cards/Spade6.svg", cardName: "6 spade", score: 6 },
    { id: 21, src: "img/cards/Club7.svg", cardName: "7 clubs", score: 7 },
    { id: 22, src: "img/cards/Diamond7.svg", cardName: "7 diamond", score: 7 },
    { id: 23, src: "img/cards/Heart7.svg", cardName: "7 heart", score: 7 },
    { id: 24, src: "img/cards/Spade7.svg", cardName: "7 spade", score: 7 },
    { id: 25, src: "img/cards/Club8.svg", cardName: "8 clubs", score: 8 },
    { id: 26, src: "img/cards/Diamond8.svg", cardName: "8 diamond", score: 8 },
    { id: 27, src: "img/cards/Heart8.svg", cardName: "8 heart", score: 8 },
    { id: 28, src: "img/cards/Spade8.svg", cardName: "8 spade", score: 8 },
    { id: 29, src: "img/cards/Club9.svg", cardName: "9 clubs", score: 9 },
    { id: 30, src: "img/cards/Diamond9.svg", cardName: "9 diamond", score: 9 },
    { id: 31, src: "img/cards/Heart9.svg", cardName: "9 heart", score: 9 },
    { id: 32, src: "img/cards/Spade9.svg", cardName: "9 spade", score: 9 },
    { id: 33, src: "img/cards/Club10.svg", cardName: "10 clubs", score: 10 },
    { id: 34, src: "img/cards/Diamond10.svg", cardName: "10 diamond", score: 10 },
    { id: 35, src: "img/cards/Heart10.svg", cardName: "10 heart", score: 10 },
    { id: 36, src: "img/cards/Spade10.svg", cardName: "10 spade", score: 10 },
    { id: 37, src: "img/cards/ClubJ.svg", cardName: "J clubs", score: 2 },
    { id: 38, src: "img/cards/DiamondJ.svg", cardName: "J diamond", score: 2 },
    { id: 39, src: "img/cards/HeartJ.svg", cardName: "J heart", score: 2 },
    { id: 40, src: "img/cards/SpadeJ.svg", cardName: "J spade", score: 2 },
    { id: 41, src: "img/cards/ClubQ.svg", cardName: "Q clubs", score: 3 },
    { id: 42, src: "img/cards/DiamondQ.svg", cardName: "Q diamond", score: 3 },
    { id: 43, src: "img/cards/HeartQ.svg", cardName: "Q heart", score: 3 },
    { id: 44, src: "img/cards/SpadeQ.svg", cardName: "Q spade", score: 3 },
    { id: 45, src: "img/cards/ClubK.svg", cardName: "K clubs", score: 4 },
    { id: 46, src: "img/cards/DiamondK.svg", cardName: "K diamond", score: 4 },
    { id: 47, src: "img/cards/HeartK.svg", cardName: "K heart", score: 4 },
    { id: 48, src: "img/cards/SpadeK.svg", cardName: "K spade", score: 4 },
    { id: 49, src: "img/cards/ClubA.svg", cardName: "A clubs", score: 11 },
    { id: 50, src: "img/cards/DiamondA.svg", cardName: "A diamond", score: 11 },
    { id: 51, src: "img/cards/HeartA.svg", cardName: "A heart", score: 11 },
    { id: 52, src: "img/cards/SpadeA.svg", cardName: "A spade", score: 11 }
];

function start() {
    let copyArrCards = Array.from(arrayCards);
    let betCount = 0;
    let computerMoney = 200;
    let playerMoney = 200;
    let computerScore = 0;
    let playerScore = 0;

    btnRules.addEventListener("click", (event) => {
        event.preventDefault();
        popupRules.style.transform = "translateY(0)";
        document.onclick = function (e) {
            if (e.target.className === "popup-rules") {
                popupRules.style.transform = "translateY(-100%)";
            }
        }
    });

    enterBetBtn.addEventListener("click", (event) => {
        event.preventDefault();
        if (playerMoney - Number(enterBet.value) <= 0) {
            betCount = playerMoney;
        } else if (computerMoney - Number(enterBet.value) <= 0) {
            betCount = computerMoney;
        } else {
            betCount = enterBet.value;
        }
        computerMoney -= Number(betCount);
        computerInfoMoney.innerText = `${computerMoney}$`;
        playerMoney -= Number(betCount); 
        playerInfoMoney.innerText = `${playerMoney}$`;
        menuBet.innerText = `bet: ${betCount}$`;
        menuMoney.innerText = `money: ${playerMoney}$`;
        addCardContainer(playerCardsContainer, offsetY(playerCardsContainer) -60, copyArrCards);
        addCardContainer(computerCardsContainer, offsetY(computerCardsContainer) - 120, copyArrCards);
        enterBetBlock.style.display = "none";
        playerBtnBlock.style.display = "flex";
    });
    
    anotherBtn.addEventListener("click", (event) => {
        event.preventDefault();
        addCardContainer(playerCardsContainer, offsetY(playerCardsContainer), copyArrCards);
    });

    passBtn.addEventListener("click", (event) => {
        event.preventDefault();
        logicGameComputer();
    });

    popupResultButton.addEventListener("click", (event) => {
        event.preventDefault();
        reset();
    });

    function offsetY(el) {
        let rect = el.getBoundingClientRect();
        return rect.top;
    }
    
    function deleteСard(el, time) {
        setTimeout(() => {
            el.remove();
        }, time);
    }
    
    function getRandomNum(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; // Максимум не включается, минимум включается
    }

    function getScore(container) {
        let arrCards = Array.from(container.getElementsByClassName("card"));
        let sum = 0;
        arrCards.forEach(el => {
            sum += el.value;
        });
        switch (container) {
            case computerCardsContainer:
                computerScore = sum;
                computerInfoScore.innerText = `${computerScore}`;
                break;
            case playerCardsContainer:
                playerScore = sum;
                playerInfoScore.innerText = `${playerScore}`;
                if (playerScore > 21) {
                    if (playerMoney <= 0) {
                        popupResult.style.transform = "translateY(0)";
                        popupResultText.innerHTML = `Computer win &#129302;`;
                        computerMoney = 200;
                        playerMoney = 200;
                    } else {
                        popupResult.style.transform = "translateY(0)";
                        popupResultText.innerHTML = `You lose &#128128;`;
                        computerMoney += betCount * 2;
                    }
                }
                break;
        }
    }

    function createBackCard() {
        const revSideCard = document.createElement("img");
        revSideCard.setAttribute("src", "img/cards/back-card.svg");
        revSideCard.setAttribute("alt", "back-card");
        revSideCard.classList.add("card-deck");
        sectionBlackJack.appendChild(revSideCard);
        return revSideCard;
    }
    
    function getRandomCard(num, parent, array) {
        const card = document.createElement("img");
        card.setAttribute("class", "card");
        card.setAttribute("src", `${array[num].src}`);
        card.setAttribute("alt", `${array[num].cardName}`);
        card.value = array[num].score;
        parent.appendChild(card);
        array.splice(num, 1);
    }
    
    function addCardContainer(container, heightY, array) {
        const backCard = createBackCard();
        setTimeout(() => {
            backCard.style.transition = `${600}ms`;
            backCard.style.transform = "translate(calc(50vw - 90px)";
            backCard.style.top = `${heightY}px`;
        }, 150);
        deleteСard(backCard, 600);
        setTimeout(() => {
            getRandomCard(getRandomNum(0, array.length), container, array);
            getScore(container);
        }, 600);
    }

    function reset() {
        popupResult.style.transform = "translateY(-100%)";
        enterBetBlock.style.display = "flex";
        playerBtnBlock.style.display = "none";
        betCount = 0;
        computerScore = 0;
        playerScore = 0;
        computerInfoScore.innerText = `${computerScore}`;
        playerInfoScore.innerText = `${playerScore}`;
        menuBet.innerText = `bet: ${0}$`;
        playerInfoMoney.innerText = `${playerMoney}$`; 
        computerInfoMoney.innerText = `${computerMoney}$`;
        menuMoney.innerText = `money: ${playerMoney}$`;
        while (computerCardsContainer.firstChild) {
            computerCardsContainer.removeChild(computerCardsContainer.firstChild);
        }
        while (playerCardsContainer.firstChild) {
            playerCardsContainer.removeChild(playerCardsContainer.firstChild);
        }
        copyArrCards = Array.from(arrayCards);
    }

    function getResult() {
        if ((playerScore <= 21 && computerScore > 21) || (playerScore > computerScore)) {
            if (computerMoney <= 0) {
                popupResult.style.transform = "translateY(0)";
                popupResultText.innerHTML = `Player win &#128578;`;
                playerMoney = 200;
                computerMoney = 200;
            } else {
                popupResult.style.transform = "translateY(0)";
                popupResultText.innerHTML = `You win &#129297;`;
                playerMoney += betCount * 2;
            }
        } else if ((computerScore <= 21 && playerScore > 21) || (playerScore < computerScore)) {
            if (playerMoney <= 0) {
                popupResult.style.transform = "translateY(0)";
                popupResultText.innerHTML = `Computer win &#129302;`;
                computerMoney = 200;
                playerMoney = 200;
            } else {
                popupResult.style.transform = "translateY(0)";
                popupResultText.innerHTML = `You lose &#128128;`;
                computerMoney +=  betCount * 2;
            }
        } else {
            popupResult.style.transform = "translateY(0)";
            popupResultText.innerHTML = `Draw &#129309;`;
            playerMoney += Number(betCount);
            computerMoney += Number(betCount);
        }
    }

    function logicGameComputer() {
        if (playerScore >= computerScore) {
            addCardContainer(computerCardsContainer, offsetY(computerCardsContainer), copyArrCards);
        }
        iid = setInterval(() => {
            if ((computerScore <= playerScore) && (computerScore < 21)) {
                addCardContainer(computerCardsContainer, offsetY(computerCardsContainer), copyArrCards);
            } else {
                getResult();
                clearInterval(iid);
            }
        }, 620); 
    }
}

startBtn.addEventListener("click", (event) => {
    event.preventDefault();
    popupStart.style.transform = "translateY(-100%)";
    start();
});