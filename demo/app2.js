var BMagnet = require('../index.js')
var WebTorrent = require('webtorrent')

var client = new WebTorrent()

var torrent = new BMagnet('6a9759bffd5c0af65319979fb7832189f4f3c35d')

torrent.get(function(value) {
  console.debug(value)
  client.add(value, function(torrent) {
    console.debug('Got metadata for video 2')

    var file = torrent.files[0]

    // Display the file by adding it to the DOM. Supports video, audio, image, etc. files
    file.appendTo('body')
  })
})
