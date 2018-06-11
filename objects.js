class User {
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login(){
        console.log(this.email, 'just logged in');
        return this;
    }
    logout(){
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}

class Admin extends User {
    deleteUser(user){
        users = users.filter(u => {
            return u.email !== user.email;
        })
    }
}

var userOne = new User('amindsk@gmail.com', 'Amin');
var userTwo = new User('alidsk@gmail.com', 'Ali');
var admin = new Admin('hassandsk@gmail.com', 'Hassan');
var users = [userOne, userTwo, admin];
userOne.login().updateScore().logout();
admin.deleteUser(userTwo);
console.log(users);