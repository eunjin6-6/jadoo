let pagers = document.querySelectorAll('.testimonials .pager a');
let testimonialsList = document.querySelectorAll('.testimonials_list li');
let paginationUp = document.querySelector('pagination .up')
let paginationDown = document.querySelector('pagination .down')


/*
pagers를 클릭하면 할 일
  모든 a에서 active를 제거하고, 클릭한 그 요소에 active 추가
*/

pagers.forEach((item,idx=>{
  item.addEventListener('click',(e)=>{
    e.preventDefault();
    pagers[idx].classList.remove('active');
    item.classList.add('active')
  })  
}));

