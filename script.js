
const burgerlist = document.getElementById("burgerlist");
const navbar = document.getElementById("navbar");
burgerlist.addEventListener('click', () =>{
    console.log(navbar.style.display);
    if(navbar.style.display !== 'block'){
        navbar.style.display ='block';
        // burgerlist.style.display ='none';
    }else{
        navbar.style.display ='none';
        // burgerlist.style.display ='block';
    };
})
//     burgerlist.addEventListener("click", ()=>{
//         navbar.classList.toggle('hidden');
//     })
;