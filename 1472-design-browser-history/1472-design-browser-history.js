/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.page = {
        url: homepage,
        next: null,
        prev: null
    }
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    this.page.next = {
        url: url,
        next: null,
        prev: this.page
    }
    this.page = this.page.next
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
        while (this.page.prev && steps) {
        this.page = this.page.prev;
        steps--;
    }
    
    return this.page.url;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
        while (this.page.next && steps) {
        this.page = this.page.next;
        steps--;
    }
    
    return this.page.url;
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */