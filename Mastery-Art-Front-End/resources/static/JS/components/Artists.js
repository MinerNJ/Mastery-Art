export default function Artists(artists) {
    return `
        <ul class="artists">
            ${artists.map(artist => {
                return `
                    <li>
                        <h3 class="artist__artistName" id="${artist.id}">${artist.artistName}</h3>
                        <img src="${artist.artistImage}" class="artist__image">
                     
                    </li>
                    `
            }).join('')}
        </ul>
        <section class="add__artist">
            <input type="text" class="add__artistName" placeholder="Artist Name">
            <input type="text" class="add__artistImage" placeholder="Image URL">
            <button class="add__artist__button">Add Artist</button>
        </section>
       `
}