window.onload = difficultyPick();

function difficultyPick()
{
    diffInput = false
    do{
        difficultyPick = prompt("Wähle einen Schwierigkeitsgrad")
        switch(difficultyPick){
            case "1": difficultyEasy();
                    diffInput = true;
                break;
            case "2": difficultyMedium();
                    diffInput = true;
                break;
            case "3": difficultyHard();
                    diffInput = true;
                break;
            case "4": diffInput = true;
                break;
            default: ;
                break;
        }
    }while(diffInput == false)
}

function difficultyEasy()
{
    randomNumber = Math.floor(Math.random() * 10) + 1;
    range = "Zahl zwischen 1 und 10";
    guessNumber(randomNumber, range);
}

function difficultyMedium()
{
    randomNumber = Math.floor(Math.random() * 50) + 1;
    range = "Zahl zwischen 1 und 50";
    guessNumber(randomNumber, range);
}

function difficultyHard()
{
    randomNumber = Math.floor(Math.random() * 100) + 1;
    range = "Zahl zwischen 1 und 100";
    guessNumber(randomNumber, range);
}

function guessNumber(randomNumber, range)
{
    attempts = 10;
    do{
        alert("Sie haben noch " + attempts + " Versuche überig");
        userTry = prompt(range);
        if(userTry < randomNumber)
        {
            alert("Höher");
        }
        else if(userTry > randomNumber)
        {
            alert("Niedriger");
        }
        else if(userTry == "Thaler")
        {
            alert(randomNumber);
            attempts++;
        }
        else
        {
            alert("Richtig");
        }
        attempts--;
    }while(userTry != randomNumber && attempts != 0)
    alert("Spiel Beendet");
    difficultyPick();
}