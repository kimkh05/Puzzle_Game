const container = document.querySelector(".container")
const startButton  = document.querySelector(".startButton")
const gmaeText = document.querySelector(".gameText")
const moveTime  = document.querySelector(".moveTime")


const tileCount = 16;

let tiles = [];

const dragged = {
  el:null,
  index:null, 
}
setGame();

//function

function setGame(){
  container.innerHTML = "";
  tiles = createImgTiles(); // 함수 실행
  shuffle(tiles).forEach(tile => container.appendChild(tile))
  setTimeout(()=>{
    container.innerHTML = "";
    shuffle(tiles).forEach(tile => container.appendChild(tile))
  }, 2000)
}

function createImgTiles(){
  const tempArray = [];
  Array(tileCount).fill().forEach((_, i) => {
    const li = document.createElement("li");
    li.setAttribute('data-index', i)
    li.setAttribute('draggable','true');
    li.classList.add(`list_${i}`);
    tempArray.push(li)
  })
  return tempArray;
}

function shuffle(array){
  let index = array.length -1;
  while(index > 0){
    const randomIndex = Math.floor(Math.random()*(index+1));
    [array[index], array[randomIndex]] = [array[randomIndex], array[index]]
    index--;
  }
  return array;
}
//events
container.addEventListener('dragstart', e =>{
  const obj = e.target
  dragged.el = obj;
  dragged.class = obj.className;
  dragged.index = [...obj.parentNode.children].indexOf(e.target);
})
container.addEventListener('dragover', e =>{
  e.preventDefault()
})
container.addEventListener('drop', e =>{
  const obj = e.target;

  if(obj.className !== dragged.class){
    let originPlace;
    let isLast = false;

    if(dragged.el.nextSibling){
      originPlace = dragged.el.nextSibling
    }
    else {
     originPlace = dragged.el.previousSibling
     isLast = true;
    }
    const droppedIndex = [...obj.parentNode.children].indexOf(obj);
    dragged.index > droppedIndex ? obj.before(dragged.el) : obj.after(dragged.el)
    isLast ? originPlace.after(obj) : originPlace.before(obj);
  }
})