const sha256 = require("sha256")
var dlog = function(){}

exports.lhash128 = function(string) {
    return encode(string, 128)
}
exports.lhash256 = function(string) {
    return encode(string, 256)
}
exports.lhash512 = function(string) {
    return encode(string, 512)
}
exports.lhash64k = function(string) {
    return encode(string, 65536)
}
exports.lhashCustom = function(string, times, debug = false) {
    return encode(string, times, debug)
}

const encode = function(string, times, debug = false) {
    // Declare short vars and make sure they are the correct type
    if(debug) dlog = console.log;
    var s = string
    let t = Number(times);
    dlog("[lhash] Input string: " + s)
    dlog("[lhash] Layers: " + t)
    for (let step = 0; step < t; step++) {
        s = magic(s)
        dlog("[lhash] Hashing... Layer: " + step + "\\" + t +": " + s )
      }
      dlog("[lhash] Fínal hash: " + s)
      return s
      
}

function magic(str) {
    let b64 = Buffer.from(`${str}`).toString('base64')
    dlog("[lhash] Base64: " + b64)
    return sha256(b64)
}