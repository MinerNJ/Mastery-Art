import Description from "./Description";

export default function Medium(medium) {
    return `
    <div class="medium__container">
        <h3 title">Medium: ${medium.mediumName}</h3>
    </div>
        `
}