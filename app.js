
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  })
})

const hiddenELements = document.querySelectorAll(".hidden");
hiddenELements.forEach((el) => observer.observe(el))