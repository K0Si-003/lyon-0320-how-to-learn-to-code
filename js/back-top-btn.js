const mybutton = document.getElementById('myBtn');

window.onscroll = function () { scrollFunction(); };

function scrollFunction () {
  if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

function topFunction () {
  const elementScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (elementScrollTop > 450) {
    window.requestAnimationFrame(topFunction);
    window.scrollTo(0, elementScrollTop - elementScrollTop / 15);
  }
}
topFunction();
