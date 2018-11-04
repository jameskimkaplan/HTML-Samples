var car = {
    type:"Fiat", 
    model:"500", 
    color:"white",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwSU9nHVbJZtl81vdWXRuYuViau1q4wejwocdWfX4RoUMc09wClA",
    width:500
    };

var pet = {
    type:"dog",
    breed:"Tibeitan Mastiff",
    color:"Black",
    image:"https://pics.me.me/tibetan-mastiff-31286039.png",
    link:"https://www.youtube.com/watch?v=JJLJEgBLugk"
};
var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
};