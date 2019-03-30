export default function Artist(artist) {
    return `
    <div class="artist__container">
        <h3 class="artist__artistName title">Artist: ${artist.artistName}</h3>
        <img src="${artist.artistImage}" class="artist__image">
    </div>
        `
}