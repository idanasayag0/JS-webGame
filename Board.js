//getMonsterInPosition   , getItemInPosition

class boardSquare {
  constructor() {
    this.monserInSquare = null;
    this.itemInSquare = null;
    this.playerInSquare = null;
    this.endPosition = false;
  }
  isEmpty(x, y) {
    return (
      this.monsterInSquare == null &&
      this.itemInSquare == null &&
      this.playerInSquare == null
    );
  }
  getMonsterInSquare() {
    return this.monsterInSquare;
  }
  getItemInSquare() {
    return this.itemInSquare;
  }
  
  getPlayerInSquare() {
    return this.playerInSquare;
  }
}

class Board {
  constructor() {
    // this.board = new boardSquare()[25];
    // for (let i = 0; i < 25; i++) {
    //   this.board[i] = new boardSquare()[25];
    // }
    this.board = new Array(25);
    this.playerLocation = new Map();
    this.playerLocation.set("x", 0);
    this.playerLocation.set("y", 0);
  }
  generateBoard(player) {
    for (let i = 0; i < 25; i++) {
      this.board[i] = new Array(25);
    }

    for (let i = 0; i < 25; i++) {
      for (let j = 0; j < 25; j++) {
        this.board[i][j] = new boardSquare();
        let xID = i;
        let yID = j;
        if(xID < 10) xID = "0" + xID;
        if(yID < 10) yID = "0" + yID;
        gameWrapper.innerHTML += "<div class='square' id='square-" + xID + yID + "'></div>"
      }
    }
    document.getElementById("square-0000").classList.add("active");
    this.board[0][0].playerInSquare = player;
    this.board[24][24].endPosition = true;
    let monstersCNT = 0;
    let x;
    let y;
    for (let i = 0; i < 200; i++) {
      x = Math.floor(Math.random() * 25);
      y = Math.floor(Math.random() * 25);
      // console.log("random x: " + x + ", random y: " + y);
      if (
        !(x == 0 && y == 0) &&
        !(x == 24 && y == 24) &&
        this.board[x][y].isEmpty()
      ) {
        // const randomMonster = createRandomMonster();
        this.board[x][y].monsterInSquare = createRandomMonster();
        monstersCNT++;
        console.log("Monster created!");
        let xID = x;
        let yID = y;
        if(xID < 10) xID = "0" + xID;
        if(yID < 10) yID = "0" + yID;
        document.getElementById("square-" +xID+yID).classList.add("monster");
      }
    }
    let itemsCNT = 0;
    for (let i = 0; i < 100; i++) {
      let x = Math.floor(Math.random() * 25);
      let y = Math.floor(Math.random() * 25);
      if (
    !(x == 0 && y == 0) && !(x == 24 && y == 24) &&
        this.board[x][y].isEmpty()
      ) {
        this.board[x][y].itemInSquare = new Item();
        itemsCNT++;
        console.log("Item created!");
        let xID = x;
        let yID = y;
        if(xID < 10) xID = "0" + xID;
        if(yID < 10) yID = "0" + yID;
        document.getElementById("square-" +xID+yID).classList.add("item");
      }
    }
  }
  getMonsterInSquare(x, y) {
    return this.board[x][y].getMonsterInSquare();
  }
  getItemInSquare(x, y) {
    return this.board[x][y].getItemInSquare();
  }

  removeItemFromBoard(location) {
    this.board[parseInt(location.x)][parseInt(location.y)].itemInSquare = null;
  }
  removeMonsterFromBoard(location) {
    this.board[parseInt(location.x)][parseInt(location.y)].monsterInSquare = null;
  }
  removePlayerFromBoard(player) {
    this.board[this.playerLocation.get("x")][this.playerLocation.get("y")].playerInSquare = null;
    this.board[player.getLocation().x][player.getLocation().y].playerInSquare = player;
    this.playerLocation.set("x", player.getLocation().x);
    this.playerLocation.set("y", player.getLocation().y);
  }

  //printBoard to console
  printBoard() {
    for (let i = 0; i < 25; i++) {
      let st = "";
      for (let j = 0; j < 25; j++) {
        if (this.board[i][j].getPlayerInSquare() != null) {
          st += " | P |";
        } else if (this.board[i][j].getMonsterInSquare() != null) {
          st += " | M |";
        } else if (this.board[i][j].getItemInSquare() != null) {
          st += " | I |";
        }else if(this.board[i][j].endPosition) {
            st += "  🎁 ";
        }
         else {
          st += " | _ |";
        }
      }
      console.log(st);
      st = "";
      for (let k = 0; k < 25; k++) {
        st += " -----";
      }
      console.log(st);
    }
  }
}
