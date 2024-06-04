const minutesInput = document.getElementById('minutes') ;
const calculateButton = document.getElementById('calculate') ;
const resultParagraph = document.getElementById('result') ;
calculateButton.addEventListener('click', (event) => { event.preventDefault()
    const minutes = parseInt(minutesInput.value);
    const seconds = minutes * 60 ;
    resultParagraph.textContent = `${minutes} minutes is equal to ${seconds} seconds. `;
}) ;