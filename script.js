const inputValue = document.getElementById("valor");
const convertedValue = document.getElementById("convertedValue");
const submitButton = document.getElementById('submit');
const moeda = document.getElementsByName('moeda')

submitButton.addEventListener('click', (Event) => {
    Event.preventDefault();
    converter();
})
function converter(){
    if(inputValue.value == ""){
        alert('tu é burro?')
    }
        for(let i = 0; i<moeda.length; i++){
            if(moeda[i].checked===true){
            if(moeda[i].id =="dolar")
            {
                convertedValue.innerText=''+(inputValue.value*5.51)
            }
            else if(moeda[i].id=="euro")
            {
                convertedValue.innerText=''+(inputValue.value*6.56)
            }
            else if(moeda[i].id=="kwanza")
            {
                convertedValue.innerText=''+(inputValue.value*0.0088)
            }
            else if(moeda[i].id=="yen")
            {
                convertedValue.innerText=''+(inputValue.value*0.051)
            }
        }
    }
    convertedValue.style.animationPlayState="running"
}