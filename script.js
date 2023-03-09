(function(){
    var script = {
 "start": "this.playAudioList([this.audio_E4DCDAC6_C67C_E001_41E5_CE6056436780]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "downloadEnabled": false,
 "data": {
  "name": "Player468"
 },
 "height": "100%",
 "id": "rootPlayer",
 "layout": "absolute",
 "minHeight": 20,
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.MapViewer",
  "this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A",
  "this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028",
  "this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E",
  "this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16",
  "this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3",
  "this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD",
  "this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A",
  "this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C"
 ],
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 20,
 "desktopMipmappingEnabled": false,
 "propagateClick": true,
 "borderSize": 0,
 "paddingLeft": 0,
 "definitions": [{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.03,
  "pitch": 0
 },
 "id": "camera_DB916F24_C64B_A001_41D3_08688A0EC35B"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -178.63,
  "pitch": 0
 },
 "id": "camera_DBE05E8E_C64B_A001_41E4_467CCE629AAF"
},
{
 "thumbnailUrl": "media/panorama_C82E194B_C25C_7655_41DF_9E528FC9B48C_t.jpg",
 "class": "Panorama",
 "label": "Maid's Bathroom",
 "id": "panorama_C82E194B_C25C_7655_41DF_9E528FC9B48C",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C82E194B_C25C_7655_41DF_9E528FC9B48C_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C82E194B_C25C_7655_41DF_9E528FC9B48C_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C82E194B_C25C_7655_41DF_9E528FC9B48C_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C82E194B_C25C_7655_41DF_9E528FC9B48C_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C82E194B_C25C_7655_41DF_9E528FC9B48C_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C82E194B_C25C_7655_41DF_9E528FC9B48C_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C82E194B_C25C_7655_41DF_9E528FC9B48C_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C82E194B_C25C_7655_41DF_9E528FC9B48C_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C82E194B_C25C_7655_41DF_9E528FC9B48C_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C82E194B_C25C_7655_41DF_9E528FC9B48C_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C82E194B_C25C_7655_41DF_9E528FC9B48C_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C82E194B_C25C_7655_41DF_9E528FC9B48C_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C82E194B_C25C_7655_41DF_9E528FC9B48C_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C82E194B_C25C_7655_41DF_9E528FC9B48C_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C82E194B_C25C_7655_41DF_9E528FC9B48C_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C82E194B_C25C_7655_41DF_9E528FC9B48C_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C82E194B_C25C_7655_41DF_9E528FC9B48C_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C82E194B_C25C_7655_41DF_9E528FC9B48C_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C82E194B_C25C_7655_41DF_9E528FC9B48C_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C82E194B_C25C_7655_41DF_9E528FC9B48C_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C82E194B_C25C_7655_41DF_9E528FC9B48C_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C82E194B_C25C_7655_41DF_9E528FC9B48C_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C82E194B_C25C_7655_41DF_9E528FC9B48C_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C82E194B_C25C_7655_41DF_9E528FC9B48C_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C82E194B_C25C_7655_41DF_9E528FC9B48C_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE",
   "backwardYaw": 147.22,
   "yaw": -143.04,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 110,
 "overlays": [
  "this.overlay_D0AFC0DE_C24B_F66F_41C6_CDC2B19B8D1B",
  "this.overlay_D99A6D1A_C2BC_6001_41E6_2C61D8C872B6",
  "this.panorama_C82E194B_C25C_7655_41DF_9E528FC9B48C_tcap0"
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -155.88,
  "pitch": 0
 },
 "id": "camera_DBB0CF00_C64B_A001_41A1_3CE8E8AE7418"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_D51FB827_C2CC_B5DD_41E8_16F946D845F0_camera"
},
{
 "thumbnailUrl": "media/panorama_C82DC8D6_C25C_967F_41DB_5FDBC2F38546_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "Living room",
 "id": "panorama_C82DC8D6_C25C_967F_41DB_5FDBC2F38546",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C82DC8D6_C25C_967F_41DB_5FDBC2F38546_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C82DC8D6_C25C_967F_41DB_5FDBC2F38546_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C82DC8D6_C25C_967F_41DB_5FDBC2F38546_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C82DC8D6_C25C_967F_41DB_5FDBC2F38546_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C82DC8D6_C25C_967F_41DB_5FDBC2F38546_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C82DC8D6_C25C_967F_41DB_5FDBC2F38546_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C82DC8D6_C25C_967F_41DB_5FDBC2F38546_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C82DC8D6_C25C_967F_41DB_5FDBC2F38546_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C82DC8D6_C25C_967F_41DB_5FDBC2F38546_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C82DC8D6_C25C_967F_41DB_5FDBC2F38546_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C82DC8D6_C25C_967F_41DB_5FDBC2F38546_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C82DC8D6_C25C_967F_41DB_5FDBC2F38546_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C82DC8D6_C25C_967F_41DB_5FDBC2F38546_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C82DC8D6_C25C_967F_41DB_5FDBC2F38546_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C82DC8D6_C25C_967F_41DB_5FDBC2F38546_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C82DC8D6_C25C_967F_41DB_5FDBC2F38546_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C82DC8D6_C25C_967F_41DB_5FDBC2F38546_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C82DC8D6_C25C_967F_41DB_5FDBC2F38546_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C82DC8D6_C25C_967F_41DB_5FDBC2F38546_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C82DC8D6_C25C_967F_41DB_5FDBC2F38546_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C82DC8D6_C25C_967F_41DB_5FDBC2F38546_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C82DC8D6_C25C_967F_41DB_5FDBC2F38546_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C82DC8D6_C25C_967F_41DB_5FDBC2F38546_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C82DC8D6_C25C_967F_41DB_5FDBC2F38546_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C82DC8D6_C25C_967F_41DB_5FDBC2F38546_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E",
   "backwardYaw": 146.96,
   "yaw": -6.86,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 114,
 "overlays": [
  "this.overlay_D007FE05_C254_8DDD_41D8_DD616F1222CC",
  "this.overlay_D9D786AE_C2BC_E001_41D9_BEAFBED0D176",
  "this.panorama_C82DC8D6_C25C_967F_41DB_5FDBC2F38546_tcap0"
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A_t.jpg",
 "class": "Panorama",
 "label": "Kitchen",
 "id": "panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C8268D73_C25F_8E35_41E2_0F929C12594D",
   "backwardYaw": 139.05,
   "yaw": 9.42,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C82321AD_C25C_962D_41E1_090FED297046",
   "backwardYaw": 17.96,
   "yaw": -143.32,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 110,
 "overlays": [
  "this.overlay_D2F1578E_C25C_FAEF_41E2_20F7F73B441F",
  "this.overlay_D2857560_C25C_BE54_41C4_F90808FFC8D6",
  "this.overlay_D32BAAF0_C25F_8A34_41CE_929B3EAE095E",
  "this.overlay_DBA573F2_C2FC_FA37_41DC_B16489613F35",
  "this.overlay_DA93E36B_C2FD_BA55_41DB_B7C09A36CC17",
  "this.overlay_DA07A2F5_C2FB_9A3D_41E6_5E1752973188",
  "this.panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A_tcap0"
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_C82E194B_C25C_7655_41DF_9E528FC9B48C_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A_camera"
},
{
 "thumbnailUrl": "media/panorama_D51FB827_C2CC_B5DD_41E8_16F946D845F0_t.jpg",
 "class": "Panorama",
 "label": "2B_Master bedroom_2",
 "id": "panorama_D51FB827_C2CC_B5DD_41E8_16F946D845F0",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D51FB827_C2CC_B5DD_41E8_16F946D845F0_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_D51FB827_C2CC_B5DD_41E8_16F946D845F0_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D51FB827_C2CC_B5DD_41E8_16F946D845F0_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D51FB827_C2CC_B5DD_41E8_16F946D845F0_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D51FB827_C2CC_B5DD_41E8_16F946D845F0_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D51FB827_C2CC_B5DD_41E8_16F946D845F0_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_D51FB827_C2CC_B5DD_41E8_16F946D845F0_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D51FB827_C2CC_B5DD_41E8_16F946D845F0_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D51FB827_C2CC_B5DD_41E8_16F946D845F0_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D51FB827_C2CC_B5DD_41E8_16F946D845F0_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_D51FB827_C2CC_B5DD_41E8_16F946D845F0_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D51FB827_C2CC_B5DD_41E8_16F946D845F0_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D51FB827_C2CC_B5DD_41E8_16F946D845F0_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D51FB827_C2CC_B5DD_41E8_16F946D845F0_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_D51FB827_C2CC_B5DD_41E8_16F946D845F0_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D51FB827_C2CC_B5DD_41E8_16F946D845F0_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D51FB827_C2CC_B5DD_41E8_16F946D845F0_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D51FB827_C2CC_B5DD_41E8_16F946D845F0_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_D51FB827_C2CC_B5DD_41E8_16F946D845F0_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D51FB827_C2CC_B5DD_41E8_16F946D845F0_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D51FB827_C2CC_B5DD_41E8_16F946D845F0_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D51FB827_C2CC_B5DD_41E8_16F946D845F0_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_D51FB827_C2CC_B5DD_41E8_16F946D845F0_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D51FB827_C2CC_B5DD_41E8_16F946D845F0_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D51FB827_C2CC_B5DD_41E8_16F946D845F0_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7",
   "backwardYaw": 24.12,
   "yaw": 23.36,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_DA2E1480_C2D4_6001_41E0_489E97CB964C",
  "this.overlay_D8130158_C2D5_E000_41CE_7BB72331C6B7",
  "this.panorama_D51FB827_C2CC_B5DD_41E8_16F946D845F0_tcap0"
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_t.jpg",
 "class": "Panorama",
 "label": "Dining 2",
 "id": "panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C82DC8D6_C25C_967F_41DB_5FDBC2F38546",
   "backwardYaw": -6.86,
   "yaw": 146.96,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C82DC8D6_C25C_967F_41DB_5FDBC2F38546",
   "backwardYaw": -6.86,
   "yaw": -137.54,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998",
   "backwardYaw": 0.97,
   "yaw": 1.37,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 110,
 "overlays": [
  "this.overlay_D3983F5A_C254_8A77_41B9_86EE9B4A2717",
  "this.overlay_D03F0574_C254_9E33_41C5_0DED9B394A45",
  "this.overlay_D1795178_C255_9633_41DB_29AF0941F42D",
  "this.overlay_D805D92F_C2BC_601F_41AF_0492EE9A6800",
  "this.overlay_D95B67FB_C2BC_E000_41D1_3D66CF952E76",
  "this.panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_tcap0"
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_C9CF26AC_C25D_BAD3_41E3_1746366C62EA_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_C82321AD_C25C_962D_41E1_090FED297046_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -40.95,
  "pitch": 0,
  "hfov": 110
 },
 "id": "camera_DBACFEE8_C64B_A001_41D3_39277A2BC6ED"
},
{
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_DF6F5A64_C24C_E001_41DA_C32193466386.mp3",
  "oggUrl": "media/audio_DF6F5A64_C24C_E001_41DA_C32193466386.ogg"
 },
 "data": {
  "label": "_Non_Copyrighted_Music_LAKEY_INSPIRED_Chill_Day_Hip_Hop_23IiqeIw38w_140"
 },
 "class": "MediaAudio",
 "id": "audio_DF6F5A64_C24C_E001_41DA_C32193466386",
 "autoplay": true
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 89.43,
  "pitch": 0
 },
 "id": "camera_E4509F6B_C64B_A007_41D4_B984479FE714"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -34.42,
  "pitch": 0
 },
 "id": "camera_E4002F98_C64B_A001_41E2_6A66C3EC0483"
},
{
 "thumbnailUrl": "media/panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998_t.jpg",
 "class": "Panorama",
 "label": "Dining Area",
 "id": "panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C82321AD_C25C_962D_41E1_090FED297046",
   "backwardYaw": 85.04,
   "yaw": -160.16,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E",
   "backwardYaw": 1.37,
   "yaw": 0.97,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 110,
 "overlays": [
  "this.overlay_D3963E44_C257_8A53_41E3_2BA598511DE6",
  "this.overlay_D038F1A6_C257_F6DF_41E6_2ED1732A94DB",
  "this.overlay_DBDC64A3_C2CC_6000_41E1_E630962B7BB5",
  "this.overlay_DB25F12D_C2CC_A000_41BC_91212E4E8357",
  "this.panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998_tcap0"
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 158.02,
  "pitch": 0
 },
 "id": "camera_E43ABF82_C64B_A001_41BB_EFD76B3CBB1F"
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_D51FB827_C2CC_B5DD_41E8_16F946D845F0",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D51FB827_C2CC_B5DD_41E8_16F946D845F0_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_C82321AD_C25C_962D_41E1_090FED297046",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C82321AD_C25C_962D_41E1_090FED297046_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_C8268D73_C25F_8E35_41E2_0F929C12594D",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C8268D73_C25F_8E35_41E2_0F929C12594D_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_C9CF26AC_C25D_BAD3_41E3_1746366C62EA",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C9CF26AC_C25D_BAD3_41E3_1746366C62EA_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.panorama_C82DC8D6_C25C_967F_41DB_5FDBC2F38546",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C82DC8D6_C25C_967F_41DB_5FDBC2F38546_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 0)",
   "media": "this.panorama_C82E194B_C25C_7655_41DF_9E528FC9B48C",
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C82E194B_C25C_7655_41DF_9E528FC9B48C_camera"
  }
 ],
 "id": "mainPlayList"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 173.14,
  "pitch": 0,
  "hfov": 97
 },
 "id": "camera_DB8DAF0C_C64B_A000_41DD_391BB70BB72C"
},
{
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_E4DCDAC6_C67C_E001_41E5_CE6056436780.mp3",
  "oggUrl": "media/audio_E4DCDAC6_C67C_E001_41E5_CE6056436780.ogg"
 },
 "data": {
  "label": "_Non_Copyrighted_Music_LAKEY_INSPIRED_Chill_Day_Hip_Hop_23IiqeIw38w_140"
 },
 "class": "MediaAudio",
 "id": "audio_E4DCDAC6_C67C_E001_41E5_CE6056436780",
 "autoplay": true
},
{
 "thumbnailUrl": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_t.jpg",
 "class": "Panorama",
 "label": "Corridor 2",
 "id": "panorama_C82321AD_C25C_962D_41E1_090FED297046",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998",
   "backwardYaw": -160.16,
   "yaw": 85.04,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C9CF26AC_C25D_BAD3_41E3_1746366C62EA",
   "backwardYaw": -137.54,
   "yaw": 145.58,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A",
   "backwardYaw": -143.32,
   "yaw": 17.96,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE",
   "backwardYaw": -5.02,
   "yaw": -90.57,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 110,
 "overlays": [
  "this.overlay_CD4E6F27_C27B_8BDD_41E4_BF84038328FC",
  "this.overlay_CDA6A047_C27C_965D_41E1_7F93DE0B653F",
  "this.overlay_D22A039F_C27C_BAED_41CC_5093E16DAC9D",
  "this.overlay_CCF95E5F_C27D_8A6D_41B0_6484313F23AE",
  "this.overlay_CD50DB30_C27D_8A33_41E5_3660DFB85F25",
  "this.overlay_DA52CA66_C2CC_8A5F_41E5_77B5CACBEF72",
  "this.overlay_DAE882E2_C2CF_BA57_41E6_41954CBB7EAA",
  "this.overlay_DA433CEA_C2CC_8E57_41E4_8EA93B911760",
  "this.overlay_DA1BB195_C2CD_96FD_41C9_CF6AF435EABD",
  "this.overlay_DBBD2E32_C254_E001_41DE_AC79A9F04841",
  "this.panorama_C82321AD_C25C_962D_41E1_090FED297046_tcap0"
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -156.64,
  "pitch": 0
 },
 "id": "camera_E46E5F31_C64B_A003_41E2_AAA13BD7C661"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 97
 },
 "id": "panorama_C82DC8D6_C25C_967F_41DB_5FDBC2F38546_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 36.68,
  "pitch": 0
 },
 "id": "camera_DBD98ED0_C64B_A001_41BF_AA354FA763C6"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 158.02,
  "pitch": 0
 },
 "id": "camera_E42E8F77_C64B_A00F_41DA_566085802086"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 36.96,
  "pitch": 0
 },
 "id": "camera_E4448F60_C64B_A001_41E2_E31B5286248B"
},
{
 "thumbnailUrl": "media/panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7_t.jpg",
 "class": "Panorama",
 "label": "2B_Master Bedroom",
 "id": "panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D51FB827_C2CC_B5DD_41E8_16F946D845F0",
   "backwardYaw": 23.36,
   "yaw": 24.12,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE",
   "backwardYaw": -74.86,
   "yaw": -110.09,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_DAD98132_C2CF_9637_419F_ADD724B8B4DA",
  "this.overlay_DB6BEB70_C2CC_8A33_41C3_533CADA08B1A",
  "this.overlay_DA53BB41_C2CC_8A55_41E5_8722B11F0F8F",
  "this.overlay_DA553CD9_C2D7_A003_41C1_5FC51FA577F1",
  "this.panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7_tcap0"
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_C8268D73_C25F_8E35_41E2_0F929C12594D_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "Storage",
 "id": "panorama_C8268D73_C25F_8E35_41E2_0F929C12594D",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8268D73_C25F_8E35_41E2_0F929C12594D_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C8268D73_C25F_8E35_41E2_0F929C12594D_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C8268D73_C25F_8E35_41E2_0F929C12594D_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C8268D73_C25F_8E35_41E2_0F929C12594D_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C8268D73_C25F_8E35_41E2_0F929C12594D_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8268D73_C25F_8E35_41E2_0F929C12594D_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C8268D73_C25F_8E35_41E2_0F929C12594D_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C8268D73_C25F_8E35_41E2_0F929C12594D_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C8268D73_C25F_8E35_41E2_0F929C12594D_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8268D73_C25F_8E35_41E2_0F929C12594D_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C8268D73_C25F_8E35_41E2_0F929C12594D_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C8268D73_C25F_8E35_41E2_0F929C12594D_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C8268D73_C25F_8E35_41E2_0F929C12594D_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8268D73_C25F_8E35_41E2_0F929C12594D_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C8268D73_C25F_8E35_41E2_0F929C12594D_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C8268D73_C25F_8E35_41E2_0F929C12594D_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C8268D73_C25F_8E35_41E2_0F929C12594D_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8268D73_C25F_8E35_41E2_0F929C12594D_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C8268D73_C25F_8E35_41E2_0F929C12594D_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C8268D73_C25F_8E35_41E2_0F929C12594D_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C8268D73_C25F_8E35_41E2_0F929C12594D_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8268D73_C25F_8E35_41E2_0F929C12594D_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C8268D73_C25F_8E35_41E2_0F929C12594D_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C8268D73_C25F_8E35_41E2_0F929C12594D_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C8268D73_C25F_8E35_41E2_0F929C12594D_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A",
   "backwardYaw": 9.42,
   "yaw": 139.05,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A",
   "backwardYaw": 9.42,
   "yaw": -111.29,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 110,
 "overlays": [
  "this.overlay_D32635C8_C254_7E53_41D7_FE993B3BD230",
  "this.overlay_D050DDF7_C255_8E3D_41E6_C97DD040834C",
  "this.overlay_D663F60F_C2DB_9DED_41D5_E7E24D3F9B12",
  "this.panorama_C8268D73_C25F_8E35_41E2_0F929C12594D_tcap0"
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -94.96,
  "pitch": 0
 },
 "id": "camera_DBED2E84_C64B_A001_41A0_12D6B17862A3"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -33.04,
  "pitch": 0
 },
 "id": "camera_E4374F8D_C64B_A000_41C5_A88A999F3FF0"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -170.58,
  "pitch": 0
 },
 "id": "camera_DBF96E9C_C64B_A000_41D4_29512BDB4728"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 174.98,
  "pitch": 0
 },
 "id": "camera_DBD6AEDC_C64B_A001_41D5_8177B8E003A3"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 69.91,
  "pitch": 0
 },
 "id": "camera_E4484F54_C64B_A000_41D2_B931238B1F76"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -162.04,
  "pitch": 0
 },
 "id": "camera_DBBA2EF4_C64B_A001_4167_F4BB02D17087"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 42.46,
  "pitch": 0
 },
 "id": "camera_DBCC7EC3_C64B_A007_41C9_FCB9C1A77FE9"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -170.58,
  "pitch": 0
 },
 "id": "camera_DBF39EA9_C64B_A003_41C6_9372CD4287E6"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 110
 },
 "id": "panorama_C8268D73_C25F_8E35_41E2_0F929C12594D_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 105.14,
  "pitch": 0
 },
 "id": "camera_E464DF3D_C64B_A003_41E7_A796C50D3E14"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -32.78,
  "pitch": 0
 },
 "id": "camera_E471CF48_C64B_A001_41C4_BC30B57114ED"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 29.27,
  "pitch": 0
 },
 "id": "camera_DBEA8E77_C64B_A000_41E1_336895402DD7"
},
{
 "thumbnailUrl": "media/panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_t.jpg",
 "class": "Panorama",
 "label": "Corridor 1.5",
 "id": "panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7",
   "backwardYaw": -110.09,
   "yaw": -74.86,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C82E194B_C25C_7655_41DF_9E528FC9B48C",
   "backwardYaw": -143.04,
   "yaw": 147.22,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C82321AD_C25C_962D_41E1_090FED297046",
   "backwardYaw": -90.57,
   "yaw": -5.02,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B",
   "backwardYaw": -21.98,
   "yaw": -150.73,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B",
   "backwardYaw": -21.98,
   "yaw": 172.59,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 110,
 "overlays": [
  "this.overlay_CC717E11_C274_8DF5_41E3_0D07BA0F5F63",
  "this.overlay_CCE998F9_C274_F635_41C5_C19EA1BA08BA",
  "this.overlay_CD6D7023_C274_95D5_41E5_FBB8C75E1B77",
  "this.overlay_CD1F6480_C277_9ED3_41E4_36AC0732C2C9",
  "this.overlay_D23E8FA5_C277_8ADD_41E6_B94CFAD35562",
  "this.overlay_D60BD60E_C2DC_9DEF_41D9_F410920C93CC",
  "this.overlay_D6B15999_C2DF_96F5_41D2_A486A124B64A",
  "this.overlay_D7EBA6F1_C2DC_9A35_41DB_29E2681D2F1C",
  "this.overlay_D6262A4D_C2DC_8A6D_41E6_E7AEA40C01C8",
  "this.panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_tcap0"
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 173.14,
  "pitch": 0,
  "hfov": 97
 },
 "id": "camera_DB9ABF17_C64B_A00F_41E0_0E66558A9AE9"
},
{
 "thumbnailUrl": "media/panorama_C9CF26AC_C25D_BAD3_41E3_1746366C62EA_t.jpg",
 "class": "Panorama",
 "label": "Bedroom",
 "id": "panorama_C9CF26AC_C25D_BAD3_41E3_1746366C62EA",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9CF26AC_C25D_BAD3_41E3_1746366C62EA_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C9CF26AC_C25D_BAD3_41E3_1746366C62EA_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C9CF26AC_C25D_BAD3_41E3_1746366C62EA_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C9CF26AC_C25D_BAD3_41E3_1746366C62EA_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C9CF26AC_C25D_BAD3_41E3_1746366C62EA_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9CF26AC_C25D_BAD3_41E3_1746366C62EA_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C9CF26AC_C25D_BAD3_41E3_1746366C62EA_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C9CF26AC_C25D_BAD3_41E3_1746366C62EA_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C9CF26AC_C25D_BAD3_41E3_1746366C62EA_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9CF26AC_C25D_BAD3_41E3_1746366C62EA_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C9CF26AC_C25D_BAD3_41E3_1746366C62EA_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C9CF26AC_C25D_BAD3_41E3_1746366C62EA_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C9CF26AC_C25D_BAD3_41E3_1746366C62EA_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9CF26AC_C25D_BAD3_41E3_1746366C62EA_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C9CF26AC_C25D_BAD3_41E3_1746366C62EA_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C9CF26AC_C25D_BAD3_41E3_1746366C62EA_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C9CF26AC_C25D_BAD3_41E3_1746366C62EA_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9CF26AC_C25D_BAD3_41E3_1746366C62EA_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C9CF26AC_C25D_BAD3_41E3_1746366C62EA_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C9CF26AC_C25D_BAD3_41E3_1746366C62EA_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C9CF26AC_C25D_BAD3_41E3_1746366C62EA_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9CF26AC_C25D_BAD3_41E3_1746366C62EA_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C9CF26AC_C25D_BAD3_41E3_1746366C62EA_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C9CF26AC_C25D_BAD3_41E3_1746366C62EA_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C9CF26AC_C25D_BAD3_41E3_1746366C62EA_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C82321AD_C25C_962D_41E1_090FED297046",
   "backwardYaw": 145.58,
   "yaw": -137.54,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 110,
 "overlays": [
  "this.overlay_D3D7B9A6_C254_F6DF_41B9_74EA08FEBA4A",
  "this.overlay_D137080E_C2D4_B5EF_41E3_1345C188A8CF",
  "this.panorama_C9CF26AC_C25D_BAD3_41E3_1746366C62EA_tcap0"
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998_camera"
},
{
 "thumbnailUrl": "media/panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_t.jpg",
 "class": "Panorama",
 "label": "Corridor 1",
 "id": "panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C82E194B_C25C_7655_41DF_9E528FC9B48C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE",
   "backwardYaw": -150.73,
   "yaw": -21.98,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 110,
 "overlays": [
  "this.overlay_CFCB354A_C275_FE57_41E7_2B3CE47E0D91",
  "this.overlay_D6F8BB9A_C2DC_8AF7_41D4_B89103BE52A4",
  "this.overlay_DAF027EE_C24C_E001_41D3_E985504CAF15",
  "this.overlay_DBFA40DE_C24B_A001_41CD_F10F6D480F15",
  "this.panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_tcap0"
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 19.84,
  "pitch": 0
 },
 "id": "camera_DBCBCEB7_C64B_A00F_41D4_C4778621D8C8"
},
{
 "progressBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingTop": 7,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "minHeight": 50,
 "toolTipPaddingRight": 10,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "paddingBottom": 0,
 "toolTipPaddingLeft": 10,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarBottom": 5,
 "borderSize": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "class": "ViewerArea",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipOpacity": 0.5,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "top": 0,
 "playbackBarBackgroundOpacity": 1,
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 55,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "Main Viewer"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "layout": "absolute",
 "minHeight": 1,
 "width": 115.05,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 641,
 "top": "0%",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "data": {
  "name": "--SETTINGS"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "progressBorderSize": 0,
 "id": "MapViewer",
 "left": "0.06%",
 "toolTipPaddingTop": 4,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "minHeight": 1,
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "paddingBottom": 0,
 "toolTipPaddingLeft": 6,
 "width": "24.125%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarBottom": 0,
 "borderSize": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "class": "ViewerArea",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "height": "37.622%",
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "minWidth": 1,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "bottom": "7.14%",
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "visible": false,
 "data": {
  "name": "Floor Plan"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "data": {
  "name": "Entrance"
 },
 "id": "HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A",
 "left": "2.23%",
 "minHeight": 1,
 "width": 110,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "propagateClick": false,
 "paddingRight": 10,
 "borderSize": 3,
 "paddingLeft": 10,
 "height": 47,
 "top": "4.76%",
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:'Montserrat';\"><B>ENTRANCE</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "visible": false
},
{
 "data": {
  "name": "Living Room"
 },
 "id": "HTMLText_77FFE780_68A3_305F_4195_72CF03F77028",
 "left": "2.11%",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "top": "5.19%",
 "paddingRight": 10,
 "borderSize": 3,
 "paddingLeft": 10,
 "width": "7.901%",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "5.081%",
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:'Montserrat';\"><B>Living Room</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "visible": false
},
{
 "data": {
  "name": "Kitchen"
 },
 "id": "HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E",
 "left": "2.11%",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "top": "5.19%",
 "paddingRight": 10,
 "borderSize": 3,
 "paddingLeft": 10,
 "width": "4.946%",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "4.973%",
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:'Montserrat';\"><B>Kitchen</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "visible": false
},
{
 "data": {
  "name": "Bedroom 1"
 },
 "id": "HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16",
 "left": "2.11%",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "top": "5.19%",
 "paddingRight": 10,
 "borderSize": 3,
 "paddingLeft": 10,
 "width": "6.996%",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "4.432%",
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:'Montserrat';\"><B>Bedroom 1</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "visible": false
},
{
 "data": {
  "name": "Bedroom 2"
 },
 "id": "HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3",
 "left": "2.11%",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "top": "5.19%",
 "paddingRight": 10,
 "borderSize": 3,
 "paddingLeft": 10,
 "width": "6.996%",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "4.432%",
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:'Montserrat';\"><B>Bedroom 2</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "visible": false
},
{
 "data": {
  "name": "Bedroom 3"
 },
 "id": "HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD",
 "left": "2.11%",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "top": "5.19%",
 "paddingRight": 10,
 "borderSize": 3,
 "paddingLeft": 10,
 "width": "6.996%",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "4.432%",
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:'Montserrat';\"><B>Bedroom 3</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "visible": false
},
{
 "data": {
  "name": "Bathroom"
 },
 "id": "HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A",
 "left": "2.11%",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "top": "5.19%",
 "paddingRight": 10,
 "borderSize": 3,
 "paddingLeft": 10,
 "width": "12.364%",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "6.811%",
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:'Montserrat';\"><B>Bathroom</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "visible": false
},
{
 "data": {
  "name": "Hallway"
 },
 "id": "HTMLText_6D10649B_7332_5218_41D2_21101FE2809C",
 "left": "2.11%",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "top": "5.19%",
 "paddingRight": 10,
 "borderSize": 3,
 "paddingLeft": 10,
 "width": "12.364%",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "6.811%",
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:'Montserrat';\"><B>Hallway</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "visible": false
},
{
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "minHeight": 1,
 "width": 58,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 58,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 58,
 "class": "IconButton",
 "maxHeight": 58,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton MUTE"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "minHeight": 1,
 "width": 58,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 58,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 58,
 "class": "IconButton",
 "maxHeight": 58,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE, this.camera_E471CF48_C64B_A001_41C4_BC30B57114ED); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_D0AFC0DE_C24B_F66F_41C6_CDC2B19B8D1B",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C82E194B_C25C_7655_41DF_9E528FC9B48C_0_HS_0_1_2_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C82E194B_C25C_7655_41DF_9E528FC9B48C_0_HS_0_2_3_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C82E194B_C25C_7655_41DF_9E528FC9B48C_0_HS_0_3_4_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C82E194B_C25C_7655_41DF_9E528FC9B48C_0_HS_0_4_5_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -136.54,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.22,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C82E194B_C25C_7655_41DF_9E528FC9B48C_0_HS_1_0.png",
      "width": 171,
      "height": 171
     }
    ]
   },
   "pitch": 16.64
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D99A6D1A_C2BC_6001_41E6_2C61D8C872B6",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -136.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C82E194B_C25C_7655_41DF_9E528FC9B48C_0_HS_1_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 16.64,
   "hfov": 7.22
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_C82E194B_C25C_7655_41DF_9E528FC9B48C_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 30
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E, this.camera_E4374F8D_C64B_A000_41C5_A88A999F3FF0); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_D007FE05_C254_8DDD_41D8_DD616F1222CC",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C82DC8D6_C25C_967F_41DB_5FDBC2F38546_0_HS_0_1_0_map.gif",
      "width": 187,
      "height": 200
     }
    ]
   },
   "pitch": -2.13,
   "hfov": 100.87
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_DDCB01C9_C254_6003_41C9_CB864A2D2CEA",
   "pitch": -4.2,
   "yaw": -14.63,
   "hfov": 2.59,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D9D786AE_C2BC_E001_41D9_BEAFBED0D176",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -14.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C82DC8D6_C25C_967F_41DB_5FDBC2F38546_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.2,
   "hfov": 2.59
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_C82DC8D6_C25C_967F_41DB_5FDBC2F38546_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 30
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C82321AD_C25C_962D_41E1_090FED297046, this.camera_DBBA2EF4_C64B_A001_4167_F4BB02D17087); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_D2F1578E_C25C_FAEF_41E2_20F7F73B441F",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A_0_HS_0_1_2_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A_0_HS_0_2_3_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A_0_HS_0_3_4_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A_0_HS_0_4_5_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C8268D73_C25F_8E35_41E2_0F929C12594D, this.camera_DBACFEE8_C64B_A001_41D3_39277A2BC6ED); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_D2857560_C25C_BE54_41C4_F90808FFC8D6",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 9.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A_0_HS_1_1_6_map.gif",
      "width": 113,
      "height": 200
     }
    ]
   },
   "pitch": -9.59,
   "hfov": 45.11
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_D32BAAF0_C25F_8A34_41CE_929B3EAE095E",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A_0_HS_2_1_1_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A_0_HS_2_2_2_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A_0_HS_2_3_4_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_DE68426E_C2B7_A001_41E6_4CEDC89DD0BF",
   "pitch": 0.11,
   "yaw": 10.89,
   "hfov": 4.39,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DBA573F2_C2FC_FA37_41DC_B16489613F35",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 10.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A_0_HS_3_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 0.11,
   "hfov": 4.39
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_DE68026F_C2B7_A01F_41C7_12666370D4F8",
   "pitch": -18.63,
   "yaw": 91.14,
   "hfov": 4.16,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DA93E36B_C2FD_BA55_41DB_B7C09A36CC17",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 91.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A_0_HS_4_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -18.63,
   "hfov": 4.16
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_DE6BC26F_C2B7_A01F_41E2_6A9E999B7838",
   "pitch": -3.42,
   "yaw": -153.4,
   "hfov": 3.95,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DA07A2F5_C2FB_9A3D_41E6_5E1752973188",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -153.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A_0_HS_5_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.42,
   "hfov": 3.95
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 30
},
{
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "minHeight": 1,
 "width": 58,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 58,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 58,
 "class": "IconButton",
 "maxHeight": 58,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton HS "
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "minHeight": 1,
 "width": 58,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 58,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 58,
 "class": "IconButton",
 "maxHeight": 58,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton GYRO"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "minHeight": 1,
 "width": 58,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 58,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 58,
 "class": "IconButton",
 "maxHeight": 58,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton VR"
 },
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7, this.camera_DBB0CF00_C64B_A001_41A1_3CE8E8AE7418); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_DA2E1480_C2D4_6001_41E0_489E97CB964C",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D51FB827_C2CC_B5DD_41E8_16F946D845F0_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D51FB827_C2CC_B5DD_41E8_16F946D845F0_0_HS_0_2_1_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D51FB827_C2CC_B5DD_41E8_16F946D845F0_0_HS_0_3_3_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D51FB827_C2CC_B5DD_41E8_16F946D845F0_0_HS_0_4_4_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D51FB827_C2CC_B5DD_41E8_16F946D845F0_0_HS_0_5_5_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_DE67826C_C2B7_A001_41E5_8425A44A1517",
   "pitch": -3.94,
   "yaw": 12.11,
   "hfov": 2.63,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D8130158_C2D5_E000_41CE_7BB72331C6B7",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 12.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D51FB827_C2CC_B5DD_41E8_16F946D845F0_1_HS_1_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.94,
   "hfov": 2.63
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_D51FB827_C2CC_B5DD_41E8_16F946D845F0_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 30
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998, this.camera_DB916F24_C64B_A001_41D3_08688A0EC35B); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_D3983F5A_C254_8A77_41B9_86EE9B4A2717",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_0_HS_0_2_1_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_0_HS_0_3_3_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_0_HS_0_4_4_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_0_HS_0_5_5_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C82DC8D6_C25C_967F_41DB_5FDBC2F38546, this.camera_DB8DAF0C_C64B_A000_41DD_391BB70BB72C); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_D03F0574_C254_9E33_41C5_0DED9B394A45",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_0_HS_1_1_1_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_0_HS_1_2_2_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_0_HS_1_3_4_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_0_HS_1_4_5_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C82DC8D6_C25C_967F_41DB_5FDBC2F38546, this.camera_DB9ABF17_C64B_A00F_41E0_0E66558A9AE9); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_D1795178_C255_9633_41DB_29AF0941F42D",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_0_HS_2_1_2_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_0_HS_2_2_3_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_0_HS_2_3_4_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_0_HS_2_4_5_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_DBAE2DB0_C24C_A001_41CF_8361C9DD4D2B",
   "pitch": -11.68,
   "yaw": -154.69,
   "hfov": 4.3,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D805D92F_C2BC_601F_41AF_0492EE9A6800",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -154.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_0_HS_3_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -11.68,
   "hfov": 4.3
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_DBAE0DB0_C24C_A001_41D6_D8CADE6A3753",
   "pitch": -4.74,
   "yaw": -3.36,
   "hfov": 3.07,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D95B67FB_C2BC_E000_41D1_3D66CF952E76",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_0_HS_4_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.74,
   "hfov": 3.07
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 30
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E, this.camera_DBE05E8E_C64B_A001_41E4_467CCE629AAF); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_D3963E44_C257_8A53_41E3_2BA598511DE6",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998_0_HS_0_2_1_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998_0_HS_0_3_3_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998_0_HS_0_4_4_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998_0_HS_0_5_5_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C82321AD_C25C_962D_41E1_090FED297046, this.camera_DBED2E84_C64B_A001_41A0_12D6B17862A3); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_D038F1A6_C257_F6DF_41E6_2ED1732A94DB",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -160.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998_0_HS_1_1_6_map.gif",
      "width": 78,
      "height": 200
     }
    ]
   },
   "pitch": -12.75,
   "hfov": 46.11
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_DE6DD276_C2B7_A001_41DB_620C5D25E22B",
   "pitch": -2.54,
   "yaw": -163.34,
   "hfov": 3.51,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DBDC64A3_C2CC_6000_41E1_E630962B7BB5",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -163.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998_0_HS_2_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.54,
   "hfov": 3.51
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_DE6D9276_C2B7_A001_41E8_44B7B20FDFF5",
   "pitch": -11.35,
   "yaw": -39.78,
   "hfov": 3.45,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DB25F12D_C2CC_A000_41BC_91212E4E8357",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -39.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998_0_HS_3_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -11.35,
   "hfov": 3.45
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 30
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A, this.camera_DBD98ED0_C64B_A001_41BF_AA354FA763C6); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_CD4E6F27_C27B_8BDD_41E4_BF84038328FC",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0_HS_0_2_1_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0_HS_0_3_4_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0_HS_0_4_5_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998, this.camera_DBCBCEB7_C64B_A00F_41D4_C4778621D8C8); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_CDA6A047_C27C_965D_41E1_7F93DE0B653F",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 85.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0_HS_1_1_6_map.gif",
      "width": 71,
      "height": 200
     }
    ]
   },
   "pitch": -2.7,
   "hfov": 57.87
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C9CF26AC_C25D_BAD3_41E3_1746366C62EA, this.camera_DBCC7EC3_C64B_A007_41C9_FCB9C1A77FE9); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_D22A039F_C27C_BAED_41CC_5093E16DAC9D",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0_HS_2_1_1_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0_HS_2_2_2_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0_HS_2_3_4_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0_HS_2_4_5_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_CCF95E5F_C27D_8A6D_41B0_6484313F23AE",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -64.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0_HS_3_1_6_map.gif",
      "width": 44,
      "height": 200
     }
    ]
   },
   "pitch": -15.51,
   "hfov": 22.33
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE, this.camera_DBD6AEDC_C64B_A001_41D5_8177B8E003A3); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_CD50DB30_C27D_8A33_41E5_3660DFB85F25",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0_HS_4_1_6_map.gif",
      "width": 92,
      "height": 200
     }
    ]
   },
   "pitch": -6.57,
   "hfov": 30.77
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_DE66226D_C2B7_A003_41E2_4A1F4904FC03",
   "pitch": -6.56,
   "yaw": -89.22,
   "hfov": 2.18,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DA52CA66_C2CC_8A5F_41E5_77B5CACBEF72",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -89.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0_HS_5_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.56,
   "hfov": 2.18
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_DE69F26D_C2B7_A003_41B3_69E48D233814",
   "pitch": -11.54,
   "yaw": 86.21,
   "hfov": 3.01,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DAE882E2_C2CF_BA57_41E6_41954CBB7EAA",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 86.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0_HS_6_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -11.54,
   "hfov": 3.01
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_DE69926D_C2B7_A003_41D3_58B5E4817997",
   "pitch": -7.66,
   "yaw": 3.25,
   "hfov": 3.05,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DA433CEA_C2CC_8E57_41E4_8EA93B911760",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0_HS_7_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.66,
   "hfov": 3.05
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_DE69726E_C2B7_A001_41DA_1FAAA90056BA",
   "pitch": 0.63,
   "yaw": 150.29,
   "hfov": 4.39,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DA1BB195_C2CD_96FD_41C9_CF6AF435EABD",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 150.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0_HS_8_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 0.63,
   "hfov": 4.39
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_DC0A4074_C25C_E000_41E7_2C96623E9EB6",
   "pitch": -1.9,
   "yaw": -65.66,
   "hfov": 3.47,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DBBD2E32_C254_E001_41DE_AC79A9F04841",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -65.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0_HS_9_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.9,
   "hfov": 3.47
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_C82321AD_C25C_962D_41E1_090FED297046_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 30
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE, this.camera_E464DF3D_C64B_A003_41E7_A796C50D3E14); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_DAD98132_C2CF_9637_419F_ADD724B8B4DA",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -110.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7_1_HS_0_1_0_map.gif",
      "width": 89,
      "height": 200
     }
    ]
   },
   "pitch": -6.9,
   "hfov": 52.32
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D51FB827_C2CC_B5DD_41E8_16F946D845F0, this.camera_E46E5F31_C64B_A003_41E2_AAA13BD7C661); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_DB6BEB70_C2CC_8A33_41C3_533CADA08B1A",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7_0_HS_1_1_0_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7_0_HS_1_2_1_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7_0_HS_1_3_4_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7_0_HS_1_4_5_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_DE64726C_C2B7_A001_41C0_8CA4E8CBDBCE",
   "pitch": -4.93,
   "yaw": 21.9,
   "hfov": 3.5,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DA53BB41_C2CC_8A55_41E5_8722B11F0F8F",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 21.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7_1_HS_2_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.93,
   "hfov": 3.5
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_DE64326C_C2B7_A001_41A4_08EF75E2AE6F",
   "pitch": 9.61,
   "yaw": -107.65,
   "hfov": 4.33,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DA553CD9_C2D7_A003_41C1_5FC51FA577F1",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -107.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7_1_HS_3_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 9.61,
   "hfov": 4.33
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 30
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A, this.camera_DBF96E9C_C64B_A000_41D4_29512BDB4728); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_D32635C8_C254_7E53_41D7_FE993B3BD230",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C8268D73_C25F_8E35_41E2_0F929C12594D_0_HS_0_1_1_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C8268D73_C25F_8E35_41E2_0F929C12594D_0_HS_0_2_2_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C8268D73_C25F_8E35_41E2_0F929C12594D_0_HS_0_3_4_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C8268D73_C25F_8E35_41E2_0F929C12594D_0_HS_0_4_5_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A, this.camera_DBF39EA9_C64B_A003_41C6_9372CD4287E6); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_D050DDF7_C255_8E3D_41E6_C97DD040834C",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C8268D73_C25F_8E35_41E2_0F929C12594D_0_HS_1_1_0_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C8268D73_C25F_8E35_41E2_0F929C12594D_0_HS_1_2_2_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C8268D73_C25F_8E35_41E2_0F929C12594D_0_HS_1_3_3_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C8268D73_C25F_8E35_41E2_0F929C12594D_0_HS_1_4_4_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C8268D73_C25F_8E35_41E2_0F929C12594D_0_HS_1_5_5_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_DE6AE275_C2B7_A003_41E3_AF108261925C",
   "pitch": -3.16,
   "yaw": 166.01,
   "hfov": 4.39,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D663F60F_C2DB_9DED_41D5_E7E24D3F9B12",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 166.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C8268D73_C25F_8E35_41E2_0F929C12594D_0_HS_2_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.16,
   "hfov": 4.39
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_C8268D73_C25F_8E35_41E2_0F929C12594D_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 30
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B, this.camera_E42E8F77_C64B_A00F_41DA_566085802086); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_CC717E11_C274_8DF5_41E3_0D07BA0F5F63",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_1_HS_0_1_2_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_1_HS_0_2_3_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_1_HS_0_3_4_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_1_HS_0_4_5_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7, this.camera_E4484F54_C64B_A000_41D2_B931238B1F76); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_CCE998F9_C274_F635_41C5_C19EA1BA08BA",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -74.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_0_HS_1_1_0_map.gif",
      "width": 132,
      "height": 200
     }
    ]
   },
   "pitch": -18.93,
   "hfov": 84.22
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C82E194B_C25C_7655_41DF_9E528FC9B48C, this.camera_E4448F60_C64B_A001_41E2_E31B5286248B); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_CD6D7023_C274_95D5_41E5_FBB8C75E1B77",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 147.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_1_HS_2_1_6_map.gif",
      "width": 50,
      "height": 200
     }
    ]
   },
   "pitch": -16.52,
   "hfov": 44.4
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B, this.camera_E43ABF82_C64B_A001_41BB_EFD76B3CBB1F); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_CD1F6480_C277_9ED3_41E4_36AC0732C2C9",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 172.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_1_HS_3_1_6_map.gif",
      "width": 26,
      "height": 200
     }
    ]
   },
   "pitch": -11.87,
   "hfov": 15.66
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C82321AD_C25C_962D_41E1_090FED297046, this.camera_E4509F6B_C64B_A007_41D4_B984479FE714); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_D23E8FA5_C277_8ADD_41E6_B94CFAD35562",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_0_HS_4_1_0_map.gif",
      "width": 100,
      "height": 200
     }
    ]
   },
   "pitch": -6.45,
   "hfov": 72.12
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D998240E_C2CB_BDEF_41C3_D50CAF175043",
   "pitch": -2.53,
   "yaw": -70.66,
   "hfov": 4.39,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D60BD60E_C2DC_9DEF_41D9_F410920C93CC",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -70.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_1_HS_5_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.53,
   "hfov": 4.39
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 151.64,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.59,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_1_HS_6_0.png",
      "width": 149,
      "height": 149
     }
    ]
   },
   "pitch": 1.04
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D6B15999_C2DF_96F5_41D2_A486A124B64A",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 151.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_1_HS_6_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.04,
   "hfov": 6.59
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D998440E_C2CB_BDEF_41D5_78D2DBAB0EC1",
   "pitch": -5.65,
   "yaw": -174.03,
   "hfov": 4.37,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D7EBA6F1_C2DC_9A35_41DB_29E2681D2F1C",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -174.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_1_HS_7_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.65,
   "hfov": 4.37
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_DE65126B_C2B7_A007_41DF_E3CF83F9C9AD",
   "pitch": -9.78,
   "yaw": -2,
   "hfov": 3.03,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D6262A4D_C2DC_8A6D_41E6_E7AEA40C01C8",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_0_HS_8_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -9.78,
   "hfov": 3.03
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 30
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C82321AD_C25C_962D_41E1_090FED297046, this.camera_E4002F98_C64B_A001_41E2_6A66C3EC0483); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_D3D7B9A6_C254_F6DF_41B9_74EA08FEBA4A",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -137.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C9CF26AC_C25D_BAD3_41E3_1746366C62EA_0_HS_0_1_0_map.gif",
      "width": 113,
      "height": 200
     }
    ]
   },
   "pitch": -14.76,
   "hfov": 78.01
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D99CF415_C2CB_BDFD_41E7_22D2679162C2",
   "pitch": 6.06,
   "yaw": -142.04,
   "hfov": 6.55,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D137080E_C2D4_B5EF_41E3_1345C188A8CF",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -142.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C9CF26AC_C25D_BAD3_41E3_1746366C62EA_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 6.06,
   "hfov": 6.55
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_C9CF26AC_C25D_BAD3_41E3_1746366C62EA_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 30
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE, this.camera_DBEA8E77_C64B_A000_41E1_336895402DD7); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_CFCB354A_C275_FE57_41E7_2B3CE47E0D91",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -21.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_0_HS_0_1_0_map.gif",
      "width": 90,
      "height": 200
     }
    ]
   },
   "pitch": -4.1,
   "hfov": 73.4
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_DE62E26A_C2B7_A001_41E2_A510F79199A2",
   "pitch": -7.06,
   "yaw": -4.76,
   "hfov": 2.62,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D6F8BB9A_C2DC_8AF7_41D4_B89103BE52A4",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_0_HS_1_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.06,
   "hfov": 2.62
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_DAF027EE_C24C_E001_41D3_E985504CAF15",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 27.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_0_HS_2_1_0_map.gif",
      "width": 49,
      "height": 200
     }
    ]
   },
   "pitch": -16.27,
   "hfov": 33.02
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 26.74,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.12,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_0_HS_3_0.png",
      "width": 70,
      "height": 70
     }
    ]
   },
   "pitch": 0.27
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DBFA40DE_C24B_A001_41CD_F10F6D480F15",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 26.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 0.27,
   "hfov": 3.12
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 30
},
{
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "layout": "horizontal",
 "minHeight": 1,
 "width": 110,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "right": "0%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "height": 110,
 "top": "0%",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "gap": 10,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "data": {
  "name": "button menu sup"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "layout": "vertical",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "bottom": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "width": "91.304%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "Container",
 "height": "85.959%",
 "scrollBarVisible": "rollOver",
 "gap": 3,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "data": {
  "name": "-button set"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_C82DC8D6_C25C_967F_41DB_5FDBC2F38546_0_HS_1_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_DDCB01C9_C254_6003_41C9_CB864A2D2CEA",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A_0_HS_3_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_DE68426E_C2B7_A001_41E6_4CEDC89DD0BF",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A_0_HS_4_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_DE68026F_C2B7_A01F_41C7_12666370D4F8",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_C828743B_C25C_BE35_41DB_00EC94B2DD4A_0_HS_5_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_DE6BC26F_C2B7_A01F_41E2_6A9E999B7838",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_D51FB827_C2CC_B5DD_41E8_16F946D845F0_1_HS_1_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_DE67826C_C2B7_A001_41E5_8425A44A1517",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_0_HS_3_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_DBAE2DB0_C24C_A001_41CF_8361C9DD4D2B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_C823D125_C25C_F7DD_41E4_2F41D9A1B93E_0_HS_4_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_DBAE0DB0_C24C_A001_41D6_D8CADE6A3753",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998_0_HS_2_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_DE6DD276_C2B7_A001_41DB_620C5D25E22B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_C82EE1A5_C25C_96DD_41DD_7AD29E025998_0_HS_3_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_DE6D9276_C2B7_A001_41E8_44B7B20FDFF5",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0_HS_5_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_DE66226D_C2B7_A003_41E2_4A1F4904FC03",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0_HS_6_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_DE69F26D_C2B7_A003_41B3_69E48D233814",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0_HS_7_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_DE69926D_C2B7_A003_41D3_58B5E4817997",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0_HS_8_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_DE69726E_C2B7_A001_41DA_1FAAA90056BA",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_C82321AD_C25C_962D_41E1_090FED297046_0_HS_9_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_DC0A4074_C25C_E000_41E7_2C96623E9EB6",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7_1_HS_2_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_DE64726C_C2B7_A001_41C0_8CA4E8CBDBCE",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_DAE6C7CB_C2CC_9A55_41E3_1F79FA8D38B7_1_HS_3_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_DE64326C_C2B7_A001_41A4_08EF75E2AE6F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_C8268D73_C25F_8E35_41E2_0F929C12594D_0_HS_2_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_DE6AE275_C2B7_A003_41E3_AF108261925C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_1_HS_5_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_D998240E_C2CB_BDEF_41C3_D50CAF175043",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_1_HS_7_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_D998440E_C2CB_BDEF_41D5_78D2DBAB0EC1",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_C8220C14_C25C_8DF3_41A5_4735FD9073EE_0_HS_8_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_DE65126B_C2B7_A007_41DF_E3CF83F9C9AD",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_C9CF26AC_C25D_BAD3_41E3_1746366C62EA_1_HS_1_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_D99CF415_C2CB_BDFD_41E7_22D2679162C2",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_C8233C75_C25C_8E3D_41DC_EEBC729A250B_0_HS_1_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_DE62E26A_C2B7_A001_41E2_A510F79199A2",
 "frameDuration": 41
},
{
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "minHeight": 1,
 "width": 60,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 60,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 60,
 "class": "IconButton",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "maxHeight": 60,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "image button menu"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "minHeight": 1,
 "width": 58,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 58,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 58,
 "class": "IconButton",
 "click": "this.openLink('https://www.instagram.com/kefitaaddis/', '_blank')",
 "maxHeight": 58,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton TWITTER"
 },
 "paddingTop": 0,
 "cursor": "hand"
}],
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "class": "Player",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "mouseWheelEnabled": true,
 "scripts": {
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "existsKey": function(key){  return key in window; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "registerKey": function(key, value){  window[key] = value; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getKey": function(key){  return window[key]; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "unregisterKey": function(key){  delete window[key]; }
 },
 "backgroundPreloadEnabled": true,
 "scrollBarMargin": 2,
 "width": "100%",
 "defaultVRPointer": "laser",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
