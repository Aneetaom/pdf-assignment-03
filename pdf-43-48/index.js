
//Q-03

// function deleteRow(button) {
   
//     var row = button.parentNode.parentNode;
//     row.parentNode.removeChild(row);

//     updateIndices();
// }

// function updateIndices() {
//     const table = document.getElementById("studentTable");
//     for (var i = 0; i < table.rows.length; i++) {
//         table.rows[i].cells[0].innerText = i;
//     }
// }


//Q-05

var counter = 0;
        

function increaseCounter() {
    counter++;
    updateCounter();
}


function decreaseCounter() {
  
    if (counter > 0) {
        counter--;
    }
    updateCounter();
}


function updateCounter() {
    document.getElementById('counterValue').textContent = counter;
}