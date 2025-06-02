class Objects{
    constructor(name, age, role){
        this.name=name;
        this.age=age;
        this.role=role;
    }

    biodata(){
        console.log("Hi!");
    }
}

class Objects1{
    constructor(name,age,role){
        this.name=name;
        this.age=age;
        this.role=role;
    }
}

const S2obj=new Objects1("Arul",25,"Software Engineer");
console.log(S2obj);

const user1 = new Objects("Mahaprabu",24,"Software Engineer");
console.log(user1)