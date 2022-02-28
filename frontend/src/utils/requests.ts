
export const BASE_URL= process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8080";
/*colocar no BASE_URL o nome do localhost do backend preparar a variavel de ambiente para o heroku
tem que colocar process.env.REACT_APP_BACKEND_URL tem que colocar desse jeito por ser um padrão netfly
e colocar ?? que é um operador de essencia nula, definindo o nome da variavel de ambiente aqui e caso não esteja definida no caso a maquina local,
então o valor localhost:8080 
*/

