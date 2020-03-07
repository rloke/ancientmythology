// JavaScript Document

function getNews() {

		document.getElementById("web-title").innerHTML = articles.webtitle;
		document.getElementById("web-date").innerHTML = articles.webdetails[0].date;
		document.getElementById("web-time").innerHTML = articles.webdetails[1].time;
		document.getElementById("web-place").innerHTML = articles.webdetails[2].place;
		document.getElementById("web-image").setAttribute("src",articles.webphoto[0].src);
		document.getElementById("web-image").setAttribute("alt",articles.webphoto[1].alt);
		document.getElementById("desc-title").innerHTML = articles.webdescription[0].desctitle;
		document.getElementById("desc-para").innerHTML = articles.webdescription[1].descpara;
		
		document.getElementById("heading1").innerHTML = articles.title1;
		document.getElementById("news1-image").setAttribute("src",articles.photo1[0].src);
		document.getElementById("news1-image").setAttribute("alt",articles.photo1[1].alt);
		document.getElementById("news1-image").setAttribute("class",articles.photo1[2].class);
		document.getElementById("p1-1").innerHTML = articles.texts1[0].P1;
		document.getElementById("p1-2").innerHTML = articles.texts1[1].P2;
		document.getElementById("p1-3").innerHTML = articles.texts1[2].P3;

		document.getElementById("heading2").innerHTML = articles.title2;
		document.getElementById("news2-image").setAttribute("src",articles.photo2[0].src);
		document.getElementById("news2-image").setAttribute("alt",articles.photo2[1].alt);
		document.getElementById("news2-image").setAttribute("class",articles.photo2[2].class);
		document.getElementById("p2-1").innerHTML = articles.texts2[0].P1;
		document.getElementById("p2-2").innerHTML = articles.texts2[1].P2;
		document.getElementById("p2-3").innerHTML = articles.texts2[2].P3;

		document.getElementById("heading3").innerHTML = articles.title3;
		document.getElementById("news3-image").setAttribute("src",articles.photo3[0].src);
		document.getElementById("news3-image").setAttribute("alt",articles.photo3[1].alt);
		document.getElementById("news3-image").setAttribute("class",articles.photo3[2].class);
		document.getElementById("p3-1").innerHTML = articles.texts3[0].P1;
		document.getElementById("p3-2").innerHTML = articles.texts3[1].P2;
		document.getElementById("p3-3").innerHTML = articles.texts3[2].P3;
		document.getElementById("p3-4").innerHTML = articles.texts3[3].P4;
}

function getUpdates() {
	
		document.getElementById("currentDate").innerHTML = currDate();
	
		document.getElementById("heading1").innerHTML = articles.title1;
		document.getElementById("heading2").innerHTML = articles.title2;
		document.getElementById("heading3").innerHTML = articles.title3;
		document.getElementById("news-title").innerHTML = articles.newstitle;

		document.getElementById("web-title").innerHTML = articles.webtitle;
		document.getElementById("web-date").innerHTML = articles.webdetails[0].date;
		document.getElementById("web-time").innerHTML = articles.webdetails[1].time;
}

function currDate(){
	var d = new Date();
	return d.toDateString();
}


/*function currDate(){
	var months = ['January','February','March',
	'April','May','June','July',
	'August','September','October',
	'November','','December'];

	var days = ['Sun','Mon','Tues',
	'Wed','Thur','Fri',
	'Sat'];

	var now = new Date();

	return days[now.getDay()] + ', ' + months[now.getMonth()] + ' ' + now.getDate() + ', ' + now.getFullYear();

}*/
