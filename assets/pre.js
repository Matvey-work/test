/**
* @file
* This functions call before other modules will be precessed
*/

(function ($) {  

  Drupal.behaviors.preRequest = {
    attach : function(context) {
      var t ='prikrepit_fotografiyu';
      
      if(typeof MultiFile_fields !== 'undefined'){
        for(var i=0; i<MultiFile_fields.length; i++){
          var j=0;
          $('input[type=file].multi.'+MultiFile_fields[i].id).each(function(){
          	$(this).attr('id','edit-'+t+'_'+j+'');
          	j++;
          });
        }
      }
    }
  }

})(jQuery);