//your JS code here. If required.
// var nameElement = document.querySelector("#name");
// var ageElement = document.querySelector("#age");
// var btnElement = document.querySelector("#btn");

// var promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     var age = ageElement.value;
//     var name = nameElement.value;
//     if (age < 18) {
//       reject(`Oh sorry ${name}. You aren't old enough`);
//     } else {
//       resolve(`Welcome, ${name}. You can vote.`);
//     }
//   }, 4000);
// });

// function callPromise() {
//     return promise;
// }
// function handleSubmit(e) {
//     e.preventDefault();
//   callPromise().then(alert).catch(alert);
// }

                                                                                                                                                                                                                                                          //your JS code here. If required.
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const submitBtn = document.getElementById('btn');

submitBtn.addEventListener('click', (event) => {
  event.preventDefault(); 
  const delayPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Number(ageInput.value) >= 18) {
        resolve({ name: nameInput.value, age: Number(ageInput.value) });
      } else {
        reject({ name: nameInput.value });
      }
    }, 4000);
  });

  delayPromise
    .then((data) => {
      alert(`Welcome, ${data.name}. You can vote.`);
    })
    .catch((error) => {
      alert(`Oh sorry ${error.name}. You aren't old enough.`);
    });
});

btnElement.addEventListener("click", handleSubmit);