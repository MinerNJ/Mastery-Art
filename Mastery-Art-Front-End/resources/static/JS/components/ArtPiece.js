export default function ArtPiece(art) {
    return `
    <div class="artPiece__container">
        <h3 title">Art: ${art.artTitle}</h3>
        <img src="${art.artImage}" class="artPiece__image">
    </div>
        `
}