function search() {
  var element = document.getElementById("searchbar");
  element.classList.toggle("searchbartoggle");
}

function contactclose() {
  document.getElementById("contact-page").style.display = "none";
}
function contact() {
  document.getElementById("contact-page").style.display = "flex";
}

function navclosemob() {
  document.getElementById("navigation-option-mobile").style.transform = "translateY(-100%)";
  document.getElementById("contact-page").style.display = "flex";
}

function mobnav() {
  document.getElementById("navigation-option-mobile").style.transform = "translateY(0%)";
  document.getElementById("navigation-option-mobile").style.transition = "transform 0.2s";
}
function navclose() {
  document.getElementById("navigation-option-mobile").style.transform = "translateY(-100%)";
  document.getElementById("navigation-option-mobile").style.transition = "transform 0.2s";

}


let toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})


const arrowRight = document.querySelector('.project-box .project-navigation .arrow-right');
const arrowLeft = document.querySelector('.project-box .project-navigation .arrow-left');

let index = 0;

const activeProject = () => {
  const imgSlide = document.querySelector('.project-carousel .img-slide');
  const projectDetails = document.querySelectorAll('.project-details');

  imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

  projectDetails.forEach(details => {
    details.classList.remove('active');
  });

  projectDetails[index].classList.add('active');
}

arrowRight.addEventListener('click', () => {

  if (index < 4) {
    index++;
    arrowLeft.classList.remove('disabled');
  }
  else {
    index = 4;
    arrowRight.classList.add('disabled');

  }

  activeProject();
});


arrowLeft.addEventListener('click', () => {

  if (index > 1) {
    index--;
    arrowRight.classList.remove('disabled');
  }
  else {
    index = 0;
    arrowLeft.classList.add('disabled');

  }

  activeProject();
});


// Synchronize percentage and progress bar fill animations
document.querySelectorAll('.progress-item').forEach(item => {
  const progressFill = item.querySelector('.progress-fill');
  const percentageLabel = item.querySelector('.percentage');
  const targetProgress = parseInt(progressFill.dataset.progress);

  let currentProgress = 0;
  const animationDuration = 1500; // Total animation duration in ms
  const intervalTime = 10; // Interval time in ms
  const step = (targetProgress / animationDuration) * intervalTime; // Increment step per interval

  const interval = setInterval(() => {
    currentProgress += step;
    if (currentProgress >= targetProgress) {
      currentProgress = targetProgress;
      clearInterval(interval);
    }

    // Update progress bar width and percentage simultaneously
    progressFill.style.width = `${currentProgress}%`;
    percentageLabel.textContent = `${Math.round(currentProgress)}%`;
  }, intervalTime);
});



