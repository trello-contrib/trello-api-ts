export interface IAction {
    id: string;
    data: object;
    date: Date;
    idMemberCreator: string;
    type: string;

    // The Trello API can return additional fields that are not documented
    [x: string]: any;
}
