export class Message {
    constructor(public id: number, public messageText: string, public sendersName: string, public date: Date,
                public image: string) {}

    public static adapt = (item: any, user: any): Message => {
        const message =  new Message(+item.id, item.text, user.userName, new Date(item.sendDate), user.profileImage);
        return message;
    }
}
