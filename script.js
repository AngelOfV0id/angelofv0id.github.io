/*

TinySysTime - tiny lightweight date/time HTML5 widget
Written in pure JavaScript by me especially for my website :))))))))))))))))))))

*/

function TinySysTime()
{
	// Monthes and weekdays arrays
	
    var monthes = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    var weekdays = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

	// Get HTML elements by their IDs

    var md = document.getElementById('sys_date');
    var mt = document.getElementById('sys_time');

	// Get current system date/time

    var dt = new Date();

	// Create a Date string

    var ds = "";
    ds += weekdays[dt.getDay() - 1] + ", ";
    if (dt.getDate() < 10) ds += "0";
    ds += dt.getDate() + " ";
    ds += monthes[dt.getMonth()] + " ";
    ds += dt.getFullYear() + " года";

	// Create a Time string

    var ts = "";
    if (dt.getHours() < 10) ts += "0";
    ts += dt.getHours() + ":";
    if (dt.getMinutes() < 10) ts += "0";
    ts += dt.getMinutes() + ":";
    if (dt.getSeconds() < 10) ts += "0";
    ts += dt.getSeconds();

	// Set values
	
    md.innerHTML = ds; mt.innerHTML = ts;
}

// Move to other info container

function MovePage(direction)
{
	var main = document.getElementById('main');
	var header = document.getElementById('header');
	var footer = document.getElementById('footer');
	
	var about_me = document.getElementById('about_me');
	var projects = document.getElementById('projects');
	var contacts = document.getElementById('contacts');
	var friends = document.getElementById('friends');
	
	if (direction == 'main')
	{
		main.style.setProperty('--flyTo', 'translate(-50%, -50%)');
		main.style.setProperty('animation', 'fly 2s 0s 1 ease forwards');
		about_me.style.setProperty('--flyTo', 'translate(-100vw, -50%)');
		about_me.style.setProperty('animation', 'fly 2s 0s 1 ease forwards');
		projects.style.setProperty('--flyTo', 'translate(-50%, -100vh)');
		projects.style.setProperty('animation', 'fly 2s 0s 1 ease forwards');
		contacts.style.setProperty('--flyTo', 'translate(-50%, 100vh)');
		contacts.style.setProperty('animation', 'fly 2s 0s 1 ease forwards');
		friends.style.setProperty('--flyTo', 'translate(100vw, -50%)');
		friends.style.setProperty('animation', 'fly 2s 0s 1 ease forwards');
		header.style.setProperty('opacity', '1');
		footer.style.setProperty('opacity', '1');
	};
	
	if (direction == 'about_me')
	{
		main.style.setProperty('--flyTo', 'translate(100vw, -50%)');
		main.style.setProperty('animation', 'fly 2s 0s 1 ease forwards');
		about_me.style.setProperty('--flyTo', 'translate(-50%, -50%)');
		about_me.style.setProperty('animation', 'fly 2s 0s 1 ease forwards');
		header.style.setProperty('opacity', '0');
		footer.style.setProperty('opacity', '0');
	};
	
	if (direction == 'projects')
	{
		main.style.setProperty('--flyTo', 'translate(-50%, 100vh)');
		main.style.setProperty('animation', 'fly 2s 0s 1 ease forwards');
		projects.style.setProperty('--flyTo', 'translate(-50%, -50%)');
		projects.style.setProperty('animation', 'fly 2s 0s 1 ease forwards');
		header.style.setProperty('opacity', '0');
		footer.style.setProperty('opacity', '0');
	};
	
	if (direction == 'contacts')
	{
		main.style.setProperty('--flyTo', 'translate(-50%, -100vh)');
		main.style.setProperty('animation', 'fly 2s 0s 1 ease forwards');
		contacts.style.setProperty('--flyTo', 'translate(-50%, -50%)');
		contacts.style.setProperty('animation', 'fly 2s 0s 1 ease forwards');
		header.style.setProperty('opacity', '0');
		footer.style.setProperty('opacity', '0');
	};
	
	if (direction == 'friends')
	{
		main.style.setProperty('--flyTo', 'translate(-100vw, -50%)');
		main.style.setProperty('animation', 'fly 2s 0s 1 ease forwards');
		friends.style.setProperty('--flyTo', 'translate(-50%, -50%)');
		friends.style.setProperty('animation', 'fly 2s 0s 1 ease forwards');
		header.style.setProperty('opacity', '0');
		footer.style.setProperty('opacity', '0');
	};
}

TinySysTime(); setInterval(TinySysTime, 1000); // Activate TinySysTime widget