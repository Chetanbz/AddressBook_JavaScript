class Contact {

    constructor(...parms){
        this.first   = parms[0];
        this.last    = parms[1];
        this.address = parms[2];
        this.city    = parms[3];
        this.state   = parms[4];
        this.zip     = parms[5];
        this.phone   = parms[6];
        this.email   = parms[7];
    }

    toString(){
        return "First Name " + this.first + 
        ", Last Name " + this.last+
        ", Address " + this.address+
        ", city " + this.city+
        ", State " + this.state+
        ", Zip " + this.zip+
        ", Phone " + this.phone+
        ", email " + this.email;
    }
    get first ()  { return  this._first; }
    get last ()   { return  this._last; }
    get address (){ return  this._address; }
    get city ()   { return  this._city; }
    get state ()  { return  this._state; }
    get zip ()    { return  this._zip; }
    get phone ()  { return  this._phone; }


    set first(first){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(first)) this._first = first;
        else throw "First is Invalid"    
    }

    set last(last){
       let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
       if (nameRegex.test(last)) this._last = last;
       else throw "Last is Invalid"    
     }

    set address(address){
        let nameRegex = RegExp('^[A-Z a-z]{4,}$');
        if (nameRegex.test(address)) this._address = address;
        else throw "Address is Invalid"    
    }

    set city(city){
        let nameRegex = RegExp('^[A-Z a-z]{4,}$');
        if (nameRegex.test(city)) this._city = city;
        else throw "city  is Invalid"    
    }

    set state(state){
        let nameRegex = RegExp('^[A-Z a-z]{4,}$');
        if (nameRegex.test(state)) this._state = state;
        else throw "state  is Invalid"    
    }

    set zip(zip){
        let nameRegex = RegExp('^[0-9]{6}$');
        if (nameRegex.test(zip)) this._zip = zip;
        else throw "zip  is Invalid"    
    }

    set phone(phone){
        let nameRegex = RegExp('^[0-9]{10}$');
        if (nameRegex.test(phone)) this._phone = phone;
        else throw "Phone  is Invalid"    
    }


    
}
let addressBookList = new Array();
try{
contact1 = new Contact("Chetan","Zambare","Shree Nagar","Bhusawal","Maharastra",425201,9637074619,"zambare.c123@gmail.com");
contact2 = new Contact("Amam","Patil","Mohit","avlgsh","MHada",665201,7741833846,"ram.c123@gmail.com");
}
catch(e){
    console.error(e);
}
try{
addressBookList.push(contact1);
addressBookList.push(contact2);
//console.log(addressBookList);
}catch(e){
    console.error(e);
}


let givenName = "Chetan";
let givenName2 = "Ram";
let givenadd = "Hanuman nagar ram";

addressBookList.filter(obj => obj._first==givenName).map(obj => obj.address =givenadd);


//addressBookList.filter(obj => obj._first==givenName2).forEach(obj =>  addressBookList.splice(addressBookList.indexOf(obj), 1));
//console.log(addressBookList);


let entryNum = addressBookList.reduce((total) => total+1,0);
console.log(entryNum);

if(checkExist(contact1)){
    addressBookList.push(contact1);
}
else{
    console.log("Contact Already Exist");
}

console.log(addressBookList);

function checkExist(contact){
    let name = contact.first;
    let arrlength = addressBookList.filter(obj => obj.first==name).length;
    if(arrlength == 0) return true;
    else {
         "Contact Already Exist";
         return false;
    }
}

// Search Person 
let givenCity = "Bhusawal";
let givenstate = "Maharastra";
let cityList = addressBookList.filter(obj => obj.city == givenCity)
                             .map(obj=> obj.first);
let stateList = addressBookList.filter(obj => obj.state == givenstate)
                             .map(obj=> obj.first);
console.log(cityList);
console.log(stateList);

let cityMap = new Map();
let citycountMap = new Map();

addressBookList.sort(function(a,b){
                return a.city >= b.city ? -1 : 1 })
                .forEach(obj => {
    cityMap.set(obj.first,obj.city);
    citycountMap.set(obj.city,0);
})
console.log(cityMap);

let stateMap = new Map();
let stateCountMap = new Map();

addressBookList.sort(function(a,b){
                return a.state >= b.state ? -1 :- 1 })
                .forEach(obj => {
    stateMap.set(obj.first,obj.state);
    stateCountMap.set(obj.state,0);
})
console.log(stateMap);


function addtoCountMap(obj){
    let entry = cityMap.filter(obj2 => obj2.first == obj.first).length;
    if(entry != 0){
        let actual = citycountMap.get
        citycountMap.set()
    }
}

addressBookList.sort(function(a,b){
    return a.first >= b.first ? 1 :  -1 });
console.log("First Name Soting ");
console.log( addressBookList);

addressBookList.sort(function(a,b){
    return a.city >= b.city ? -1 :  1 });
console.log("City Soting " );
console.log(addressBookList);
