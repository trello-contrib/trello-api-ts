export enum NotificationType {
    AddAdminToBoard = "addAdminToBoard",
    AddAdminToOrganization = "addAdminToOrganization",
    AddedAttachmentToCard = "addedAttachmentToCard",
    AddedMemberToCard = "addedMemberToCard",
    AddedToBoard = "addedToBoard",
    AddedToCard = "addedToCard",
    AddedToOrganization = "addedToOrganization",
    CardDueSoon = "cardDueSoon",
    ChangeCard = "changeCard",
    CloseBoard = "closeBoard",
    CommentCard = "commentCard",
    CreatedCard = "createdCard",
    DeclinedInvitationToBoard = "declinedInvitationToBoard",
    DeclinedInvitationToOrganization = "declinedInvitationToOrganization",
    InvitedToBoard = "invitedToBoard",
    InvitedToOrganization = "invitedToOrganization",
    MakeAdminOfBoard = "makeAdminOfBoard",
    MakeAdminOfOrganization = "makeAdminOfOrganization",
    MemberJoinedTrello = "memberJoinedTrello",
    MentionedOnCard = "mentionedOnCard",
    RemovedFromBoard = "removedFromBoard",
    RemovedFromCard = "removedFromCard",
    RemovedFromOrganization = "removedFromOrganization",
    RemovedMemberFromCard = "removedMemberFromCard",
    UnconfirmedInvitedToBoard = "unconfirmedInvitedToBoard",
    UnconfirmedInvitedToOrganization = "unconfirmedInvitedToOrganization",
    UpdateCheckItemStateOnCard = "updateCheckItemStateOnCard",
}

export interface INotification {
    id: string;
    data: object;
    date: Date;
    idMemberCreator: string;
    type: NotificationType;
}
