module.exports = BMagnet

var request = require('request')

function BMagnet (magnet_uri) {
  this.value = magnet_uri
  this.retrieved = false
}

BMagnet.prototype.get = function (cb) {
  var self = this
  if (!this.retrieved) {
    request('https://bmagnet.btorrent.xyz/', {timeout: 200}, function (error, response, body) {
      if(error) {
        console.error(error)
        cb(self.value)
        return
        //console.error(error)
      }
      self.value = JSON.parse(body)
      console.debug('Returning value')
      cb(self.value)
    })
  } else {
    console.debug('Well fuck')
    cb(this.value)
  }
}
