var ROP = function() {
    this.chain = [];
    this.add = function(val) {
        if (val instanceof Int64) {
            this.chain.push(val.toLow32());
            this.chain.push(val.toHigh32());
        } else {
            this.chain.push(val & 0xffffffff);
            this.chain.push((val / 0x100000000) & 0xffffffff);
        }
    };
    this.clear = function() { this.chain = []; };
};
var p = new ROP();