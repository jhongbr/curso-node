

const nombre = "John";

if (true){
   const nombre = 'Pedro';
   console.log(nombre);/* en este punto estoy imprimiendo el segundo nombre porque 
   ya lo estoy definiendo en el if*/
}


console.log(nombre); /* en este punto estoy imprimiendo el primer nombre
y no el nombre del if*/