const para=document.createElement('p');
const paraText=document.createTextNode('Total fruits: 4');
para.appendChild(paraText);

const divs=document.getElementsByTagName('div');
const secondDiv=divs[1]

const fruits=document.querySelector('.fruits');
secondDiv.insertBefore(para,fruits);
para.id='fruits-total'