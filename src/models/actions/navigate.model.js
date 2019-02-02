const Action = require('./action.model');

class Navigate extends Action {
    constructor(primitive) {
        super(primitive);
        this.url = new URL(primitive.url);
    }

    verify() {
        if('url' in this) {
            return true;
        }

        return false;
    }

    async run(page) {
        try {
            await page.goto(this.url.toString());
        } catch(e) {
            console.error(this.url, e);
        }
    }
}

module.exports = Navigate;