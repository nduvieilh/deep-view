class Action {
    constructor(primitive) {
        this.action = primitive.action;
        
        this.parentAction;
        this.results;
    }    

    setParent(action) {
        this.parentAction = action;
    }

    getResults() {
        return this.results;
    }
}

module.exports = Action;