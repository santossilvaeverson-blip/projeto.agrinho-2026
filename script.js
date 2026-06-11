const practices = {
    "rotação de culturas": "A rotação de culturas ajuda a melhorar a fertilidade do solo e reduzir pragas naturalmente.",
    "agrofloresta": "Agroflorestas combinam árvores e cultivos, promovendo biodiversidade e proteção do solo.",
    "irrigação eficiente": "O uso de irrigação eficiente economiza água e reduz desperdício na produção agrícola."
};

function searchPractice() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const result = document.getElementById("result");

    if (practices[input]) {
        result.textContent = practices[input];
    } else {
        result.textContent = "Prática não encontrada. Tente outra!";
    }
}