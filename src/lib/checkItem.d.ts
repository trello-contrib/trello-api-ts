export enum CheckItemState {
    Complete = "complete",
    Incomplete = "incomplete",
}

export interface ICheckItem {
    id: string;
    idChecklist: string;
    name: string;
    nameData: object | null;
    pos: number;
    state: CheckItemState;
}
