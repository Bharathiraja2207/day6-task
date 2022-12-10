//1.movie class
class Movie{
    constructor (title,studio,rating){
        this.title=title;
        this.studio=studio;
        if(rating==undefined){
            this.rating="PG"
        }
        else{
            this.rating=rating;
        }
    }
    getPG(array){
        var result=[];
        for(var i=0;i<array.length;i++){
            if(array[i].rating =="PG"){
                result.push(array[i]);
            }
        }
        return result;
    }
}
var movie1 = new Movie("SPIDER MAN","MARVEL");
var movie2 = new Movie("BAT MAN","DC","PG15");
var movie3 = new Movie("BAGUBALI","GREEN STUDIO");
var movie4 = new Movie("PS1","LOTUS","PG17");
var arr=[movie1,movie2,movie3,movie4];
console.log(movie3.getPG(arr));


//2.circle class
class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    get radiusCircle(){
        return this.radius;
    }
    get colorCircle(){
        return this.color;
    }
    set radiusCircle(radius){
        this.radius=radius;
    }
    set colorCircle(color){
         this.color=color;
    }
    gettostring(){
        return `Circleradius=${this.radius},color=${this.color}`;
    }
    getareaCircle(){
        return Math.PI*this.radius*this.radius;
    }
    getcircumferenceCircle(){
        return 2*Math.PI*this.radius;
    }
}
var obj1=new Circle(1.0,"blue");
console.log(obj1.radiusCircle);

obj1.radiusCircle=2.2;
console.log(obj1.radiusCircle);
console.log(obj1.gettostring());
console.log(obj1.getareaCircle());
console.log(obj1.getcircumferenceCircle());



//3.person class
class Person{
    constructor(name,age,salary,gender){
        this.name=name;
        this.age=age;
       
        this.gender=gender;
        this.salary=salary;
    }
}
var hold=new Person("raja","21","lakh","male")
console.log(hold.name);
console.log(hold.age);
console.log(hold.salary);
console.log(hold.gender);





//4.uber price
class Uber{
    constructor(cost,kilometer){
        this.cost=cost;
        this.kilometer=kilometer;
    }
    get costUber(){
      return this.cost;  
    }
    get kilometerUber(){
        return this.kilometer; 
    }
    set costUber(cost){
        this.cost=cost;  
      }
      set kilometerUber(kilometer){
        this.kilometer=kilometer;  
      }
      gettotalcost(){
       return this.cost*kilometer;
      }
}
var price=new Uber(100,2);
console.log(price.gettotalcost());



