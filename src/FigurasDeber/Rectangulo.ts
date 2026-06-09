import { FiguraGeometrica } from "./FiguraGeometrica";

export class Rectangulo extends FiguraGeometrica {
    private _base: number;
    private _altura: number;

    constructor(base: number, altura: number) {
        super("Rectángulo");
        this._base = base;
        this._altura = altura;
    }

   
    public get base(): number { return this._base; }
    public set base(valor: number) {
        if (valor > 0) this._base = valor;
    }

    public get altura(): number { return this._altura; }
    public set altura(valor: number) {
        if (valor > 0) this._altura = valor;
    }

    public calcularArea(): number {
        return this._base * this._altura;
    }

    public calcularPerimetro(): number {
        return 2 * (this._base + this._altura);
    }
}