// Simulação de dados de usuários para o exemplo
const users = [
    { username: 'admin', password: 'admin', role: 'admin' },
    { username: 'turista', password: 'turista', role: 'turista' },
    { username: 'comercio', password: 'comercio', role: 'comercio' }
];

// Função para autenticação de usuário
function authenticateUser(username, password) {
    return users.find(user => user.username === username && user.password === password);
}

// Event listener para formulário de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const authenticatedUser = authenticateUser(username, password);
    if (authenticatedUser) {
        alert(`Login bem-sucedido! Bem-vindo, ${authenticatedUser.role}.`);
        // Aqui você pode redirecionar o usuário ou realizar outras ações conforme o papel (role)
        // Exemplo básico:
        if (authenticatedUser.role === 'admin') {
            // Redirecionar para o painel de administração
            window.location.href = 'admin-panel.html';
        } else if (authenticatedUser.role === 'turista') {
            // Redirecionar para a página do turista
            window.location.href = 'tourist-page.html';
        } else if (authenticatedUser.role === 'comercio') {
            // Redirecionar para a página do comércio
            window.location.href = 'commerce-page.html';
        }
    } else {
        alert('Usuário ou senha incorretos. Por favor, tente novamente.');
    }
});
