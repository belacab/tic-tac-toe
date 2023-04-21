/* eslint-disable no-unused-vars */
const board = () => {
  this.positions = ["", "", "", "", "", "", "", "", ""];
  const asignarValor = (position, valor) => {
    if (this.positions[position] == "") {
      this.positions[position] = valor;
      return true;
    } else {
      return false;
    }
  };
  const emptyboard = () => {
    this.positions = ["", "", "", "", "", "", "", "", ""];
  };
  const display = () => {
    for (let index = 0; index < this.positions.length; index++) {
      const element = this.positions[index];
      document.getElementById("cell-" + index).textContent = element;
    }
  };
  const winningCombination = () => {
    if (
      this.positions[0] == this.positions[1] &&
      this.positions[0] == this.positions[2] &&
      this.positions[1] == this.positions[2] &&
      this.positions[0] != ""
    ) {
      console.log("You win!");
      return this.positions[0]; //return this.positions[0] y asi con los demas
    }
    if (
      this.positions[2] == this.positions[4] &&
      this.positions[2] == this.positions[6] &&
      this.positions[4] == this.positions[6] &&
      this.positions[2] != ""
    ) {
      console.log("You win");
      return this.positions[2];
    }
    if (
      this.positions[0] == this.positions[4] &&
      this.positions[4] == this.positions[8] &&
      this.positions[0] == this.positions[8] &&
      this.positions[0] != ""
    ) {
      console.log("You win");
      return this.positions[0];
    }
    if (
      this.positions[3] == this.positions[4] &&
      this.positions[4] == this.positions[5] &&
      this.positions[3] == this.positions[5] &&
      this.positions[3] != ""
    ) {
      console.log("You win!");
      return this.positions[3];
    }
    if (
      this.positions[1] == this.positions[4] &&
      this.positions[4] == this.positions[7] &&
      this.positions[1] == this.positions[7] &&
      this.positions[1] != ""
    ) {
      console.log("You win!");
      return this.positions[1];
    }
    if (
      this.positions[0] == this.positions[3] &&
      this.positions[3] == this.positions[6] &&
      this.positions[0] == this.positions[6] &&
      this.positions[0] != ""
    ) {
      console.log("You win!");
      return this.positions[0];
    }
    if (
      this.positions[2] == this.positions[5] &&
      this.positions[5] == this.positions[8] &&
      this.positions[2] == this.positions[8] &&
      this.positions[2] != ""
    ) {
      console.log("You win!");
      return this.positions[2];
    }
    if (
      this.positions[6] == this.positions[7] &&
      this.positions[7] == this.positions[8] &&
      this.positions[6] == this.positions[8] &&
      this.positions[6] != ""
    ) {
      console.log("You win!");
      return this.positions[6];
    }
    return false;
  };
  const arefreecells = () => {
    for (let index = 0; index < this.positions.length; index++) {
      const element = this.positions[index];
      if (element == "") {
        return true;
      }
    }
  };

  return {
    display,
    asignarValor,
    winningCombination,
    emptyboard,
    arefreecells,
  };
  // eslint-disable-next-line no-unreachable
};

const Game = () => {
  this.board = board();
  this.current_player = "X";
  this.gameactive = true;

  const restart = () => {
    this.board.emptyboard();
    this.board.display();
    let div = document.getElementById("gameover");
    div.hidden = true;
  };
  const play = (position) => {
    //copiar la funcion de player game pero cambiar a this.board y this.current_player
    if (this.gameactive == false) {
      alert("The game is over, please restart game");
      return;
    }
    if (this.board.asignarValor(position, this.current_player) == false) {
      alert("occupied cell");
      return;
    }
    this.board.display();
    let winner = this.board.winningCombination();
    if (winner != false) {
      let div = document.getElementById("gameover");
      div.hidden = false;
      this.gameactive = false;
      alert("The winner is " + winner);
    } else {
      if (!myboard.arefreecells()) {
        let div = document.getElementById("gameover");
        div.hidden = false;
        this.gameactive = false;
      }
    }

    if (this.current_player == "X") {
      this.current_player = "O";
    } else {
      this.current_player = "X";
    }
  };

  return {
    restart,
    play,
  };
};
//crear una variable game
const mygame = Game();
const myboard = board();
//let current_player = "o";

const restart = () => {
  mygame.restart();
};
//
function playerChoice(position) {
  mygame.play(position);
}
