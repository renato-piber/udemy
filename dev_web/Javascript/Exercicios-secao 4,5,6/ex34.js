function verificarCaracteresComuns(str1, str2) {
    // Converte ambas as strings para minúsculas
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    // Verifica se todos os caracteres de str1 estão em str2
    for (let i = 0; i < str1.length; i++) {
        if (!str2.includes(str1[i])) {
            return false; // Retorna falso se algum caractere de str1 não estiver em str2
        }
    }

    // Verifica se todos os caracteres de str2 estão em str1
    for (let i = 0; i < str2.length; i++) {
        if (!str1.includes(str2[i])) {
            return false; // Retorna falso se algum caractere de str2 não estiver em str1
        }
    }

    return true; // Retorna true se todos os caracteres estiverem contidos
}

// Testando a função
console.log(verificarCaracteresComuns('abc', 'cba'));  // Saída: true
console.log(verificarCaracteresComuns('abc', 'def'));  // Saída: false
console.log(verificarCaracteresComuns('abc', 'aBc'));  // Saída: true
