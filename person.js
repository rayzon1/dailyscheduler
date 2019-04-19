/*
    Home class will build the profile from user input. Will gather data
    such as name, age, phone # and email. This information will be used
    to populate the form for each of the options "Play", "Work", and
    "School", depending on user choice. 


*/
class Person {

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
        let regex = /^\D$/;
        return regex.test(this.name);
    }
    // Validates user age input is a valid phone number.
    checkAge() {
        let regex = /^\d+$/;
        return regex.test(this.age);
    }

    getInformation() {

        $('#play').on("click", () => {
            this.checkName() ? this.name = $('#name').val() : this.name = null;
            this.checkAge() == false ? this.age = $('#age').val() : this.age = null;
            $('#age').val("");
            $('#name').val("");
            this.phone = $('#phone').val();
        
        })
    }

   

}  

class Listeners extends Person {
    /*
        This will contain the various selected DOM elements as variables, as
        well as the listener functions associated with them.
    
    
    */

   replacePhone() {
        let regex = /^\(?(\d{3})\)?\s?-?(\d{3})\s?-?(\d{4})$/;

        // listener for phone field which will replace number with formatted phone number.
        $('#phone').on("keyup keydown", function(){
            if (regex.test(this.value)) {
                const number = this.value.toString();
                this.value = number.replace(regex, "($1) $2-$3");
                $('#phone').css("border", "");
            } else {
                $('#phone').css("border", "1px solid red");
            }
        })

    }

    

    




}
   


      
