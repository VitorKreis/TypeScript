export function CreateError(): never {
    //Tipo never nao retorna nada e e esperado que nunca retorne nada
    throw new Error('Novo erro');
}

export function Void(): void {
    //Tambem pode ser utilizado void mas por convençao seria never
    console.log('nada');
}
