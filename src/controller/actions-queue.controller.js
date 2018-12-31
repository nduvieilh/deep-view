const Navigate = require('../models/actions/navigate.model');

class ActionsQueue {
    constructor(config) {
        this.config = config;
        this.actions = castActions();
    }

    castActions(actions) {
        for(actions in this.config.actions) {
            switch(action.action) {
                case 'navigate':
                    this.actions.push(new Navigate(action));
                    break;
            }
        }
    }

    verify() {
        for(action in this.actions) {
            if(!action.verify()) {
                return false;
            }
        }

        return true;
    }
}

exports.defineQueue = ActionsQueue;