// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

document.getElementById('getUserButton').addEventListener('click', () => {
    const userName = document.getElementById('userNameInput').value;

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => { 
        const userFiltered = data.filter((item) => {
            return item.name === userName;
        });
        if (userFiltered.lenght !== 0) {
            document.getElementById('userCity').textContent = userFiltered[0].address.city;
        }
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
  
});