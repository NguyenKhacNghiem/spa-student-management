function login() {
    let isSuccess = true;

    if ($('#username').val().length === 0) {
      $('#check-un').html('<i class="fa-light fa-shield-exclamation"></i>' + ' Username is required')
      $('#check-un').fadeIn(500);
      isSuccess = false;
    }
    else if ($('#username').val() != 'admin') {
      $('#check-un').html('<i class="fa-light fa-shield-exclamation"></i>' + ' Username is incorrect')
      $('#check-un').fadeIn(500);
      isSuccess = false;
    }
    else
      $('#check-un').fadeOut(500);

    if ($('#pass').val().length === 0) {
      $('#check-pw').html('<i class="fa-light fa-shield-exclamation"></i>' + ' Password is required')
      $('#check-pw').fadeIn(500);
      isSuccess = false;
    }
    else if ($('#pass').val() != '123456') {
      $('#check-pw').html('<i class="fa-light fa-shield-exclamation"></i>' + ' Password is incorrect')
      $('#check-pw').fadeIn(500);
      isSuccess = false;
    }
    else
      $('#check-pw').fadeOut(500);

    if(isSuccess)
    {
      let submit = document.getElementById('submit').remove()
      let reset = document.getElementById('reset').remove()

      let img = document.createElement('img')
      img.setAttribute('src', 'images/loading.gif')
      img.style.width = '350px'

      let buttons = document.getElementById('buttons')
      buttons.append(img)

      setTimeout(() => {  getPageContent('Operation') }, 1500);
    }
  }

  function reset() {
    $('#username').val('')
    $('#pass').val('')
  }