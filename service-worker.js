/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1b11dfef5f2ac70b2458d3a160001431"
  },
  {
    "url": "assets/css/0.styles.98f35480.css",
    "revision": "d42be60f84fab4de0eefc58d29673dcb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.99f03428.js",
    "revision": "e0057861e004f189b8ec739fdc161cd8"
  },
  {
    "url": "assets/js/11.64aafd5a.js",
    "revision": "22ca4dbb3b6ed334325a2ada511a5240"
  },
  {
    "url": "assets/js/12.7669fb0a.js",
    "revision": "4b2abab00901a0ae3365531d72e1af0f"
  },
  {
    "url": "assets/js/13.ff65c147.js",
    "revision": "1b2edd719121c10ea31b842c0122d1ac"
  },
  {
    "url": "assets/js/14.d0fb9a65.js",
    "revision": "b43559a8a56145316bd3127fe3c0962c"
  },
  {
    "url": "assets/js/15.c72a7215.js",
    "revision": "84a52c4b0bd1d1d92cad1171f2193e38"
  },
  {
    "url": "assets/js/16.5a7081ec.js",
    "revision": "980264ef4634771ff9c91ed19dd1f993"
  },
  {
    "url": "assets/js/17.a27fd25d.js",
    "revision": "0c46b9de58432c20d6a756ccd120b85f"
  },
  {
    "url": "assets/js/18.4573dd51.js",
    "revision": "00de76401ab690df83763c4af39f7dcc"
  },
  {
    "url": "assets/js/19.6df45c53.js",
    "revision": "ad04074ffd9195810f350b41739716cf"
  },
  {
    "url": "assets/js/20.e560aea3.js",
    "revision": "264f9bc82df1fba324aae624c77ebdfd"
  },
  {
    "url": "assets/js/21.1bad0371.js",
    "revision": "a146aa96b16b1e2cfe68053e5020bc0d"
  },
  {
    "url": "assets/js/22.b1c0f7b9.js",
    "revision": "dd8af15d951e767f4232c1a804bd2238"
  },
  {
    "url": "assets/js/23.81bb80fc.js",
    "revision": "820d8d1947c760bc101c783d7fdf1d94"
  },
  {
    "url": "assets/js/24.54aa792a.js",
    "revision": "b7d068c4b1bc9851fba5108db3daa385"
  },
  {
    "url": "assets/js/3.1277c491.js",
    "revision": "f4045b4c9a8f19a8e3b1ca75411a0384"
  },
  {
    "url": "assets/js/4.360b7ee4.js",
    "revision": "3147867522c6181727af1f19a07f1b85"
  },
  {
    "url": "assets/js/5.13c40ab8.js",
    "revision": "0912334111e851c52626e1e541a91e90"
  },
  {
    "url": "assets/js/6.be4c4d64.js",
    "revision": "e98bfb9ca633a475a49bc2a40b1c0a2b"
  },
  {
    "url": "assets/js/7.6531c5b7.js",
    "revision": "340835143edd85f4ebf019b18080ab1b"
  },
  {
    "url": "assets/js/8.513d6c01.js",
    "revision": "59b3e6e43e8b3ec679773238e30809b8"
  },
  {
    "url": "assets/js/9.57d07610.js",
    "revision": "635ef17256f25ad6ab18bc8c44b7dfc8"
  },
  {
    "url": "assets/js/app.b744cd35.js",
    "revision": "48eb1107cf95ddf15228748a4110949a"
  },
  {
    "url": "assets/js/vendors~notification.008be287.js",
    "revision": "f0f92cd3cf3c78c6de00ecd43409eb96"
  },
  {
    "url": "guide/alipay/index.html",
    "revision": "d5b459cae99f0b4672a74fdc2ff4dd5e"
  },
  {
    "url": "guide/alipay/init.html",
    "revision": "1fcb6c7ee723168beecc132cfe4e6f69"
  },
  {
    "url": "guide/client/ios.html",
    "revision": "7b10ad666a849788c68203fb14a6b587"
  },
  {
    "url": "guide/client/jpay.html",
    "revision": "ab3f59dce6cbeb320d1a5b305598d525"
  },
  {
    "url": "guide/config/alipay_config.html",
    "revision": "a93b80c5d7a2479d88ffd541f8ed331e"
  },
  {
    "url": "guide/config/weixinpay_config.html",
    "revision": "9077bdedc4386d42d641d8f4ccbe9639"
  },
  {
    "url": "guide/donate/index.html",
    "revision": "b88f5700ed7d69311a5086aac7fc82f4"
  },
  {
    "url": "guide/http.html",
    "revision": "23b92456da4f6afa4ef43ac4dd1f4deb"
  },
  {
    "url": "guide/index.html",
    "revision": "f841907382e943be8e1b37b82e479a65"
  },
  {
    "url": "guide/jdpay/index.html",
    "revision": "0d86c27765ebc5f3df1dbbfe8a6086f7"
  },
  {
    "url": "guide/maven.html",
    "revision": "43d0c36ae00468867bcdf0e7d62daaaa"
  },
  {
    "url": "guide/qqpay/index.html",
    "revision": "422e3888ce18c3c80a31cebf08d8250f"
  },
  {
    "url": "guide/unionpay/index.html",
    "revision": "e37be5a48ef000558bd232e390ee90c6"
  },
  {
    "url": "guide/weixin/tnw.html",
    "revision": "8f276260836da29470fd72f0c7a8e0a2"
  },
  {
    "url": "guide/weixin/weixin_guide.html",
    "revision": "7115cc717a4c0701d23052e099b2c904"
  },
  {
    "url": "guide/wxpay/index.html",
    "revision": "ec0c5fa26964ae41073a4c930e211fd8"
  },
  {
    "url": "index.html",
    "revision": "4e9e213613e5ec58a8b6010730f22ca0"
  },
  {
    "url": "wxpay.jpeg",
    "revision": "519a6443adb0110d19e3bf9f273d5f62"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
