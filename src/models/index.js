class Card {
    constructor(title, desc) {
        this.title = title;
        this.desc = desc;
    }

    render() {
        return "<div class='card'>title:" + this.title + "<br>" + "desc:" + this.desc + "</div>";
    }
}

class Slot {
    constructor(cards, slotId) {
        this.cards = cards;
        this.slotId = slotId;
    }

    renderCards() {
        var cardRender = "";
        this.cards.map((card) => {
            cardRender += card.render();
        })
    }

    render() {
        return "<div class='slot' id=" + this.slotId + ">" + this.renderCards() + "</div>"
    }
}