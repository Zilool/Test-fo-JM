console.clear();
var LNG=[];
// json:
function asd(){
	var group = document.getElementById("group").value;
		console.log(group);
	// url для запроса:
	var url="https://frontend-test-api.alex93.now.sh/api/languages?group="+group;
	// запрос json:
	fetch(url)
		.then(
			function(response) {
				response.json()
					.then(
						function(exp){
							var res=exp.data;
								// фильтр по Logo:
								var okArr=res.filter( // новый массив
									function(logo){
										var flag=false; // метка для массива
										Object.keys(logo).forEach( // поиск по ключам
											function (key){
												if(String(key).indexOf("logo")>-1) {
													flag=true;
													return;
												}
											}
										);
										if(flag) return logo;
									}
								)
								console.log(okArr);
							window.LNG=okArr;
							go();
						}
					)
			}
		)
	
}

function go(){
	var Rows=(LNG.length);
	console.log("кол-во строк: "+Rows);	
	let Cards=""
	for (var i=0; i<Rows; i++){
	//var i=0
		console.log(i);
		name=(LNG[i].name),
		year=(LNG[i].year),
		prj=(LNG[i].projectsCount),
		link=(LNG[i].docs),
		logo=(LNG[i].logo);
			console.log("Название: "+name);
			console.log("Основание: "+year+"г.");
			console.log("проектов создано: "+prj);
			console.log("Документация: "+link);
			console.log("лого: "+logo)
		if (LNG[i].docs) {
			Cards=Cards+"<div class='card'>"+"<div class='logo-img'>"+"<img src="+LNG[i].logo+">"+"</div>"+"<div class='info'>"+"<p class=name>"+name+"</p>"+"</div>"+"<div class='info make'>"+"<p>Основан в "+year+"</p>"+"<p>"+prj+" проектов на GitHub</p>"+"</div>"+"<div class='info link'>"+"<a href='"+link+"'>Документация</a>"+"</div>"+"</div>"+"</div>";
		} else
		Cards=Cards+"<div class='card'>"+"<div class='logo-img'>"+"<img src="+LNG[i].logo+">"+"</div>"+"<div class='info'>"+"<p class=name>"+name+"</p>"+"</div>"+"<div class='info make'>"+"<p>Основан в "+year+"</p>"+"<p>"+prj+" проектов на GitHub</p>"+"</div>"+"</div>"+"</div>";
		
	}
	document.getElementById('cards').innerHTML=Cards;
}
