import Id from "./Id";

export interface EntidadeProps {
    id?: string
}

export default abstract class Entidade<Tipo, Props extends EntidadeProps> {
    readonly id: Id
    readonly props: any

    constructor(props: Props) {
        this.id = new Id(props.id)
        this.props = {...props, id: this.id.valor}
    }

    igual(outraEntidade: Entidade<Tipo, Props>): boolean {
        return this.id.igual(outraEntidade?.id)
    }

    diferente(outraEntidade: Entidade<Tipo, Props>): boolean {
        return this.id.diferente(outraEntidade?.id)
    }

    clone(newProps: Props, ...args: any): Tipo {
        return new (this.constructor as any)(
            {
                ...this.props, 
                ...newProps
            },
            ...args
        )
    }
}