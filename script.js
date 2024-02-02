var mine1;
var mine2;
var p1;
var p2;
var p3;
var p4;
var p5;
var p6;
var p7;
var p8;
var c1;
var c2;
var c3;
var c4;
var c5;
var c6;
var c7;
var c8;

//build mine
function minebuild() {
  var x1 = Math.floor(Math.random() * 6 + 1);
  var y1 = Math.floor(Math.random() * 6 + 1);

  var x2 = Math.floor(Math.random() * 6 + 1);
  var y2 = Math.floor(Math.random() * 6 + 1);

  mine1 = x1 + "" + y1;
  mine2 = x2 + "" + y2;

 //if two mine are the same,randomly again
  if (mine1 == mine2) {
    var x1 = Math.floor(Math.random() * 6 + 1);
    var y1 = Math.floor(Math.random() * 6 + 1);
    mine1 = x1 + "" + y1;
  }
 //calculating around mine position
  p1 = x1 - 1 + "" + (y1 - 1);
  p2 = x1 - 1 + "" + y1;
  p3 = x1 - 1 + "" + (y1 + 1);
  p4 = x1 + "" + (y1 - 1);
  p5 = x1 + "" + (y1 + 1);
  p6 = x1 + 1 + "" + (y1 - 1);
  p7 = x1 + 1 + "" + y1;
  p8 = x1 + 1 + "" + (y1 + 1);

  c1 = x2 - 1 + "" + (y2 - 1);
  c2 = x2 - 1 + "" + y2;
  c3 = x2 - 1 + "" + (y2 + 1);
  c4 = x2 + "" + (y2 - 1);
  c5 = x2 + "" + (y2 + 1);
  c6 = x2 + 1 + "" + (y2 - 1);
  c7 = x2 + 1 + "" + y2;
  c8 = x2 + 1 + "" + (y2 + 1);
  console.log(mine1);
  console.log(mine2);
}
let toclick = 0;
let gameFinished = false;

//when press button get id
function pressButton(cell) {
  if (gameFinished == false) {
    var userpress = parseInt(cell.id);

    //when the user clicks,it checks whether it's mine or not
    if (userpress == mine1 || userpress == mine2) {
      cell.style.backgroundColor = "red";
      gameOver();
      cell.innerText = "BOOM";
      document.getElementById("gameoversound").play();
    } else if (
      userpress == p1 ||
      userpress == p2 ||
      userpress == p3 ||
      userpress == p4 ||
      userpress == p5 ||
      userpress == p6 ||
      userpress == p7 ||
      userpress == p8 ||
      userpress == c1 ||
      userpress == c2 ||
      userpress == c3 ||
      userpress == c4 ||
      userpress == c5 ||
      userpress == c6 ||
      userpress == c7 ||
      userpress == c8
    ) {
      //calculating around user clicked cell position
      ima1 = userpress - 11;
      ima2 = userpress - 10;
      ima3 = userpress - 9;
      ima4 = userpress - 1;
      ima5 = userpress + 1;
      ima6 = userpress + 9;
      ima7 = userpress + 10;
      ima8 = userpress + 11;
      document.getElementById("clicksound").play();
      cell.style.pointerEvents = "none";
      toclick++;
      gameWin();

      //calculation how many mines are near the red color cell
      if (
        ima1 == mine1 ||
        ima2 == mine1 ||
        ima3 == mine1 ||
        ima4 == mine1 ||
        ima5 == mine1 ||
        ima6 == mine1 ||
        ima7 == mine1 ||
        ima8 == mine1
      ) {
        //if there is only one mine nearby,show 1
        cell.style.backgroundColor = "red";
        cell.innerText = "1";
        gameWin();
        if (
          ima1 == mine2 ||
          ima2 == mine2 ||
          ima3 == mine2 ||
          ima4 == mine2 ||
          ima5 == mine2 ||
          ima6 == mine2 ||
          ima7 == mine2 ||
          ima8 == mine2
        ) {
          //if there are two mines nearby,show 2
          cell.innerText = "2";
          gameWin();
        }
      }
      
      if (
        ima1 == mine2 ||
        ima2 == mine2 ||
        ima3 == mine2 ||
        ima4 == mine2 ||
        ima5 == mine2 ||
        ima6 == mine2 ||
        ima7 == mine2 ||
        ima8 == mine2
      ) {
        //if there is only one mine nearby,show 1
        cell.style.backgroundColor = "red";
        cell.innerText = "1";
        gameWin();
        if (
          ima1 == mine1 ||
          ima2 == mine1 ||
          ima3 == mine1 ||
          ima4 == mine1 ||
          ima5 == mine1 ||
          ima6 == mine1 ||
          ima7 == mine1 ||
          ima8 == mine1
        ) {
          //if there are two mines nearby,show 2
          cell.innerText = "2";
          gameWin();
        }
      }
    } else {
      //when the user clicked cell is not near mine
      document.getElementById("clicksound").play();
      cell.style.pointerEvents = "none";
      cell.style.backgroundColor = "skyblue";
      toclick++;
      gameWin();
    }
  }
}
//to show if user clicked mine
function gameOver() {
  gameFinished = true;
  for (let i = 0; i < 36; i++) {
    document.getElementsByClassName("cell")[i].style.backgroundColor = "red";
    document.getElementsByClassName("cell")[i].innerText = "";
  }
  document.getElementById("32").innerText = "G";
  document.getElementById("33").innerText = "A";
  document.getElementById("34").innerText = "M";
  document.getElementById("35").innerText = "E";

  document.getElementById("42").innerText = "O";
  document.getElementById("43").innerText = "V";
  document.getElementById("44").innerText = "E";
  document.getElementById("45").innerText = "R";
}
//to show if the user isn't click the mine
function gameWin(cell) {
  if (toclick == 34) {
    gameFinished = true;
    for (let i = 0; i < 36; i++) {
      document.getElementsByClassName("cell")[i].style.backgroundColor =
        "skyblue";
      document.getElementsByClassName("cell")[i].innerText = "";

      document.getElementById("32").innerText = "G";
      document.getElementById("33").innerText = "A";
      document.getElementById("34").innerText = "M";
      document.getElementById("35").innerText = "E";

      document.getElementById("42").innerText = "W";
      document.getElementById("43").innerText = "I";
      document.getElementById("44").innerText = "N";
      document.getElementById("45").innerText = "!";
    }
  }
}
