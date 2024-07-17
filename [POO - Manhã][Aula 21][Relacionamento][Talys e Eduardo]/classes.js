class Aluno {
    constructor(nome, matricula, dataDENascimento) {
        this.nome = nome
        this.matricula = matricula
        this.dataDENascimento = dataDENascimento
    }
}


class Professor {
    constructor(nome, siape, formacao) {
        this.nome = nome
        this.siape = siape
        this.formacao = formacao
    }
}


class Disciplina {
    constructor(nome, ano, professor) {
        this.nome = nome
        this.ano = ano
        this.professor = professor
        this.alunos = [];
    }

    AdicionarAluno(aluno){
        if(aluno instanceof Aluno){
            this.alunos.push(aluno);
        }
        else{
            console.error("erro")
        }
    }

}

