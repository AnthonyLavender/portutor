$('.form').find('input, textarea').on('keyup blur focus', function(e) {
  var $this = $(this),
    label = $this.prev('label');

  if (e.type === 'keyup') {
    if ($this.val() === '') {
      label.removeClass('active highlight');
    } else {
      label.addClass('active highlight');
    }
  } else if (e.type === 'blur') {
    if ($this.val() === '') {
      label.removeClass('active highlight');
    } else {
      label.removeClass('highlight');
    }
  } else if (e.type === 'focus') {

    if ($this.val() === '') {
      label.removeClass('highlight');
    } else if ($this.val() !== '') {
      label.addClass('highlight');
    }
  }
});
$('.tab a').on('click', function(e) {
  e.preventDefault();
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  target = $(this).attr('href');
  $('.tab-content > div').not(target).hide();
  $(target).fadeIn(550);
});



async function getProfileData(){
  const response = await fetch('/getProfileData');
  const data = await response.json();
  console.log(data);
  return data
};

window.onload = function(){
  let LoginForm = document.getElementById("LoginForm");
  LoginForm.addEventListener("sumbit",()=>{
  e.preventDefault();
  let email = document.getElementById("emailInput").value;
  let HashedPassword = passwordHash.generate(document.getElementById("passwordInput").value);

  let userData = getProfileData();

    for(let i = 0; i < userData.length; i++){
      if (userData[i].profile_Email == email && userData[i].profile_Password == HashedPassword){
        
      }{data.splice(i,1)};
    }
  });
}
