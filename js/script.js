let pagers = document.querySelectorAll('.testimonials .pager a');
let testimonialsList = document.querySelectorAll('.testimonials_list li');
let paginationUp = document.querySelector('.pagination .up')
let paginationDown = document.querySelector('.pagination .down')
let currentIdx = 0;
let testimonialCount = testimonialsList.length;


/*
pagers를 클릭하면 할 일
  모든 a에서 active를 제거하고, 클릭한 그 요소에 active 추가
*/

pagers.forEach((item,idx)=>{
  item.addEventListener('click',(e)=>{
    e.preventDefault();
    
    
    showTestimonial(idx);
  });  
});

function showTestimonial(num){
  /* 첫 후기인데, 이전걸로 넘어감 > num -1 > 마지막후기가 보이도록
  마지막 후기인데 다음버튼 > num = 3 > 첫후기가 보이도록
  상황따라 num을 바꾸는거라서 맨위로 */
  /*
  if(num === -1){
    num = testimonialCount - 1; //2 마지막후기로
  } else if(num === 3){
    num = 0; //첫후기로
  } else{
    num = num; //이도저도아니면 넘은 넘
  }
    */
  //num = (num === -1) ? testimonialCount - 1 : (num === 3) ? 0  : num;
  num = (num + testimonialCount) % testimonialCount;
  /*
  num = (1+3) % 3 = 1
  num1 = num1 1번보여줘 > num=1 1번보임
  num = (2+3) % 3 = 2
  num2 = num2
  num = (3+3) % 3 = 0
  nm3 = num 0 으로 바뀜
  */

  //모든 testimonialsLists에서 active를 제거하고 
  //클릭한 그요소의 인덱스번호에 해당하는 list에 active 추가
  for(let testimonial of testimonialsList){
    testimonial.classList.remove('active');
  }
  testimonialsList[num].classList.add('active');
  currentIdx = num;

  for(let pager of pagers){
    pager.classList.remove('active');
  }
  pagers[num].classList.add('active'); //함수안으로 이동
}

//다운 버튼 클릭하면 li 두번째, 세번째로 순서 바뀜
paginationDown.addEventListener('click',()=>{
    showTestimonial(currentIdx + 1);
  });
paginationUp.addEventListener('click',()=>{
    showTestimonial(currentIdx - 1);
  });