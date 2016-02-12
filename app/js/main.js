var mainModule = (function(){

	//инициализация модуля
	var init = function() {
		_setListners();
	};

	var _setListners = function() {
		$('.add_works').on('click', _showAddProject); // показываем модального окна
		$('.add_project_wrapper, .add_project_close').on('click', _hideAddProject); //скрываем модальное окно по клику на оверлей или по иконке закрыть
		$(document).on('keyup', _hideKeyAddProject); // скрываем модальное по нажатию на  escape
		$('#project_file').on('change', _getAddFileName) // добавляем имя файла в стилизованный input[file]
	}


	//показываем модальное окно добавления проекта
	var _showAddProject = function(event) {
		event.preventDefault();
		$('.add_project_wrapper').fadeIn(100,function(){
			$('.add_project').show()
			.animate({
				'opacity': 1,
				'top': '50%'},
				600
			);
			});
	}

	//скрываем модальное окно добавление проекта
	var _hideAddProject = function() {
		$('.add_project').animate({
			'top': 0,
			'opacity': 0},
			600, function() {
			$('.add_project').hide();
			$('.add_project_wrapper').fadeOut(100);
		});
	}

	//скрываем модальное окно добавление проекта при нажатии клавиши escape
	var _hideKeyAddProject = function(event) {
		if (event.keyCode === 27) {
			_hideAddProject();
		};
	}

	// добавляем имя файла в стилизованный input[file]
	var _getAddFileName = function() {
		var addFileName = $(this).val().replace(/.+[\\\/]/, "");
		$('.add_project_file_label').text(addFileName);
	}

	//возврат публичных методов объекта
	return {
		init: init
	}

})();

//вызов модуля
mainModule.init();