//curiosidades

// Primeiro item
const img1 = document.querySelector('#img1');
const descricao1 = document.querySelector('#descricao1');
img1.addEventListener('mouseover', () => {
    descricao1.style.display = 'block';
});
img1.addEventListener('mouseout', () => {
    descricao1.style.display = 'none'; 
});

// Segundo item
const img2 = document.querySelector('#img2');
const descricao2 = document.querySelector('#descricao2');
img2.addEventListener('mouseover', () => {
    descricao2.style.display = 'block'; 
});
img2.addEventListener('mouseout', () => {
    descricao2.style.display = 'none'; 
});

// Terceiro item
const img3 = document.querySelector('#img3');
const descricao3 = document.querySelector('#descricao3');
img3.addEventListener('mouseover', () => {
    descricao3.style.display = 'block';
});
img3.addEventListener('mouseout', () => {
    descricao3.style.display = 'none';
});

// Quarto item
const img4 = document.querySelector('#img4');
const descricao4 = document.querySelector('#descricao4');
img4.addEventListener('mouseover', () => {
    descricao4.style.display = 'block'; 
});
img4.addEventListener('mouseout', () => {
    descricao4.style.display = 'none';
});


  

 // menú

  document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle'); 
    const navList = document.querySelector('.nav-list'); 
  
    if (menuToggle && navList) {
      menuToggle.addEventListener('click', () => {
        navList.classList.toggle('show');
      });
    } 
  });
  