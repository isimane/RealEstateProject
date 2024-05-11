
const burgerlist = document.getElementById("burgerlist");

const navbar = document.getElementById("navbar");

const input = document.getElementById('input');

const select = document.getElementById('select');

const form = document.getElementById('form');

const errorMessage =document.getElementById('errorMessage')



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
form.addEventListener('submit', (e)=>{

    if(input.value === " "){
        errorMessage.innerText = 'Please enter a valid name';
        e.preventDefault();
    }
   
    
})
