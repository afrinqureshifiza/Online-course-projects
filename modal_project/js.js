let modalcomponent=document.querySelector('.modal');
let modalbg=document.querySelector('.modalbg');

function openModal(){
//  modalcomponent.classList.add("active");
 modalcomponent.style.transform='scale(1)';
 modalbg.style.opacity='1';
 modalbg.style.pointerEvents='auto';
//  modalbg.classList.add("bgactive")
// modalElement.className
}
function closeModal(){
    modalcomponent.style.transform='scale(0)';
    modalbg.style.opacity='0';
    modalbg.style.pointerEvents='none';
    // modalbg.classList.remove("bgactive")    
}