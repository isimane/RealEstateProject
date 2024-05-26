
const hamburgerlist = document.getElementById("burgerlist");

const navbar = document.getElementById("navbar");
const unshowlist = document.getElementById("unshowlist")

const input = document.getElementById('input');

const select = document.getElementById('select');

const form = document.getElementById('form');

const errorMessage =document.getElementById('errorMessage');

const successMessage =document.getElementById('successMessage');




hamburgerlist.addEventListener('click', () =>{
    console.log(navbar.style.display);

    if(navbar.style.display !== 'block'){
        navbar.style.display ='block';
        hamburgerlist.style.display ='none';
        unshowlist.style.display ='block';

    }
    else{
        navbar.style.display ='none';
        // hamburgerlist.style.display ='block';
    };
})

unshowlist.addEventListener('click', () =>{
    if(navbar.style.display == 'block'){
        navbar.style.display ='none';
        hamburgerlist.style.display ='block';
        unshowlist.style.display ='none';
 
    }else{
        navbar.style.display ='block';

 
    }
    // navbar.classList.toggle('hidden');
});
form.addEventListener('click', ()=>{
    input.classList.add('border-1','border-[#0000FF]');
        form.addEventListener('submit', (e)=>{
            let regex = /[a-z]/ig ;
            
            if(!input.value.trim() ){
                input.value.clear();
                errorMessage.innerText = "Please enter Your address!";
                input.classList.add('border-2','border-[#FF0000]')
                e.preventDefault() // to prevent the submission if the input is empty
            }
            else if(!regex.test(input.value)){
                errorMessage.innerText = "Please enter a valid address!"
                input.classList.add('border-2','border-[#FF0000]')
                e.preventDefault();
            }
            else{
                successMessage.innerText = ""
            };
        })
})