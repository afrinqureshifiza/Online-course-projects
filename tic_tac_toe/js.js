//elements
const boxs=document.querySelectorAll('.box')
const gameInfo=document.querySelector('.game-info')
const newButton=document.querySelector('.btn')

//variables
let currentPlayer
let gameGrid           //grid status
const winningPosition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function init(){
   currentPlayer='X'  
   gameGrid=["","","","","","","","",""]
   newButton.classList.remove('active')
   gameInfo.innerText=`Current Player - ${currentPlayer}`
   boxs.forEach((box,index)=>{
    box.innerText=""
    boxs[index].style.pointerEvents='all'
    // box.classList.remove('win')
    box.classList=`box box${index+1}`
   })
}

init()

boxs.forEach((box,index) => {
    box.addEventListener('click',()=>{
        handleClick(index)
    })
});

function handleClick(index){
    if(gameGrid[index]===""){
       boxs[index].innerText=currentPlayer   //ui update
       gameGrid[index]=currentPlayer         //js update
       boxs[index].style.pointerEvents='none'
       swapPalyer()
       checkGamewinning()
    }
}

function swapPalyer(){
    if(currentPlayer==='X'){
        currentPlayer='O'
    }
    else{
        currentPlayer='X'
    }
    gameInfo.innerText=`Current Player - ${currentPlayer}`
}

function checkGamewinning(){
    let winner=''

    winningPosition.forEach((pos)=>{
       if(gameGrid[pos[0]]!="" &&  gameGrid[pos[1]]!="" && gameGrid[pos[2]]!=""
       && gameGrid[pos[0]]===gameGrid[pos[1]] && gameGrid[pos[1]]===gameGrid[pos[2]]){

        winner=gameGrid[pos[0]]

        gameInfo.innerText=`Winner is - ${winner}`
        boxs[pos[0]].classList.add('win')
        boxs[pos[1]].classList.add('win')
        boxs[pos[2]].classList.add('win')
        newButton.classList.add('active')

        boxs.forEach((box)=>{
            box.style.pointerEvents='none'
        })
       } 
    })

    //game tie
    let empty=false
    gameGrid.forEach((value)=>{
      if(value===""){
        empty=true
      }
    })
    if(empty==false){
     gameInfo.innerText="Game Tie"
     newButton.classList.add('active')
    }

}

newButton.addEventListener('click',init)
