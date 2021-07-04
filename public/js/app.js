const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageTwo = document.querySelector('#message-2');
const messageOne = document.querySelector('#message-1');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    const url = `/weather?address=${location}`
    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';
    fetch(url).then((response) => {
        (response).json().then((data) => {
            if (data.error){
           messageOne.textContent = data.error;
        }
       else{
           messageOne.textContent = data.location;
           messageTwo.textContent = data.forecast;
       }
   }) 
});  
})