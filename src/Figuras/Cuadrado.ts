import { FiguraGeometrica } from "./FiguraGeometrica";

export class Cuadrado extends FiguraGeometrica {
    private _lado: number;

    constructor(lado: number) {
        super("Cuadrado"); 
        this._lado = lado;
    }

    
    public get lado(): number {
        return this._lado;
    }

    public set lado(valor: number) {
        if (valor > 0) {
            this._lado = valor;
        }
    }

   
    public calcularArea(): number {
        return this._lado * this._lado;
    }

    public calcularPerimetro(): number {
        return this._lado * 4;
    }
}