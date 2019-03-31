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
        <input type="text" class="add__artTitle" placeholder="Art Title">
        <input type="text" class="add__artImage" placeholder="Image URL">
        <button class="add__art__button">Add Art</button>
    </section>
        
       `
}