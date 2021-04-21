var playSpace = [
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

const TETR_SIZE = [4, 3, 3, 2, 3, 3, 3]
const TETR_COLOR = ["#DD2E44", "#E9896A", "#F4900C", "#FDCB58", "#AA8ED6", "#55ACEE", "#78B159"]
const TETR_SPEED = [50, 45, 40, 35, 30, 27, 24, 21, 18, 15, 13, 11, 9, 8, 7, 6];
const TETR_LINES = [50, 90, 120, 140, 150]

const SQUARE_SIZE = 25;
const FPS = 120;

//states
var SCORE = 0;
var LEVEL = 0;
var LINES = 0;
var SPEED = 60;
var TETROMINS = 0;
var TETRIS = 0;

var GAME = false;
var GAME_OVER = false;
var RYTHM_SPEED = 60;
var NEWTETR = true;
var DOWN_SPEED = 0;
var HOLD = 0;
var DRAW_X = 3;
var DRAW_Y = 0;
var ADD_SCORE = 0;
var CHECKED = false;

var PREV_TETR;
var NEXT_TETR = -1;
var TETR_RIGHT = false;
var TETR_LEFT = false;
var TETR_ROTATE_R = false;
var TETR_ROTATE_L = false;
var TETR_ROTATE_NOW = 0;
var TETR_ROTATED_R = false;
var TETR_ROTATED_L = false;
var TETR_NOW = 0;
var TETR_DOWN_PRESS = false;

var canv = document.getElementById("gameCanvas");
var ctx = canv.getContext("2d");

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

setInterval(update, 1000 / FPS);


//Z = 90
//X = 88
function keyDown(kpd) {
  switch(kpd.keyCode) {
    case 37:
      TETR_LEFT = true;
      break;
    case 39:
      TETR_RIGHT = true;
      break;
    case 40:
      if(!TETR_DOWN_PRESS) DOWN_SPEED = SPEED-5;
      TETR_DOWN_PRESS = true;
      break;
    case 32:
      if (!GAME || GAME_OVER){
        GAME = true;
        GAME_OVER = false;

        for(let y = 0; y < 20; y++){
          for(let x = 0; x < 10; x++){
            playSpace[y][x] = 0;
          }
        }

        NEXT_TETR = -1;
        TETR_RIGHT = false;
        TETR_LEFT = false;
        TETR_ROTATE_R = false;
        TETR_ROTATE_L = false;
        TETR_ROTATE_NOW = 0;
        TETR_ROTATED_R = false;
        TETR_ROTATED_L = false;
        TETR_NOW = 0;

        RYTHM_SPEED = 60;
        NEWTETR = true;
        DOWN_SPEED = 0;
        HOLD = 0;
        DRAW_X = 3;
        DRAW_Y = 0;
        ADD_SCORE = 0;
        CHECKED = false;

        SCORE = 0;
        LEVEL = 0;
        LINES = 0;
        SPEED = 60;
        TETROMINS = 0;
        TETRIS = 0;
      }
      break;
    case 88:
      TETR_ROTATE_R = true;
      break;
    case 90:
      TETR_ROTATE_L = true;
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
      TETR_DOWN_PRESS = false;
      DOWN_SPEED = 0;
      break;
    case 88:
      TETR_ROTATED_R = false;
      TETR_ROTATE_R = false;
      break;
    case 90:
      TETR_ROTATED_L = false;
      TETR_ROTATE_L = false;
      break;
    }
    HOLD = 0;
}

function update() {
  ctx.fillStyle = "black"
  ctx.fillRect(0, 0, canv.width, canv.height);

  if(GAME && !GAME_OVER){
    ctx.fillStyle = "white"
    ctx.fillRect(45, 45, 260, 510);
    if(NEWTETR) addNewTetr();

    if(HOLD == 1 || (HOLD > 20 && HOLD % 8 == 0)) move();
    if(HOLD > 0) HOLD++;

    if(LINES > TETR_LINES[LEVEL] && LEVEL < 5){
      SPEED = TETR_SPEED[LEVEL];
      LEVEL++;
    }

    if(LEVEL >= 5){
      if(LINES >= 150 + 10*(LEVEL-4)) {
        SPEED = TETR_SPEED[LEVEL];
        LEVEL++
      }
    }

    if(RYTHM_SPEED > SPEED - DOWN_SPEED){
      if(DOWN_SPEED != 0) ADD_SCORE++;
      down();
      RYTHM_SPEED = 0;
    }
    RYTHM_SPEED++;
    draw();
  } else if (!GAME_OVER && !GAME) {
    ctx.fillStyle = "white"
    ctx.font = "24px ArcadeFont";
    ctx.fillText(`Press Enter to start.`, 50, 300);
  } else if (GAME_OVER && GAME){
    let score = pad(SCORE, 6)

    if (!CHECKED){
      draw();

    } else {
      ctx.fillStyle = "#DD2E44"
      ctx.font = "30px ArcadeFont";
      ctx.fillText(`GAME OVER`, 155, 260);

      ctx.fillStyle = "white"
      ctx.font = "24px ArcadeFont";
      ctx.fillText(score, 215, 295);

      ctx.fillStyle = "grey"
      ctx.fillText(`Press Enter to retry.`, 50, 550);
    }
  }
}

function move(){
  if(TETR_RIGHT && !TETR_LEFT) movingRight();
  if(TETR_LEFT && !TETR_RIGHT) movingLeft();
  if(TETR_ROTATE_R && !TETR_ROTATED_R && TETR_NOW != 3 && !TETR_ROTATE_L) rotateRight();
  if(TETR_ROTATE_L && !TETR_ROTATED_L && TETR_NOW != 3 && !TETR_ROTATE_R) rotateLeft();
}

function down(){
  let canMoveDown = true;
  for(let x = 0; x < 10; x++){
    for(let y = 19; y >= 0; y--){
      if(playSpace[y][x] == 1){
        if(y == 19 || playSpace[y+1][x] > 1) canMoveDown = false;
      }
    }
  }

  if(canMoveDown){
    for(let x = 0; x < 10; x++){
      for(let y = 19; y >= 0; y--){
        if(playSpace[y][x] == 1){
          playSpace[y+1][x] = 1;
          playSpace[y][x] = 0;
        }
      }
    }
    DRAW_Y++;
  } else {
    let colorPlaySpace = TETR_NOW + 2;
    for(let y = 19; y >= 0; y--){
      for(let x = 0; x < 10; x++){
        if(playSpace[y][x] == 1) playSpace[y][x] = colorPlaySpace
      }
    }
    NEWTETR = true;
    TETROMINS++;
    clearLines();
  }
}

function clearLines(){
  let canClear;
  let linesNow = 0;

  for(let y = 19; y >= 0; y--){
    canClear = true;
    for(let x = 0; x < 10; x++)
      if(playSpace[y][x] == 0) canClear = false;

    if(canClear){
      for(let x = 0; x < 10; x++) playSpace[y][x] = 0;

      for(let cy = y-1; cy >= 0; cy--){
        for(let x = 0; x < 10; x++){
          playSpace[cy+1][x] = playSpace[cy][x];
          playSpace[cy][x] = 0;
        }
      }
      linesNow++;
      LINES++;
      y = 20;
    }
  }

  switch(linesNow){
    case 1: SCORE += 100 + Math.floor(100 * (LEVEL/10)); break;
    case 2: SCORE += 300 + Math.floor(300 * (LEVEL/10)); break;
    case 3: SCORE += 700 + Math.floor(700 * (LEVEL/10)); break;
    case 4: SCORE += 1500 + Math.floor(1500 * (LEVEL/10)); TETRIS++; break;
  }
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
    if(DRAW_X < 10 - TETR_SIZE[TETR_NOW]) DRAW_X++;
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
    if(DRAW_X != 0) DRAW_X--;
  }
}

function rotateRight(){
  let canRotateRight = true;
  let rotate = TETR_ROTATE_NOW + 1;
  if(rotate > 3) rotate = 0;
  for(let y = 0; y < TETR_SIZE[TETR_NOW]; y++){
    for(let x = 0; x < TETR_SIZE[TETR_NOW]; x++){
      if(tetramino[TETR_NOW][rotate][y][x] == 1) {
        if(playSpace[y+DRAW_Y][x+DRAW_X] > 1) canRotateRight = false;
      }
    }
  }

  if(canRotateRight){
    for(let y = 0; y < TETR_SIZE[TETR_NOW]; y++){
      for(let x = 0; x < TETR_SIZE[TETR_NOW]; x++){
        if(playSpace[y+DRAW_Y][x+DRAW_X] == 1) playSpace[y+DRAW_Y][x+DRAW_X] = 0;
      }
    }

    if(TETR_ROTATE_NOW + 1 > 3) TETR_ROTATE_NOW = 0;
    else TETR_ROTATE_NOW++;

    for(let y = 0; y < TETR_SIZE[TETR_NOW]; y++){
      for(let x = 0; x < TETR_SIZE[TETR_NOW]; x++){
        if(tetramino[TETR_NOW][TETR_ROTATE_NOW][y][x] == 1) {
          playSpace[y+DRAW_Y][x+DRAW_X] = tetramino[TETR_NOW][TETR_ROTATE_NOW][y][x];
        }
      }
    }
  }
  TETR_ROTATED_R = true;
}

function rotateLeft(){
  let canRotateLeft = true;
  let rotate = TETR_ROTATE_NOW - 1;
  if(rotate < 0) rotate = 3;
  for(let y = 0; y < TETR_SIZE[TETR_NOW]; y++){
    for(let x = 0; x < TETR_SIZE[TETR_NOW]; x++){
      if(tetramino[TETR_NOW][rotate][y][x] == 1) {
        if(playSpace[y+DRAW_Y][x+DRAW_X] > 1) canRotateLeft = false;
      }
    }
  }

  if(canRotateLeft){
    for(let y = 0; y < TETR_SIZE[TETR_NOW]; y++){
      for(let x = 0; x < TETR_SIZE[TETR_NOW]; x++){
        if(playSpace[y+DRAW_Y][x+DRAW_X] == 1) playSpace[y+DRAW_Y][x+DRAW_X] = 0;
      }
    }

    if(TETR_ROTATE_NOW - 1 < 0) TETR_ROTATE_NOW = 3;
    else TETR_ROTATE_NOW--;

    for(let y = 0; y < TETR_SIZE[TETR_NOW]; y++){
      for(let x = 0; x < TETR_SIZE[TETR_NOW]; x++){
        if(tetramino[TETR_NOW][TETR_ROTATE_NOW][y][x] == 1) {
          playSpace[y+DRAW_Y][x+DRAW_X] = tetramino[TETR_NOW][TETR_ROTATE_NOW][y][x];
        }
      }
    }
  }
  TETR_ROTATED_L = true;
}

function addNewTetr(){
  if(NEXT_TETR < 0) newNextTetr();
  if(ADD_SCORE) SCORE += ADD_SCORE - 1;
  DOWN_SPEED = 0;
  ADD_SCORE = 0;
  DRAW_X = 3;
  DRAW_Y = 0;

  PREV_TETR = TETR_NOW;
  TETR_NOW = NEXT_TETR;
  NEWTETR = false;
  let extraX = 0;
  let TetrRotate = 0;
  if(TETR_NOW != 3) {
    TetrRotate = getRandomNum(4);
  } else extraX = 1;

  for(let y = 0; y < TETR_SIZE[TETR_NOW]; y++){
    for(let x = 0; x < TETR_SIZE[TETR_NOW]; x++){
      if(tetramino[TETR_NOW][TetrRotate][y][x] == 1) {
        if(playSpace[y][x+3+extraX] != 0) GAME_OVER = true;
        playSpace[y][x+3+extraX] = tetramino[TETR_NOW][TetrRotate][y][x];
      }
    }
  }

  newNextTetr();
  TETR_ROTATE_NOW = TetrRotate;
}

function newNextTetr(){
  let TetrNum;
  do {
    TetrNum = getRandomNum(7);
  } while(TetrNum == TETR_NOW || TetrNum == PREV_TETR);

  NEXT_TETR = TetrNum;
}

function draw() {
  drawText();
  for(let y = 0; y < TETR_SIZE[NEXT_TETR]; y++){
    for(let x = 0; x < TETR_SIZE[NEXT_TETR]; x++){
      if(tetramino[NEXT_TETR][0][y][x] == 1) drawColor(x, y, TETR_COLOR[NEXT_TETR], NEXT_TETR+2, 12.4, 13)
    }
  }

  for(let y = 0; y < 20; y++){
    for(let x = 0; x < 10; x++){
      switch(playSpace[y][x]) {
        case 0: drawColor(x, y, "#000000"); break;
        case 1: drawColor(x, y, TETR_COLOR[TETR_NOW], 1); break;
        case 2: drawColor(x, y, "#DD2E44", 2); break;
        case 3: drawColor(x, y, "#E9896A", 3); break;
        case 4: drawColor(x, y, "#F4900C", 4); break;
        case 5: drawColor(x, y, "#FDCB58", 5); break;
        case 6: drawColor(x, y, "#AA8ED6", 6); break;
        case 7: drawColor(x, y, "#55ACEE", 7); break;
        case 8: drawColor(x, y, "#78B159", 8); break;
        default: drawColor(x, y, "#FFFFFF"); break;
      }
    }
  }
}

function drawColor(x, y, color, tetr, extraX, extraY) {
  tetr = tetr || 0;
  extraX = extraX || 0;
  extraY = extraY || 0;

  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.fillRect(SQUARE_SIZE*(x+2+extraX), SQUARE_SIZE*(y+2+extraY), SQUARE_SIZE, SQUARE_SIZE)
  ctx.fillStyle = "#FFFFFF";
  if(tetr != 0) {
    ctx.fillRect(SQUARE_SIZE*(x+2+extraX), SQUARE_SIZE*(y+2+extraY), SQUARE_SIZE-20, SQUARE_SIZE-20)
    if((tetr == 1 && (TETR_NOW == 0 || TETR_NOW == 3 || TETR_NOW == 5)) ||
       (tetr == 2 || tetr == 5 || tetr == 7)){
      ctx.fillRect(SQUARE_SIZE*(x+2+extraX)+5, SQUARE_SIZE*(y+2+extraY)+5, SQUARE_SIZE-10, SQUARE_SIZE-10);
    } else if ((tetr == 1 && (TETR_NOW == 1 || TETR_NOW == 2 || TETR_NOW == 4 || TETR_NOW == 6)) ||
               (tetr == 3 || tetr == 4 || tetr == 6 || tetr == 8)){
      ctx.fillRect(SQUARE_SIZE*(x+2+extraX)+5, SQUARE_SIZE*(y+2+extraY)+5, SQUARE_SIZE-21, SQUARE_SIZE-21);
      ctx.fillRect(SQUARE_SIZE*(x+2+extraX)+7, SQUARE_SIZE*(y+2+extraY)+5, SQUARE_SIZE-18.5, SQUARE_SIZE-21);
      ctx.fillRect(SQUARE_SIZE*(x+2+extraX)+5, SQUARE_SIZE*(y+2+extraY)+7, SQUARE_SIZE-21, SQUARE_SIZE-18.5);
    }
  }
  ctx.fill();
  ctx.closePath();
}

function drawText(){
  let score = pad(SCORE, 6);

  ctx.fillStyle = "white"
  ctx.font = "30px ArcadeFont";
  ctx.fillText(`Score: `, 350, 90);
  ctx.fillText(score, 350, 125);

  ctx.font = "24px ArcadeFont";
  ctx.fillText('LINES:' + LINES, 350, 170)
  ctx.fillText(`TRMS:` + TETROMINS, 350, 196);
  ctx.fillText('TRTS:' + TETRIS, 350, 222);
  ctx.fillText('LVL:' + (LEVEL+1), 350, 248)

  ctx.fillText('Next:', 350, 350)
}

function getRandomNum(max) {
  return Math.floor(Math.random() * max);
}

function pad(n, width){
  let z = 0;
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
