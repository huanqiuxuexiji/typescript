export class User {
    
    constructor(public id: number, public name: string, public gender: string,
        public age: number, public marry: string, public address: string, 
        public idType: string, public idNumber: string, public tel: string,
        public email: string){
        this.id = id;
        this.name=name;
        this.gender=gender;
        this.age=age;
        this.marry=marry;
        this.address=address;
        this.idType=idType;
        this.idNumber=idNumber;
        this.tel=tel;
        this.email=email;
    }
}
