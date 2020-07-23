// ==UserScript==
// @name     Genius Scraper
// @version  1
// @grant    none
// ==/UserScript=

var script = document.createElement('script');
script.innerText = `

setTimeout(function(){execute();}, 1000);
var lastScrollHeight = 0;
function execute() {
		var allSongsButton = document.querySelector('div.full_width_button.u-clickable.u-bottom_margin');
		allSongsButton.click();

		setTimeout(function(){scrollAndLog();}, 2000);
}
function scrollAndLog(){
	var songListWindow = document.querySelector('div.modal_window');
	songListWindow.scrollTo(0, songListWindow.scrollHeight);
	if(songListWindow.scrollHeight > lastScrollHeight){
		console.log('scrolling');
		lastScrollHeight = songListWindow.scrollHeight;
		setTimeout(function(){scrollAndLog();}, 1000);
	}else{
		var songList = document.querySelectorAll('div.modal_window  artist-songs mini-song-card > a');
		songList.forEach(songLink => console.log(songLink.href));
	}
}
`;
document.body.appendChild(script);