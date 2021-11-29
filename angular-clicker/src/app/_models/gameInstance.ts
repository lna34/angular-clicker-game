import { FormatNumberHelper } from "../_utils/format-number-helper";
import { Bonus } from "./bonus";
import { Building } from "./building";

export class GameInstance{
    id: number;
    gameMoney: number;
    perSecond: number;
    buildings: Building[];
    bonuses?: Bonus[];

    public constructor(init?: Partial<GameInstance>) {
        Object.assign(this, init);
    }
    
    getGameMoneyFormatted(){
        return FormatNumberHelper.formatNumber(this.gameMoney);
    }

    getPerSecondFormatted(){
        return FormatNumberHelper.formatNumber(this.perSecond);
    }

}