export default class sendForm {
  constructor(id, dates, idMail){
    document.getElementById(id).addEventListener('submit', (e) => {
      e.preventDefault();

      let data = dates;

      $.ajax({
        type: "POST",
        url: "mail.php",
        data: data
      }).done(function (value) {
        let mail = document.getElementById(idMail);

        mail.innerHTML = value;
        mail.classList.remove('not_visible_mail');

        setTimeout(function () {
          $(`#${id}`).trigger("reset");
          mail.classList.add('not_visible_mail');
        }, 2000);
      });
    });
  }
}
