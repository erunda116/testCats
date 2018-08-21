let checkedFood = document.getElementsByClassName('wrapper-content-item');
let checkedFoodAnchor = document.getElementsByClassName('buy-food-slave-of-the-cat');

for(let i = 0; i < checkedFoodAnchor.length; i++){
  checkedFoodAnchor[i].addEventListener('click', ifClickChangeColorAnchor);
  if(checkedFoodAnchor[i].parentElement.previousElementSibling.hasAttribute('disabled')){
    checkedFoodAnchor[i].removeEventListener('click', ifClickChangeColorAnchor);
  }
}

for(let i = 0; i < checkedFood.length; i++){
  checkedFood[i].addEventListener('click', ifClickChangeColor);
  if(checkedFood[i].hasAttribute('disabled')){
    checkedFood[i].removeEventListener('click', ifClickChangeColor);
    checkedFood[i].classList.add('disabled-food');
    let allThisChildren = checkedFood[i].children;
    for(let i = 0; i < allThisChildren.length; i++){
      allThisChildren[i].style.color = '#b3b3b3';
    }
  }
}


function ifClickChangeColor(){
  let thisFood = this;
  thisFood.classList.toggle('checked-food');
  let ourCircle = thisFood.getElementsByClassName('wrapper-content-item-weight');
  for(let i = 0; i < ourCircle.length; i++){
      ourCircle[i].classList.toggle('checked-food-weight');
  }
}

//изменения по ссылке

function ifClickChangeColorAnchor(){
  let checkedFromAnchor = this.parentElement.previousElementSibling;
  checkedFromAnchor.classList.toggle('checked-food');
  let ourCircle = checkedFromAnchor.getElementsByClassName('wrapper-content-item-weight');
  for(let i = 0; i < ourCircle.length; i++){
      ourCircle[i].classList.toggle('checked-food-weight');
  }
}