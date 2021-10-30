export class Bonus {
    name: string;
    description: string;
    multiplier: number;
    isActive: boolean;
    price: number;
    
    public constructor(init?: Partial<Bonus>) {
        Object.assign(this, init);
    }
}