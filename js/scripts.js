var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);
  
    console.log(allNames); 

var newName = 'Marian'
  
    if(allNames.indexOf(newName) === -1) {
  newAllNames = allNames.push(newName)
}
    else {
    console.log('Lista zawiera to imię')
 }
    console.log(newAllNames)