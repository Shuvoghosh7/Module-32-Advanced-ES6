class Support{
    name;
    desgination = 'support web dep';
    address;
    constructor (nam,add){
        this.name=nam;
        this.address=add;
    }
    startSeaction(){
        console.log("start a support seaction")
    }
}

const amir =new support('amir','uttara');
const kbir =new support('kbir','Brisal');
console.log(amir);
console.log(kbir);