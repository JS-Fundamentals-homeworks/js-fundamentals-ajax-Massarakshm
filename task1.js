// Завдання: отримання даних про користувачів 
// За допомогою засобі Fetch отримати інформацію про користувачів
// за посиланням - https://jsonplaceholder.typicode.com/users 
// Імена користувачів відобразити в ненумерованому списку ul.usersList,
// який створений у файлі index.html
// Запустити програму за допомогою Live Server
// Перевірити за допомогою команди npm tests/task1.test.js 

fetch('https://jsonplaceholder.typicode.com/users') // sample API
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => { 
    const ul = document.querySelector("ul.usersList");
    for(const user of data){
        const li = document.createElement('li');
li.textContent = user.name;
ul.appendChild(li);
    }
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
