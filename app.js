window.onload = function () {

    var age = prompt("How old are you?");

    if (age == 0){
       alert("Aw, you are a baby")
    }
    else if (age >=1 && age <= 2){
       alert("You are a toddler");
    }
    else if (age >= 3 && age <= 4){
       alert("You are a preschooler");
    }
    else if (age >= 5 && age <= 11){
       alert("You are a gradeschooler");
    }
    else if (age >= 12 && age <= 17){
       alert("You are a teenager");
    }
    else if (age >= 18 && age <= 20){
       alert("Congrats! You are a young adult");
    }
    else if (age >= 21) {
       alert("Ew, you are an adult");

    } else 

        alert("Hey, you can only enter a number!");
}
