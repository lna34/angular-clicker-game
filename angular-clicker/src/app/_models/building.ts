import { Bonus } from "./bonus";

export class Building {
    name: string;
    quantity: number;
    perSecond: number;
    basePrice: number;
    imagePath: string;
    
    public constructor(init?: Partial<Building>) {
        Object.assign(this, init);
    }

    currentPrice = () => (this.quantity == 0 ? this.basePrice : (this.basePrice * this.quantity * this.quantity));
    qtePerSecond = () => this.quantity * this.perSecond;
}