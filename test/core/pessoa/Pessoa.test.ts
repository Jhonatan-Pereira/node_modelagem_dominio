import Erros from "@/core/constants/Erros"
import Pessoa from "@/core/pessoa/Pessoa"

test('Deve criar uma pessoa válida', () => {
    const pessoa = new Pessoa('Pedro Augusto')
    expect(pessoa.nome.primeiroNome).toBe('Pedro')
    expect(pessoa.id.novo).toBeTruthy()
})

test('Deve lançar erro ao criar uma pessoa com nome vazio', () => {
    expect(() => new Pessoa('')).toThrowError(Erros.NOME_VAZIO)
})