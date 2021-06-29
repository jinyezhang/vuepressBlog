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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ff9682251ab8116eed50cbd0750c21e3"
  },
  {
    "url": "about/index.html",
    "revision": "1efd5bf5b3f9b704beb7a72587ea8314"
  },
  {
    "url": "assets/css/0.styles.6aaa91c1.css",
    "revision": "fde2c425d4e8a0f87d70ece6f5dd13a3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3f010c67.js",
    "revision": "af690679c14848581e4c021fc5f52362"
  },
  {
    "url": "assets/js/11.7370de5e.js",
    "revision": "253d0196d6606df3a893d755cf24957f"
  },
  {
    "url": "assets/js/12.7689d242.js",
    "revision": "7d2ba33cdafab0e7f29c91cf948d934d"
  },
  {
    "url": "assets/js/13.f33d40a8.js",
    "revision": "a3539b290302bbd2da6369fa0ea0bc0b"
  },
  {
    "url": "assets/js/14.1786f468.js",
    "revision": "2ffd1c48832f6922ceac2cfc1627019c"
  },
  {
    "url": "assets/js/15.abbdfae5.js",
    "revision": "ac8cb90d1c14c61a4983b40b4f4327e9"
  },
  {
    "url": "assets/js/16.73fc9aa6.js",
    "revision": "c3af6dc196d06bba327ed4a42b507f9f"
  },
  {
    "url": "assets/js/17.7fc7dbf9.js",
    "revision": "5d718a259958442ab71b06691f062857"
  },
  {
    "url": "assets/js/18.967110c4.js",
    "revision": "d9467212f623bbd7537697ecad90e58e"
  },
  {
    "url": "assets/js/2.858e80da.js",
    "revision": "59b9e09855a16d382db7d8ff58d74b0d"
  },
  {
    "url": "assets/js/3.3e20b9eb.js",
    "revision": "9b7caca6b3a043c92a0bb63cc1c94984"
  },
  {
    "url": "assets/js/4.cbae765c.js",
    "revision": "0868997b5b13679e044e4a076965872a"
  },
  {
    "url": "assets/js/5.1ebd2e81.js",
    "revision": "eef28a829cc9d98dc8ee406017869576"
  },
  {
    "url": "assets/js/6.cba6393f.js",
    "revision": "8e90db42a7294c1bd48af2b7b149ea63"
  },
  {
    "url": "assets/js/7.60457bf5.js",
    "revision": "9923faf5dc3561640de3116a050a8bca"
  },
  {
    "url": "assets/js/8.68bc6415.js",
    "revision": "29ae2d48b4275dbad1a11f5b9c7f1f16"
  },
  {
    "url": "assets/js/9.ce336491.js",
    "revision": "fc2be1d6daed790975f70d554c2a0ff4"
  },
  {
    "url": "assets/js/app.10ac41cb.js",
    "revision": "9e82d6e841be3b2a64054ff5219d27c8"
  },
  {
    "url": "browser/default.html",
    "revision": "bb7b02c7896a97dbf49fde197311bded"
  },
  {
    "url": "browser/index.html",
    "revision": "a180d04464f97b23a2d576b3e5a06e69"
  },
  {
    "url": "elementUi/cascader.html",
    "revision": "eeec9be7c45895d0eb72b032cf4f561b"
  },
  {
    "url": "elementUi/index.html",
    "revision": "d21587b20dbd7390e50400b4ed282900"
  },
  {
    "url": "elementUi/select.html",
    "revision": "f03e4acfcd625b969c8c72bec3417c29"
  },
  {
    "url": "elementUi/upload.html",
    "revision": "c5902f3180f6d4e0501f01b9bebbb024"
  },
  {
    "url": "guide.html",
    "revision": "466c3af40288c1a28a414d1404f36627"
  },
  {
    "url": "images/browser/default/效果图.png",
    "revision": "db873d2454033150a8f25029b7a18970"
  },
  {
    "url": "images/browser/default/记住密码.png",
    "revision": "10391c335838ffcce6fb4f13e96f29d8"
  },
  {
    "url": "images/browser/default/记住密码的处理方法.png",
    "revision": "31a9bdb147d408c7ffdf5e36e47bdf38"
  },
  {
    "url": "images/eg1.png",
    "revision": "b6e00451aa6e2fb07803babc3be44fe3"
  },
  {
    "url": "images/eg12.png",
    "revision": "716c3bede731ed6eecb026377f31aac1"
  },
  {
    "url": "images/eg13.png",
    "revision": "022c1e3380b12aa21dd816cd4f1aeaae"
  },
  {
    "url": "images/eg14.png",
    "revision": "c0b03bb9c818398235ae5ac24fe91204"
  },
  {
    "url": "images/eg2.png",
    "revision": "1c31890ab04672b5b9daad1f8216a89b"
  },
  {
    "url": "images/eg3.png",
    "revision": "c3145209954ef832a2c62740a2133a8b"
  },
  {
    "url": "images/eg4.png",
    "revision": "7b4a9dd311c20e60f1f67205845deca1"
  },
  {
    "url": "images/eg5.png",
    "revision": "d70a372965f420d2faaf40259dce9a1c"
  },
  {
    "url": "images/eg6.png",
    "revision": "64c96504fe466f4baa99423a71573892"
  },
  {
    "url": "images/eg7.png",
    "revision": "5814399d3ba9bdcedb588e2b65059e67"
  },
  {
    "url": "images/eg8.png",
    "revision": "cd30b75ad80917829755a2693a374b02"
  },
  {
    "url": "images/elementUi/cascader/select_远程搜索.png",
    "revision": "0579e5d715ada35f8e6ecc8b48a23384"
  },
  {
    "url": "images/elementUi/cascader/select组件分页获取数据.png",
    "revision": "cbe99bf66ece5273afa93709f88fd321"
  },
  {
    "url": "images/elementUi/cascader/动态加载.png",
    "revision": "451ffb45229b00a07235a195cbf68619"
  },
  {
    "url": "images/elementUi/cascader/基础用法.png",
    "revision": "9303c21670fe828f9717ecce8ae39261"
  },
  {
    "url": "images/elementUi/cascader/异步加载数据.png",
    "revision": "b347846c3c3feade17987fe620ee59ac"
  },
  {
    "url": "images/elementUi/cascader/效果图.png",
    "revision": "01b62a91165fe304041f19a1b14a9d03"
  },
  {
    "url": "images/elementUi/cascader/自定义级联选择器.png",
    "revision": "50c68bb4e8c74b066555e100b6f06a03"
  },
  {
    "url": "images/elementUi/select/使用场景.png",
    "revision": "bfc6be7a2758144a889798420e659766"
  },
  {
    "url": "images/elementUi/select/可搜索功能.png",
    "revision": "587d255ece7de3e41eac60060d7d1834"
  },
  {
    "url": "images/elementUi/select/基础用法.png",
    "revision": "6b853e29896eba082ae097318f0aaa18"
  },
  {
    "url": "images/elementUi/select/远程搜索功能.png",
    "revision": "86978c482572ddafae3b55132041f388"
  },
  {
    "url": "images/jquery/日历/elementUi-日历.png",
    "revision": "0164ff3f10ca6cacd6cf1dd6636f1cf8"
  },
  {
    "url": "images/jquery/日历/效果图.png",
    "revision": "cd77dabaac4b5eb77a7ee18f1d865cf7"
  },
  {
    "url": "images/jquery/递归/原图.png",
    "revision": "8c9d141749a34b1e51d03fc0fd414dab"
  },
  {
    "url": "images/jquery/递归/效果图.png",
    "revision": "217f2eee0a0ea0428176d0e80e00377e"
  },
  {
    "url": "images/photo.jpg",
    "revision": "829702499f77f7990ee4d8a130df4705"
  },
  {
    "url": "images/vue/default/vue取消自动合并空格的解决办法.png",
    "revision": "6b9b1f69dafc0fdb667bda4c4c65bac0"
  },
  {
    "url": "images/vue/default/vue自动合并空格.png",
    "revision": "aa9b52a17b41c815834c8850e19b66c7"
  },
  {
    "url": "images/vue/default/vue自动合并空格导致检索失败.png",
    "revision": "42b068efcbd6dea8a6d4d8b29357c675"
  },
  {
    "url": "images/vue/default/效果图.png",
    "revision": "3da9c438006d0510d83b300df5c6dd74"
  },
  {
    "url": "index.html",
    "revision": "f974461bf5499553d9b0ef89c9dc177f"
  },
  {
    "url": "jquery/canlender.html",
    "revision": "08c46c22b654c9ffb3b8eb5890743e1e"
  },
  {
    "url": "jquery/index.html",
    "revision": "56c69e7c0ee0b7da71f4cb2afc04a1bb"
  },
  {
    "url": "jquery/login.html",
    "revision": "726e85f62a90c8ade7bd455720c97c55"
  },
  {
    "url": "jquery/recursion.html",
    "revision": "cc1540a88daf0a4535c56a712b238c93"
  },
  {
    "url": "vue/default.html",
    "revision": "5ae13dca3db5adaa329e9753f538dbde"
  },
  {
    "url": "vue/index.html",
    "revision": "92de8954f64c7fee084da49dd44b2f38"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
