
var User = function(fname, lname){
    this.name = fname +" "+lname;
    this.fullName = function(){
        return this.name;
    }
}
module.exports = User;