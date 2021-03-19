const login = prompt('Informe seu login');
console.log(login);
const senha = prompt('Informe sua senha');
console.log(senha);
if (login == 'aluno' && senha == 123 || login == 'professor' && senha == 456) {
    alert('Login efetuado com sucesso!');
} else {
    alert('Usuário e/ou senha incorretos');
}