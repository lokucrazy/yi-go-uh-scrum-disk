export class Card {
    constructor(title, desc) {
        this.title = title;
        this.desc = desc;
    }

    render() {
        return "<div class='card'>title:" + this.title + "<br>" + "desc:" + this.desc + "</div>";
    }
}

export class Slot {
    constructor(card, slotId) {
        this.card = card;
        this.slotId = slotId;
    }

    render() {
        console.log(this.slotId, (this.card instanceof Card));
        return (
            "<div class='slot' id=" + this.slotId + ">"
                + this.card !== null ? this.card.render() : "" +
            "</div>"
        );
    }
}