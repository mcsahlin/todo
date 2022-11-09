// G //

// Skapa lista med punkter att göra
//#region Declarations
let arr = ["Borsta fönstret", "Rasta katten", "Damma gården"];
let newTask = document.createElement("li");
let taskList = document.createElement("ul");
let header = document.createElement("h1");
header.innerHTML = "Todo";
let section = document.createElement("section");

//#endregion Declarations

function Init(){
 document.body.appendChild(section);
 section.appendChild(header);
 section.appendChild(taskList);
}
Init();

function RefreshList(){
 for (let i = 0; i < arr.length; i++) {
let task = arr[i];
  newTask.value = task;
  taskList.innerHTML += newTask;

  
 
  console.log(task);
 }
}
RefreshList();







// for (let i = 0; i < todoList.length; i++){
//  newTask.innerHTML = todoList[i];
//  ul.innerHTML += newTask;
// }



// Presententera lista på skärmen med kontroll, ul/li 
function RefreshTaskList(){
 ul.innerHTML = "";
 for (let i = 0; i < todoList.length; i++){
  newTask = todoList[i];
  ul.innerHTML += newTask;
 }
}
// Implementera klick-händelse för att hantera borttagandet av en todo

// Todo tas bort från skärmen och markeras som klar i listan

// Implementera ett valfritt grafiskt ramverk till din todolista, ex bootstrap eller flex

