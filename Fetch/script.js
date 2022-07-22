const btn = document.querySelector("[data-button]");
const catFactEl = document.querySelector("[data-cat-fact]");


const handleBtnClick = () => {
    const url = "https://catfact.ninja/fact";
    //fetch return to us a promise 
    fetch(url)
    //getting object type Response but we vannt get the json file 
    .then((res) => res.json())
    .then((data) => catFactEl.innerHTML= data.fact);
    
};
//defining async function
const handleBtnClickAsync = async () => {
    try {
    const url = "https://catfact.ninja/fact";
    const res = await fetch(url);
    const data = await res.json();
    catFactEl.innerHTML = data.fact;
    } catch (error) {
        console.log(error);
        
    } 
};

btn.onclick = handleBtnClick;


