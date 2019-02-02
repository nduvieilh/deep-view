class BrowserTabInstance {
    constructor(browser) {
        this.page = browser.newPage();
    }


    cleanUp() {
        this.page.then(page => {
            page.close().catch(console.error);
        }).catch(console.error);
    }
}

module.exports = BrowserTabInstance;