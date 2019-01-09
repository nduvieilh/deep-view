const Action = require('./navigate.model');

class Input extends Action {
    constructor(primitive) {
        super(primitive);
        this.selector = primitive.selector;
        this.value = primitive.value;

        super.properties = {
            selector: {
                required: false,
                type: 'string'
            }
        };
    }

    verify() {
        if(!'selector' in this) {
            return false;
        }

        if(!'value' in this) {
            return false;
        }

        return true;
    }
}

module.exports = Input;