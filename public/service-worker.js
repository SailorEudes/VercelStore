if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let i={};const t=e=>a(e,c),o={module:{uri:c},exports:i,require:t};s[c]=Promise.all(n.map((e=>o[e]||t(e)))).then((e=>(r(...e),i)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts("fallback-0jO_aLnITqfrpYsSseSFc.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/404.svg",revision:"d38ac435783a21f1956e5ca6c207228d"},{url:"/_next/static/0jO_aLnITqfrpYsSseSFc/_buildManifest.js",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/0jO_aLnITqfrpYsSseSFc/_middlewareManifest.js",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/0jO_aLnITqfrpYsSseSFc/_ssgManifest.js",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/chunks/307-d50627d3ffb563c5.js",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/chunks/31664189-73731b9fd5f99207.js",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/chunks/415-ee2fcce2f2e74c81.js",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/chunks/450-9362eee088d7b2e5.js",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/chunks/519-f27e0dc57609e1cf.js",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/chunks/529-8c6005d1bb092ad2.js",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/chunks/61-21b85e321ba75b2b.js",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/chunks/650-dc74a591dc47a2f9.js",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/chunks/737-73347a0251fda3c6.js",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/chunks/742-f0381277e0f7c5ee.js",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/chunks/948-a197bfbfb859bd8b.js",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/chunks/963-ca15de7704853d8f.js",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/chunks/ae51ba48-3fc00a6897e6c251.js",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/chunks/d64684d8-7e7db181fda01b4f.js",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/chunks/faee2839-0af3009193e0c0ac.js",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/chunks/framework-8957c350a55da097.js",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/chunks/main-d5b18cecda9eba91.js",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/chunks/pages/404-56cd25ca25cef3d7.js",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/chunks/pages/_app-6be636b38b611044.js",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/chunks/pages/_offline-c13af95eee505fa5.js",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/chunks/pages/about-us-7dedd849c5b6439e.js",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/chunks/pages/checkout-5b1b8d0bd2fa68e1.js",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/chunks/pages/contact-us-8dea9b7c4d7db08f.js",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/chunks/pages/faq-6b59c6781deb6a45.js",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/chunks/pages/index-a5b5a8f2ec5fa6c3.js",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/chunks/pages/offer-4e4e126ed829a4be.js",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/chunks/pages/order/%5Bid%5D-e4bbe76600d8463c.js",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/chunks/pages/privacy-policy-f7d21af41c2f09b3.js",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/chunks/pages/product/%5Bslug%5D-962f5efe029ea901.js",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/chunks/pages/search-a5c7524b2fa04a89.js",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/chunks/pages/terms-and-conditions-88a225db6c7eb648.js",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/chunks/pages/user/change-password-27aec48ac9608ccc.js",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/chunks/pages/user/dashboard-77a9a45a9febfcf7.js",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/chunks/pages/user/my-orders-cbcee6dcfc01f518.js",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/chunks/pages/user/recent-order-44df2837612a4a68.js",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/chunks/pages/user/update-profile-7a561af2070815cb.js",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/chunks/webpack-b927671265afed5e.js",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/css/a5646c038041aee3.css",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/css/bf0fd529c36bb636.css",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/media/revicons.652e7269.eot",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/media/revicons.b96bdb22.ttf",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_next/static/media/revicons.ff59b316.woff",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/_offline",revision:"0jO_aLnITqfrpYsSseSFc"},{url:"/about-banner.jpg",revision:"79bcd14e1663eeb10fd2078a1b40a68a"},{url:"/about-us.jpg",revision:"a69c8f7c944c6dd9673e4e8407684ae9"},{url:"/app-download-img.png",revision:"d21e1731c21448fc66743643130dbeba"},{url:"/app/app-store.svg",revision:"a717e97b14d37aa12c48a288bddf4bae"},{url:"/app/mastercard-icon.svg",revision:"2f3b7f6dc10d68bf74366ce0e4b39217"},{url:"/app/paypal-icon.svg",revision:"99025da84086629516e323641cdfd73b"},{url:"/app/play-store.svg",revision:"a2b0ad8b1000e23bf80ca9ef30b14b97"},{url:"/app/skrill-icon.svg",revision:"01cb261e1e28b74c3f51a379a63216d3"},{url:"/app/visa-icon.svg",revision:"58cb00fe42ab95ae26c5e7e429f04545"},{url:"/banner-1.jpg",revision:"96eaf5765f56f7574dc21db0424668f3"},{url:"/banner-2.jpg",revision:"d08fc088d9d75823e8259261e9208cf2"},{url:"/contact-us.png",revision:"1f0a34dcebe83884f7d986c29069cff0"},{url:"/cta-bg.png",revision:"0dd94ded00743cc74d0da8027b579b73"},{url:"/cta/cta-bg-1.jpg",revision:"4411088729812660a8f233b57a99e8ef"},{url:"/cta/cta-bg-2.jpg",revision:"c53fc622fae56dddae52a273c2e706c9"},{url:"/cta/cta-bg-3.jpg",revision:"2cfcd49bd9471c3da3056d672eaae0ef"},{url:"/facebook-page.png",revision:"0a668853fee7423c27bb93b947a6fc1c"},{url:"/faq.svg",revision:"2979a7b97c0c5d96960e9558a389bbd4"},{url:"/favicon.png",revision:"0033e08ea1185a9ef4ddea787f470df5"},{url:"/icon-192x192.png",revision:"47e2812c3e78f1903ccd46f0545f5d48"},{url:"/icon-256x256.png",revision:"5cfadd2f4679b3d86f1d994297809226"},{url:"/icon-384x384.png",revision:"e793bffd9497800be7d461caa873b96b"},{url:"/icon-512x512.png",revision:"b9df59369ad910b5d3e338e9076fd944"},{url:"/kachabazar-store-min.png",revision:"6bf12cd3f0a8d7ccf8285ea0672bf182"},{url:"/logo/bag-shoping.svg",revision:"54014870b794b613e62017decbe943d0"},{url:"/logo/logo-color.svg",revision:"9cdfd2a1723ebe5d6fbfeb2a3a07765d"},{url:"/logo/logo-dark-2.svg",revision:"990e13afb1b79734e26b71f2fcc062d9"},{url:"/logo/logo-dark.svg",revision:"3d5619a9dd2312d20ee908259e95a635"},{url:"/logo/logo-light-2.svg",revision:"8e9e97fd3acd9a7aa3525e2c5eb93811"},{url:"/logo/logo-light.svg",revision:"a295f016c697789c084b023006b33ac5"},{url:"/manifest.json",revision:"e3f2b37d7219586abcca945243744bf1"},{url:"/no-result.svg",revision:"508b2439b4b83ce579e826c9c625b675"},{url:"/page-header-bg.jpg",revision:"c7cf9224e6c1ae3add73d30c2ae7a8f8"},{url:"/payment-method/payment-logo.png",revision:"e0eda078a9bacaeef62e658bf4ef7778"},{url:"/robots.txt",revision:"61c27d2cd39a713f7829422c3d9edcc7"},{url:"/slider/slider-1.jpg",revision:"9611448d0a85493ee21c5317323cb601"},{url:"/slider/slider-2.jpg",revision:"fe98a6e4032332b05d52aa1254f085a7"},{url:"/slider/slider-3.jpg",revision:"06cef52491c3b8682d15596e784362bb"},{url:"/team/team-1.jpg",revision:"e318a12728d39d01c926be7fbbcd6876"},{url:"/team/team-2.jpg",revision:"ba945720d060272d028634a8729b7d2b"},{url:"/team/team-3.jpg",revision:"dfa429c7e964aa5a8ea01c3959710529"},{url:"/team/team-4.jpg",revision:"490ae645f676543ef728fc2548a6bd3f"},{url:"/team/team-5.jpg",revision:"a345363d59da88084c7fd6de76cc978c"},{url:"/team/team-6.jpg",revision:"39e8a23ea2ae4bc88316d1ddad73132c"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));