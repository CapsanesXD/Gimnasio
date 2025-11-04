const URL= "https://yivqzcnbctqeeactvtwy.supabase.co/rest/v1/usuario"
const API_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpdnF6Y25iY3RxZWVhY3R2dHd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyODI5NTQsImV4cCI6MjA3Nzg1ODk1NH0.BjjiFlzAaDp2TFsuTIOSNF4pWyEM-Zz_vHNWNs4zFKQ';
//1.OBTENER TODOS LOS USUARIOS DE LA TABLA USUARIOS
console.log('Procesando punto 1.Obteniendo todos los datos de la tabla usuarios >>>');
fetch(URL,{headers:{'apikey':API_KEY}})//fetch hace una petición HTTP a la URL de nuestro supabase enviando también la clave de lectura
.then (r=>r.json())
.then(data=>console.log('Todos los datos de usuarios están así:',data));