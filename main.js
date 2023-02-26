var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
let images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
let alts = {
  'pic1.jpg' : 'sleeping cat',
  'pic2.jpg' : 'rocks',
  'pic3.jpg' : 'flowers',
  'pic4.jpg' : 'ancient Egypt',
  'pic5.jpg' : 'butterfly'
}

for(const image of images){
  newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${image}`);
  newImage.setAttribute('alt', alts[image]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
  
  
}

  

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if(btnClass === 'dark'){
    btn.setAttribute('class' , 'light');
    btn.textContent = 'Светлее';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  }else{
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Темнее';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
});
