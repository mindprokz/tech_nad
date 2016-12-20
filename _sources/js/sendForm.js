export default class sendForm {
  constructor(id, dates, idMail){
    document.getElementById(id).addEventListener('submit', (e) => {
      e.preventDefault();

      $.ajax({
        type: "POST",
        url: "mail.php",
        data: {
          name: document.querySelector('#feedback form .name input').value,
          telephone: document.querySelector('#feedback form .tel input').value,
          email: document.querySelector('#feedback form .mail input').value
        }
      }).done(function (value) {
        let mail = document.getElementById(idMail);

        mail.innerHTML = value;
        mail.classList.remove('not_visible_mail');

        setTimeout(function () {
          $(`#${id}`).trigger("reset");
          mail.classList.add('not_visible_mail');
        }, 2000);
      });

      yaCounter41437109.reachGoal('forms');
      ga('send', 'event', 'forms', 'submit');
    });
  }
}
