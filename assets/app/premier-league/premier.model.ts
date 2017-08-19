export class Premier {
    home: string;
    away: string;
    goalsHome: number;
    goalsAway: number;
    username?: string;
    messageId?: string;
    user?: string;
    id?: string;

    constructor(home: string, away: string, goalsHome: number, goalsAway: number,
                id?:string, username?: string, messageId?: string, user?: string) {
        this.home = home;
        this.away = away;
        this.goalsHome = goalsHome;
        this.goalsAway = goalsAway;
        this.id = id;
        this.username = username;
        this.messageId = messageId;
        this.user = user;
    }
}
