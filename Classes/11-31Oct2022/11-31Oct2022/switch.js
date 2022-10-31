// Switch-Statment:

// swtich(choice){
//     case casevalue1: code;
//     case casevalue2: code;
//     case casevalue3: code;
//     case casevalue4: code;
//     case casevaluen: code;
// }


function cricketFormat(){
    var noOvers = 100;

    switch(noOvers){
        case 20:console.log("T20 International"); break
        case 50:console.log("One Day International"); break
        case 90:console.log("Test International"); break
        default:console.log("invalid format")
    }
}

cricketFormat();


