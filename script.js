
// déclarer une fonction dans une variable permet d'éviter le hoisting de js
let myFunction = () => console.log('oye oye');

//exercice 1 : tableaux
const stagiaires = ['stephane', 'mathieu', 'roxane', 'sofian', 'samuel', 'sofiane', 'marilyn'];

//afficher chaque prénom du tableau en console via une fonction 
let displayNames = (array) => 
{
    for (let i = 0; i < array.length; i++) 
    {
    console.log(stagiaires[i]);
    }
};

let displayNames2 = stagiaires.map(function(x)
{
    console.log(x);
});

let displayNames3 = stagiaires.map(x => console.log(x));




const formateur = 
{
    name: 'Gregory',
    age: 37,
    isBold: true,
}


// Exercice carré
let square = document.querySelector('.square');
let height = document.getElementById('height');
let green = document.getElementById('green');
let disappear = document.getElementById('disappear');
let reappear = document.getElementById('reappear');
let reset = document.getElementById('reset');

square.style.height = '100px';
square.style.width = '100px';
square.style.left = '50%';
square.style.top = '50%';

function sizeIncrease()
{
    let newHeight = parseInt(square.style.height) + 20;
    let newWidth = parseInt(square.style.width) + 20;
    square.style.height = newHeight + 'px';
    square.style.width = newWidth + 'px';

    let newXPosition = parseInt(square.style.left) - 1;
    let newYPosition = parseInt(square.style.top) - 1;
    square.style.left = newXPosition + '%';
    square.style.top = newYPosition + '%';
}

function colorToGreen()
{
    square.style.backgroundImage = "url('footballGold.png')";
}

function disappearSquare()
{
    // square.style.backgroundImage = "url('')";
    square.style.display = 'none';

}

function reappearSquare()
{
    // square.style.backgroundImage = "url('football.png')";
    square.style.display = 'block';
}

function refreshPage()
{
    window.location.reload();
}

function moveRightFunc()
{
    let newPosition = parseInt(square.style.left) + 2;
    square.style.left = newPosition + '%';
}
function moveLeftFunc()
{
    let newPosition = parseInt(square.style.left) - 2;
    square.style.left = newPosition + '%';
}
function moveUpFunc()
{
    let newPosition = parseInt(square.style.top) - 2;
    square.style.top = newPosition + '%';
}
function moveDownFunc()
{
    let newPosition = parseInt(square.style.top) + 2;
    square.style.top = newPosition + '%';
}


height.addEventListener("click", sizeIncrease);
green.addEventListener("click", colorToGreen);
disappear.addEventListener("click", disappearSquare);
reappear.addEventListener("click", reappearSquare);
reset.addEventListener("click", refreshPage);


window.addEventListener("keydown", function(event)
{
    if (event.defaultPrevented) 
    {
        return;
    }
    if (event.code === "ArrowRight")
    {
        if (parseInt(square.style.left) < 90)
        {
        moveRightFunc();
        }
    } else if (event.code === "ArrowLeft")
    {
        if (parseInt(square.style.left) > 0)
        {
        moveLeftFunc();
        }
    } else if (event.code === "ArrowDown")
    {
        if (parseInt(square.style.top) < 90)
        {
        moveDownFunc();
        }
    } else if (event.code === "ArrowUp")
    {
        if (parseInt(square.style.top) > 0)
        {
        moveUpFunc();
        }
    }
})