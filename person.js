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
    // Validates user age input is a valid phone number.
    checkAge() {
        let regex = /^\d+$/;
        return regex.test(this.age);
    }

    

    getName(arr) {
        // get name information from input value via submit listener
        // name will be added to the constructor for this person
    
    }

   

}  

class Listeners extends Person {
    /*
        This will contain the various selected DOM elements as variables, as
        well as the listener functions associated with them.
    
    */

    constructor(name, age, phone, email) {
        super(name, age, phone, email);
    }


    // listener for phone field which will replace number with formatted phone number.
   checkPhone() {
        let regex = /^\(?(\d{3})\)?\s?-?(\d{3})\s?-?(\d{4})$/;

        $('#phone').on("keyup keydown", function(){
            if (regex.test(this.value) || this.value == "") {
                const number = this.value.toString();
                this.value = number.replace(regex, "($1) $2-$3");
                $('#phone').css("border", "");
            } else {
                $('#phone').css("border", "1px solid red");
            }
        });

    }

    checkName() {
        let regex = /^\D+$/;

        $('#name').on("keyup keydown", function (){
            if(regex.test(this.value)) {
                $('#name').css("border", "");
            } else {
                $('#name').css("border", "1px solid red");
            }
            

        });
        
    }

    showSubmit() {

        let names = [];
        // use jquery ui .effect() function to shake input box if border-color red upon 
        // submit.
        $("#submit").on("click", function() {
            event.preventDefault();
            $.each($("input[type='text']"), function (){
                if($(this).css('border-color') == 'rgb(255, 0, 0)'){
                    $(this).effect("shake", {times:2}, 200);
                } else {
                    if ($(this).val() != '') {
                        if ($(this).attr('id') == 'name') {
                            names.push($(this).val());
                            console.log(names);
                        }
                    } 
                }
            })
            
        });
        return names;
       
    }

    

    




}
   


      
