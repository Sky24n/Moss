'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "bba7a42bed2cf741604b24d995f6a1ad",
"assets/assets/data/car_models.json": "99e8389a984e3aacaccac3fffe431f8a",
"assets/assets/data/china.json": "9b1ea3919cf6f6ba4f2471acc5f8e9d4",
"assets/assets/data/contacts.json": "6b45ef21f7e8bf1c05c1da38adab342d",
"assets/assets/images/aihome_poidetail_bottombar_fave_no.png": "76e0873e0dda74687137f0c2fee26635",
"assets/assets/images/aihome_poidetail_bottombar_zhoubian.png": "a38e736549414f3b7813f58667b2421c",
"assets/assets/images/aihome_poidetail_icon_route_bike_white.png": "c6833ac487349e712ed061d9b3d50c6a",
"assets/assets/images/aihome_poidetail_icon_route_bus_white.png": "2a635933b8eb3806829813d503be65aa",
"assets/assets/images/aihome_poidetail_icon_route_car_white.png": "e1b6b3549b59486d1e8a7a56aa588719",
"assets/assets/images/aihome_poidetail_icon_route_foot_white.png": "47a8add0ed0cd8bf7633800322d13cc0",
"assets/assets/images/aj6.png": "9557a2a9ca283dd948d686b4182cbdb0",
"assets/assets/images/ali_connors.png": "1eca835824bb5c2ed2b86841ecc9ca1a",
"assets/assets/images/avatar.png": "c2c81cacb4f830f7e69ab9a5d99fe779",
"assets/assets/images/host_item_notice_title_icon.png": "7b859247fe5899cadcc65f2dbd26ba3f",
"assets/assets/images/icon_addr_dest.png": "5e2094581736ba11226254930866dd2f",
"assets/assets/images/icon_addr_origin.png": "3f6e3ec07487e900c628559a0fbdd139",
"assets/assets/images/icon_all_services.png": "46cfecfdd812331b4db5f9b7fa18d1c4",
"assets/assets/images/icon_close_down.png": "e9dfb5c6d3028e724c18c3244fc6a17d",
"assets/assets/images/icon_left_customer_service.png": "5ab6b19dbf611e82dc51f1d437864e47",
"assets/assets/images/icon_left_route.png": "eb4e4133023ba166ecb8770fa4e57553",
"assets/assets/images/icon_left_setting.png": "ddab6e832849d87b91a32722c1810f89",
"assets/assets/images/icon_left_star.png": "83b29e84267e94a2522f62b960330bf5",
"assets/assets/images/icon_left_wallet.png": "af2d3408e0fb607bb47ee4c4fc2aca22",
"assets/assets/images/icon_map_loc.png": "8ef364d7c3d5a64108cf443dfdc4502e",
"assets/assets/images/icon_poi.png": "6193cac05d87ab0ec2c5685fc40761b8",
"assets/assets/images/icon_poi_search_close.png": "6aefca910743384b1cf625501fd4a8b1",
"assets/assets/images/icon_service_close.png": "41d8dd8eb7dfd27ab5b6259700530657",
"assets/assets/images/icon_title_didi.png": "0f311dc7e06415bf236c449c5407ebdb",
"assets/assets/images/icon_title_down.png": "60a4126fb9234f4ccfb81ebb735ad502",
"assets/assets/images/icon_title_msg.png": "b04e5ba828f6d5d302c6ab972e60ad0f",
"assets/assets/images/icon_title_scan.png": "cf7190d12607e6b814ebe99bed96ca83",
"assets/assets/images/icon_user_header_def.png": "cd113bb0891b347ad766be7dec8780bc",
"assets/assets/images/ic_amap_84_bus_white.webp": "3f8e93061c199c7f8030d316eaa8b05c",
"assets/assets/images/ic_amap_84_car_white.webp": "6959a5c7a686855df76ed6b890fe41f2",
"assets/assets/images/ic_amap_84_commuting_white.webp": "5b472a933d4cb3909d79d137f0191ad0",
"assets/assets/images/ic_amap_84_cycling_white.webp": "18a442e2bd8e0fd826d2789365b5c786",
"assets/assets/images/ic_amap_84_favorites_white.webp": "47894d070500a59fde924ff94de88574",
"assets/assets/images/ic_amap_84_global_tourism_white.webp": "b7b566c6d7e246a26ae13a816e816f21",
"assets/assets/images/ic_amap_84_realtimebus_white.webp": "abda9a48d7f84be20c5493f76a00f23d",
"assets/assets/images/ic_amap_84_taxi_white.webp": "2278fd9444bec1f50e9721e5909c509c",
"assets/assets/images/ic_amap_84_tools_white_circle.webp": "8fca24340d4e0df332d89bb77679e928",
"assets/assets/images/ic_amap_84_walking_white.webp": "a3391b43b25fe031de832904c3c3bd87",
"assets/assets/images/ic_amap_company_o.webp": "12abdf2acee90a21b8f4ae2d26c4365c",
"assets/assets/images/ic_amap_gps_focus.webp": "62623df7264c111db7ccba1ccfef3127",
"assets/assets/images/ic_amap_gps_normal.webp": "02ed56ac5ed72c61c934b6f010f22997",
"assets/assets/images/ic_amap_home_o.webp": "07890263769746334f587a8b795adbdb",
"assets/assets/images/ic_amap_plus_o.webp": "c54b53fafafe0ca79876c0b56ee91b09",
"assets/assets/images/ic_amap_policy_location.webp": "56d89ecd95b1867e71a48a4f00bb1211",
"assets/assets/images/ic_amap_policy_phone.webp": "50f9d5111b874a090dfc542a4e3104fd",
"assets/assets/images/ic_amap_policy_storage.webp": "2362085deec42053d39cd59812656987",
"assets/assets/images/ic_amap_searchbar_qrscan.webp": "428fc7999520c5a60b098b53dce95136",
"assets/assets/images/ic_amap_searchbar_search_icon.webp": "b18455999f1bfdee5e84cc9e3cf9d45c",
"assets/assets/images/ic_amap_vui_emoji_cannot_wakeup.webp": "ee77bd1b59dd40074e5d1e0b0380bd80",
"assets/assets/images/ic_arrow_up.png": "2ee3f3f1413bd6b0b4e360a34cacc1b8",
"assets/assets/images/ic_avatar_default.png": "88181cc5bfbd7adbf7275c3335e20107",
"assets/assets/images/ic_car_models_header1.png": "86b6cde768030fa76a1f5675e44afabb",
"assets/assets/images/ic_car_models_header2.png": "15fd90df51b5963641859858f9d30ba7",
"assets/assets/images/ic_cover_image_bg.png": "af4beac0ca162a078aae2f759d2eb0c2",
"assets/assets/images/ic_default_avatar_male.png": "1ae5f682bba916af97aaaddbf193a0f6",
"assets/assets/images/ic_favorite.png": "43b3c82a1331d2851d3d9d06d8c4feeb",
"assets/assets/images/ic_fork.png": "221f9d4b765d9e807721e8f98f980a7f",
"assets/assets/images/ic_g_1_place_medal.png": "782c469bb5a0d59a4d37810c82765f12",
"assets/assets/images/ic_g_2_place_medal.png": "c579a39ff1cb4fc4b5c8ede1351525da",
"assets/assets/images/ic_g_3_place_medal.png": "ecd7be37da18e9d90eb65fcd8d1089ac",
"assets/assets/images/ic_g_star.png": "a4674fc7917ed2e41f74d9eb024fd8f3",
"assets/assets/images/ic_image_load_fail.png": "d29fd6c35ee150af71738a0ae3bb782b",
"assets/assets/images/ic_index_bar_bubble_gray.png": "814ae2cd5ecf2e3e598d038be1ab42c8",
"assets/assets/images/ic_index_bar_bubble_white.png": "3a428b9603817acb16fc3abcfade936f",
"assets/assets/images/ic_launcher_new.png": "98c6c7770c74a0fe85d7d42bc6f7002f",
"assets/assets/images/ic_launcher_new1.png": "70b92f4ec8ac2f6a29cd3f67d7922c4e",
"assets/assets/images/ic_loading_white.png": "d242f818371ba532f9ed33e9236f7394",
"assets/assets/images/ic_mblog_menus_cancel_favorite.png": "d3952d43f0fa95587b32b97c3918c6f5",
"assets/assets/images/ic_mblog_menus_delete.png": "1fe943f0b632f93f61f31419f1019ce4",
"assets/assets/images/ic_mblog_menus_favorite.png": "43b3c82a1331d2851d3d9d06d8c4feeb",
"assets/assets/images/ic_mblog_menus_popularize.png": "3753523037a9185222df50b9957e662b",
"assets/assets/images/ic_mblog_menus_report.png": "0f87441d77c71da18552ccd88d346127",
"assets/assets/images/ic_mblog_menus_shield.png": "add63afab5f4f646ea75076a1f21820e",
"assets/assets/images/ic_mblog_menus_unfollow.png": "31ffd3313bd7ae2981cdceaf0fb4aa64",
"assets/assets/images/ic_network_error.png": "151091c41416824a2420b186c2e91a80",
"assets/assets/images/ic_share_group_long_pic.png": "3fc9037686fd0f04f517ae80624249f2",
"assets/assets/images/ic_share_group_qq.png": "410acfef6ac79e445ab3a517d261bce0",
"assets/assets/images/ic_share_group_qqzone.png": "382afd03b574bf18ba1e232f61155dd0",
"assets/assets/images/ic_share_group_wx.png": "3fad9b213e8a300184da3baf6889ea3d",
"assets/assets/images/ic_share_group_wxfirend.png": "4f854e676fb18110f05d6643c63b1919",
"assets/assets/images/ic_test_img_me.png": "86b97ded9503441fa31e15096dd6d5d0",
"assets/assets/images/ic_test_img_nearby2.png": "c391d1b364162f1270a94728c8b84122",
"assets/assets/images/ic_timeline_comment.png": "a935ff52dcfc9688ff4ecffa5fb7e3a7",
"assets/assets/images/ic_timeline_retweet.png": "b328c11bbd7a5a874029ffa165fec797",
"assets/assets/images/ic_timeline_unlike.png": "9295c1164df737ca1f6b2dc07910ee1a",
"assets/assets/images/ic_trash_can.png": "161fb32b307336e7fa9b6c357042f403",
"assets/assets/images/ic_trash_can_open.png": "f73dfd3ef9263be93bb7431f70549a64",
"assets/assets/images/ic_userinfo_female.png": "3b4191cbc11347ae690857061f232cba",
"assets/assets/images/ic_userinfo_male.png": "5938bd1c2fa42893727721199b478347",
"assets/assets/images/moss_didi.png": "cd6f41a11ec9a3f294ed1d880388cf35",
"assets/assets/images/moss_github.png": "eae8ecfeb4ea7c7ac40040970e1cb939",
"assets/assets/images/moss_home.png": "0b33375c9cb08fbb0479c61f9718ac2f",
"assets/assets/images/moss_map.png": "a58779865eea8bde67317ad174074c69",
"assets/assets/images/nodata.png": "c9776e3e96f085c8a565265c2e2ba090",
"assets/assets/images/poisearch_icon_gothere_normal.png": "cc8a6294d48b81b8a87c3ceaaf14f8db",
"assets/assets/images/poi_detail_icon_share_black.png": "baf9c33f5a60ab99754dc36c380f3e54",
"assets/assets/images/route_nav_setting.png": "d3250d22c8c66760c83e442839c783bd",
"assets/assets/images/search_error_icon.png": "188d52eec343bbfca823cf65df94ea23",
"assets/assets/images/service_bicycle.png": "f5fa4dc203539b6802472278bfdda38e",
"assets/assets/images/service_bus.png": "59227a0641a7aebf2df6c89092e30cfc",
"assets/assets/images/service_car_rental.png": "2253f44e5122b62e3bbbdf7d20624a5b",
"assets/assets/images/service_driving.png": "e2cec6a7dda00e3f6da5597d79f7b027",
"assets/assets/images/service_fast_car.png": "ab25916a9efcbf5a6e0a6ee589dfd78e",
"assets/assets/images/service_special_car.png": "45e149817f882a72328f99a881d33516",
"assets/assets/images/service_tailwind_car.png": "91305c27d79ceb54c0abc6549a170a4a",
"assets/assets/images/service_taxi.png": "8979cf6953f711851cf3826861249975",
"assets/assets/images/splash_logo.png": "1d728808f27e4a08e0b7822615f2b86e",
"assets/assets/images/user_icon.png": "da8f5017d05b9d176ad0d237497f5010",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "63f552b7b9727c7f11d2ea1d1f2968f2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"favicon.png": "2530dbce3a6666a6a07d249075212a26",
"icons/Icon-192.png": "08edea7857ef6f86c381b2d38eaf3658",
"icons/Icon-512.png": "fa681092213d6e4bd26605595a96a6bb",
"index.html": "c55283829eac196937b1e8cfec1068b6",
"/": "c55283829eac196937b1e8cfec1068b6",
"main.dart.js": "59fa056f61617171439cb200c8017ffc",
"manifest.json": "256583af8b620e7fc376794596340cf0",
"version.json": "de3afb7e6f0f16fbcf8c065541e93c58"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
