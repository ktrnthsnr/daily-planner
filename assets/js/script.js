
//disable Enter button, so you can only save with Save button. -- the keydown function, reference: https://stackoverflow.com/questions/5629805/disabling-enter-key-for-form Tarik
window.addEventListener('keydown',function(e){if(e.keyIdentifier=='U+000A'||e.keyIdentifier=='Enter'||e.keyCode==13){if(e.target.nodeName=='INPUT'&&e.target.type=='text'){e.preventDefault();return false;}}},true);


// !! Variables must be declared up top above all the functions, or will break!!
//2. (Global variables) to move variable from get to set
var inputtask = document.querySelector("#testID");
var inputtask2 = document.querySelector("#task2");
var inputtask3 = document.querySelector("#task3");
var inputtask4 = document.querySelector("#task4");
var inputtask5 = document.querySelector("#task5");
var inputtask6 = document.querySelector("#task6");
var inputtask7 = document.querySelector("#task7");
var inputtask8 = document.querySelector("#task8");
var inputtask9 = document.querySelector("#task9");
var inputtask10 = document.querySelector("#task10");
var inputtask11 = document.querySelector("#task11");
var inputtask12 = document.querySelector("#task12");
var inputtask13 = document.querySelector("#task13");
var inputtask14 = document.querySelector("#task14");
var inputtask15 = document.querySelector("#task15");
var inputtask16 = document.querySelector("#task16");
var inputtask17 = document.querySelector("#task17");
var inputtask18 = document.querySelector("#task18");
var inputtask19 = document.querySelector("#task19");
var inputtask20 = document.querySelector("#task20");
var inputtask21 = document.querySelector("#task21");
var inputtask22 = document.querySelector("#task22");
var inputtask23 = document.querySelector("#task23");
var inputtask24 = document.querySelector("#task24");


var submitButton = document.querySelector("#submit");

//4. (Global variables) to move from display function to labels
var usertaskSpan = document.querySelector("#user-task");
var usertask2Span = document.querySelector("#user-task2");
var usertask3Span = document.querySelector("#user-task3");
var usertask4Span = document.querySelector("#user-task4");
var usertask5Span = document.querySelector("#user-task5");
var usertask6Span = document.querySelector("#user-task6");
var usertask7Span = document.querySelector("#user-task7");
var usertask8Span = document.querySelector("#user-task8");
var usertask9Span = document.querySelector("#user-task9");
var usertask10Span = document.querySelector("#user-task10");
var usertask11Span = document.querySelector("#user-task11");
var usertask12Span = document.querySelector("#user-task12");
var usertask13Span = document.querySelector("#user-task13");
var usertask14Span = document.querySelector("#user-task14");
var usertask15Span = document.querySelector("#user-task15");
var usertask16Span = document.querySelector("#user-task16");
var usertask17Span = document.querySelector("#user-task17");
var usertask18Span = document.querySelector("#user-task18");
var usertask19Span = document.querySelector("#user-task19");
var usertask20Span = document.querySelector("#user-task20");
var usertask21Span = document.querySelector("#user-task21");
var usertask22Span = document.querySelector("#user-task22");
var usertask23Span = document.querySelector("#user-task23");
var usertask24Span = document.querySelector("#user-task24");



//2b. (Global variables)
var msgDiv = document.querySelector("#msg");

//1. localStorage.setItem -- Add the input when Button click & add to localStorage
submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    // user input if #task or in html just id="task"
    var task1 = document.querySelector("#testID").value;  
    var task2 = document.querySelector("#task2").value;
    var task3 = document.querySelector("#task3").value;
    var task4 = document.querySelector("#task4").value;
    var task5 = document.querySelector("#task5").value;
    var task6 = document.querySelector("#task6").value;
    var task7 = document.querySelector("#task7").value;
    var task8 = document.querySelector("#task8").value;
    var task9 = document.querySelector("#task9").value;
    var task10 = document.querySelector("#task10").value;
    var task11 = document.querySelector("#task11").value;
    var task12 = document.querySelector("#task12").value;
    var task13 = document.querySelector("#task13").value;
    var task14 = document.querySelector("#task14").value;
    var task15 = document.querySelector("#task15").value;
    var task16 = document.querySelector("#task16").value;
    var task17 = document.querySelector("#task17").value;
    var task18 = document.querySelector("#task18").value;
    var task19 = document.querySelector("#task19").value;
    var task20 = document.querySelector("#task20").value;
    var task21 = document.querySelector("#task21").value;
    var task22 = document.querySelector("#task22").value;
    var task23 = document.querySelector("#task23").value;
    var task24 = document.querySelector("#task24").value;

        //   if (task1 === "") {
        //     displayMessage("error", "You did not enter a task.");
        //       } else if (task2 === "") {
        //          displayMessage("error", "You did not enter a task.");
        //         } else {
        //           displayMessage("success", "Task entered succesfully.");
        //     
            var x = 0;
            if (x!= null) {
            localStorage.setItem("inputtask", task1);
            localStorage.setItem("inputtask2", task2);
            localStorage.setItem("inputtask3", task3);
            localStorage.setItem("inputtask4", task4);
        localStorage.setItem("inputtask5", task5);
        localStorage.setItem("inputtask6", task6);
        localStorage.setItem("inputtask7", task7);
        localStorage.setItem("inputtask8", task8);
        localStorage.setItem("inputtask9", task9);
            localStorage.setItem("inputtask10", task10);
            localStorage.setItem("inputtask11", task11);
            localStorage.setItem("inputtask12", task12);
            localStorage.setItem("inputtask13", task13);
            localStorage.setItem("inputtask14", task14);
            localStorage.setItem("inputtask15", task15);
            localStorage.setItem("inputtask16", task16);
            localStorage.setItem("inputtask17", task17);
            localStorage.setItem("inputtask18", task18);
            localStorage.setItem("inputtask19", task19);
            localStorage.setItem("inputtask20", task20);
            localStorage.setItem("inputtask21", task21);
            localStorage.setItem("inputtask22", task22);
            localStorage.setItem("inputtask23", task23);
            localStorage.setItem("inputtask24", task24);
        }
});

//3. localStorage.getItem -- Display the input
function renderLastRegistered() {
  // Fill in code here to retrieve the last task and task2.
  //var x = localStorage.getItem();
  var displaytask = document.querySelector("#user-task");
      displaytask.textContent = localStorage.getItem("inputtask");

  var displaytask = document.querySelector("#user-task2"); 
      displaytask.textContent = localStorage.getItem("inputtask2");

      var displaytask = document.querySelector("#user-task3"); 
        displaytask.textContent = localStorage.getItem("inputtask3");
 
        var displaytask = document.querySelector("#user-task4"); 
            displaytask.textContent = localStorage.getItem("inputtask4");

        var displaytask = document.querySelector("#user-task5"); 
            displaytask.textContent = localStorage.getItem("inputtask5");

        var displaytask = document.querySelector("#user-task6"); 
             displaytask.textContent = localStorage.getItem("inputtask6");

        var displaytask = document.querySelector("#user-task7"); 
             displaytask.textContent = localStorage.getItem("inputtask7");

        var displaytask = document.querySelector("#user-task8"); 
             displaytask.textContent = localStorage.getItem("inputtask8");

        var displaytask = document.querySelector("#user-task9"); 
             displaytask.textContent = localStorage.getItem("inputtask9");

        var displaytask = document.querySelector("#user-task10"); 
        displaytask.textContent = localStorage.getItem("inputtask10");

        var displaytask = document.querySelector("#user-task11"); 
        displaytask.textContent = localStorage.getItem("inputtask11");

        var displaytask = document.querySelector("#user-task12"); 
        displaytask.textContent = localStorage.getItem("inputtask12");

        var displaytask = document.querySelector("#user-task13"); 
        displaytask.textContent = localStorage.getItem("inputtask13");

        var displaytask = document.querySelector("#user-task14"); 
        displaytask.textContent = localStorage.getItem("inputtask14");

        var displaytask = document.querySelector("#user-task15"); 
        displaytask.textContent = localStorage.getItem("inputtask15");

        var displaytask = document.querySelector("#user-task16"); 
        displaytask.textContent = localStorage.getItem("inputtask16");

        var displaytask = document.querySelector("#user-task17"); 
        displaytask.textContent = localStorage.getItem("inputtask17");

        var displaytask = document.querySelector("#user-task18"); 
        displaytask.textContent = localStorage.getItem("inputtask18");

        var displaytask = document.querySelector("#user-task19"); 
        displaytask.textContent = localStorage.getItem("inputtask19");

        var displaytask = document.querySelector("#user-task20"); 
        displaytask.textContent = localStorage.getItem("inputtask20");

        var displaytask = document.querySelector("#user-task21"); 
        displaytask.textContent = localStorage.getItem("inputtask21");

        var displaytask = document.querySelector("#user-task22"); 
        displaytask.textContent = localStorage.getItem("inputtask22");

        var displaytask = document.querySelector("#user-task23"); 
        displaytask.textContent = localStorage.getItem("inputtask23");

        var displaytask = document.querySelector("#user-task24"); 
        displaytask.textContent = localStorage.getItem("inputtask24");

}

//2a. if input is blank.. (displayMessage is used inside previous function..)
function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

//5. run when the page is Re-rendered (Enter button on URL) or
    // during (on-load), showing the last stored for localStorage
renderLastRegistered();

// ---------------------------------------------------------------------- //

        // clear localStorage
        function clearTasks(){
            localStorage.clear();     
        }

// ---------------------------------------------------------------------- //
