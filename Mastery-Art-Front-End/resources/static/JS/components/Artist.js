import Art from './Art'

export default function Artist(artist) {
    return `
    <div class="artist__container">
        <h3 class="artist__artistName title">Artist: ${artist.artistName}</h3>
        <img src="${artist.artistImage}" class="artist__image">
    </div>


    <ul class="art">
            <h3>Art</h3>
            <li class="art">${Art(artist.art)}</li>
        </ul>

        `
}