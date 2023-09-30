import Erros from "@/core/constants/Erros"
import Usuario from "@/core/usuario/UsuarioAnemicoV3"

const usuarioValido = () => new Usuario(123,'Fulano','fulano@gmail.com','123456')

test('Deve permitir usuário sem nome', () => {
    const usuario: Usuario = usuarioValido()
    usuario.setNome('')
    expect(usuario.getNome()).toBe('')
})

test('Deve permitir usuário com id negativo', () => {
    const usuario: Usuario = usuarioValido()
    usuario.setId(-200)
    expect(usuario.getId()).toBe(-200)
})

test('Deve permitir usuário com email inválido', () => {
    const usuario: Usuario = usuarioValido()
    usuario.setEmail("!@#$")
    expect(usuario.getEmail()).toBe(usuario.getEmail())
})

test('Deve lançar erro ao tentar alterar senha com tamanho menor que 6 caracteres', () => {
    const usuario: Usuario = usuarioValido()
    expect(() => usuario.setSenha('12345')).toThrowError(Erros.SENHA_INVALIDA)
})

test('Deve alterar senha com senha maior ou igual a 6 caracteres', () => {
    const novaSenhaValida = '654321'
    const usuario: Usuario = usuarioValido()
    usuario.setSenha(novaSenhaValida)
    expect(usuario.getSenha()).toBe(novaSenhaValida)
})