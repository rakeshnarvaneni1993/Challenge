"use strict";

(function() {
	
	var Carousel = {
		props:{
			current_slide_index:0,
			total_slides:3
		},
		init:function(){
			this.bindEvents();
			this.props.current_slide_index = 0;

		},
		bindEvents:function(){
			$(".carousel-next").on("click",function(){
				Carousel.next();
			});
			$(".carousel-prev").on("click",function(){
				Carousel.previous();
			});
		},	
		next:function(){
			var that = this;
			this.Update('next',that);
		},
		previous:function(){
			var that = this;
			this.Update('previous',that);

		},
		Update:function(state,that){
			var id = that.props.current_slide_index;
			var left = id*100;
			var item = $($('.slide-text')[id]); 
			item.css('left',left+'%'); 
			item.attr('id','back');
//Checking if next clicked
			if(state === 'next'){
			id === 2 ? id = 0 : id++; //checking if the slide number is first
			that.props.current_slide_index = id;
			var updateItem = $($('.slide-text')[id]);
			updateItem.css('left','-'+id*100+'%')
			updateItem.attr('id','active');
			}else{    // if previous is clicked
			id === 0 ? id = 2 : id--;  //Checking if the slide number is the last
			that.props.current_slide_index = id;
			var updateItem = $($('.slide-text')[id
				]);
			updateItem.css('left','-'+id*100+'%')
			updateItem.attr('id','active')
			}
	}
}
	$(function(){
		Carousel.init();
	})
}) (window);