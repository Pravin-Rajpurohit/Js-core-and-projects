//Immediately Invoked Function Expression (IIFE)

(function chai(){                   //named iife
    console.log("DB connected");
    
})();

( (Myname) => {                    //unnamed iife
    console.log(`DB connected 2 ${Myname}`);
    
})("Hitesh")

