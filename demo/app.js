var WebTorrent = require('webtorrent')

var client = new WebTorrent()

client.add('6a9759bffd5c0af65319979fb7832189f4f3c35d', function(torrent) {
  console.debug('Got metadata for video 1')

  var file = torrent.files[0]

  // Display the file by adding it to the DOM. Supports video, audio, image, etc. files
  file.appendTo('body')
})
