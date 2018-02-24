/**
 * 伪观察者，同名事件会相互覆盖
 */

class Observer {
    constructor() {
        this.events = {};
    }
    on(type, fn) {
        this.events[type] = fn;
        return this;
    }
    trigger(type, ...args) {
        const fn = this.events[type];
        if (fn) {
            console.log(this);
            fn.apply(this, args);
        }
        return this;
    }
    off(type) {
        delete this.events[type];
        this.events[type] = null;
        return this;
    }
}


const b = new Observer();

// b.on('hhh', s => console.log('触发了hhh', s, this));

// b.trigger('hhh', 'ss');



