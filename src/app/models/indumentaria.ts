/*
    Nombre interfaz: Inicial mayúscula
    Nombre propiedades (características): minúsculas, sin tildes y guiones
    tipo: - string = alfanumericos (letras y números) / - number = numéricos (solo números)
*/
export interface Indumentaria {
    idIndumentaria: string;
    nombre: string;
    marca: string;
    precio: number;
    descripcion: string;
    stock: number;
}
