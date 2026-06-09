export class Persona {
    private _nombre: string;
    private _fechaNacimiento: Date;
    private _estatura: number;
    private _edad: number;
    private _estado: boolean;

    constructor(){
        this._nombre = '';
        this._fechaNacimiento = new Date();
        this._estatura = 0;
        this._edad = 0;
        this._estado = true;
    }

    public get nombre():string{
        return this._nombre;
    }

    public set nombre(value:string){
        this._nombre = value;
    }

    public get fechaNacimiento():Date{
        return this._fechaNacimiento;
    }

    public set fechaNacimiento(value:Date){
        this._fechaNacimiento = value;
    }

    public get estatura():number{
        return this._estatura;
    }

    public set estatura(value:number){
        this._estatura = value;
    }

    public get estado():boolean{
        return this._estado;
    }

    public set estado(value:boolean){
        this._estado = value;
    }

    public get edad():number{
        const fechaActual = new Date();
        this._edad = fechaActual.getFullYear() - this._fechaNacimiento.getFullYear();
        return this._edad;
    }

    calcularMayorEdad():void{
        if(this.edad >= 18){
         console.log(`es mayor de edad`);
        }else{
            console.log(`es menor de edad`);
        }
    }
}