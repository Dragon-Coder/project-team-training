// this should change any text tagged as an h2
var myHeading = document.querySelector('h2');
myHeading.textContent = 'Hello World! I know Javascript!';


// this is another attempt at the same code above. HTML code needs 'id=LiefH2'
var changeH2 = document.getElementbyId('LiefH2');
changeH2.textContent = 'Hello World! I know Javascript!';