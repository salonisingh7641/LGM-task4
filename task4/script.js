var outputScreen = document.getElementById("display");


function display(num){
    outputScreen.value +=num;
}

function Calculate(){
        try{
            if(outputScreen.value.includes("%")){
                outputScreen.value=eval(outputScreen.value.replace("%","*0.01"));
                console.log(outputScreen);
            }
            else{
                outputScreen.value=eval(outputScreen.value);
            }
    }
    catch(err)
    {
        alert("invalid");
    }
}

function Clear(){
    outputScreen.value="";
}

function Del(){
    outputScreen.value=outputScreen.value .slice(0,-1);
}
