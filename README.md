BMagnet
An extension to the magnet URI scheme for WebTorrent

## How it works

BMagnet is just a magnet uri with an extra parameter 'bm'. If not bm parameter is found, the default will be used (https://bmagnet.btorrent.xyz).

BMagnet uses this 'bm' repository to download a cached version of a parsed-torrent (A torrent will all the metadata) or return the magnet uri if the parsed-torrent is not in cache.

## Why?

While using magnet uri in WebTorrent, the client must fetch the metadata prior to download the actual torrent content. To avoid this, we can either use a .torrent file or a parsed-torrent containing the whole metadata.

## How to use it

- require the BMagnet module
- use BMagnet.get() to either get the parsed torrent or the normal magnet uri.

(TO BE COMPLETED)

## BTorrent's BMagnet service

Using [CloudFlare], the BMagnet repository will be hosted for free to start and distributed in their CDN.

## License
MIT. Copyright (c) [Diego Rodríguez Baquero](http://diegorbaquero.com)

[βTorrent]: https://btorrent.xyz
[CloudFlare]: https://www.cloudflare.com/
