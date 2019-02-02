const Navigate = require('../models/actions/navigate.model');
const Input = require('../models/actions/input.model');
const Screenshot = require('../models/actions/screenshot.model');
const puppeteer = require('puppeteer');
const BrowserPageInstance = require('../models/browser-page-instance.model');

class ActionsQueue {
    constructor(config) {
        this.config = config;
        this.actions = this.castActions();
    }

    castActions() {
        let actions = [];
        
        try {
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
                        break;
                    
                }
            });
        } catch(e) {
            console.error(e);
            throw(e);
        }

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

    async extract() {
        const browser = await puppeteer.launch({headless:false});
    
        let page = await new BrowserPageInstance(browser).page;

        let parentAction;

        for(var i = 0; i < this.actions.length; i++) {
            let action = this.actions[i];

            // If has a parent, assign it
            if(parentAction) {
                action.setParent(parentAction);
            }

            await action.run(page);

            // Setup for next child action
            parentAction = action;
        }

        await tab.cleanUp();

        await browser.close();
    }
}

module.exports = ActionsQueue;