document.addEventListener("DOMContentLoaded", () => {
    const buttonText = document.getElementById('buttonText')

    buttonText.addEventListener('click', () => {
        const dataValue = document.getElementById('inputText').value;

        localStorage.setItem('value', dataValue)
        
    })
});

