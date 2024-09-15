let weightInput=document.getElementById('weight')
let heightInput=document.getElementById('height')
let weightVal=document.getElementById('weight-val')
let heightVal=document.getElementById('height-val')
let resultElem=document.getElementById('result')
let categoryElem=document.getElementById('category')
let weightValue,heightValue,bmi
window.onload=function (){
    weightInput.value = '20'
    heightInput.value = '100'
}
function calculatorBMI(){
    weightValue = weightInput.value
    weightVal.innerText = `${weightValue} kg`
    heightValue = heightInput.value
    heightVal.innerText = `${heightValue} cm`
    weightValue = Number(weightValue)
    heightValue = Number(heightValue)/100
    bmi = (weightValue / (heightValue * heightValue)).toFixed(2)
    resultElem.innerText = String(bmi)
    bmi = Number(bmi)
    if (bmi <= 18.5){
        categoryElem.innerText = 'under weight'
    }else if ((bmi > 18.5) && (bmi <25)){
        categoryElem.innerText = 'normal'
    }else if ((bmi >= 25) && (bmi < 30)){
        categoryElem.innerText = 'over weight'
    }else if (bmi >= 30){
        categoryElem.innerText = 'obese'
    }

}
weightInput.addEventListener('input',function (){
    calculatorBMI()
})

heightInput.addEventListener('input',function (){
    calculatorBMI()
})
