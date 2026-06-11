const practices = {
    "agrofloresta":
        "🌳 Sistema que combina árvores, cultivos e preservação da biodiversidade.",
    "rotação de culturas":
        "🌾 Alternância de plantações para manter a fertilidade do solo.",
    "irrigação eficiente":
        "💧 Uso inteligente da água para reduzir desperdícios.",
    "plantio direto":
        "🌱 Técnica que protege o solo contra erosão e conserva umidade."
};

function searchPractice() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const result = document.getElementById("result");

    if(practices[input]){
        result.innerHTML = practices[input];
    } else {
        result.innerHTML = "❌ Prática não encontrada. Tente: Agrofloresta, Rotação de Culturas, Irrigação Eficiente ou Plantio Direto.";
    }
}