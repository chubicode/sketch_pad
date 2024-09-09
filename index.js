

function createBoard(size){
  let board = document.querySelector(".containers");
  board.style.gridTemplateColums=`repeat(${size}, 1fr)`;
  board.style.gridTemplateRows="repeat(16, 1fr)";
}