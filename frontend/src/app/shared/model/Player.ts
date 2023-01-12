export default class Player{

    _id?: string;
    name: string = "";
    position: string = "";
    thumbnail?: string;
    signin?: Signin;
    born: Date = new Date();
}

class Signin{
    amount: number = 0;
    currency: string = "eur";
}