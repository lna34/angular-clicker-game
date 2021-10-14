import { Building } from "./building";

export interface GameInstance{
    id: number;
    elementsCount: number;
    perSecond: number;
    buildings: Building[];
}