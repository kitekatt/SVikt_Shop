// //отправка формы заказа на почту
// const FEEDBACK_FORM = document.querySelector('#feedback-form')

// function sendFeedback(feedback){
//    fetch('/api/feedback', {
//       method: 'POST',
//       headers: {
//          "Content-Type": "application/json"
//       },
//       body: JSON.stringify(feedback),
//    }).then((response) => response.json()).then(data => {
//       console.log(data);
//       alert('Успешно');
//    }).catch((error) => {
//       console.error(error);
//       alert('Произошла ошибка');
//    });
// }

// //при нажатии на кнопку отправки формы
// FEEDBACK_FORM.addEventListener('submit', (e) => {
//    e.preventDefault();
//    const feedbackFormData = new FormData(e.target);
//    console.log('feedbackFormData ', feedbackFormData);
//    //получение объекта со всеми данными, которые ввёл пользователь
//    const feedback = Object.fromEntries(feedbackFormData)
//    console.log('feedback ', feedback);

//    sendFeedback(feedback);
// })

// "use strick"
// import Card from './../pages/Card'


// document.addEventListener('DOMContentLoaded', function () {
//    const form = document.getElementById('form');
//    form.addEventListener('submit', formSend);

//    async function formSend(e) {
//       e.preventDefault();

//       let error = formValidate(form);
//    }

//    function formValidate(form) {
//       let error = 0;
//       let formReq = document.querySelector('._req')

//       for (let index = 0; index < formReq.lengh; index++) {
//          const input = formReq[index];
//          formRemoveError(input);

//          if(input.classList.contains){

//          }
//       }
//    }

//    function formAddError(input){
//       input.parentElenent.classList.add('_error');
//       input.classList.add('_error');
//    }
//    function formRemoveError(input){
//       input.parentElenent.classList.add('_error');
//       input.classList.remove('_error');
//    }
// });