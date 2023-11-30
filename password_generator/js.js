//elements
const inputSlider=document.querySelector("[data-lengthSlider]")
const lengthDisplay=document.querySelector("[data-lengthNumber]")
const passwordDisplay=document.querySelector("[data-passwordDisplay]")
const copyBtn=document.querySelector("[data-copy]")
const copyMsg=document.querySelector("[data-copyMsg]")
const uppercaseCheck=document.querySelector("#uppercase")
const lowercaseCheck=document.querySelector("#lowercase")
const numberCheck=document.querySelector("#numbers")
const symbolCheck=document.querySelector("#symbols")
const indicator=document.querySelector("[data-indicator]")
const generateBtn=document.querySelector(".generateButton")
const allCheckbox=document.querySelectorAll("input[type=checkbox]")

//initialise variable
let password="";
let passwordlength=10;
let checkCount=0;
handleSlider()
const symbol="`~!@#$%^&*()-_=+[]{}\|;:',./?><"
//set circle color to gray

//functions

//set password length
function handleSlider(){
    inputSlider.value=passwordlength;   
    lengthDisplay.innerText=passwordlength;
    //aage karna h
}

function setIndicator(color){
    indicator.style.backgroundColor=color; 
    indicator.style.boxShadow="3px 3px color"; 
}

function getRndInteger(min,max){
    return Math.floor(Math.random()*(max-min))+min
}

function generateRndNumber(){
    return getRndInteger(0,9)
}

function generateRndUpparCase(){
    return String.fromCharCode(getRndInteger(65,91))
}

function generateRndLowerCase(){
    return String.fromCharCode(getRndInteger(97,123))
}

function generateRndSymbol(){
    return symbol.charAt(getRndInteger(0,symbol.length))
}

function calculateStrength(){
    let hasUppar=false; 
    let hasLower=false; 
    let hasNumber=false; 
    let hasSymbol=false; 

    if(uppercaseCheck.checked) hasUppar=true;
    if(lowercaseCheck.checked) hasLower=true;
    if(numberCheck.checked) hasNumber=true;
    if(symbolCheck.checked) hasSymbol=true;

    if(hasUppar && hasLower && (hasNumber || hasSymbol) && passwordlength>=5){
        setIndicator('#f00')
    }
    else if((hasUppar || hasLower) && (hasNumber || hasSymbol) && passwordlength>=8){
        setIndicator('#f00')
    }
    else{
        setIndicator('#0f0')
    }
}

async function copyContent(){
    try{
      await navigator.clipboard.writeText(passwordDisplay.value) 
      copyMsg.innerText="Copied"
    }
    catch(e){
      copyMsg.innerText="Failed"
    }
    copyMsg.classList.add('active')
     setTimeout(()=>{
        copyMsg.classList.remove('active')
    },2000)
}

function shufflePassword(){
    let array=Array.from(password)
    //Fisher Yates Method
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    let str = "";
    array.forEach((el) => (str += el));
    return str;
}
//add event listners
function handleCheckBoxChange(){
   checkCount=0;
   allCheckbox.forEach((checkbox)=>{
    if(checkbox.checked){
        checkCount++
    }
   })
   
   //special condition
   if(passwordlength<checkCount){
    passwordlength=checkCount
    handleSlider()
   }
}
allCheckbox.forEach((checkbox)=>{
  checkbox.addEventListener('change',handleCheckBoxChange)  
})

inputSlider.addEventListener('input',(e)=>{
   passwordlength=e.target.value;
   handleSlider();
})

copyBtn.addEventListener('click',()=>{
   if(passwordDisplay.value){
    copyContent();
   } 
})

generateBtn.addEventListener('click',()=>{
    //none of the checkbox selected
    if(checkCount<=0){
        alert('no box checked');
    }  
    if(passwordlength < checkCount){
        passwordlength=checkCount
        handleSlider()
    }
    //lets start the new password creation
    console.log('start')

    //remove old password
    password=""

    //lets put the stuff mentioned in checkboxes
    // if(uppercaseCheck.checked){
    //     password+=generateRndUpparCase()
    // }
    // if(lowercaseCheck.checked){
    //     password+=generateRndLowerCase()
    // }
    // if(numberCheck.checked){
    //     password+=generateRndNumber()
    // }
    // if(symbolCheck.checked){
    //     password+=generateRndSymbol()
    // }

    let funArray=[]
    if(uppercaseCheck.checked){
        funArray.push(generateRndUpparCase)
    }
    if(lowercaseCheck.checked){
        funArray.push(generateRndLowerCase)
    }
    if(numberCheck.checked){
        funArray.push(generateRndNumber)
    }
    if(symbolCheck.checked){
        funArray.push(generateRndSymbol)
    }

    //compulsary addition
    for(let i=0;i<funArray.length;i++){
       password+=funArray[i]() 
    }
    console.log('cumpulsary addition')

    //remaning addition
    for(let i=funArray.length; i<passwordlength; i++){
        let rndIndex=getRndInteger(0,funArray.length)
        console.log("randIndex" + rndIndex);
        password+=funArray[rndIndex]();
    }
    console.log('remaning')

    //shuffle the password
    password=shufflePassword()
    passwordDisplay.value=password
    console.log('shuffulinf')

    //clculate strength
    calculateStrength()

})