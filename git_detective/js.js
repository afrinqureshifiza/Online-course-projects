// variables
const searchbar=document.querySelector('.searchbar-container')
const profilecontainer=document.querySelector('.profile-container')
const root= document.documentElement.style

const get=(para)=>{
   return document.getElementById(`${para}`)
}
const input=get('input')
const submitbtn=get('submit')
const url="https://api.github.com/users/"

const avtar=get('avtar')
const username=get('name')
const userlink=get('user')
const userbio=get('bio')
const date=get('date')
const month=['Jan','Feb','March','April','May','June','July','Aug','Sep','Oct','Nov','Dec']
const repos=get('repos')
const followers=get('followers')
const following=get('following')
const userlocation=get('location')
const page=get('page')
const twitter=get('twitter')
const company=get('company')

const noresult=get('no-results')

//dark
const btnmode=get('btn-mode')
const modetext=get('mode-text')
const modeicon=get('mode-icon')
let darkmode=false


//eventListners
noresult.style.display='none'
submitbtn.addEventListener('click',()=>{
    if(input.value!==''){
        fetchUserData(url+input.value)
    }
})

input.addEventListener('keydown',(e)=>{
    if(e.key=='Enter'){
        if(input.value!==""){
            fetchUserData(url+input.value)
        }
    }
})

input.addEventListener('keydown',(e)=>{
   
       if(e.key!=='Enter'){
        noresult.style.display='none'
       }
    
})

btnmode.addEventListener('click',()=>{
    if(darkmode === false){
        console.log('inside if')
      darkmodeproperties()
    }
    else{
        console.log('inside else')
      lightmodeproperties()
    }
})


// functions
function fetchUserData(gitUrl){
    fetch(gitUrl)
    .then((res)=> res.json())
    .then(data=> {
        console.log(data)
        updateProfile(data)
    })
    .catch(err=> {
        throw err
    })
}

function updateProfile(data){
    if(data.message!== "Not Found"){
        noresult.style.display='none'

        function checkNULL(datapara, element){
           if(datapara == null || datapara==''){
            element.style.opacity=0.5
            element.previousElementSibling.style.opacity=0.5
            return true
           }
           else{
            return false
           }
        }

      avtar.src= `${data.avatar_url}`
      username.innerText= data.name===null ? data.login : data.name
      userlink.innerText= `@${data.login}`
      userlink.href= `${data.html_url}`
      userbio.innerText= data.bio===null ? 'This profile has no bio' : `${data.bio}`
      datesegment=data.created_at.split('T').shift().split('-')
      date.innerText= `Joined ${datesegment[2]} ${month[datesegment[1]-1]} ${datesegment[0]}`
      repos.innerText= data.public_repos
      followers.innerText= `${data.followers}`
      following.innerText= `${data.following}`
      userlocation.innerText= checkNULL(data.location, userlocation) ? 'Not Available' : data.location
      page.innerText= checkNULL(data.blog, page) ? 'Not Available' : data.blog
      page.href= data.blog===null ? '#' : data.blog
      twitter.innerText= checkNULL(data.twitter_username, twitter) ? 'Not Available' : data.twitter_username
      twitter.href= data.twitter_username===null ? '#' : `https://twitter.com/${data.twitter_username}`
      company.innerText= checkNULL(data.company, company) ? 'Not Available' : data.company
    }
    else{
      noresult.style.display='block'
    }
}

fetchUserData(url +'thepranaygupta')

//dark-light mode

function  darkmodeproperties(){
    // console.log('darkmodecalled')
   root.setProperty('--lm-bg','#141D2F')
   root.setProperty("--lm-bg-content", "#1E2A47");
   root.setProperty('--lm-text',"white")
   root.setProperty('--lm-text-alt', "white")
//    root.setProperty("--lm-shadow-xl", "rgba(70,88,109,0.15)");
   root.setProperty('--lm-icon-bg', "brightness(1000%)")
   darkmode=true
   modetext.innerText='LIGHT'
   modeicon.src='./assets/images/sun-icon.svg'
   localStorage.setItem('darkmode',true)
}

function lightmodeproperties(){
    // console.log('lightmodecalled')
    root.setProperty('--lm-bg',"#F6F8FF")
    root.setProperty("--lm-bg-content", "#FEFEFE");
    root.setProperty('--lm-text',"#4B6A9B")
    root.setProperty('--lm-text-alt', "#2B3442")
    // root.setProperty("--lm-shadow-xl", "rgba(70, 88, 109, 0.25)");
    root.setProperty('--lm-icon-bg', "brightness(100%)")
    darkmode=false
    modetext.innerText='DARK'
    modeicon.src='./assets/images/moon-icon.svg'
    localStorage.setItem('darkmode',false)
 }

// const prefersDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

let value=localStorage.getItem('darkmode')
if(value==null){
    console.log('null')
    localStorage.setItem('darkmode', darkmode)
    lightmodeproperties()
}
else if(value=="true"){
    console.log('true')
    darkmodeproperties()
}
else if(value=="false"){
    console.log('false')
    lightmodeproperties()
}
