export default class User {
    constructor() {
        this.resetData();
    }

    resetData() {
        this.image = null;
        this.firstName = null;
        this.LastName = null;
        this.email = null;
        this.age = null;
        this.height = null;
        this.weight = null;
        this.password = null;
    }
}