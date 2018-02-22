export enum LabelColor {
    Black = "black",
    Blue = "blue",
    Green = "green",
    Lime = "lime",
    Null = "null",
    Orange = "orange",
    Pink = "pink",
    Purple = "purple",
    Red = "red",
    Sky = "sky",
    Yellow = "yellow",
}
export interface ILabel {
    id: string;
    idBoard: string;
    name: string;
    color: LabelColor;
    uses: number;
}
