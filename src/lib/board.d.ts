export interface IBoard {
    id: string;

    /** Deprecated */
    name: string;

    descData: string | null;
    closed: boolean;
    idOrganization: string;
    pinned: boolean;
    url: string;
    shortUrl: string;
    prefs: object;
    labelNames: object;
}
