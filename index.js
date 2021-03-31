var playSpace = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

/* tetramino[w][r][y][x]
w - номер фигуры
r - поворот фигуры*/
const tetramino = [
  [
    [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 1, 0]
    ],
    [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0]
    ],
    [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0]
    ]
  ],
  [
    [
      [1, 0, 0],
      [1, 1, 1],
      [0, 0, 0]
    ],
    [
      [0, 1, 1],
      [0, 1, 0],
      [0, 1, 0]
    ],
    [
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 1]
    ],
    [
      [0, 1, 0],
      [0, 1, 0],
      [1, 1, 0]
    ]
  ],
  [
    [
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 0]
    ],
    [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 1]
    ],
    [
      [0, 0, 0],
      [1, 1, 1],
      [1, 0, 0]
    ],
    [
      [1, 1, 0],
      [0, 1, 0],
      [0, 1, 0]
    ]
  ],
  [
    [
      [1, 1],
      [1, 1]
    ]
  ],
  [
    [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0]
    ],
    [
      [0, 1, 0],
      [0, 1, 1],
      [0, 0, 1]
    ],
    [
      [0, 0, 0],
      [0, 1, 1],
      [1, 1, 0]
    ],
    [
      [1, 0, 0],
      [1, 1, 0],
      [0, 1, 0]
    ]
  ],
  [
    [
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 0]
    ],
    [
      [0, 1, 0],
      [0, 1, 1],
      [0, 1, 0]
    ],
    [
      [0, 0, 0],
      [1, 1, 1],
      [0, 1, 0]
    ],
    [
      [0, 1, 0],
      [1, 1, 0],
      [0, 1, 0]
    ]
  ],
  [
    [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0]
    ],
    [
      [0, 0, 1],
      [0, 1, 1],
      [0, 1, 0]
    ],
    [
      [0, 0, 0],
      [1, 1, 0],
      [0, 1, 1]
    ],
    [
      [0, 1, 0],
      [1, 1, 0],
      [1, 0, 0]
    ]
  ]
]

const TSIZE = 25;
const FPS = 30;

var TETRNOW = false;
var SPEED = 30;
var SCORE = 0;
var LEVEL = 0;
var COLOR = "#FFFFFF";
var HOLD = 0;

var TETR_RIGHT = false;
var TETR_LEFT = false;
var TETR_DOWN = false;

var canv = document.getElementById("gameCanvas");
var ctx = canv.getContext("2d");

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

setInterval(update, 1000 / FPS);

function keyDown(kpd) {
  switch(kpd.keyCode) {
    case 37:
      TETR_LEFT = true;
      break;
    case 39:
      TETR_RIGHT = true;
      break;
    case 40:
      TETR_DOWN = true;
      break;
    }
    HOLD = 1;
}

function keyUp(kpu) {
  switch(kpu.keyCode) {
    case 37:
      TETR_LEFT = false;
      break;
    case 39:
      TETR_RIGHT = false;
      break;
    case 40:
      TETR_DOWN = false;
      break;
    }
    HOLD = 0;
}

function update() {
  if(HOLD == 1 || (HOLD > 10)) move();

  if(HOLD > 0) HOLD++;
  draw(COLOR);
}

function move(){
  if(TETR_RIGHT && !TETR_LEFT) movingRight();
  if(TETR_LEFT && !TETR_RIGHT) movingLeft();
}

function movingRight(){
  let canMoveRight = true;
  for(let y = 19; y >= 0; y--){
    for(let x = 9; x >= 0; x--){
      if(playSpace[y][x] == 1) {
        if(x == 9 || playSpace[y][x+1] > 1) canMoveRight = false;
        break;
      }
    }
  }

  if(canMoveRight){
    for(let y = 19; y >= 0; y--){
      for(let x = 9; x >= 0; x--){
        if(playSpace[y][x] == 1 && playSpace[y][x+1] == 0){
          playSpace[y][x] = 0;
          playSpace[y][x+1] = 1;
        }
      }
    }
  }
}

function movingLeft(){
  let canMoveLeft = true;
  for(let y = 19; y >= 0; y--){
    for(let x = 0; x < 10; x++){
      if(playSpace[y][x] == 1) {
        if(x == 0 || playSpace[y][x-1] > 1) canMoveLeft = false;
        break;
      }
    }
  }

  if(canMoveLeft){
    for(let y = 19; y >= 0; y--){
      for(let x = 0; x < 10; x++){
        if(playSpace[y][x] == 1 && playSpace[y][x-1] == 0){
          playSpace[y][x] = 0;
          playSpace[y][x-1] = 1;
        }
      }
    }
  }
}

function addNewTetr(){

}

//#DD2E44 - red 2
//#E9896A - brown 3
//#AA8ED6 - purple 4
//#FDCB58 - yellow 5
//#78B159 - green 6
//#F4900C - orange 7
//#55ACEE - blue 8
function draw(tetraminoColor) {
  for(let y = 0; y < 20; y++){
    for(let x = 0; x < 10; x++){
      switch(playSpace[y][x]) {
        case 0: drawColor(x, y, "#000000"); break;
        case 1: drawColor(x, y, tetraminoColor); break;
        case 2: drawColor(x, y, "#DD2E44"); break;
        case 3: drawColor(x, y, "#E9896A"); break;
        case 4: drawColor(x, y, "#AA8ED6"); break;
        case 5: drawColor(x, y, "#FDCB58"); break;
        case 6: drawColor(x, y, "#78B159"); break;
        case 7: drawColor(x, y, "#F4900C"); break;
        case 8: drawColor(x, y, "#55ACEE"); break;
        default: drawColor(x, y, "#FFFFFF"); break;
      }
    }
  }
}

function drawColor(x, y, color) {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.fillRect(TSIZE*x, TSIZE*y, TSIZE, TSIZE)
  ctx.fill();
  ctx.closePath();
}
