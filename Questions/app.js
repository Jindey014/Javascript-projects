//traversing the dom

// const btns = document.querySelectorAll(".ques-btn");

// btns.forEach(function (btn) {
//     btn.addEventListener("click", function (e) {
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text")
// if (question.classList.contains("show-text")) {
//     question.classList.remove("show-text");
// }
// else {
//     question.classList.add("show-text")
// }
//     })
// })


//OR WE CAN USE SELECTORS INSIDE THE ELEMENT IE BUTTON KO SATTA ARTICLE LAI CLICK GARDA TEXT DEKHINE

const questions = document.querySelectorAll('.question')

questions.forEach(function (question) {
    const btn = question.querySelector(".ques-btn")
    btn.addEventListener("click", function () {
        questions.forEach(function (items) {
            if (items !== question) {
                items.classList.remove("show-text")
            }
        })

        question.classList.toggle("show-text")
    })
})