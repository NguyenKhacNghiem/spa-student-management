function displayViewTable(response) {
    let tbody = document.getElementById('view-tbody') 
    let array = response.data 
    
    array.forEach(x => {
        let tr = document.createElement('tr') ;

        tr.innerHTML = 
        `
            <td>${x.id}</td>
            <td>${x.fullname}</td>
            <td>${x.email}</td>
            <td>${x.faculty}</td>
            <td>${x.dob}</td>
            <td>${x.phone}</td>
        `
        tbody.append(tr) 
    })
}

function displayOperationTable(response) {
    let tbody = document.getElementById('operation-tbody') 
    let array = response.data 
    
    array.forEach(x => {
        let tr = document.createElement('tr') ;

        tr.innerHTML = 
        `
            <td>${x.id}</td>
            <td>${x.fullname}</td>
            <td>${x.email}</td>
            <td>${x.faculty}</td>
            <td>${x.dob}</td>
            <td>${x.phone}</td>
            <td><button onclick="confirmDelete(this, '${x.id}')" data-toggle="modal" data-target="#deleteComfimation" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i></button></td>
        `
        tbody.append(tr) 
    })
}