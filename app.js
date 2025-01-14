document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    if (name === '' || email === '' || password === '' || confirmPassword === '') {
        alert('Please fill all the fields');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    window.location.href = `welcome.html?name=${encodeURIComponent(name)}`;
});