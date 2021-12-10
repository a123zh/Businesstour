var APP_DATA = {
  "scenes": [
    {
      "id": "0-atrium",
      "name": "Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 3.110710327725596,
        "pitch": -0.01990534655605458,
        "fov": 1.513843149153066
      },
      "linkHotspots": [
        {
          "yaw": -2.6723772661727896,
          "pitch": 0.04939965533397661,
          "rotation": 0.7853981633974483,
          "target": "1-level-2"
        },
        {
          "yaw": -0.17304005293104652,
          "pitch": 0.12142455973926403,
          "rotation": 6.283185307179586,
          "target": "1-level-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.111567272272289,
          "pitch": 0.2538817994796414,
          "title": "Business Atrium",
          "text": "Welcome to Faculty of Business !There are many seats for students to study and relax, and let's start our journey now!"
        }
      ]
    },
    {
      "id": "1-level-2",
      "name": "Level 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1076071955009734,
          "pitch": 0.23288423878868514,
          "rotation": 0,
          "target": "2-level-3"
        },
        {
          "yaw": -2.194145232281361,
          "pitch": 0.10372177256744308,
          "rotation": 3.141592653589793,
          "target": "0-atrium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.0857565498244668,
          "pitch": 0.12890992276592605,
          "title": "Level 2",
          "text": "We are now on the 2nd floor of this building. By using this kind of signs help us find more interesting things here !"
        },
        {
          "yaw": 1.0522392304685013,
          "pitch": 0.35347361735500016,
          "title": "Handwash",
          "text": "For our safety, we can use it to wash our hands!"
        }
      ]
    },
    {
      "id": "2-level-3",
      "name": "Level 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8725109468040433,
          "pitch": 0.14296250868647675,
          "rotation": 3.9269908169872414,
          "target": "1-level-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.4139972335631743,
          "pitch": 0.20130187989821025,
          "title": "Level 3",
          "text": "Now we arrive at level 3, there are many rooms for different functions and waiting us to explore!"
        }
      ]
    }
  ],
  "name": "Faculty of Business",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
