// Принимает объект с настройками для меню
export default class FloatMenu{
  // @params - object

  init(params, callbackStart, callbackEnd){
    var param = {};
    param.elem = params.elem;
    param.height = params.height;
    param.first_class = params.first_class;
    param.second_class = params.second_class;
    param.active_class = params.first_class;

    if(window.pageYOffset > param.height){
      param.elem.classList.add(param.first_class);
      param.elem.classList.add(param.second_class);
      if (callbackStart) {
        callbackStart();
      }
    }else{
      param.elem.classList.add(param.first_class);
      if (callbackEnd) {
        callbackEnd();
      }
    }

    window.addEventListener('scroll', () => {

      if(window.pageYOffset > param.height &&  param.active_class === param.first_class){
        param.elem.classList.add(param.second_class);
        param.active_class = param.second_class;
        if (callbackStart) {
          callbackStart();
        }
      }else if(window.pageYOffset < param.height && param.active_class === param.second_class ){
        param.elem.classList.remove(param.second_class);
        param.active_class = param.first_class;
        if (callbackEnd) {
          callbackEnd();
        }
      }

	});
  }
}
