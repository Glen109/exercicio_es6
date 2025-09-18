const alunos = [
    { nome: "Jorge", nota: 5 },
    { nome: "Maria", nota: 3 },
    { nome: "Carlos", nota: 9 },
    { nome: "Jose", nota: 10 },
    { nome: "Pastel", nota: 6 },
];

const aprovados = alunos.filter(aluno => aluno.nota >= 6);

console.log("Aprovados:", aprovados);