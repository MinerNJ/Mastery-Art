export default function Art(arts) {
    return `
        <ul>
            ${arts.map(art => {
                return `
                    <li>
                        <h3 id="${art.id}">${art.artTitle}</h3>                     
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