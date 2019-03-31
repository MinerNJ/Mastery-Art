export default function Description(descriptions) {
    return descriptions
        .map(description => {
            return `
            <ul>
                <li class="item">${description.descriptionContent}</li>
            </ul>
            `
        }).join('')
}