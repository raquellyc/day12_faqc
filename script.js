// Our Solution

const faq = document.querySelectorAll('.faq')

faq.forEach(faq => {
    faq.addEventListener('click', () =>  {
        faq.classList.toggle('active')
    })
})


//Udemy Solution

// const toggle = document.querySelectorAll('faq-toggle')

// toggle.forEach(toggle => {
//     toggle.addEventListener('click', () => {
//         toggle.parentNode.classList.toggle('active')
//     })
// })



