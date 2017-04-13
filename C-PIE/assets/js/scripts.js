// JavaScript Document

var c3pieHover = document.querySelectorAll('.c3pie');

	for(var i=0; i<c3pieHover.length; i++){
		
		c3pieHover[i].addEventListener('touchstart',function(){
			
				"use strict";
				
				if(this.classList.contains("hover")){
					this.classList.remove('hover');
				}else{
					this.classList.add('hover');
				}
		});
		
	}