/* Activates when scrolled */
document.addEventListener('scroll', yScroll);

function yScroll() {
  const yPos = window.pageYOffset;

  if (yPos > 10) {
    document.getElementById('top-btn').style.bottom = '10px';
  } else {
    document.getElementById('top-btn').style.bottom = '-50px';
  }
}

function ScrollTop() {
  let i = window.pageYOffset;

  var intervalTimer = setInterval(() => {
    if (i > 0) {
      window.scrollTo(0, i);
      i -= 15;
    } else {
      document.getElementById('top-btn').style.bottom = '-50px';
      clearInterval(intervalTimer);
    }
  }, 0.5);
}


/* Modal window script*/

// Get the modal
const modal = document.getElementById('myModal');

// Get the button that opens the modal
const btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

// Get the modal first
const modalFirst = document.getElementById('myModalFirst');

 // Get the button that opens the modal
const btnFirst = document.getElementById('myBtnFirst');

 // Get the <span> element that closes the modal
const spanFirst = document.getElementsByClassName('closeFirst')[0];

 // When the user clicks on the button, open the modal
btnFirst.onclick = function () {
  modalFirst.style.display = 'block';
};

 // When the user clicks on <span> (x), close the modal
spanFirst.onclick = function () {
  modalFirst.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target === modal) {
//     modal.style.display = 'none';
//   }
// };

// Get the modal two
const modalSecond = document.getElementById('myModalSecond');

// Get the button that opens the modal
const btnSecond = document.getElementById('myBtnSecond');

// Get the <span> element that closes the modal
const spanSecond = document.getElementsByClassName('closeSecond')[0];

// When the user clicks on the button, open the modal
btnSecond.onclick = function () {
    modalSecond.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
spanSecond.onclick = function () {
    modalSecond.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//     if (event.target === modalSecond) {
//       modal.style.display = 'none';
//     }
// };
