img = new Array('1','2','3','4');
indice = 0;
setInterval("mudaImg()", 3300);

function mudaImg(i){
	if(i == 0 || i == 1 || i == 2 || i == 3){		
		indice = i;		
	}else{		
		if(indice == img.length - 1){			
			indice = 0;			
		}else{			
			indice++;			
		}		
	}	
	document.getElementById("design").innerHTML = "<img src='design/"+ img[indice] +".gif'>";
}