
// this is another attempt at the same code above. HTML code needs 'id=LiefH2'
var changeH2 = document.getElementbyId('liefH2');
changeH2.textContent = 'Hello World! I know Javascript!';

$("button").click(function () {
    $("liefH2").toggle(500);
});