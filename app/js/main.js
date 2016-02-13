var mainModule = (function(){

	//инициализация модуля
	var init = function() {
		_setListners();
	};

	var _setListners = function() {
		$('.add_works').on('click', _showAddProject); // показываем модального окна
		$('.add_project_wrapper, .add_project_close').on('click', _hideAddProject); //скрываем модальное окно по клику на оверлей или по иконке закрыть
		$(document).on('keyup', _hideKeyAddProject); // скрываем модальное по нажатию на  escape
		$('#project_file').on('change', _getAddFileName); // добавляем имя файла в стилизованный input[file]
		$('form').on('submit',_formCheck);
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
		$('.add_project_file_text').val(addFileName);
	}

	var _dataValidate = function(){
		var form = $('form');
		var inputData = form.find('input, textarea').not('input[type="file"], input[type="hidden"]');
		inputData.each(function(index, element) {
			var currentElement = $(element).val();
			if (!currentElement) {
				$(element).qtip({
					content: {
						attr: 'qtip-content'
					},
					position: {
						my: 'right center',
						at: 'left center',
						target: $(element)
					},
					show: {
						event: 'show'
					},
					hide: {
						event: 'unfocus'
					},
					style: {
						classes: 'qtip_custom'
					}
				}).trigger('show');
			}
		});
	}

	//запускаем проверку валидации формы при нажатии кнопки submit
	var _formCheck = function(event){
		event.preventDefault();
		_dataValidate();
	}

	//возврат публичных методов объекта
	return {
		init: init
	}

})();

//вызов модуля
mainModule.init();