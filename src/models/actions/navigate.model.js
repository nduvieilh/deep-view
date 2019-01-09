class Navigate {
    constructor(primitive) {
        this.url = primitive.url;
    }

    verify() {
        if('url' in this) {
            return true;
        }

        return false;
    }
}

module.exports = Navigate;