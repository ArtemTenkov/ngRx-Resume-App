export class Message {
    constructor(public id: number, public messageText: string, public sendersName: string, public date: Date, public read: boolean) {}

    public static adapt = (item: any): Message => {
        const message =  new Message(+item.id, item.text, item.sendersName, new Date(item.sendDate), false);
        return message;
    }
}
