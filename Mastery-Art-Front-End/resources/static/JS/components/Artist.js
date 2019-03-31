export default function Artist(artist) {
    return `
    <div class="artist__container">
        <h3 class="artist__artistName title">Artist: ${artist.artistName}</h3>
        <img src="${artist.artistImage}" class="artist__image">
    </div>

    <section class="add__artist">
            <input type="text" class="add__artistName" placeholder="Artist Name">
            <input type="text" class="add__artistImage" placeholder="Image URL">
            <button class="add__artist__button">Add Artist</button>
        </section>
        `
}