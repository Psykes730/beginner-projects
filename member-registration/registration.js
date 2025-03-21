const recordFormEl = document.querySelector('#records');
const nameEl =document.querySelector('#name');
const ageEl =document.querySelector('#age');
const emailEl =document.querySelector('#email');
const recordListEl =document.querySelector('#record-list');
const editIndexInputEl =document.querySelector('#edit-index');

let records =JSON.parse(localStorage.getItem('records')) || [];

//for duplicate names
function isDuplicate(email){
    return records.some(
        (record) => record.email.toLowerCase() == email.toLowerCase()
    );
};

function displayRecords(){
    recordListEl.innerHTML = '';
    if(records.length == 0){
        const row = document.createElement('tr');
        row.innerHTML = '<td colspan="5" style="text-align:center;color:red;">No Record Found</td>';
        recordListEl.appendChild(row);
    } else{
        records.forEach((record, index)=>{
            const row = document.createElement('tr');
            row.innerHTML = `<td>${record.name}</td>
            <td>${record.age}</td>
            <td>${record.email}</td>
            <td><button onclick="editRecord(${index})">Edit</button</td>
            <td class="deleteButton"><button onclick="deleteRecord(${index})">Delete</button></td>`;
            recordListEl.appendChild(row);
        });
    }
}

recordFormEl.addEventListener('submit', function(e){
    e.preventDefault();
    const name = nameEl.value;
    const age = ageEl.value;
    const email = emailEl.value;
    const editIndex = parseInt(editIndexInputEl.value);

    if(name && age && email){
        if(isDuplicate(email) && editIndex == -1){
            alert('Member Lready exists.');
            return;
        }
        if(editIndex == -1){
            records.push({name, age, email});
        } else{
            records[editIndex] = {name, age, email};
            editIndexInputEl.value = -1
        };

        localStorage.setItem('records', JSON.stringify(records));
        nameEl.value = '';
        ageEl.value = '';
        emailEl.value ='';
        displayRecords();
    }
});
function editRecord(index){
    const recordToEdit = records[index];
    nameEl.value = recordToEdit.name;
    ageEl.value = recordToEdit.age;
    emailEl.value = recordToEdit.email;
    editIndexInputEl.value = index;
}

function deleteRecord(index){
    displayRecords();
    let delBtn = document.querySelectorAll('.deleteButton');
    
    delBtn[
        index
    ].innerHTML = `<svg id="yesBtn" onclick="confirmDelete(${index})" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> <svg id="noBtn" onclick="resetDelete(${index})" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>`;
}

function confirmDelete(index){
    records.splice(index, 1);
    localStorage.setItem('records', JSON.stringify(records));
    displayRecords();
};

function resetDelete(index){
    displayRecords();
}
displayRecords();