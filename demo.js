let count = 0;

function generateLetter()
{
    let code = Math.floor(Math.random() * 26) + 65;
    let letter = String.fromCharCode(code);

    // now what?
    return letter;
}

function generateAcronym()
{
    let firstLetter = generateLetter();
    let secondLetter = generateLetter();
    let thirdLetter = generateLetter();

    let acronym = firstLetter + secondLetter + thirdLetter;

    alert(acronym);
}

function sayHello(greeting, salutation)
{
    document.write(greeting.toUpperCase() + " " + salutation);
}

function rollDie(sides)
{
    let value = Math.floor(Math.random() * sides) + 1;
    alert(value);
}

function drawCard()
{
    let value = Math.floor(Math.random() * 52) + 1;
    alert(value);
}