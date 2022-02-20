const parson ={Id:1610,Name:'shuvo',Address:'chandpur',varsity:'IUBAT'};

/* const names =parson.Name;
const ids =parson.Id; */
// repless this process
const {Id,Name,Address,varsity}=parson;
// console.log(Name,Id,Address);

const company ={
    name:'GP',
    ceo:{id:1610,name:'shuvo',food:'birani'},
    web:{work:'developer',employe:22,farmwork:'js',tack:{
        first:'html',
        second:'css',
        third:'js'
    }
}
}

/* const porparty = company.web.work;
const porparty2 = company.web.employe;
console.log(porparty,porparty2); */
// shortCute process
const{work,employe}=company.web;
const {first,second,third}=company.web.tack;
console.log(work,employe);
console.log(first,second,third);
