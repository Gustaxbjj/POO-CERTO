let alunoA = new Aluno("Elijamerson", "461967484", "01-01-2007")
let alunoB = new Aluno("Talys", "4437430", "04-01-2008")
let alunoC = new Aluno("Eduardo", "248092", "06-04-2009")


let profTop = new Professor('David', '23204', 'Doutorado - Portugal')

let disciplinaPoo = new Disciplina('Engenharia de sofwtear', '2024-01', profTop)

console.log(disciplinaPoo) //aqui ainda nao tem aluno

disciplinaPoo.AdicionarAluno(alunoA)
disciplinaPoo.AdicionarAluno(alunoB,)
disciplinaPoo.AdicionarAluno(profTop)


console.log(disciplinaPoo)// aqui ja tem aluno

