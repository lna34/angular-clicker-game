import { Bonus } from "./bonus";
import { Building } from "./building";

export interface GameInstance{
    id: number;
    elementsCount: number;
    perSecond: number;
    buildings: Building[];
    bonuses?: Bonus[];
    multiplierPerCount: number;
}