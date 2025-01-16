function connectToServer(){
    console.log("Connecting to server...");
    return new Promise(function(resolve, reject){
        setTimeout(function(){resolve("Connected to server...")}, 2000);
    });
}

function fetchCourses(){
    console.log("Fetching courses");
    return new Promise(function(resolve, reject){
        setTimeout(function(){resolve(["FSM", "Unqork"])}, 2000);
    })
}

connectToServer().then(function(response){
    console.log(response);
    return fetchCourses();
} 
).then(function(response){
    console.log(response);
});