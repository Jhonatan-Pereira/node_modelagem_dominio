import Erros from "@/core/constants/Erros"
import Cpf from "@/core/shared/Cpf"

test('Deve retornar cpf inválido (false) para string vazia', () => {
    expect(Cpf.isValido('')).toBeFalsy()
})

test('Deve retornar cpf inválido (false) para string incompleta', () => {
    expect(Cpf.isValido('123')).toBeFalsy()
    expect(Cpf.isValido('1234')).toBeFalsy()
    expect(Cpf.isValido('123456')).toBeFalsy()
    expect(Cpf.isValido('1234567890')).toBeFalsy()
    expect(Cpf.isValido('1234567890')).toBeFalsy()
    expect(Cpf.isValido('123.456.789-0')).toBeFalsy()
})

test('Deve retornar cpf inválido (false) para dv inválido', () => {
    expect(Cpf.isValido('123.456.789-01')).toBeFalsy()
})

test('Deve retornar cpf válido (true) para dv válido', () => {
    expect(Cpf.isValido('280.012.389-38')).toBe(true)
    expect(Cpf.isValido('346.885.650-46')).toBe(true)
    expect(Cpf.isValido('028.777.810-03')).toBe(true)
    expect(Cpf.isValido('088.535.530-06')).toBe(true)
})

test('Deve retornar o dv do cpf', () => {
    expect(new Cpf('280.012.389-38').digitoVerificador).toBe('38')
    expect(new Cpf('346.885.650-46').digitoVerificador).toBe('46')
    expect(new Cpf('028.777.810-03').digitoVerificador).toBe('03')
    expect(new Cpf('088.535.530-06').digitoVerificador).toBe('06')
})

test('Deve lançar um erro para cpf com string vazia', () => {
    expect(() => new Cpf()).toThrowError(Erros.CPF_INVALIDO)
    expect(() => new Cpf('')).toThrowError(Erros.CPF_INVALIDO)
})

test('Deve lançar um erro para cpf com string incompleta', () => {
    expect(() => new Cpf('123')).toThrowError(Erros.CPF_INVALIDO)
    expect(() => new Cpf('1234')).toThrowError(Erros.CPF_INVALIDO)
    expect(() => new Cpf('123456')).toThrowError(Erros.CPF_INVALIDO)
    expect(() => new Cpf('1234567890')).toThrowError(Erros.CPF_INVALIDO)
    expect(() => new Cpf('1234567890')).toThrowError(Erros.CPF_INVALIDO)
    expect(() => new Cpf('123.456.789-0')).toThrowError(Erros.CPF_INVALIDO)
})

test('Deve lançar um erro para cpf com dv inválido', () => {
    expect(() => new Cpf('123.456.789-00')).toThrowError(Erros.CPF_INVALIDO)
})

test('Deve retornar o cpf formatado', () => {
    expect(new Cpf('28001238938').formatado).toBe('280.012.389-38')
    expect(new Cpf('34688565046').formatado).toBe('346.885.650-46')
    expect(new Cpf('02877781003').formatado).toBe('028.777.810-03')
    expect(new Cpf('088.535.530-06').formatado).toBe('088.535.530-06')
})

test('Deve retornar o valor do cpf', () => {
    expect(new Cpf('28001238938').valor).toBe('28001238938')
    expect(new Cpf('34688565046').valor).toBe('34688565046')
    expect(new Cpf('028.777.810-03').valor).toBe('02877781003')
    expect(new Cpf('088.535.530-06').valor).toBe('08853553006')
})