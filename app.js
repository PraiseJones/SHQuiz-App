const form = document.querySelector(".form-wrapper");
const correctAns = ["B", "A", "A", "C"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let score = 0;

  const userAns = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  userAns.forEach((answers, index) => {
    if (answers === correct[index]) {
      score += 10;
    }
  });
  console.log('mr jr');
});


