import Erros from '@/core/constants/Erros'
import { v4 as uuid, validate } from 'uuid'

export default class Id {
    readonly valor: string
    readonly novo: boolean

    constructor(valor?: string) {
        this.valor = valor ?? uuid()
        this.novo = !valor

        if(!validate(this.valor)) throw new Error(Erros.ID_INVALIDO)
    }

    static get novo() {
        return new Id()
    }

    igual(outroId: Id): boolean {
        return this.valor === outroId?.valor
    }

    diferente(outroId: Id): boolean {
        return this.valor !== outroId?.valor
    }
}