import events from './utils/events/events-actions'
import api from './utils/api/api-actions'

import Nav from './components/Nav'
import Artists from './components/Artists'
import Mediums from './components/Mediums'
import Art from './components/Art'

nav()
// main()


function nav() {
    getNavContext().innerHTML = Nav()

    viewAllArtists()
    viewAllMediums()
    viewAllArt()

    // navArtists()
	// navMediums()
    // navArt() 
}


// function main() {
//     api.getRequest('http://localhost:8080/artists', artists => {
//       getAppContext().innerHTML = Artists(artists);
//     })

//     viewAllArtists()
//     viewAllMediums()
// }

function viewAllArtists(){
    const artistButton = document.querySelector('.view__all-artists');
    events.on(artistButton, 'click', ()=> {
      api.getRequest(`http://localhost:8080/artists`, artists => {
          getAppContext().innerHTML = Artists(artists)
        })
    })
}
function viewAllMediums() {
    const mediumButton = document.querySelector('.view__all-mediums');
    events.on(mediumButton, 'click', ()=> {
        api.getRequest('http://localhost:8080/mediums', mediums => { 
            getAppContext().innerHTML = Mediums(mediums)
        })
    })
}

function viewAllArt(){
    const artButton = document.querySelector('.view__all-art');
    events.on(artButton, 'click', ()=> {
        api.getRequest('http://localhost:8080/art', art => {
            getAppContext().innerHTML = Art(art)
        })
    })
}
// function viewAllArtists() {
    //     events.on(getAppContext(), 'click', () => {
        //           if(event.target.classList.contains('view__all-artists')) {
            //               api.getRequest(`http://localhost:8080/artists`, artists => {
//                   getAppContext().innerHTML = Artists(artists)
//               })
//           }
//       })
//   }



// function viewAllMediums(){
//     events.on(getAppContext(), 'click', () => {
//         if(event.target.classList.contains('view__all-mediums')){
//             api.getRequest(`http://localhost:8080/mediums`, mediums => {
//                 getAppContext().innerHTML = Mediums(mediums)
//             } )
//         }
//     })
// }


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

function getAppContext() {
	return document.querySelector('#app')
}

function getNavContext() {
    return document.querySelector("#nav")
  }