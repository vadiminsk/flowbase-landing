'use strict';

const section = document.querySelectorAll('.section');
const imgContent = document.querySelectorAll('.section img');

const objOptions = {
  root: null,
  threshold: 0.3,
  rootMargin: '-100px',
};

const sectionObserver = new IntersectionObserver(callBackFunction, objOptions);
sectionObserver.observe(section);

function callBackFunction(entries) {
  const [entry] = entries;
  console.log(entry);
  if (entry.isIntersecting) {
    imgContent.classList.remove('hidden');
  } else {
    imgContent.classList.add('hidden');
  }
}
