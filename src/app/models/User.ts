export class User {
    name: String;
    admin: Boolean;
    constructor(username, accessRights){
        this.name = username;
        this.admin = accessRights;
    }
}