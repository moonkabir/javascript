function a(b,c){
    console.log("This is a funcition call....");
    console.log(b);
    console.log(c);
    console.log(this);
}
a.apply("hellow",[5,7])