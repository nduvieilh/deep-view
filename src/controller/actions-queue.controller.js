const Navigate = require('../models/actions/navigate.model');
const Input = require('../models/actions/input.model');
const Screenshot = require('../models/actions/screenshot.model');

class ActionsQueue {
    constructor(config) {
        this.config = config;
        this.actions = this.castActions();
    }

    castActions() {
        let actions = [];
        //for(let action in this.config.actions) {
        this.config.actions.forEach(action => {
            switch(action.action) {
                case 'navigate':
                    actions.push(new Navigate(action));
                    break;
                case 'input':
                    actions.push(new Input(action));
                    break;
                case 'screenshot':
                    actions.push(new Screenshot(action));
            }
        });
        //}

        return actions;
    }

    verify() {
        this.actions.forEach(action => {
            if(!action.verify()) {
                return false;
            }
        });

        return true;
    }
}

//exports.ActionsQueue = ActionsQueue;
module.exports = ActionsQueue;