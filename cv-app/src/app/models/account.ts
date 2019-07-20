export class Account {
  constructor(public email: string,
              public about: string,
              public userName: string
    ) { }

    static adapt = (item: any): Account => {
            return  new Account(
       item.email,
       item.about,
       item.userName
      );
    }
}


