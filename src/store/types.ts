export interface Message {
    id: number;
    text: string;
    photoURL: string;
    isImage: boolean;
    sentAt: Date,
    isRead: boolean,
    isOwner: boolean,
  }
