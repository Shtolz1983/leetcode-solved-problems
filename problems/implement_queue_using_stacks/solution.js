var MyQueue = function() {
   this.queue = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.queue.length ? (this.queue[this.queue.length] = x) : (this.queue[0] = x); 
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    const res = this.queue[0]
    this.queue = this.queue.slice(1) 
    return res 
    
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.queue[0]
    
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.queue.length ? false : true
    
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */