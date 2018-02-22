export interface IWebhook {
    id: string;
    description: string;
    idModel: string;
    callbackUrl: string;
    active: boolean;
}
