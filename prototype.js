function User(email, name) {
    this.email = email;
    this.name = name;
}
User.prototype.login = function(){
    console.log(this.email, 'logged in');
    return this;
}
User.prototype.logout = function(){
    console.log(this.email, 'logged out');
    return this;
}
var userOne = new User('amindsk@gmail.com', 'Amin');
var userTwo = new User('alidsk@gmail.com', 'Ali');
var users = [userOne, userTwo];
userOne.login().logout();

function Admin(...args){
    this.role = 'Admin';
    User.apply(this, args);
}
Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function(user){
    users = users.filter(u => {
        return u.email !== user.email;
    })
}
var admin = new Admin('admin@gmail.com', 'Admin');
admin.login().logout();
admin.deleteUser(userTwo);
console.log(users);