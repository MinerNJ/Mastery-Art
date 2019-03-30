export default function Mediums(mediums) {
    return `
        <ul>
            ${mediums.map(medium => {
                return `
                    <li>
                        <h3 class="medium__mediumName" id="${medium.id}">${medium.mediumName}</h3>                     
                    </li>
                    `
            }).join('')}
        </ul>
        <section class="add__medium">
            <input type="text" class="add__mediumName" placeholder="Medium Type">
            <button class="add__medium__button">Add Medium</button>
        </section>
       `
}