export interface IEnterprise {
    id: string;
    name: string;
    displayName: string;
    prefs: object;
    ssoActivationFailed: boolean;
    idAdmins: string[];
    idMembers: string[];
    idOrganizations: string[];
    products: any[];
    userTypes: { [memberType: string]: number };
}
