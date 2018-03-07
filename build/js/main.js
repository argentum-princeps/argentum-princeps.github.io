
$('.item__more').click(function(){$(this).parent().parent().parent().parent().toggleClass('active')
$(this).parent().parent().parent().parent().find('.more-hide').toggleClass('more-hide--active');$(this).find('span').text(function(i,text){return text==="Подробнее"?"Свернуть":"Подробнее";})})
function initMap(){var markerLoc={lat:48.4474882,lng:35.0656836};var mapLoc={lat:48.4474882,lng:35.0655996};if(window.matchMedia("(min-width: 1024px)").matches){var map=new google.maps.Map(document.getElementById('map'),{zoom:17,center:mapLoc});}else{var map=new google.maps.Map(document.getElementById('map'),{zoom:17,center:markerLoc});}
var image='../img/location-map-01.svg';var marker=new google.maps.Marker({position:markerLoc,map:map,icon:image});}
$("#slider").ionRangeSlider({grid:true,from:1,values:["1000","5 000","10 000","25 000","50 000"],keyboard:true,onChange:function(data){$('#numberCalls').text(data.from_value)
console.log();}});$('#deal').click(function(){openBid();closeSidebar()});$('.cost-services').click(function(e){e.preventDefault();headerAll.classList.remove('active')
openBid()
closeSidebar()});function openBid(){$('html, body').animate({scrollTop:0},500);$('.home-page').fadeOut(400)
setTimeout("$('body').addClass('application-active')",400)}
$('#closeDeal').click(function(){$('body').removeClass('application-active')
$('html, body').animate({scrollTop:0},500);$('.home-page').fadeIn(300)
return false;})
$('a[href^="#"]').on('click',function(event){var target=$(this.getAttribute('href'));if(target.length){event.preventDefault();$('html, body').stop().animate({scrollTop:target.offset().top},1000);}
closeSidebar()});$(".tel").mask("+38 (999) 999-99-99");$(document).ready(function(){$('.name').on('keypress',function(){var that=this;setTimeout(function(){var res=/[^а-я А-Я a-z A-Z]/g.exec(that.value);that.value=that.value.replace(res,'');},0);});})
var sendModal=document.getElementById('sendModal');sendModal.addEventListener('click',function(){var nameHtml=$('#nameModal');var telHtml=$('#phoneModal');var name=nameHtml.val();var tel=telHtml.val();var isName=false,isTel=false;if(name===undefined){$('#nameModal').attr('placeholder','Вы не ввели свое имя')}else if(name.length<2){$('#nameModal').attr('placeholder','Вы не ввели свое имя')}else
isName=true;if(tel===undefined){$('#phoneModal').attr('placeholder','Вы не ввели свой телефон')}else if(tel.length<2||tel=="+38 (___) ___-__-__"){$('#phoneModal').attr('placeholder','Вы не ввели свой телефон')}else
isTel=true;if(!isName||!isTel)return false;var form_data={'Name':name,'Phone':tel};console.log(form_data)
$.ajax({type:"POST",url:"../sendContact.php",data:form_data,success:function(data){console.log(data)
$('#nameModal').val('');$('#phoneModal').val('');},error:function(data){console.log(data)
$('#nameModal').val('');$('#phoneModal').val('');}});})
var sendContact=document.getElementById('sendContact');sendContact.addEventListener('click',function(){var nameHtml=$('#contactName');var telHtml=$('#contactPhone');var name=nameHtml.val();var tel=telHtml.val();var isName=false,isTel=false;if(name===undefined){$('#contactName').attr('placeholder','Вы не ввели свое имя')}else if(name.length<2){$('#contactName').attr('placeholder','Вы не ввели свое имя')}else
isName=true;if(tel===undefined){$('#contactPhone').attr('placeholder','Вы не ввели свой телефон')}else if(tel.length<2||tel=="+38 (___) ___-__-__"){$('#contactPhone').attr('placeholder','Вы не ввели свой телефон')}else
isTel=true;if(!isName||!isTel)return false;var form_data={'Name':name,'Phone':tel};console.log(form_data)
$.ajax({type:"POST",url:"../sendContact.php",data:form_data,success:function(data){console.log(data)
$('#contactName').val('');$('#contactPhone').val('');},error:function(data){console.log(data)
$('#contactName').val('');$('#contactPhone').val('');}});})
var sendDescr=document.getElementById('sendDescr');sendDescr.addEventListener('click',function(){var nameHtml=$('#descrName');var telHtml=$('#descrPhone');var name=nameHtml.val();var tel=telHtml.val();console.log(name,tel);var isName=false,isTel=false;if(name===undefined){$('#descrName').attr('placeholder','Вы не ввели свое имя')}else if(name.length<2){$('#descrName').attr('placeholder','Вы не ввели свое имя')}else
isName=true;if(tel===undefined){$('#descrPhone').attr('placeholder','Вы не ввели свой телефон')}else if(tel.length<2||tel=="+38 (___) ___-__-__"){$('#descrPhone').attr('placeholder','Вы не ввели свой телефон')}else
isTel=true;if(!isName||!isTel)return false;var form_data={'Name':name,'Phone':tel};console.log(form_data)
$.ajax({type:"POST",url:"../sendContact.php",data:form_data,success:function(data){console.log(data)
$('#descrName').val('');$('#descrPhone').val('');},error:function(data){console.log(data)
$('#descrName').val('');$('#descrPhone').val('');}});})
$('.drop-menu').click(function(){$(this).attr('tabindex',1).focus();$(this).toggleClass('active');$(this).find('.dropeddown').slideToggle(300);});$('.drop-menu').focusout(function(){$(this).removeClass('active');$(this).find('.dropeddown').slideUp(300);});$('.drop-menu .dropeddown li').click(function(){$(this).parents('.drop-menu').find('span').text($(this).text());$(this).parents('.drop-menu').find('input').attr('value',$(this).attr('id'));});