/*
    Home class will build the profile from user input. Will gather data
    such as name, age, phone # and email. This information will be used
    to populate the form for each of the options "Play", "Work", and
    "School", depending on user choice. 


*/
class Home {

    // Constructor will build the user object which will then be
    // used later when user selects an option.
    constructor(name, age, phone, email) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.email = email;
    }

    // Validates user input is populated.
    checkName() {
        let regex = /^$/;
        return regex.test(this.name);
    }



}  

class Listeners {





}