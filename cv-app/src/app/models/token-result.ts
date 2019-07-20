export class TokenResult {
  constructor(public token: string,
              public errorMessage: string
    ) { }

    static adapt = (item: any): TokenResult => {
            return  new TokenResult(
        item.token,
        item.errorMessage
      );
    }
}


