

const createForm = document.querySelector('#createForm');
createForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const dob = document.querySelector('#dob').value;


    const users= JSON.parse(localStorage.getItem('users')) || [];
    const userExists= users.find(user => user.email === email);
    if(userExists){
        return alert('User already exists');
    }
    users.push({name: name, email: email, password: password, dob: dob});
    localStorage.setItem('users', JSON.stringify(users));
    alert('User created successfully');
    window.location.href = 'login.html';
  })
