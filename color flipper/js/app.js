const colors = ["green","red","rgba(133,122,200)","blue"]
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
// const content = document.querySelector(".content")

btn.addEventListener('click',function(){
    //get random number between 0 and 3
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
})

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);//times by colors ko length because otherwise 0 to 1 ko bichha ko value matra auxa.
}
//We used floor function because decimal ko value lai lidaina yo system le , non-decimal number hunu parxa



