var withButtonItemsClass = document.getElementsByClassName('button');

console.log(withButtonItemsClass);


for ( var i = 0 ; i < withButtonItemsClass.length ; i++) {
	
	console.log(withButtonItemsClass[i].innerText);
	alert('Tekst zawarty w klasie button to: ' + withButtonItemsClass[i].innerText)

}