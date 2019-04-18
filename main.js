function replacePhone() {
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

function getNumber() {
    $('#play').on("click", () => {
        const person = new Person('gerardo', 22 )
        person.phone = $('#phone').val();
        console.log(person);
    })
    
}

function callBack(callback) {
    let fun = callback();
    console.log(fun);
}
  


