This script is for scraping Genius.com for song lyrics
This script is designed to be run via GreaseMonkey
It should be set to run only at https://genius.com/artists/*

The current version of this script scrapes when on an allowed artist page by:

	1. Finding and clicking the button to display a modal widnow with all songs
	2. Scrolling to the bottom of this window to load more content
	3. Repeating this scrolling until no new content is loaded
	4. logging a list of each link to a song page

Future versions of this script will improve this process by:

	1. Making an XMLHttpRequest for each song link
	2. Parsing the results of each request for lyrics
	3. Creating a .txt file for each set of lyrics
	4. Allowing the option to download a folder containing all .txt files created