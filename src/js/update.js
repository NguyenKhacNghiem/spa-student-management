function updateStudent() {
    let isSuccess = true;
    let oldId = $('#old-id').val()
    let id = $('#id').val()
    let fn = $('#fn').val()
    let em = $('#em').val()
    let fal = $('#fal').val()
    let dob = $('#dob').val()
    let phone = $('#phone').val()

    if (oldId.length === 0) {
      $('#check-old-id').fadeIn(500);
      isSuccess = false;
    }
    else
      $('#check-old-id').fadeOut(500);

    if (id.length === 0) {
      $('#check-id').fadeIn(500);
      isSuccess = false;
    }
    else
      $('#check-id').fadeOut(500);

    if (fn.length === 0) {
      $('#check-fn').fadeIn(500);
      isSuccess = false;
    }
    else
      $('#check-fn').fadeOut(500);

    if (em.length === 0) {
      $('#check-em').html('<i class="fa-light fa-shield-exclamation"></i>' + ' Email is required')
      $('#check-em').fadeIn(500);
      isSuccess = false;
    }
    else if (em.indexOf('@') === -1) {
      $('#check-em').html('<i class="fa-light fa-shield-exclamation"></i>' + ' Email is incorrect format')
      $('#check-em').fadeIn(500);
      isSuccess = false;
    }
    else
      $('#check-em').fadeOut(500);

    if (fal.length === 0) {
      $('#check-fal').fadeIn(500);
      isSuccess = false;
    }
    else
      $('#check-fal').fadeOut(500);

    if (dob.length === 0) {
      $('#check-dob').html('<i class="fa-light fa-shield-exclamation"></i>' + ' Date of birth is required')
      $('#check-dob').fadeIn(500);
      isSuccess = false;
    }
    else if (dob.indexOf('/') != 2 || dob.lastIndexOf('/') != 5) {
      $('#check-dob').html('<i class="fa-light fa-shield-exclamation"></i>' + ' Right format is dd/mm/yyyy')
      $('#check-dob').fadeIn(500);
      isSuccess = false;
    }
    else
      $('#check-dob').fadeOut(500);
    
    if (phone.length != 10) {
      $('#check-phone').fadeIn(500);
      isSuccess = false;
    }
    else
      $('#check-phone').fadeOut(500);

    if(isSuccess)
    {
      fetch('http://localhost/api/update_student.php', {
              method: 'PUT',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                old_id: oldId,
                new_id: id,
                fullname: fn,
                email: em,
                faculty: fal,
                dob: dob,
                phone: phone
              })
          })

      let add = document.getElementById('add').remove()
      let exit = document.getElementById('exit').remove()

      let img = document.createElement('img')
      img.setAttribute('src', 'images/loading.gif')
      img.style.width = '350px'

      let last = document.getElementById('last')
      last.append(img)

      setTimeout(() => {  getPageContent('Operation') }, 1500);
    }
  }