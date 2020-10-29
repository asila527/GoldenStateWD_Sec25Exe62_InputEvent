const input = document.querySelector('input');
input.addEventListener('input', function() {
    const h1 = document.querySelector('h1');
    h1.innerText = `Welcome, ${input.value}`;
    if (input.value === '') {
        h1.innerText = 'Enter Your Username';
    } 
})