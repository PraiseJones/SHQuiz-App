const form = document.querySelector(".form-wrapper");
const popup = document.querySelector('.popup-container')
const scoreSpan = document.querySelector('span');
const close = document.querySelector('.closebtn');
const label = document.q
const correctAns = ["B", "A", "A", "C"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let score = 0;

  const userAns = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  userAns.forEach((answers, index) => {
    if (answers === correctAns[index]) {
      score += 10;
    } else{
      label
    }
  });

  let output = 0
  const timer = setInterval(() => {
    scoreSpan.textContent = output;
    if(output===score){
      clearInterval(timer)
    }else{
      output++
    }
  },30)

  scrollTo(0,0);
  popup.style.display = 'block';
});

close.addEventListener('click', () => {
  popup.style.display = 'none';
  window.location.reload();
})
