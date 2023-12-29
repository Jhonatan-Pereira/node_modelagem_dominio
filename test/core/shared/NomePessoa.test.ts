import Erros from "@/core/constants/Erros"
import NomePessoa from "@/core/shared/NomePessoa"

test('Deve lançar erro ao tentar criar nome vazio', () => {
    expect(() => new NomePessoa()).toThrowError(Erros.NOME_VAZIO)
    expect(() => new NomePessoa('')).toThrowError(Erros.NOME_VAZIO)
})

test('Deve lançar erro ao tentar criar nome menor que 4 caracteres', () => {
    expect(() => new NomePessoa('Li Z')).toThrowError(Erros.NOME_PEQUENO)
})

test('Deve lançar erro ao tentar criar nome maior que 120 caracteres', () => {
    const nomeGigante = 'Pedro de Alcântara Francisco Antônio João Carlos Xavier de Paula Miguel Rafael Joaquim José Gonzaga Pascoal Cipriano Serafim de Bragança e Bourbon'
    expect(() => new NomePessoa(nomeGigante)).toThrowError(Erros.NOME_GRANDE)
})

test('Deve lançar erro ao tentar criar nome sem sobrenome', () => {
    expect(() => new NomePessoa("Guilherme")).toThrowError(Erros.NOME_SEM_SOBRENOME)
})

test('Deve lançar erro ao tentar criar nome com caracteres especiais', () => {
    expect(() => new NomePessoa("João @OOOJoao")).toThrowError(Erros.NOME_CARACTERES_INVALIDOS)
})

test('Deve criar nome com sobrenome', () => {
    const nome = new NomePessoa('João Silva Pereira')
    expect(nome.completo).toBe('João Silva Pereira')
    expect(nome.primeiroNome).toBe('João')
    expect(nome.sobrenomes).toEqual(['Silva', 'Pereira'])
    expect(nome.ultimoSobrenome).toBe('Pereira')
})