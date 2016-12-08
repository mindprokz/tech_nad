export default function (elems = []) {
  let num = '';

  if (document.referrer.search(/yandex/) !== -1) {
    num = '+7 7172 772-723';
  } else if (document.referrer.search(/google/) !== -1) {
    num = '+7 7172 772-725';
  } else if (document.referrer.search(/facebook/) !== -1) {
    num = '+7 7172 772-724';
  } else {
    num = '+7 7172 772-725';
  }

  elems.forEach( (elem) => {
    elem.innerHTML = num;
  });
}
