// counter program
const  decreasebtn=document.getElementById("decreasebtn");
const  resetbtn=document.getElementById("resetbtn");
const  increasebtn=document.getElementById("increasebtn");
const countlabel=document.getElementById("countlabel");
let count=0;

decreasebtn.onclick=function(){
    count--;
    countlabel.innerHTML=count;
}

resetbtn.onclick=function(){
    count=0;
    countlabel.innerHTML=count;
}
increasebtn.onclick=function(){
    count++;
    countlabel.innerHTML=count;
}

// Get references to HTML elements
let ageInput = document.getElementById("ageinput");
let ageBtn = document.getElementById("agebutton");
let displayElement = document.getElementById("displaytext");

// When button is clicked, run this function
ageBtn.onclick = function() {
    let age = Number(ageInput.value); 

    if (age < 18) {
        displayElement.innerHTML = "You are not eligible to vote.";
    } else {
        displayElement.innerHTML = "You are eligible to vote.";
    }
};



// let isloggedin = true;
// let username;
// let password;

// while(!isloggedin){
//     username=prompt("enter the username");
//     password=prompt("enter the password");
//     if(username=="admin" && password=="12345"){
//         isloggedin=true;
//         console.log("login successful");
//     }else{
//         console.log("login failed try again");
//     }

// }

let numbers=[1,2,3,4,5,6,7,8,9];
let max=Math.max(...numbers)
console.log(max);

add( displayresult,2,3)

function add(callback,x,y){
    let result=x +y;
    callback(result);
}
function displayresult(result){
    console.log("the result is " +result);
}

////////

function login(username,callback) {
    console.log("Logging in...");

    setTimeout(() => {
        let welcomemsg= `Welcome, ${username}!`
        callback(welcomemsg);
    }, 2000);
}
function todisplay(welcomemsg){
    console.log(welcomemsg);

}
login("Alice",todisplay);
function login(username,callback){
    console.log("logging in......");
    setTimeout(()=>{ let welcomemsg='welcome'+ $(username); callback(welcomemsg)},3000)
}
function todisplay(welcomemsg){console.log(welcomemsg);}



let num=[1,2,3,4,5];
num.forEach((value,index) => {
    console.log(index+":"+value);
});


function person(name,age,city){
    this.name=name;
    this.age=age;
    this.city=city;
}
 let father=new person("aa",50,"hyd");

 let mother=new person("bb",45,"hyd");

 
 let child=new person("cc",12,"hyd");

 console.log(father.name,father.age,father.city);

 console.log(mother.name,mother.age,mother.city);
 console.log(child.name,child.age,child.city);


 class product{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
    display(){
        console.log("productname:"+this.name);
        console.log("productprice:"+this.price);
    }
    salesTax(tax){
        return (this.price*tax ) + this.price;
    }
 }
 let taxrate=0.1;

 let p1=new  product("shirt",200);
 let p2= new product("jeans",500);
p1.display();
p2.display();
salesTax1=p1.salesTax(taxrate);
salesTax2=p2.salesTax(taxrate);
console.log("sales tax for p1:"+salesTax1);
console.log("sales tax for p2:"+salesTax2);


(function () {
  document.getElementById('mybtn').onclick = function () {
    alert("Added to cart");
    console.log("Button clicked");
  };
})();
