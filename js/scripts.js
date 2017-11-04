//1. PRZYCISK ZAINICJOWANIA GRY.
//Zmiennej newGameBtn (w HTML button class="js-newGameButton") dodajemy event/zdarzenie click. Po kliknięciu rozpocznie się 
//nowa gra. 
//Będziemy chcieli ukryć ten element po kliknięciu.
var newGameBtn = document.getElementById('js-newGameButton');

newGameBtn.addEventListener('click', newGame);
//2. WYBÓR GRACZA. SEKCJA 3 W HTML.
//Do każdego z trzech buttonów dodajemy listener czyli będzie to wybór gracza.
//Po kliknięciu uruchamia funkję z wyborem playerPick.
var pickRock = document.getElementById('js-playerPick_rock'),
     pickPaper = document.getElementById('js-playerPick_paper'),
     pickScissors = document.getElementById('js-playerPick_scissors'),
     pickLizard = document.getElementById('js-playerPick_lizard'),
     pickSpock = document.getElementById('js-playerPick_spock');

pickRock.addEventListener('click', function() { playerPick('rock');});//dodałem średnik
pickPaper.addEventListener('click', function() { playerPick('paper');});//dodałem średnik
pickScissors.addEventListener('click', function() { playerPick('scissors');});//dodałem średnik
pickLizard.addEventListener('click', function() { playerPick('lizard');});
pickSpock.addEventListener('click', function() { playerPick('spock');});

//LOGIKA GRY

//3. WARTOŚCI POCZĄTKOWE.
//Przechowujemy dwa obiekty player i computer.
//Ustalamy stan gry. Który będzie nam służy do ustalenia co w danej chwili wyświetlić.
var gameState = 'notStarted',  //started // ended
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };
//5. WYŚWIETLANIE ELEMENTÓW GRY.
//W HTML nadaliśmy id kontenerą. Teraz ich użyjemy aby utworzyć zmienne, które będą wskazywać na konkretny element gry.
var newGameElem = document.getElementById('js-newGameElement'),//kontener z przyciskiem New Game.
    pickElem = document.getElementById('js-playerPickElement'),//kontener z przyciskami R, S, P. 
    resultsElem = document.getElementById('js-resultsTableElement');//kontener z wynikiem gracza i komputera.
//Wrcamy do zmiennej gameState. Będzie ona przyjmować kilka wartości.
//Zależnie od tego w jakim stanie jest gra.
//Użyjemy do tego funkcji setGameElements.
//Co tu się dzieje: Mamy trzy stany wyświetlania
//A.'started': gra się zaczeła brak przycisku New Game, widać kontener z przyciskami R, S, P.
//B. 'ended': gra się skończyła, przycisk New Game jest wyświetlony ze zamienionym napisem u nas 'START NEW GAME'.
//C. 'notStarted': gra się jeszcze nie zaczeła, widać tylko przycisk New Game.
function setGameElements() {
  switch(gameState) {
    case 'started':
        newGameElem.style.display = 'none';
        pickElem.style.display = 'block';
        resultsElem.style.display = 'block';
      break;
    case 'ended':
        newGameBtn.innerText = 'NEXT GAME';
        computerPickElem.innerHTML = 'Computer selection';
        computerResultElem.innerHTML = 'Computer Score';
        playerPickElem.innerHTML = 'Player selection';
        playerResultElem.innerHTML = 'Player Score';
    case 'notStarted':

    default:
        newGameElem.style.display = 'block';
        pickElem.style.display = 'none';
        resultsElem.style.display = 'none';
  }
}
setGameElements();
//Sprawdz jak zachowa się gra gdy nadasz zmiennej gameState różne wartości????

//6. ROZPOCZĘCIE GRY.
//Najpierw tworzymy zmienne oddnoszące się do elementów na stronie,
//które będziemy aktualizować na stronie przed rozpoczęciem rozgrywki.
//Jest to punktacja gracza, imię gracza, punktacja komputera.
var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');
//Tworzymy funkcję, która będzie odpowiedzialna za rozpoczęcie każdej gry.
//Uruchamiana po wciśnięciu przycisku New Game/ START NEW GAME.
//Co tu się dzieje:
function newGame() {
  player.name = prompt('Please enter your name', 'imię gracza');//Wyskakuję okno z prośbą o podanie imienia gracza.
  if (player.name) { //Imię wpisane wyżej. Sprawdza czy zosttalo wpisane.
    player.score = computer.score = 0;//Jeżeli gracz podał wszystko prawidłowo następuje wyzerowanie rozgrywki.
    gameState = 'started';//Gra rozpoczyna się.
    setGameElements();//wywołanie funkcji setGameElements określa jaki kontener się wyświetla w danym momencie rozgrywki.

    playerNameElem.innerHTML = player.name;// Wpisanie imienia gracza do tablicy wyników.
    setGamePoints();//Funkcja ustalająca wynik. Punkty w obiektach zostały wyzerowane, jednak bedziemy musieli zadbać,
    //aby tak stalo się również w elementach strony.????????????. Czy chodzi o obiekty player i computer w zmiennej gameState???
  }

}
//7. WYBÓR GRACZA.
//Funkcja definiująca wybór gracza. Czy to ma zostać???
// function playerPick(playerPick) {
//     var computerPick = getComputerPick();

//     playerPickElem.innerHTML = playerPick;
//     computerPickElem.innerHTML = computerPick;
// }
//8. LOSOWANIE WYBORU KOMPUTERA.
//Używamy obiektu Math.random(). Losuje liczbę w predziale od 0 do 1.
//Aby nie wybierać losowej liczby tylko wylosować jedną z trzech opcji tzn R, S, P. skorzystamy z kolejnej
//metody matematycznej Math.floor, która zaokrągla liczby zmiennoprzecinkowe w dół, do liczby całkowitej. 
function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors','lizard', 'spock'];//Tablica 0, 1, 2
    return possiblePicks[Math.floor(Math.random()*5)];//Losuje na liczbę 0, 1 lub 2.
}
//9. MAMY WYBORY GRACZA I KOMPUTERA UMIESZCZAMY JE NA STRONIE.
var playerPickElem = document.getElementById('js-playerPick'),//Do zmiennej przypisujemy wybór gracza.
    computerPickElem = document.getElementById('js-computerPick'),//Do zmiennej przypisujemy wylosowny wybór gracza.
    playerResultElem = document.getElementById('js-playerResult'),//Do zmiennej przypisano wynik gracza.
    computerResultElem = document.getElementById('js-computerResult');//Do zmiennej przypisano wynik komputera.
//Nie bardzo rozumiem co się dzieje ponizej!!!

//10. LOGIKA GRY I PRZYZNAWANIE PUNKTÓW.
//Tego dziś nie ogarniam!!!
function checkRoundWinner(playerPick, computerPick) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = '';

  var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'noone';
        computerResultElem.innerHTML = "Draw";
        playerResultElem.innerHTML = "Draw"; // remis
    } else if (
        (computerPick == 'rock' &&  playerPick == 'lizard') ||
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'scissors' &&  playerPick == 'lizard') ||
        (computerPick == 'paper' &&  playerPick == 'rock') ||
        (computerPick == 'paper' &&  playerPick == 'spock') ||
        (computerPick == 'spock' &&  playerPick == 'rock') ||
        (computerPick == 'spock' &&  playerPick == 'scissors') ||
        (computerPick == 'lizard' &&  playerPick == 'spock') ||
        (computerPick == 'lizard' &&  playerPick == 'paper')) {

        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Win!";
        player.score++;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Win!";
        computer.score++;
    }
    
    setGamePoints();//Aktualizacja wyniku
    endGame();//Sprawdzenie kto wygtał
}
function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;

    checkRoundWinner(playerPick, computerPick);
    
}
//AKTUALIZACJA WYNIKU
function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}
//ZAKOŃCZENIE ROZGRYWKI
//Zmieniłem na 5 z 10 za dlugo to trwało.
function endGame() {
    if (player.score == 5) {
        alert(player.name +' is the winner!');
        gameState = 'ended';
    setGameElements();
    } else if (computer.score == 5) {
        alert('Computer is the winner!');
        gameState = 'ended';
    setGameElements();
    }
}







