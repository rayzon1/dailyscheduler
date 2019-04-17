/*Home*/
class Home {
    constructor(name, age, phone, email) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.email = email;
    }

    checkName() {
        let regex = /^$/;
        return regex.test(this.name);
    }
}   