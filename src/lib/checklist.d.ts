import { ICheckItem } from "./checkItem";

export interface IChecklist {
    id: string;
    idBoard: string;
    idCard: string;
    name: string;
    pos: number;
    checkItems: ICheckItem[];
}
