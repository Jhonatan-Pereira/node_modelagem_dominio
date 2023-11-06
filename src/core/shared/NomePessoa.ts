import Erros from "@/core/constants/Erros"
import Validador from "@/core/utils/Validador"

export default class NomePessoa {
    readonly nome: string

    constructor(nome: string) {
        this.nome = nome.trim()

        Validador.combinar(
            Validador.naoVazio(this.nome, Erros.NOME_VAZIO)
        )
    }
}