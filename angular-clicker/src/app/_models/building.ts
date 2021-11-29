import { FormatNumberHelper } from "../_utils/format-number-helper";
import { Bonus } from "./bonus";

export class Building {
    name: string;
    quantity: number;
    perSecond: number;
    price: number;
    imagePath: string;

    public constructor(init?: Partial<Building>) {
        Object.assign(this, init);
    }

    getCurrentPrice(){
        return this.price * Math.pow(1.07, this.quantity)
    }
    
    getCurrentPriceFormatted(){
        return FormatNumberHelper.formatNumber(this.getCurrentPrice());
    }
    
    qtePerSecond = () => this.quantity * this.perSecond;
}