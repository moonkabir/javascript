try{
    throw new Error("There have a error");
}
catch(e){
    console.log(e.message);
}
console.log("cool!");