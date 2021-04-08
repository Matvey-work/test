(function($){
$(document).ready(function(){


	window.onscroll = function() {fixedHeader()};
	var header = document.getElementById("header");
	var sticky = header.offsetTop;
	function fixedHeader() {
		if (window.pageYOffset > sticky) {
			header.classList.add("sticky");
		} else {
			header.classList.remove("sticky");
		}
	}

       /*
        function readFile(input) {
	   	  if(!window.FileReader){
             // don't know how to proceed to assign src to image tag
          } else {
            if (input.files) {
           	
              var reader = new FileReader();
              reader.onload = function(e) {
               	
                $(input).parent().find('.MultiFile-title').each(function(){
               	  if($(this).text()==input.files[input.files.length-1].name){
               	    $(this).html('<img src="'+e.target.result+'" width="91" />');
               	  }
               	}); 
              }
              reader.readAsDataURL(input.files[input.files.length-1]);
              return false;
            }
          }
	    }
	    
	    var button = $('<span></span>').addClass('add-photo');
	    $(".form-file.multi").after(button);
	   
	    $('.add-photo').bind('click',function(){
	      //var attr = $(this).parent().find('.form-file.multi:last').attr('disabled');
	      //if($(this).parent().find('.form-file.multi:last').length && (typeof attr !== 'undefined' && attr !== false)){
	        $(this).parent().find('.form-file.multi:last').removeAttr('disabled');
	        //$(this).trigger('click');
	      //}else
	   	  $(this).parent().find('.form-file.multi:last').trigger('click');
	   	  
	    });
	   
        $(".form-file.multi").live('change', function(){
          readFile(this);
        });

    */
/*        $('input[name="submitted[birthday]"]').mask("99/99/9999");
        $('input[name="submitted[rost]"]').mask("199");
        $('input[name="submitted[ves]"]').mask("99");
        $('input[name="submitted[razmer_grudi]"]').mask("9");*/
           

		$("#vaccordion").accordion({
			collapsible: true
		});
		
		$('form.webform-client-form').submit(function(){
			var errors = false;
			var text ='';
			if(!$('input[name="submitted[vashe_imya]"]', $(this)).val()){
				$('input[name="submitted[vashe_imya]"]', $(this)).css('border','1px #DD3579 solid');
				errors = true;
				text += '<li>Поле "Имя" обязательно для заполнения</li>';
			}
			if(!$('input[name="submitted[lastname]"]', $(this)).val()){
				$('input[name="submitted[lastname]"]', $(this)).css('border','1px #DD3579 solid');
				errors = true;
				text += '<li>Поле "Фамилия" обязательно для заполнения</li>';
			}
			if(!$('input[name="submitted[birthday]"]', $(this)).val()){
				$('input[name="submitted[birthday]"]', $(this)).css('border','1px #DD3579 solid');
				errors = true;
				text += '<li>Поле "Дата рождения" обязательно для заполнения</li>';
			}
			if(!$('input[name="submitted[rost]"]', $(this)).val()){
				$('input[name="submitted[rost]"]', $(this)).css('border','1px #DD3579 solid');
				errors = true;
				text += '<li>Поле "Рост" обязательно для заполнения</li>';
			}
			if(!$('input[name="submitted[ves]"]', $(this)).val()){
				$('input[name="submitted[ves]"]', $(this)).css('border','1px #DD3579 solid');
				errors = true;
				text += '<li>Поле "Вес" обязательно для заполнения</li>';
			}
			if(!$('input[name="submitted[razmer_grudi]"]', $(this)).val()){
				$('input[name="submitted[razmer_grudi]"]', $(this)).css('border','1px #DD3579 solid');
				errors = true;
				text += '<li>Поле "Размер груди" обязательно для заполнения</li>';
			}
			if(!$('input[name="submitted[vash_e_mail]"]', $(this)).val()){
				$('input[name="submitted[vash_e_mail]"]', $(this)).css('border','1px #DD3579 solid');
				text += '<li>Поле "Email" обязательно для заполнения</li>';
				errors = true;	
			}
			if(!$('input[name="submitted[vash_telefon]"]', $(this)).val()){
				$('input[name="submitted[vash_telefon]"]', $(this)).css('border','1px #DD3579 solid');
				text += '<li>Поле "Телефон" обязательно для заполнения</li>';
				errors = true;	
			}
			if(!$('input[name="files[prikrepit_fotografiyu][]"]', $(this)).val() || $('input[name="files[prikrepit_fotografiyu][]"]', $(this)).length<2){
				text += '<li>Необходимо добавить минимум две фотографии</li>'
				errors = true;	
			}
			if(errors){
			  $('.form-actions .arrow_box',$(this)).remove();
			  $('.form-actions',$(this)).append('<div class="arrow_box">'+text+'</div>');
			  var h = $('.form-actions .arrow_box',$(this)).height();
			  $('.form-actions .arrow_box',$(this)).css('top', '-'+(h/2)+'px');
			  return false;
			}
			$('.form-actions .arrow_box',$(this)).remove();
			return true;
		});
		$('form.webform-client-form:last').attr('id',$('form.webform-client-form:last').attr('id')+'-last');
		$('form.webform-client-form:last').find(':radio').each(function(){
			$(this).attr('id',$(this).attr('id')+'-last');
			$(this).parent().find('label').attr('for',$(this).attr('id')+'');
			$(this).parent().find('label').unbind();
		});

	//заполняем формы
	if($('.page-node-79').length){
		$("<div>Заполните мини-анкету прямо сейчас и получите возможность зарабатывать от 250 000 руб. в месяц.</div>").insertBefore(".mright #webform-component-vashe-imya");
	}else{
	    $("<div>Заполните мини-анкету прямо сейчас и получите возможность зарабатывать от 150 000 руб. в месяц.</div>").insertBefore(".mright #webform-component-vashe-imya");
	}

    $("<div class='sm1'> Вам перезвонит наш HR-менеджер в течение дня </div>").insertAfter(".mright #edit-prikrepit-fotografiyu_wrap");
    //$("<div class='sm2'> Вы попадете в каталог моделей и будите получать интереснейшие предложения от сотни работодателей.</div> ").insertAfter(".mright #edit-actions");
    
    $("<div>Если у Вас возникли вопросы, предложения или замечания - Вы можете связаться с нашим менеджером.<br/> Для этого заполните, пожалуйста нижеприведенную форму</div>").insertBefore("#contact_us #webform-component-vashe-imya");
    
//форма вверху
  $("input[name='submitted[vashe_imya]']").attr('placeholder', 'Ваше имя');
  $("input[name='submitted[lastname]']").attr('placeholder', 'Ваша фамилия');
  $("input[name='submitted[birthday]']").attr('placeholder', 'дд/мм/гггг');
  $("input[name='submitted[vash_e_mail]']").attr('placeholder', 'Ваш e-mail');
  $("input[name='submitted[vash_telefon]']").attr('placeholder', 'Ваш телефон');
  $("input[name='submitted[vash_gorod_prozhivaniya]']").attr('placeholder', 'Ваш город проживания');
  $("input[name='submitted[soc_profil]']").attr('placeholder', 'Ваш профиль в любой социальной сети, или личный сайт ');
  /*
  var m_name = false;
  var m_mail = false;
  var m_tel = false;
  var m_gorod = false;
  var m_soc = false;

  $("#main_car #edit-submitted-vashe-imya").click(function(){
     if (m_name == false){
        $("#main_car #edit-submitted-vashe-imya").val('');
        m_name = true;
     }
  });
  
  $("#main_car #edit-submitted-vash-e-mail").click(function(){
     if (m_mail == false){
        $("#main_car #edit-submitted-vash-e-mail").val('');
        m_mail = true;
     }
  });
  
  $("#main_car #edit-submitted-vash-telefon").click(function(){
     if (m_tel == false){
        $("#main_car #edit-submitted-vash-telefon").val('');
        m_tel = true;
     }
  });
  $("#main_car #edit-submitted-vash-gorod-prozhivaniya").click(function(){
     if (m_gorod == false){
        $("#main_car #edit-submitted-vash-gorod-prozhivaniya").val('');
        m_gorod = true;
     }
  });  
  $("#main_car #edit-submitted-soc-profil").click(function(){
     if (m_soc == false){
        $("#main_car #edit-submitted-soc-profil").val('');
        m_soc = true;
     }
  });  
  
  
//форма в центре
  $("#sendform1 #edit-submitted-vashe-imya").val('Ваше имя');
  $("#sendform1 #edit-submitted-vash-e-mail").val('Ваш e-mail');
  $("#sendform1 #edit-submitted-vash-telefon").val('Ваш телефон');

  var sf1_name = false;
  var sf1_mail = false;
  var sf1_tel = false;

  $("#sendform1 #edit-submitted-vashe-imya").click(function(){
     if (sf1_name == false){
        $("#sendform1 #edit-submitted-vashe-imya").val('');
        sf1_name = true;
     }
  });
  
  $("#sendform1 #edit-submitted-vash-e-mail").click(function(){
     if (sf1_mail == false){
        $("#sendform1 #edit-submitted-vash-e-mail").val('');
        sf1_mail = true;
     }
  });
  
  $("#sendform1 #edit-submitted-vash-telefon").click(function(){
     if (sf1_tel == false){
        $("#sendform1 #edit-submitted-vash-telefon").val('');
        sf1_tel = true;
     }
  });     
  
  
//вторая форма в центре
  $("#sendform2 #edit-submitted-vashe-imya").val('Ваше имя');
  $("#sendform2 #edit-submitted-vash-e-mail").val('Ваш e-mail');
  $("#sendform2 #edit-submitted-vash-telefon").val('Ваш телефон');

  var sf2_name = false;
  var sf2_mail = false;
  var sf2_tel = false;

  $("#sendform2 #edit-submitted-vashe-imya").click(function(){
     if (sf2_name == false){
        $("#sendform2 #edit-submitted-vashe-imya").val('');
        sf2_name = true;
     }
  });
  
  $("#sendform2 #edit-submitted-vash-e-mail").click(function(){
     if (sf2_mail == false){
        $("#sendform2 #edit-submitted-vash-e-mail").val('');
        sf2_mail = true;
     }
  });
  
  $("#sendform2 #edit-submitted-vash-telefon").click(function(){
     if (sf2_tel == false){
        $("#sendform2 #edit-submitted-vash-telefon").val('');
        sf2_tel = true;
     }
  });   
  
  
//форма внизу
  $("#contact_us #edit-submitted-vashe-imya").val('Ваше имя');
  $("#contact_us #edit-submitted-vash-e-mail").val('Ваш e-mail');
  $("#contact_us #edit-submitted-vash-telefon").val('Ваш телефон');
  $("#contact_us #edit-submitted-vash-gorod-prozhivaniya").val('Ваш город проживания');
  $("#contact_us #edit-submitted-soc-profil").val('Ваш профиль в любой социальной сети, или личный сайт ');


  var cu_name = false;
  var cu_mail = false;
  var cu_tel = false;
  var cu_gorod = false;
  var cu_soc = false;
  $("#contact_us #edit-submitted-vashe-imya").click(function(){
     if (cu_name == false){
        $("#contact_us #edit-submitted-vashe-imya").val('');
        cu_name = true;
     }
  });
  
  $("#contact_us #edit-submitted-vash-e-mail").click(function(){
     if (cu_mail == false){
        $("#contact_us #edit-submitted-vash-e-mail").val('');
        cu_mail = true;
     }
  });
  
  $("#contact_us #edit-submitted-vash-telefon").click(function(){
     if (cu_tel == false){
        $("#contact_us #edit-submitted-vash-telefon").val('');
        cu_tel = true;
     }
  });
  $("#contact_us #edit-submitted-vash-gorod-prozhivaniya").click(function(){
     if (cu_gorod == false){
        $("#main_car #edit-submitted-vash-gorod-prozhivaniya").val('');
        cu_gorod = true;
     }
  });  
  $("#contact_us #edit-submitted-soc-profil").click(function(){
     if (cu_soc == false){
        $("#main_car #edit-submitted-soc-profil").val('');
        cu_soc = true;
     }
  });
  */

	console.log('message');
	/**
	 * инициализирует обработчик маски номеров
	 */
	var phone_mask  =   $('.phone_mask');
	if(phone_mask){
		var listCountries = $.masksSort($.masksLoad("/landing/assets/inputmask/data/phone-codes.json"), ['#'], /[0-9]|#/, "mask");
		var maskOpts = {
			inputmask: {
				definitions: {
					'#': {
						validator: "[0-9]",
						cardinality: 1
					}
				},
				showMaskOnHover: false,
				autoUnmask: true,
				clearMaskOnLostFocus: false
			},
			match: /[0-9]/,
			replace: '#',
			listKey: 'mask'
		};
		phone_mask.inputmasks($.extend(true,{},maskOpts,{list:listCountries}));
		phone_mask.on('complete','',function(){
			var completeFunction=   $(this).attr('data-complete');
			if(completeFunction){
				window[completeFunction]($(this));
			}
		});
	}

	$(document).on('click','.jsViber',function(e){
		e.preventDefault();
		let phone   =   $.cookie('qpComClick-Viber');
		if(phone!=undefined&&phone!=''){
			sendMessengerClick('Viber',phone);
			openMessenger($(this).attr('href'));
		}else{
			showMessagePreForm('Viber',$(this).attr('href'));
		}
	});
	$(document).on('click','.jsWhatsap',function(e){
		e.preventDefault();
		let phone   =   $.cookie('qpComClick-WhatsApp');
		if(phone!=undefined&&phone!=''){
			sendMessengerClick('WhatsApp',phone);
			openMessenger($(this).attr('href'));
		}else{
			showMessagePreForm('WhatsApp',$(this).attr('href'));
		}
	});
	$(document).on('click','.jsTelegram',function(e){
		e.preventDefault();
		let phone   =   $.cookie('qpComClick-Telegram');
		if(phone!=undefined&&phone!=''){
			sendMessengerClick('Telegram',phone);
			openMessenger($(this).attr('href'));
		}else{
			showMessagePreForm('Telegram',$(this).attr('href'));
		}
	});
	$(document).on('click','.jsMessagePreFormSubmit',function(e){
		e.preventDefault();
		let wrap = $(this).closest('.jsMessagePreFormWrap'),
			form = $(this).closest('.jsMessagePreForm');
		if(form.find('[name="phone"]').val().length>9){
			let messenger   =   form.find('[name="messenger"]').val(),
				phone       =   form.find('[name="phone"]').val(),
				url         =   form.find('[name="url"]').val(),
				date        =   new Date(),
				minutes     =   1000000000;
			date.setTime(date.getTime()+(minutes*60*1000));
			$.cookie('qpComClick-'+messenger,phone,{expires:date,path:'/'});
			sendMessengerClick(messenger,phone);
			openMessenger(url);
			wrap.hide();
		}else{
			$('.messagePreFormInput').addClass('errorInput');
			$('.jsMessagePreFormSubmit').prop('disabled',true);
		}
	});
	$(document).on('click','.jsMessagePreFormClose',function(e){
		e.preventDefault();
		$(this).closest('.jsMessagePreFormWrap').hide();
	});
	$(document).on('click','.jsMessagePreFormWrap',function(e){
		e.preventDefault();
		$(this).closest('.jsMessagePreFormWrap').hide();
	});
	$(document).on('click','.jsMessagePreForm',function(e){
		e.stopPropagation();
	});

});
})(jQuery);



function messagePreFormInputComplete(){
	if(isDup($('.messagePreFormInput').val())){
		$('.messagePreFormInput').addClass('errorInput');
	}else{
		$('.messagePreFormInput').removeClass('errorInput');
		$('.jsMessagePreFormSubmit').prop('disabled',false);
	}
}
function sendMessengerClick(messenger,phone){
	$.ajax({
		type:   'POST',
		url:    '/api/clickMessenger.php',
		data:   {m:messenger,u:document.location.origin+document.location.pathname,p:phone},
		cache:  false
	});
}

function showMessagePreForm(messenger,url){
	let wrap = $('.jsMessagePreFormWrap'),
		form = wrap.find('.jsMessagePreForm');
	wrap.find('.jsMessagePreFormIcon').hide();
	wrap.find('.jsMessagePreFormIcon[data-type="'+messenger+'"]').show();
	wrap.find('.jsMessagePreFormTextType').text(messenger);
	$('.jsMessagePreFormSubmit').prop('disabled',true);
	wrap.show();
	form.find('[name="messenger"]').val(messenger);
	form.find('[name="url"]').val(url);
}

function openMessenger(url){
	window.open(url,'_blank');
}
function isDup(s) {
	return new Set(s).size == 1;
}


