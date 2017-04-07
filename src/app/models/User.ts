export class User {
    name: String;
    email: String;
    admin: Boolean;
    constructor(name?, email?, accessRights?){
        this.name = name;
        this.admin = accessRights;
        this.email = email;
    }

    public setName(name) {
        this.name = name;
    }

    public setEmail(email) {
        this.email = email;
    }

    public setRights(admin) {
        this.admin = admin;
    }
}