function confirmDelete(btn, id) {
    let deleteId = document.getElementsByTagName('strong')[0] 
    deleteId.innerHTML = id

    let yesBtn = document.getElementById('confirm') 

    yesBtn.addEventListener('click', function () {
      fetch('http://localhost/api/delete_student.php', {
              method: 'DELETE',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({id: id})
          })
      
      deleteRow(btn)
    })
  }

  function deleteRow(btn) {
    let td = btn.parentElement
    let tr = td.parentElement

    tr.remove()
  }