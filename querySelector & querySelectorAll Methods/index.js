// Write answer to the questions asked below:
// Write the code as shown in the video below:
const mainHeading=document.querySelector('#main-heading');

mainHeading.style.textAlign='right'

const basketHeading=document.querySelector('#basket-heading');
basketHeading.style.color='brown'
const fruits=document.querySelector('.fruits');
fruits.style.backgroundColor='grey';
fruits.style.padding='30px';
fruits.style.margin='30px';
fruits.style.borderRadius='5px';
fruits.style.listStyle='none'

// Write answer to the questions asked below:
const fruitItems=document.querySelectorAll('.fruit');
for(let i=0; i<fruitItems.length;i++){
  fruitItems[i].style.backgroundColor='white';
  fruitItems[i].style.padding='10px';
  fruitItems[i].style.margin='10px';
  fruitItems[i].style.borderRadius='5px';  
}

const OddFruitItems=document.querySelectorAll('.fruit:nth-Child(even)');
for(let i=0; i<OddFruitItems.length;i++){
  OddFruitItems[i].style.backgroundColor='brown';
  OddFruitItems[i].style.color='white';
  
}