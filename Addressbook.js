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

    
}

contact1 = new Contact("Chetan","Zambare","Shree Nagar","BSL","MH",425201,9637074619,"zambare.c123@gmail");
contact2 = new Contact("Ram","Patil","Mohit","Jl","MH",665201,777074619,"ram.c123@gmail");


// Add Contact to AddressBookList
let addressBookList = new Array();
addressBookList.push(contact1);
addressBookList.push(contact2);

console.log(addressBookList);

