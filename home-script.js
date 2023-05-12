const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const v_observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('v_show');
        } else {
            entry.target.classList.remove('v_show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
const v_hiddenElements = document.querySelectorAll('.v_hidden');

hiddenElements.forEach((el) => observer.observe(el));
v_hiddenElements.forEach((el) => v_observer.observe(el));

