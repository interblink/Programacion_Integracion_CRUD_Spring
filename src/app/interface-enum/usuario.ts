export interface Usuario {
ID:number;
Nombre: String;
Apellido:String;
Nick:String;
Email:String;
Password: String;
Tipo_user: Usertipo;
}

export enum Usertipo{
    Administrador,
    Cliente,
    Tecnico
}