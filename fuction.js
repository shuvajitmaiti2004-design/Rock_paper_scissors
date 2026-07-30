let DATA="Searchinh data information";
class user{
    constructor(name ,email){
        this.name=name;
        this.email=email;
    }
    viewdata(){
        console.log("data =",DATA);

    }
}
class admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editdata(){
        DATA ="eadit data information";
    }
}


let student1 = new user("shuvajit","maiti@.com");
let student2 = new user("shuvajitmaiti","maiti22@.com");
let admin1= new admin("goal","goal@.com");