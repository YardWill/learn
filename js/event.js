const addEvent = () => ('addEventListener' in window ? (ele, type, fn) => ele.addEventListener(type, fn, false) : (ele, type, fn) => ele.attachEvent(`on${type}`, fn, false));
