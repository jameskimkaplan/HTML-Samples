var data = {
    Description: "My profild data",
    detail: [
        {
            title:"Car Crash simulator", 
            header:"AI project with Javascript", 
            Paragraph:"You can create a AI crash simulator with Javascript",
            position: 1,
            link:"./AI.html",
            image:"./images/car-crash-sim.png"        
        },
        {
            title:"Car Crash simulator", 
            header:"AI project with Javascript", 
            Paragraph:"You can create a AI crash simulator with Javascript",
            position: 2,
            link:"./AI.html",
            image:"./images/car-crash-sim.png"        
        },
        {
            title:"Car Crash simulator", 
            header:"AI project with Javascript", 
            Paragraph:"You can create a AI crash simulator with Javascript",
            position: 3,
            link:"./AI.html",
            image:"./images/car-crash-sim.png"        
        },{
            title:"Car Crash simulator", 
            header:"AI project with Javascript", 
            Paragraph:"You can create a AI crash simulator with Javascript",
            position: 4,
            link:"./AI.html",
            image:"./images/car-crash-sim.png"        
        }
    ]
    };
var blogObj = data.detail;
var blogString = "";
    for (var i = 0; i < blogObj.length; i++) {
            blogString += "<br>Type:" + gameObj[i].type + ", Name: " + gameObj[i].title 
            + " <br> <a href=" + gameObj[i].link + " target=_blank ><img src=" 
                + gameObj[i].image + " width=100 ></a><br>"       
    }
    document.getElementById("main").innerHTML = 
    "Description: " + games.Description + " <br>" + gameString;
    
    
    ", <br> Title: " + game.title + ", <br> <a href='" +game.link+"' target='_blank'><img src='"
        + game.image + "' width=400></a>";
var pet = {
    type:"Dog",
    breed:"Tibetian Mastiff",
    origin:"Tibet",
    image:"https://pics.me.me/tibetan-mastiff-31286039.png",
    link:"https://www.youtube.com/watch?v=ba0KF8Q_bio&t=41s"
};
var games = {
    Description: "My favorite Games",
    game: [
        {
        type:"Online",
        title:"Candy Crush Saga",
        image:"https://www.windowscentral.com/sites/wpcentral.com/files/styles/xlarge/public/field/image/2014/12/candy-crush-saga.jpg?itok=Rsnrocdq",
        link:"https://candycrushsaga.com/en/"
        },
        {
        type:"Online",
        title:"Overwatch",
        image:"hhttps://static-cdn.jtvnw.net/ttv-boxart/Overwatch.jpg",
        link:"https://www.youtube.com/channel/UClOf1XXinvZsy4wKPAkro2A"
        },
        {
        type:"Online",
        title:"Fortnite",
        image:"https://www.extremetech.com/wp-content/uploads/2018/01/Fortnite-1-640x353.jpg",
        link:"https://www.youtube.com/watch?v=dSGDEPJpke0"
        }
    ]
};    

var place = {
    Description:"My favorite places",
    places: [
        {
            type:"Vacation Place",
            name:"Jeju Island",
            image:"https://dynaimage.cdn.cnn.com/cnn/q_auto,w_602,c_fill,g_auto,h_339,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170317143452-hallasan.jpg",
            link:"https://www.youtube.com/watch?v=u_Q7Dkl7AIk"
        },
        {
            type:"Mission Place",
            name:"Istanbul",
            image:"http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/1f/fy/p01ffyz3.jpg",
            link:"https://www.youtube.com/watch?v=8mHuAfrtDNg"
        },
        {
            type:"Working Place",
            name:"New York",
            image:"https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200",
            link:"https://www.nycgo.com/"
        },
        {
            type:"Market Place",
            name:"Beijing",
            image:"http://www.virtuallynomadic.com/images/china/beijing/donghuamen-night-market2.jpg",
            link:"https://www.youtube.com/watch?v=rgvfKvl7zWA"
        }
    ]
    
}