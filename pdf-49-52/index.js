

//FORM

// var email = "abc@gmail.com";
// var pswd = "12345";

// function getName(e) {
//   e.preventDefault();
//   var username = document.getElementById("name").value;
//   var useremail = document.getElementById("email").value;
//   var userpswd = document.getElementById("pswd").value;
//   var userzipCode = document.getElementById("zipcode").value;
  
//   console.log("name");
//   console.log("email");
//   console.log("pswd");
//   console.log("zipcode");
  
//  }

//Q-02

//READ MORE

// function expandPara (){

//    var str = 'This is a short summary of the item...  This is a short summary of the item...  This is a short summary of the item...  This is a short summary of the item...'
 
 
//    document.getElementById("para").innerText = str
// }

//Q-03

//Table

// function displaylist () {
//   var list = 

// }


function addStudent(event) {
  event.preventDefault();
  const name = document.getElementById('studentName').value;
  const classNum = document.getElementById('studentClass').value;

  const table = document.getElementById('studentTableBody');
  const row = document.createElement('tr');

  row.innerHTML = `
      <td>${name}</td>
      <td>${classNum}</td>
      <td>
          <button onclick="editRow(this)">Edit</button>
          <button onclick="deleteRow(this)">Delete</button>
      </td>
  `;
  table.appendChild(row);
  document.getElementById('studentForm').reset();
}

function deleteRow(button) {
  const row = button.parentElement.parentElement;
  row.remove();
}

function editRow(button) {
  const row = button.parentElement.parentElement;
  const name = row.cells[0].innerText;
  const classNum = row.cells[1].innerText;

  document.getElementById('studentName').value = name;
  document.getElementById('studentClass').value = classNum;

  row.remove();
}

