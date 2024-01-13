"use strict"


let btn1 = document.getElementById("btn1");

let btn2 = document.getElementById("btn2");

let image1 = document.getElementById("image1");

let h4 = document.getElementById("h4_text");

let h5 = document.getElementById("h5_text");

let para1 = document.getElementById("para_1");

let obj = [
    {
        img : "varshitha.jpg",
        h4_text : "Varshitha",
        h5_text : "WEB DEVELOPER",
        para_1 : "I finally out how to connect with message, but for some reason you bury it with more clicks. Same with this new Analytics Change.There's more than enough space in the sidebar to view all without the extra clicks."
    },
    {
        img : "vanthana.jpg",
        h4_text : "Vanthana",
        h5_text : "FRONT-END DEVELOPER",
        para_1 : "Apparently the updates broke the ability to use the system back button. Super annoying. You're forced to use the app's back button at the top of the screen. This is not convenient because it forces."
    },
    {
        img : "jansi.jpg",
        h4_text : "Jansi Devi",
        h5_text : "BACK-END DEVELOPER",
        para_1 : "Very recently, (last three months) and with growing increasity, the app will not load anything after clicking a video. This has now spread to just 1 or 2 refreshes and the failure to load prompt lands at the bottom of my screen"
    },
    {
        img : "Rekha.jpg",
        h4_text : "Chitra Lekha",
        h5_text : "FULL-STACK DEVELOPER",
        para_1 : "It is a great app and I depend so much on it in my studies, but in the last updates why did you remove offline access to the row (media, files, music..) which appears in the chats, channels and groups."
    }
]

btn2.addEventListener("click",Right_Function)
   
let valid=0;
function Right_Function(){
   valid++;
   if(valid == obj.length)
   {
       valid = 0;
       console.log("hi");
   }
    image1.src=obj[valid].img;
    h4.innerText = obj[valid].h4_text;
    h5.innerText = obj[valid].h5_text;
    para1.innerText = obj[valid].para_1;
}

btn1.addEventListener("click",Left_Function)
function Left_Function()
{
    if(valid > 0)
    {
        valid--;
    }
    else if(valid == 0)
    {
        valid = 4;
        valid--;
    }
    image1.src=obj[valid].img;
    h4.innerText = obj[valid].h4_text;
    h5.innerText = obj[valid].h5_text;
    para1.innerText = obj[valid].para_1;
}

 


