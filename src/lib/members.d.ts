export interface IMember {
    id: string;
    avatarHash: string;
    avatarSource: any;
    bio: string;
    bioData: object | null;
    confirmed: boolean;
    email: string | null;
    fullName: string;
    gravatarHash: any;
    idBoards: string[];

    /** Deprecated */
    idBoardsPinned: string[];

    idOrganizations: string[];
    idEnterprisesAdmin: string[];
    idPremOrgsAdmin: string[];
    initials: string;
    loginTypes: any;
    memberType: any;
    oneTimeMessagesDismissed: string[] | null;
    prefs: object;
    premiumFeatures: any[];
    products: number[];

    /** Deprecated */
    status: string;

    /** Deprecated */
    trophies: any[];

    uploadedAvatarHash: string | null;
    url: string;
    username: string;
}
