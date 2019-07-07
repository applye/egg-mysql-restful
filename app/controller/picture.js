'use strict';

const Controller = require('./common');

class Priture extends Controller {
    constructor(ctx) {
        super(ctx);
    }
    init() {
        this.table = "picture";
    }
}


module.exports =  Priture;
