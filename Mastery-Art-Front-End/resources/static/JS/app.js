import events from './utils/events/events-actions'
import api from './utils/api/api-actions'

import Nav from './components/Nav'
import Artists from './components/Artists'
import Artist from './components/Artist'
import Mediums from './components/Mediums'
import Medium from './components/Medium'
import Art from './components/Art'
import ArtPiece from './components/ArtPiece'

nav()
main()


function nav() {
    getNavContext().innerHTML = Nav()
    navArtists()
    navMediums()
    navArt()
    viewSingleArtist()
    viewSingleMedium()
    viewSingleArtPiece()
    addDescriptionToArt()
    addArtists()
}


function main() {
    api.getRequest('http://localhost:8080/art', art => {
      getAppContext().innerHTML = Art(art);
    })

}

function navArtists() {
    events.on(getNavContext(), 'click', () => {
        if (event.target.classList.contains('view__all-artists')) {
            api.getRequest(`http://localhost:8080/artists`, artists => {
                getAppContext().innerHTML = Artists(artists)
            })
        }
    })
}



function navMediums() {
    events.on(getNavContext(), 'click', () => {
        if (event.target.classList.contains('view__all-mediums')) {
            api.getRequest(`http://localhost:8080/mediums`, mediums => {
                getAppContext().innerHTML = Mediums(mediums)
            })
        }
    })
}

function navArt() {
    events.on(getNavContext(), 'click', () => {
        if (event.target.classList.contains('view__all-art')) {
            api.getRequest(`http://localhost:8080/art`, art => {
                getAppContext().innerHTML = Art(art)
            })
        }
    })
}

function viewSingleArtist() {
    events.on(getAppContext(), 'click', () => {
        if (event.target.classList.contains('artist__artistName')) {
            api.getRequest(`http://localhost:8080/artists/${event.target.id}`, artist => {
                getAppContext().innerHTML = Artist(artist)
            })
        }
    })
}

function viewSingleMedium() {
    events.on(getAppContext(), 'click', () => {
        if (event.target.classList.contains('medium__mediumName')) {
            api.getRequest(`http://localhost:8080/mediums/${event.target.id}`, medium => {
                getAppContext().innerHTML = Medium(medium)
            })
        }
    })
}

function viewSingleArtPiece() {
    events.on(getAppContext(), 'click', () => {
        if (event.target.classList.contains('art__singleArtPiece')) {
            api.getRequest(`http://localhost:8080/art/${event.target.id}`, art => {
                getAppContext().innerHTML = ArtPiece(art)
            })
        }
    })
}


function addDescriptionToArt() {
	events.on(getAppContext(), 'click', () => {
		if (event.target.classList.contains('add__description__button')) {
			const descriptionContent = document.querySelector('.add__descriptionContent').value
			api.postRequest(`http://localhost:8080/descriptions/add/${event.target.id}`, {
				descriptionContent: descriptionContent
			}, (art) => getAppContext().innerHTML = ArtPiece(art))
		}
	})
}

function addArtists() {
	events.on(getAppContext(), 'click', () => {
		if (event.target.classList.contains('add__artist__button')) {
			const artistName = document.querySelector('.add__artistName').value
			const artistImage = document.querySelector('.add__artistImage').value
			api.postRequest('http://localhost:8080/artists/add/${event.target.id}', {
				artistName: artistName,
				artistImage: artistImage
			}, (artists) => getAppContext().innerHTML = Artists(artists))
		}
	})
}


function getAppContext() {
    return document.querySelector('#app')
}

function getNavContext() {
    return document.querySelector("#nav")
}