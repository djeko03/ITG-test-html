const header = document.getElementsByClassName('header');
const createBtn = document.getElementById('createBtn');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const closeModalX = document.getElementById('closeModalX');
const modalShadow = document.getElementById('modalShadow');
const footerBtn = document.getElementById('footerButton');

  window.addEventListener('scroll', function() {
    if (window.scrollY) {
        header[0].classList.add("header__shadow");
    } else {
        header[0].classList.remove("header__shadow");
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        modal.classList.remove('active')
        }
    });

  createBtn.addEventListener('click', function () {  
    modal.classList.add('active')
  })

  function closeModalFunc (className) {
    className.addEventListener('click', function () {  
        modal.classList.remove('active')
      })
  }

  closeModalFunc(closeModal)
  closeModalFunc(closeModalX)
  closeModalFunc(modalShadow)
  closeModalFunc(footerBtn)