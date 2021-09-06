const container = document.querySelector(".container")
const startButton  = document.querySelector(".startButton")
const gmaeText = document.querySelector(".gameText")
const moveTime  = document.querySelector("moveTime")

const tileCount = 16;

let tiles = [];

tiles = createImgTiles();

shuffle(tiles).forEach(tile=>{
  container.appendChild(tile)
})

function createImgTiles(){
  const tempArray = [];
  Array(tileCount).fill().forEach( (_, i)=>{
    const li = document.createElement("li");
    li.setAttribute(`data-index`, i)
    li.classList.add(`list${i}`);
    tempArray.push(li);
   })   
   return tempArray;
}

function shuffle(array){
   let index = array.length -1;
   while(index > 0){
     const randomIndex = Math.floor(Math.random()*(index+1));
     [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
      index--;
   }
   return array;
 }