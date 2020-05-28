
function vender(){
	var precios=document.getElementsByClassName("precio")
	console.log(precios);
	total=0;
	/*
	for (var i = 0; i < precios.length; i++) {
		total=total+parseFloat(precios[i].value);
	}

	precios.forEach(function (elemento)){
		console.log(elemento);
	}

	document.getElementById("salida").innerHTML="Total:"+total;
} */

var sumar=(a,b)=>{
	suma=a+b;
	console.log(suma);
}

function excutor(fn){
	fn();
}
let tutor={
	nombre:"Angel",
	apellido:"Condori",

	nombreCompleto:function(){
		setTimeout(()=>{
			console.log(this.nombre+" "+this.apellido);

		},2000);
	}
}
excutor(tutor.nombreCompleto.bind(tutor));
}