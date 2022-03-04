const closeCardBtn = document.getElementById('closeCard');
const listCardsNode = document.getElementById('listCards');
const newCardNode = document.getElementById('newCard');
const addCardDetailBtn = document.getElementById('addCardDetail');
const showAnswerBtn = document.getElementById('showAnswer');
const cardContainer = document.getElementById('cardContainer');
const submitCardBtn = document.getElementById('submitCard');
const pagingNode = document.getElementById('paging');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const cardFrontText = document.getElementById('front');
const cardBackText = document.getElementById('back');
const clearDataBtn = document.getElementById('clearData');
const frontText = document.getElementById('front');
const backText = document.getElementById('back');


let localStorage = window.localStorage;
let data = JSON.parse(localStorage.getItem('cardsData')) || [];
let slideIndex = 0;

listCards();

function listCards(index = slideIndex) {
    if( data.length !== 0) { 
        const item = data[slideIndex];
        frontText.innerHTML = item.q;
        backText.innerHTML = item.a;  
    }
    else{
        frontText.innerHTML = 'No Cards added';
    }
    updatePaging(slideIndex);  
}

function updatePaging(current = slideIndex) {
    const total = data.length !== 0 ? data.length : 1;
    
    if(slideIndex == 0)
        prevBtn.disabled = true;
    else if (slideIndex == data.length -1)
        nextBtn.disabled = true;
    else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }

    pagingNode.innerHTML = `${current + 1}/${total}`;
}

function showPrevious() {    
    if(slideIndex !== 0)
        slideIndex = slideIndex - 1;
    listCards();
    //updatePaging();
}

function showNext() {    
    if(slideIndex !== data.length-1)
        slideIndex = slideIndex + 1 
    listCards();
   // update
}


function toggleCards() {
    console.log(`toggling cards`);
    listCardsNode.classList.toggle('active');
    newCardNode.classList.toggle('active');
    listCards();
}

// function flipCard() {
//     console.log('flipCard clicked');
//     cardContainer.classList.toggle('flip');
// };


function submitCardDetails() {
    const question = document.getElementById('question');
    const answer = document.getElementById('answer');
    const obj = {
        'q' : question.value,
        'a' : answer.value
    };
    data.push(obj);
    console.log(data);
    localStorage.setItem('cardsData', JSON.stringify(data));
    question.value = '';
    answer.value = '';
    
}

closeCardBtn.addEventListener('click', toggleCards);
addCardDetailBtn.addEventListener('click', toggleCards);
showAnswerBtn.addEventListener('click', () => {
    backText.classList.toggle('active');
});
submitCardBtn.addEventListener('click', submitCardDetails);
prevBtn.addEventListener('click', showPrevious);
nextBtn.addEventListener('click', showNext);

clearDataBtn.addEventListener('click', () => {
    data = [];
    slideIndex = 0;
    window.localStorage.removeItem('cardsData');
    listCards();
});