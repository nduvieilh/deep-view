const Action = require('./action.model');

class Screenshot extends Action {
    constructor(primitive) {
        super(primitive);
        this.type = primitive.type;
        // Properties for Coordinates type
        this.x = primitive.x;
        this.y = primitive.y;
        this.width = primitive.width;
        this.height = primitive.height;
        // Prototype for Seletor type
        this.selector = primitive.selector;
    }

    verify() {
        if(!'type' in this) {
            return false;
        }

        if('type' in this) {
            switch(this.type) {
                case 'coordinates':
                    if(!'x' in this) {
                        return false;
                    }
                    if(!'y' in this) {
                        return false;
                    }
                    if(!'width' in this) {
                        return false;
                    }
                    if(!'height' in this) {
                        return false;
                    }
                    break;
                case 'selection':
                    if(!'selector' in this) {
                        return false;
                    }
                    break;
                default:
                    return false;
            }
        } else {
            return false;
        }

        return true;
    }
}

module.exports = Screenshot;