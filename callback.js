function connectToServer(fun){
    console.log("Connecting to server...");
    setTimeout(function(){
        console.log("Connected to server");
        fun();
    }, 2000);
}

function fetchCources(fun){
    console.log("Fetching Courses...");
    setTimeout(() => {
        fun();
    }, 2000);
}

connectToServer(function(){
    fetchCources(function(){
        console.log("Course fetched..."); // callback hell
    });
});