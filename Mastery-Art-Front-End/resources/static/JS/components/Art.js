export default function Art(art) {
    return `
        <ul>
            ${art.map(art => {
                return `
                    <li>
                        <h3 class="art__singleArtPiece" id="${art.id}">${art.artTitle}</h3> 
                        <img src="${art.artImage}" class="art__image">                    
                    </li>
                    `
            }).join('')}
        </ul>
        <section class="add__art">
            <input type="text" class="add__artName" placeholder="Art Type">
            <button class="add__medium__button">Add Art</button>
        </section>
       `
}