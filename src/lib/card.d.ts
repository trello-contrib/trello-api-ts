import { ILabel } from "./label";

export interface ICard {
    id: string;
    badges: object;
    checkItemStates: any[];
    closed: boolean;
    dateLastActivity: Date;
    desc: string;
    descData: object | null;
    due: Date | null;
    email: string | null;
    idAttachmentCover: string | null;
    idBoard: string;
    idChecklists: string[];
    idLabels: string[];
    idList: string;
    idMembers: string[];
    idMembersVoted: string[];
    idShort: number;
    labels: ILabel[];
    manualCoverAttachment: boolean;
    name: string;
    pos: number;
    shortLink: string;
    shortUrl: string;
    subscribed: boolean;
    url: string;
}
