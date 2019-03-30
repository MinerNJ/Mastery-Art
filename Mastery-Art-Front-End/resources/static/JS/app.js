import events from './utils/events/events-actions'
import api from './utils/api/api-actions'

import Artists from './components/Artists'

main()

function main() {
	api.getRequest('http://localhost:8080/artists', artists => {
        getAppContext().innerHTML = Artists(artists)
    })
    navArtists()
	// navMediums()
    // navArt() 
}

// All Nav functions will live here
function navArtists() {
	const artistButton = document.querySelector('.nav__artists');
	events.on(artistButton, 'click', ()=> {
		api.getRequest('/artists', artists => { 
			getAppContext().innerHTML = Artists(artists)
		})
	})
}

// function navMediums() {
// 	const mediumButton = document.querySelector('.nav__mediums');
// 	events.on(mediumButton, 'click', ()=> {
// 		api.getRequest('/mediums', mediums => {
// 			getAppContext().innerHTML = Mediums(mediums)
// 		})
// 	})
// }

// function NavArt() {
// 	const artButton = document.querySelector('.nav__art');
// 	events.on(artButton, 'click', ()=> {
// 		api.getRequest('/art', art => {
// 			getAppContext().innerHTML = Art(art)
// 		})
// 	})
// }