// Helpers and connstants
const sha256 = require("sha256")
var dlog = function(){}
// Exports
exports.lhash = {
    "l128":function(string) {
        return encode(string, 128)
    },
    "l256":function(string) {
        return encode(string, 256)
    },
    "l512":function(string) {
        return encode(string, 512)
    },
    "l64k":function(string) {
        return encode(string, 65536)
    },
    "custom":function(string, layers, debug = false) {
        return encode(string, layers, debug)
    }
}

// Define the encode function
const encode = function(string, times, debug = false) {
    // Declare short vars and make sure they are the correct type
    if(debug) dlog = console.log;
    var s = string
    let t = Number(times);
    dlog("[lhash] Input string: " + s)
    dlog("[lhash] Layers: " + t)
    // Run (t) times \\ layers
    for (let step = 0; step < t; step++) {
        s = magic(s)
        dlog("[lhash] Hashing... Layer: " + step + "\\" + t +": " + s )
      }
      // Return the layered hash
      dlog("[lhash] Fínal hash: " + s)
      return s
      
}
// Converts a string to b64
function magic(str) {
    let b64 = Buffer.from(`${str}`).toString('base64')
    dlog("[lhash] Base64: " + b64)
    return sha256(b64)
}