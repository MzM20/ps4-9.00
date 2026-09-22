function Int64(a, b) {
    var bytes = new Uint8Array(8);
    if (a !== undefined) {
        if (typeof a === 'number') {
            bytes[0] = a & 0xff;
            bytes[1] = (a >> 8) & 0xff;
            bytes[2] = (a >> 16) & 0xff;
            bytes[3] = (a >> 24) & 0xff;
            if (b !== undefined && typeof b === 'number') {
                bytes[4] = b & 0xff;
                bytes[5] = (b >> 8) & 0xff;
                bytes[6] = (b >> 16) & 0xff;
                bytes[7] = (b >> 24) & 0xff;
            }
        } else if (typeof a === 'string') {
            if (a.startsWith('0x')) a = a.substr(2);
            while (a.length < 16) a = '0' + a;
            for (var i = 0; i < 8; i++) {
                bytes[i] = parseInt(a.substr(14 - i * 2, 2), 16);
            }
        } else if (a instanceof Int64) {
            bytes.set(a.bytes);
        }
    }
    this.bytes = bytes;
}

Int64.prototype.toLow32 = function() {
    return (this.bytes[0] | (this.bytes[1] << 8) | (this.bytes[2] << 16) | (this.bytes[3] << 24)) >>> 0;
};

Int64.prototype.toHigh32 = function() {
    return (this.bytes[4] | (this.bytes[5] << 8) | (this.bytes[6] << 16) | (this.bytes[7] << 24)) >>> 0;
};