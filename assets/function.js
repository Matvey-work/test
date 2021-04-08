(function ($, window, document, undefined) {
    
    $(document).ready(function() {
        if($('.node-type-vacs .left-vac').length){
          $('.node-type-vacs .left-vac').append('<a href="#block-webform-client-block-31" id="goto-form" class="btn green">Получить работу</a>');
          $('#goto-form').click(function(){
          	$("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top }, 1000);
        	return false;  
          });
        }
    
    	//Temp
    	$('.page-node-162 #block-webform-client-block-31').remove();
    		
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
	        $(this).parent().find('.form-file.multi:last').removeAttr('disabled');
	   	  $(this).parent().find('.form-file.multi:last').trigger('click');
	   	  
	    });
	   
        $(".form-file.multi").on('change', function(){
          readFile(this);
        });

    	
    	if($('.page-node-460').length){
          var s = [
          	$('#edit-submitted-parametry-tip-lica'),
          	$('#edit-submitted-parametry-cvet-glaz'),
          	$('#edit-submitted-parametry-dlina-volos'),
          	$('#edit-submitted-parametry-cvet-volos'),
          	$('#edit-submitted-professionalnye-tancevalnye-navyki-profesiya'),
          	$('#edit-submitted-professionalnye-tancevalnye-navyki-opyt-raboty'),
          	$('#edit-submitted-professionalnye-tancevalnye-navyki-akterskoe-obrazovanie'),
          	$('#edit-submitted-vozmozhnost-vyezda-za-rubezh-nalichie-zagranpasporta'),
          	$('#edit-submitted-vozmozhnost-vyezda-za-rubezh-nalichie-viz'),
          ];
          
          $.each(s, function(){
            this.find('option:first').text(this.closest('.form-item').find('label').text());
            this.closest('.form-item').find('label').remove();
		  });
		  
		  var desc = $('#webform-component-znanie-yazykov-yazyk-uroven--yazyki .description');
		  $('#edit-submitted-znanie-yazykov-yazyk-uroven-yazyki').attr('placeholder',desc.text());
		  desc.remove();
         
		  $('#edit-submitted-personalnye-dannye-data-rozhdeniya').mask("99/99/9999");
          $('input[name="submitted[parametry][rost_sm]"]').mask("199");
          $('input[name="submitted[parametry][ves_kg]"]').mask("99");
          $('input[name="submitted[parametry][razmer_grudi]"]').mask("9");
          
        
        $('form.webform-client-form').submit(function(){
			var errors = false;
			var text ='';
			if(!$('input[name="submitted[personalnye_dannye][imya]"]', $(this)).val()){
				$('input[name="submitted[personalnye_dannye][imya]"]', $(this)).css('border','1px #DD3579 solid');
				errors = true;
				text += '<li>Поле "Имя" обязательно для заполнения</li>';
			}
			if(!$('input[name="submitted[personalnye_dannye][familiya]"]', $(this)).val()){
				$('input[name="submitted[personalnye_dannye][familiya]"]', $(this)).css('border','1px #DD3579 solid');
				errors = true;
				text += '<li>Поле "Фамилия" обязательно для заполнения</li>';
			}
			if(!$('input[name="submitted[personalnye_dannye][data_rozhdeniya]"]', $(this)).val()){
				$('input[name="submitted[personalnye_dannye][data_rozhdeniya]"]', $(this)).css('border','1px #DD3579 solid');
				errors = true;
				text += '<li>Поле "Дата рождения" обязательно для заполнения</li>';
			}
			if(!$('input[name="submitted[parametry][rost_sm]"]', $(this)).val()){
				$('input[name="submitted[parametry][rost_sm]"]', $(this)).css('border','1px #DD3579 solid');
				errors = true;
				text += '<li>Поле "Рост" обязательно для заполнения</li>';
			}
			if(!$('input[name="submitted[parametry][ves_kg]"]', $(this)).val()){
				$('input[name="submitted[parametry][ves_kg]"]', $(this)).css('border','1px #DD3579 solid');
				errors = true;
				text += '<li>Поле "Вес" обязательно для заполнения</li>';
			}
			if(!$('input[name="submitted[parametry][razmer_grudi]"]', $(this)).val()){
				$('input[name="submitted[parametry][razmer_grudi]"]', $(this)).css('border','1px #DD3579 solid');
				errors = true;
				text += '<li>Поле "Размер груди" обязательно для заполнения</li>';
			}
			if(!$('input[name="submitted[kontaktnye_dannye][pochta_e_mail]"]', $(this)).val()){
				$('input[name="submitted[kontaktnye_dannye][pochta_e_mail]"]', $(this)).css('border','1px #DD3579 solid');
				text += '<li>Поле "Email" обязательно для заполнения</li>';
				errors = true;	
			}
			if(!$('input[name="submitted[kontaktnye_dannye][telefon]"]', $(this)).val()){
				$('input[name="submitted[kontaktnye_dannye][telefon]"]', $(this)).css('border','1px #DD3579 solid');
				text += '<li>Поле "Телефон" обязательно для заполнения</li>';
				errors = true;	
			}
			if(!$('input[name="files[portfolio_fotografii][]"]', $(this)).val() || $('input[name="files[portfolio_fotografii][]"]', $(this)).length<3){
				text += '<li>Необходимо добавить три фотографии</li>'
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
     }        
        
        if($("select").length){
            $("select").uniform();
        }
        /*
        if($(":file").length){
        	if(!$(".page-node-167").length)
            $(":file").uniform({
                fileDefaultHtml: 'Фото не выбрано',
                fileButtonHtml: 'Выберите фото'
            });
        }*/
        if($(":radio").length){
            $(":radio").uniform();
        }
        
        if($(".page-node-460").length)
        if($(":checkbox").length){
            $(":checkbox").uniform();
        }
        
        
        if($("#webform-client-form-25").length){
            $(".page-node-25 .connect").click(function(){
                $("#webform-client-form-25").dialog({
                    width:590,
                    resizable:false,
                    title: "ЗАПОЛНИТЕ ФОРМУ ДЛЯ СВЯЗИ С НАМИ",
                    draggable:false
            });
            return false;
            })

        }
        if($("#webform-client-form-167").length){
            $(".page-node-167 .connect").click(function(){
                $("#webform-client-form-167").dialog({
                    width:590,
                    resizable:false,
                    title: "Заполните анкету и получите предложение о работе уже сегодня",
                    draggable:false
            });
            return false;
            })

        }
        
        
        $("#dopin").click(function(){
            $(".field-name-field-u-descr").slideToggle();
            return false;
        });
        
        var tit = $('.view-ac-uid-imgs .views-field-nothing').html();
        $('.view-ac-uid-imgs a').attr('title', tit);        
 		
        $('#field-slideshow-1-wrapper .item-list').after('<div class="controls">'
		+'<a href="#" class="prev-slide"></a>'
 		+'<a href="#" class="next-slide"></a>'
		+'</div>');
		
    	$('#field-slideshow-1-wrapper .item-list').lemmonSlider({
      		'infinite' : true
		});
		
            
    });
    
    
})(jQuery, this, this.document);