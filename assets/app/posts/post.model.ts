export class Post {
    fred: string;
    conquered: string;
    numComments: number;
    cccc: number;
    username?: string;
    messageId?: string;
    userId?: string;

    constructor(fred: string, conquered: string, numComments: number, cccc: number,
                username?: string, messageId?: string, userId?: string) {
        this.fred = fred;
        this.conquered = conquered;
        this.numComments = numComments;
        this.cccc = cccc;
        this.username = username;
        this.messageId = messageId;
        this.userId = userId;
    }
}
