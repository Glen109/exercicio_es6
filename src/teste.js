let NotasAlunos = new Map();
NotasAlunos.set("nomes", ["jorge", "maria", "carlos", "jose", "pastel"])
NotasAlunos.set("notas", [5, 3, 9, 10, 6])
const Resultado = []

function aprovados(map) {
    let nomes = map.get("nomes");
    let notas = map.get("notas");

    for (var i = 0; i < nomes.length; i++) {
        if (notas[i] >= 6) {
            Resultado.push({nome: nomes[i], nota: notas[i]});
        }
    }
    return Resultado;
}

console.log("Aprovados:", aprovados(NotasAlunos));