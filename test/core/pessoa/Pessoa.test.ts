import Erros from "@/core/constants/Erros"
import Pessoa from "@/core/pessoa/Pessoa"
import Id from "@/core/shared/Id"

test('Deve criar uma pessoa válida', () => {
    const pessoa = new Pessoa({
        nome: 'Pedro Augusto', 
        cpf: '280.012.389-38'
    })
    expect(pessoa.nome.primeiroNome).toBe('Pedro')
    expect(pessoa.id.novo).toBeTruthy()
})

test('Deve lançar erro ao criar uma pessoa com nome vazio', () => {
    expect(() => new Pessoa({nome: '', cpf: ''})).toThrowError(Erros.NOME_VAZIO)
})

test('Deve clonar objeto com nome alterado', () => {
    const pessoa = new Pessoa({
        nome: 'Pedro Augusto', 
        cpf: '280.012.389-38'
    })

    const newName = "Pedro Silva"
    const novaPessoa = pessoa.clone({ nome: newName})
    expect(novaPessoa.id.valor).toBe(pessoa.id.valor)
    expect(novaPessoa.cpf.valor).toBe(pessoa.cpf.valor)
    expect(novaPessoa.nome.completo).toBe(newName)
    expect(pessoa.nome.completo !== newName).toBe(true)
})

test('Deve clonar objeto com id alterado', () => {
    const pessoa = new Pessoa({
        nome: 'Pedro Augusto', 
        cpf: '280.012.389-38'
    })

    const newId = Id.novo.valor
    const novaPessoa = pessoa.clone({ id: newId})
    expect(novaPessoa.id.valor).toBe(newId)
    expect(pessoa.id.valor !== newId).toBe(true)
    expect(novaPessoa.cpf.valor).toBe(pessoa.cpf.valor)
    expect(novaPessoa.nome.completo).toBe(pessoa.nome.completo)
})