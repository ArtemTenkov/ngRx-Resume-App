export class Message {
    constructor(public id: number, public messageText: string, public sendersName: string, public date: Date, public read: boolean,
                public image: string) {}

    public static adapt = (item: any): Message => {
        const message =  new Message(+item.id, item.text, item.user.userName, new Date(item.sendDate), false, item.user.profileImage);
        return message;
    }
}
