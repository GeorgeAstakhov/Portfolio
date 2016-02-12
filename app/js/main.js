var mainModule = (function(){

	//инициализация модуля
	var init = function() {
		_setListners();
	};

	var _setListners = function() {
		$('.add_works').on('click', _showAddProject);
		$('.add_project_wrapper, .add_project_close').on('click',_hideAddProject);
		$(document).on('keyup',_hideKeyAddProject);
	}


	//показываем модальное окно добавления проекта
	var _showAddProject = function(event) {
		event.preventDefault();
		$('.add_project_wrapper').show();
		$('.add_project').show();
	}

	//скрываем модальное окно добавление проекта
	var _hideAddProject = function() {
		$('.add_project').hide();
		$('.add_project_wrapper').hide();
	}

	//скрываем модальное окно добавление проекта при нажатии клавиши escape
	var _hideKeyAddProject = function(event) {
		if (event.keyCode === 27) {
			_hideAddProject();
		}
	}

	//возврат публичных методов объекта
	return {
		init: init
	}

})();

//вызов модуля
mainModule.init();