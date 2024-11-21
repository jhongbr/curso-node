const nombre = 'James';
const real = 'Cristiano Ronaldo';

const normal = nombre + ' ' + real; //concatenacion
const templete = `${nombre} ${real}`; //templete string, tambien es concatenacion

console.log(normal);
console.log(templete);

console.log( normal === templete ); //  mirar si son iguales


// explicando para que son los ``

const htlm = `
<h1>hola</h1>
<p>Mundo></p>
`;

console.log(htlm);
// `` estan en la tecla de la tilde
