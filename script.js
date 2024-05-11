
const burgerlist = document.getElementById("burgerlist");

const navbar = document.getElementById("navbar");

const input = document.getElementById('input');

const select = document.getElementById('select');

const form = document.getElementById('form');

const errorMessage =document.getElementById('errorMessage');

const successMessage =document.getElementById('successMessage');



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
    if( input.value == "" || input.value == null ){
        errorMessage.innerText = "Please fill out this field";
        // alert('Please enter a valid name');
        e.preventDefault() // to prevent the submission if the input is empty
    }// else{
    //     successMessage.innerText = "great"
    // };

    
})
