import Erros from "@/core/constants/Erros"
import Pessoa from "@/core/pessoa/Pessoa"
import Id from "@/core/shared/Id"
import PessoaBuilder from "@/test/data/PessoaBuilder"

test('Deve criar uma pessoa válida', () => {
    const pessoa = PessoaBuilder.criar()
        .comNome('Pedro Augusto')
        .semId()
        .agora()
    expect(pessoa.nome.primeiroNome).toBe('Pedro')
    expect(pessoa.id.novo).toBeTruthy()
})

test('Deve lançar erro ao criar uma pessoa com nome vazio', () => {
    expect(() => new Pessoa({nome: '', cpf: ''})).toThrowError(Erros.NOME_VAZIO)
    expect(() => PessoaBuilder.criar().semNome().agora()).toThrowError(Erros.NOME_VAZIO)
})

test('Deve lançar erro ao criar uma pessoa sem cpf', () => {
    expect(() => PessoaBuilder.criar().semCpf().agora()).toThrowError(Erros.CPF_INVALIDO)
})

test('Deve clonar objeto com nome alterado', () => {
    const pessoa = PessoaBuilder.criar().agora()
    const newName = "Pedro Silva"
    const novaPessoa = pessoa.clone({ nome: newName })
    expect(novaPessoa.id.valor).toBe(pessoa.id.valor)
    expect(novaPessoa.cpf.valor).toBe(pessoa.cpf.valor)
    expect(novaPessoa.nome.completo).toBe(newName)
    expect(pessoa.nome.completo !== newName).toBe(true)
})

test('Deve clonar objeto com id alterado', () => {
    const pessoa = PessoaBuilder.criar().agora()
    const newId = Id.novo.valor
    const novaPessoa = pessoa.clone({ id: newId})
    expect(novaPessoa.id.valor).toBe(newId)
    expect(pessoa.id.valor !== newId).toBe(true)
    expect(novaPessoa.cpf.valor).toBe(pessoa.cpf.valor)
    expect(novaPessoa.nome.completo).toBe(pessoa.nome.completo)
})