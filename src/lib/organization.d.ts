export interface IOrganization {
    id: string;
    billableMemberCount: number;
    desc: string;
    descData: object | null;
    displayName: string;
    idBoards: string[];
    invitations: any;
    invited: any;
    logoHash: string;
    memberships: object[];
    name: string;
    powerUps: any;
    prefs: object;
    premiumFeatures: any;
    products: any;
    url: string;
    website: string;
}
