import Description from './Description'

export default function ArtPiece(art) {
    return `
    <div class="artPiece__container">
        <h3 title">Art: ${art.artTitle}</h3>
        <img src="${art.artImage}" class="artPiece__image">
    </div>

    <h3>Descriptions</h3>
        <ul>
            <li item">${Description(art.descriptions)}</li>
        </ul>

        <section class="add__description">
            <input type="text" class="add__descriptionContent" placeholder="Description here">
            <button class="add__description__button" id="${art.id}">Add Description</button>
        </section>
        `
}