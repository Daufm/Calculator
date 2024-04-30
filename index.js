const numberButtons = document.querySelectorAll('.num');
const equalButton = document.querySelector('.equal');
const inputField = document.getElementById('input');
const inputAc = document.querySelector('.rem');
const inputDel = document.querySelector('.del');
const inputSqr = document.querySelector('.sqr');

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    inputField.value += button.innerHTML;
  });
});

equalButton.addEventListener('click', () => {
  try {
    const result = eval(inputField.value);
    inputField.value = result;
  } catch (error) {
    inputField.value = 'Error';
  }
});

inputAc.addEventListener('click' , ()=>{


  inputField.value = "";

});

inputDel.addEventListener('click' , ()=>{
  const currentValue = inputField.value;
  const newValue = currentValue.slice(0, -1);
  inputField.value = newValue;
});


inputSqr.addEventListener('click' , ()=>{
 
  const c =  inputField.value;
  const Newsq = Math.sqrt(c);



  
  inputField.value = Newsq;


});