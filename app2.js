var arr = [{
        appl: 'aast grand rounds',
        analyst: 'Perkeisha Underwood'
    },
        {
        appl: 'aast',
        analyst: 'Perkeisha Underwood'
        },
        {
            appl: 'accent health',
            analyst: 'Perkeisha Underwood'
        },
        {
            appl: 'accudose carts and support stations',
            analyst: 'Tom Tindall'
        },
        {
            appl: 'accudose',
            analyst: 'Tom Tindall'
        },
        {
            appl: 'ad/cerner account creation',
            analyst: 'Tammy Beal'
        },
        {
            appl: 'ad',
            analyst: 'Tammy Beal'
        },
        {
            appl: 'aegis',
            analyst: 'Colleen Hoffman'
        },
        {
            appl: 'allegiantmd radiology',
            analyst: 'Colleen Hoffman'
        }
            ];

var app, arrLength = arr.length;

function myFunction() {
    var x, analystSupport, app;
    
    
    // Get the value of the input field with id="app"
    x = document.getElementById("app").value;
    app = x.toLowerCase();


    for (var i = 0; i < arrLength; i++){
    
if (app === arr[i].appl){
console.log(arr[i].analyst);
    analystSupport = arr[i].analyst;
} 
    
} //end of iterate through 'arr' array
    document.getElementById("analyst").innerHTML = analystSupport;
}