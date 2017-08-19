export class Post {
    fred: string;
    conquered: string;
    numComments: number;
    cccc: number;
    username?: string;
    messageId?: string;
    userId?: string;
    id?: string;

    constructor(fred: string, conquered: string, numComments: number, cccc: number,
                id?:string, username?: string, messageId?: string, userId?: string) {
        this.fred = fred;
        this.conquered = conquered;
        this.numComments = numComments;
        this.cccc = cccc;
        this.id = id;
        this.username = username;
        this.messageId = messageId;
        this.userId = userId;
    }
}
