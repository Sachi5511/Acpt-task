var users = [];

function save() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var contact = document.getElementById('contact').value;
    var town = document.getElementById('town').value;

    var student = {
        name: name,
        age: age,
        contact: contact,
        town: town,
    };

    users.push(student);
    

    getArray();

   
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('contact').value = '';
    document.getElementById('town').value = '';
}

function getArray() {
    var tableBody = document.getElementById('display');

  
    tableBody.innerHTML = "";


    users.forEach(user => {
        var row = `<tr>
                    <td>${user.name}</td>
                    <td>${user.age}</td>
                    <td>${user.contact}</td>
                    <td>${user.town}</td>
                  </tr>`;

        tableBody.innerHTML += row;
    });
}