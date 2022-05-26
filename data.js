var APP_DATA = {
  "scenes": [
    {
      "id": "0-education-resource-centre",
      "name": "Education Resource Centre",
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
        "yaw": -1.359668905180456,
        "pitch": 0.34718728180314784,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": -1.092334270560741,
          "pitch": -0.01597779841075564,
          "rotation": 0,
          "target": "1-starbucks"
        },
        {
          "yaw": -2.2309671601160517,
          "pitch": 0.019818816110511506,
          "rotation": 0,
          "target": "2-tembusu-tree"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.7646481123136635,
          "pitch": 0.062460763996828206,
          "title": "Education Resource Centre",
          "text": "<div>Open to the NUS community, ERC attracts students with its array of IT and multimedia facilities, plentiful study clusters and group discussion spaces where students can brainstorm for group projects or work individually on course assignments.</div><div><br></div><div>Designed to foster collaborative learning, the technology-infused seminar rooms in UTown also encourage professors to introduce new teaching methods, which could eventually be replicated to the wider NUS community. Such strategic planning demonstrates the University’s commitment to enhance the overall educational experience for all NUS students.</div>"
        }
      ]
    },
    {
      "id": "1-starbucks",
      "name": "Starbucks",
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
        "yaw": -2.945621397457659,
        "pitch": 0.07697687094028005,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": 2.135745078987397,
          "pitch": 0.010344747092663198,
          "rotation": 0,
          "target": "0-education-resource-centre"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.941205158128195,
          "pitch": -0.033598604177907276,
          "title": "Starbucks",
          "text": "Students come here to chill with their friends as well as a good place to hold project meetings and discussions!"
        }
      ]
    },
    {
      "id": "2-tembusu-tree",
      "name": "Tembusu Tree",
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
          "yaw": -2.6736303735917915,
          "pitch": 0.0693687920572561,
          "rotation": 0,
          "target": "0-education-resource-centre"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.15428960852097617,
          "pitch": -0.0643749793227979,
          "title": "Tembusu Tree",
          "text": "A slow-growing evergreen tree, native to Singapore"
        }
      ]
    }
  ],
  "name": "Education Resource Centre at NUS UTown",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
