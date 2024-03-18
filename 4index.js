const fruit=document.getElementsByClassName('fruit');
for(let i=0; i<fruit.length; i++){
  fruit[i].style.fontWeight='bold';
  if(i==2){
    fruit[i].style.backgroundColor='yellow';
  }
}