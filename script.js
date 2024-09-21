const myDiv=document.getElementById('main');
function getData(){
    fetch('https://api.quotable.io/random')
    .then((res)=>res.json())
    .then((data)=>displayData(data))
    .catch((err)=>console.log(err))    
}
getData()
function displayData(arr){
    console.log(arr)
        myDiv.textContent='';
            const newDiv=document.createElement('div');
            newDiv.classList.add('style');
            const quote=document.createElement('p')
            quote.textContent=arr.content;
            const auth=document.createElement('p')
            auth.textContent='Author: '+arr.author;
            newDiv.append(quote,auth)
            myDiv.appendChild(newDiv)
}