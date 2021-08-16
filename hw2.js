

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(names){
    //code goes here
    for (let i = 0; i < names.length; i++){
        if (i % 2 == 0){
            names.splice(i,1,'even index');
        }
    }
    console.log(names);
}

replaceEvens(arr);

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]