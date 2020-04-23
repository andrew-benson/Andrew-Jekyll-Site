var slides = document.querySelector('.slider-items').children;
var nextButton = document.querySelector('.right-slide');
var prevButton = document.querySelector('.left-slide');
var totalSlides = slides.length;
var index = 0;

nextButton.onclick=function () {
  console.log("next");
  next("next");
}
prevButton.onclick=function () {
	console.log("prev");
  next("prev");
}

function next(direction){

  if(direction=="next")
  {
    index++;
      if(index==totalSlides){
        index=0;
      }
  } 
  else
  {
    if(index==0)
    {
      index=totalSlides-1;
    }
    else
    {
      index--;
    }
  }

  for(i=0;i<slides.length;i++)
  {
    slides[i].classList.remove("active");
  }
  
  slides[index].classList.add("active");     

}