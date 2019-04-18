/*Play*/
class Play extends Person {
    constructor(name, age, phone, email){
        // play scheduler will put display the form to schedule "play time"
        // when play is selected the form will display specific fields 
        // based on selection.
        super(name, age, phone, email);
    }

    chill() {
        $().on("keyup", function () {
            console.log('fuck')
        });
    
    }

    
}