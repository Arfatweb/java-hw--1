
// *SIDEBAR START

let menuBtn = document.querySelector(`nav .menuBtn`)
let sidebar =  document.querySelector(`.sidebar`)


function showSidevar(){
  sidebar.classList.add(`show`);
  
}

menuBtn.addEventListener(`click`, showSidevar);

let crossBtn = document.querySelector(`.cross`)






function hideSidebar(event){
    console.log(event.target.classList.contains(`cross`));
    if (
     event.target.classList.contains(`cross`)||
    event.target.classList.contains(`sidebar`) 
    )

  {
    sidebar.classList.remove(`show`);
  }
    

}






crossBtn.addEventListener(`click`, hideSidebar);
sidebar.addEventListener(`click`, hideSidebar);
// *SIDEBAR AND







let passwordBtn = document.querySelector('.passwordBtn');
let passwordInput = document.querySelector('.inputWrapper input');

function showHidePassword() {

    if(passwordInput.type== `password`){
        passwordInput.type=`text`;
        passwordBtn.innerHTML=`<i class="bi bi-eye-fill"></i>`;
    }

    else{
        passwordInput.type= `password`;
        passwordBtn.innerHTML=`<i class="bi bi-eye-slash"></i>`;
        
    }
    }


passwordBtn .addEventListener("click", showHidePassword);


let submitBtn = document.querySelector(`from button`)


function submitFrom() {
if(passwordInput.value.length > 0){
    submitBtn.innerHTML=`succes<i class="bi bi-check-all"></i>`;
}

else{
    submitBtn.innerHTML=`Error<i class="bi bi-exclamation-circle-fill"></i>`;
}

}


submitBtn.addEventListener(`click`, submitFrom);