const state = {
    score:{
        playerScore: 0,
        computerScore: 0,
        scorBox: document.getElementById("score_points"),
    },
    cardSprites: {
        avatar: document.getElementById("card-image"),
        name: document.getElementById("card-name"),
        type: document.getElementById("card-type"),
    },
    fieldCards: {
        player: document.getElementById("player-field-card"),
        computer: document.getElementById("computer-field-card"),
    },
    actions: {
        button: document.getElementById("next-duel"),
    },
};

const playerSides = {
    player1: "player-cards",
    computer: "computer-cards",
};

const pathImages = "./src/assets/icons/";

const cardData = [
    // enumerar = dar sentido a algo, facilitar acesso a ela
    {
        id: 0,
        name: "Blue Eyes White Dragon",
        type: "Paper",
        img: `${pathImages}dragon.png`,
        WinOf: [1],
        LoseOf: [2],
    },
    {
        id: 1,
        name: "Dark Magician",
        type: "Rock",
        img: `${pathImages}magician.png`,
        WinOf: [2],
        LoseOf: [0],
    },
    {
        id: 2,
        name: "Exodia",
        type: "Scissors",
        img: `${pathImages}exodia.png`,
        WinOf: [0],
        LoseOf: [1],
    }
]

async function getRandomCardId() {
    const randomIndex = Math.floor(Math.random() * cardData.length);
    return cardData[randomIndex].id;
    // serve um id aleatorio
}

async function creatCardImage(IdCard, fieldSide) {
    const cardImage = document.createElement("img");
    cardImage.setAttribute("height", "100px");
    cardImage.setAttribute("src", "./src/assets/icons/card-back.png");
    cardImage.setAttribute("data-id",IdCard);
    cardImage.classList.add("card");

    if(fieldSide === playerSides.player1) {
        cardImage.addEventListener("mouseover",() =>{
        drawSelectCard(IdCard);
        //desenha a carta no lado esquerdo quando passa o mouse por cima da carta virada pra baixo

        cardImage.addEventListener("click", () =>{
            setCardsField(cardImage.getAttribute("data-id"));
        });

    });

    }

    return cardImage;
}

async function setCardsField(cardId) {

    //remove todas as cartas dos dois campos
    await removeAllCardsImages();

    //sorteia uma carta aleatoria pro computador
    let computerCardId = await getRandomCardId();

    //muda pra display block os dois lados
    state.fieldCards.player.style.display = "block";
    state.fieldCards.computer.style.display = "block";

    await hiddenCardDetails();
    
    //seta as imagens
    state.fieldCards.player.src = cardData[cardId].img;
    state.fieldCards.computer.src = cardData[computerCardId].img;

    //checka o resultado comparando os ids
    let duelResults = await checkDuelResults(cardId,computerCardId);

    //atualiza score
    await updateScore();

    //botao aparece dependendo do resultado
    await drawButton(duelResults);
}

async function drawButton(text) {
    state.actions.button.innerText = text.toUpperCase();
    state.actions.button.style.display = "block";
}

//tecnica de extract to method
async function hiddenCardDetails() {
    state.cardSprites.avatar.src = "";
    state.cardSprites.name.innerText = "";
    state.cardSprites.type.innerText = "";
}

async function updateScore(){
    state.score.scorBox.innerText = `Win: ${state.score.playerScore} | Lose: ${state.score.computerScore}`;
}

async function checkDuelResults(playerCardId, computerCardId) {
    let duelResults = "draw";
    let playerCard = cardData[playerCardId];

    if(playerCard.WinOf.includes(computerCardId)){
        duelResults = "win";
        state.score.playerScore++;
    } 

    if(playerCard.LoseOf.includes(computerCardId)){
        duelResults = "lose";
        state.score.computerScore++;
    }

    await playAudio(duelResults);

    return duelResults;
}

async function removeAllCardsImages() {
    let cards = document.querySelector("#computer-cards");
    let imgElements = cards.querySelectorAll("img");
    imgElements.forEach((img) => img.remove());

    cards = document.querySelector("#player-cards");
    imgElements = cards.querySelectorAll("img");
    imgElements.forEach((img) => img.remove());
}

async function drawSelectCard(index) {
    state.cardSprites.avatar.src = cardData[index].img;
    state.cardSprites.name.innerText = cardData[index].name;
    state.cardSprites.type.innerText = "Atribute : " + cardData[index].type;
}

async function drawCards(cardNumbers, fieldSide) {
    for(let i = 0; i < cardNumbers; i++) {
        const randomIdCard = await getRandomCardId(); //funcao que da um id aleatorio de uma carta
        // logica de assinatura e implementacao = primeiro pensar na logica e depois no motor
        const cardImage = await creatCardImage(randomIdCard,fieldSide);

        document.getElementById(fieldSide).appendChild(cardImage);
    }
}

async function resetDuel() {
    state.cardSprites.avatar.src = "";
    state.actions.button.style.display = "none";

    state.fieldCards.player.style.display = "none";
    state.fieldCards.computer.style.display = "none";

    init();
}

async function playAudio(status) {
    const audio = new Audio(`src/assets/audios/${status}.wav`);

    try {
        audio.play();
    } catch {}
}

function init() {
    drawCards(5,playerSides.player1);
    drawCards(5,playerSides.computer);

    const bgm = document.getElementById("bgm");
    bgm.play();
}

init();

