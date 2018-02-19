zingchart.THEME="classic";
var myConfig = {
"background-color":"#ffffff",
"globals": {
  "font-family":"Arial",
  "font-weight":"normal"
},
"graphset":[
    {
       "type":"null",
        "x":"2.25%",
        "y":"1%",
        "background-color":"none",
        "title":{
            "text":"<b>Current Price</b>",
            "text-align":"left",
            "font-size":"16px",
            "font-color":"#3F5666",
            "background-color":"none"
        }
    },	
    {
      "type": "line",
      "background-color": "#ffffff",
      "height":"30%",
      "width":"95%",
      "x":"3%",
      "y":"7%",
      "utc": true,
      "timezone": -8,
      "border-radius":4,
      "title":{
         "text":"<b>BTC/USD</b>",
         "text-align":"left",
         "font-size":"13px",
         "font-color":"#000000",
         "background-color":"none",
         "offset-x":"10%",
         "offset-y":"10%"
      },    
      
      "tooltip": {
         "visible": false
      },
      "scale-x": {
        "min-value": 1518710128611,
        "step": 1000,
        "line-color": "#000000",
        "tick": {
             "line-color": "#000000"
         },
         "guide": {
             "line-color": "#000000"
         },
         "item": {
             "font-color": "#000000"
         },
         "transform": {
             "type": "date",
              "all": "%D, %d %M<br />%h:%i:%s %A",
              "guide": {
                        "visible": false
              },
              "item": {
                        "visible": false
              }
              },
              "label": {
                 "visible": false
              },
        "minor-ticks": 0
      },
      "scale-y": {
        "values": "9350:9550:20",
        "line-color": "#000000",
        "shadow": 0,
        "tick": {
           "line-color": "#000000"
        },
        "guide": {
           "line-color": "#000000",
           "line-style": "dashed"
        },
        "item": {
           "font-color": "#000000"
        },
        "label": {
           "text": "USD",
           "font-color": "#000000"
        },
           "minor-ticks": 0,
           "thousands-separator": ","
        },
        "crosshair-x": {
                "line-color": "#f6f7f8",
                "plot-label": {
                    "border-radius": "5px",
                    "border-width": "1px",
                    "border-color": "#f6f7f8",
                    "padding": "10px",
                    "font-weight": "bold"
                },
                "scale-label": {
                    "font-color": "#00baf0",
                    "background-color": "#f6f7f8",
                    "border-radius": "5px"
                }
            },
       
        "refresh": {
    			type: "feed",
  			transport: "js",
  			url: "feedBTC()",
  			interval: 500
  	    },
        "plot": {
            "tooltip-text": "%t views: %v<br>%k",
            "shadow": 0,
            "line-width": "3px",
            "marker": {
                "type": "circle",
                "size": 3
             },
                "hover-marker": {
                    "type": "circle",
                    "size": 4,
                    "border-width": "1px"
                }
        },
        "plotarea":{
            "margin":"35% 3.5% 20% 7.5%"
        },
        "series": [
                {
                    "values": [],
                    "text": "Last Trade",
                    "line-color": "#007790",
                    "legend-marker": {
                        "type": "circle",
                        "size": 5,
                        "background-color": "#007790",
                        "border-width": 1,
                        "shadow": 0,
                        "border-color": "#69dbf1"
                    },
                    "marker": {
                        "background-color": "#007790",
                        "border-width": 1,
                        "shadow": 0,
                        "border-color": "#69dbf1"
                    }
                }
        ]
    },
    {
      "type": "line",
      "background-color": "#ffffff",
      "height":"30%",
      "width":"95%",
      "x":"3%",
      "y":"38%",
      "utc": true,
      "timezone": -8,
      "border-radius":4,
      "title":{
         "text":"<b>ETH/USD</b>",
         "text-align":"left",
         "font-size":"13px",
         "font-color":"#000000",
         "background-color":"none",
         "offset-x":"10%",
         "offset-y":"10%"
      },    
     
      "tooltip": {
         "visible": false
      },
      "scale-x": {
        "min-value": 1518710128611,
        "step": 1000,
        "line-color": "#000000",
        "tick": {
             "line-color": "#000000"
         },
         "guide": {
             "line-color": "#000000"
         },
         "item": {
             "font-color": "#000000"
         },
         "transform": {
             "type": "date",
              "all": "%D, %d %M<br />%h:%i:%s %A",
              "guide": {
                        "visible": false
              },
              "item": {
                        "visible": false
              }
              },
              "label": {
                 "visible": false
              },
        "minor-ticks": 0
      },
      "scale-y": {
        "values": "900:930:2",
        "line-color": "#000000",
        "shadow": 0,
        "tick": {
           "line-color": "#000000"
        },
        "guide": {
           "line-color": "#000000",
           "line-style": "dashed"
        },
        "item": {
           "font-color": "#000000"
        },
        "label": {
           "text": "USD",
           "font-color": "#000000"
        },
           "minor-ticks": 0,
           "thousands-separator": ","
        },
        "crosshair-x": {
                "line-color": "#f6f7f8",
                "plot-label": {
                    "border-radius": "5px",
                    "border-width": "1px",
                    "border-color": "#f6f7f8",
                    "padding": "10px",
                    "font-weight": "bold"
                },
                "scale-label": {
                    "font-color": "#00baf0",
                    "background-color": "#f6f7f8",
                    "border-radius": "5px"
                }
            },
       
        "refresh": {
    			type: "feed",
  			transport: "js",
  			url: "feedETH()",
  			interval: 500
  	    },
        "plot": {
            "tooltip-text": "%t views: %v<br>%k",
            "shadow": 0,
            "line-width": "3px",
            "marker": {
                "type": "circle",
                "size": 3
             },
                "hover-marker": {
                    "type": "circle",
                    "size": 4,
                    "border-width": "1px"
                }
        },
        "plotarea":{
            "margin":"35% 3.5% 20% 7.5%"
        },
        "series": [
                {
                    "values": [],
                    "text": "Last Trade",
                    "line-color": "#298213",
                    "legend-marker": {
                        "type": "circle",
                        "size": 5,
                        "background-color": "#298213",
                        "border-width": 1,
                        "shadow": 0,
                        "border-color": "#298213"
                    },
                    "marker": {
                        "background-color": "#298213",
                        "border-width": 1,
                        "shadow": 0,
                        "border-color": "#298213"
                    }
                }
        ]
    },
    
    {
      "type": "line",
      "background-color": "#ffffff",
      "height":"30%",
      "width":"95%",
      "x":"3%",
      "y":"69%",
      "utc": true,
      "timezone": -8,
      "border-radius":4,
      "title":{
         "text":"<b>LTC/USD</b>",
         "text-align":"left",
         "font-size":"13px",
         "font-color":"#000000",
         "background-color":"none",
         "offset-x":"10%",
         "offset-y":"10%"
      },    
      
      "tooltip": {
         "visible": false
      },
      "scale-x": {
        "min-value": 1518710128611,
        "step": 1000,
        "line-color": "#000000",
        "tick": {
             "line-color": "#000000"
         },
         "guide": {
             "line-color": "#000000"
         },
         "item": {
             "font-color": "#000000"
         },
         "transform": {
             "type": "date",
              "all": "%D, %d %M<br />%h:%i:%s %A",
              "guide": {
                        "visible": false
              },
              "item": {
                        "visible": false
              }
              },
              "label": {
                 "visible": false
              },
        "minor-ticks": 0
      },
      "scale-y": {
        "values": "205:215:1",
        "line-color": "#000000",
        "shadow": 0,
        "tick": {
           "line-color": "#000000"
        },
        "guide": {
           "line-color": "#000000",
           "line-style": "dashed"
        },
        "item": {
           "font-color": "#000000"
        },
        "label": {
           "text": "USD",
           "font-color": "#000000"
        },
           "minor-ticks": 0,
           "thousands-separator": ","
        },
        "crosshair-x": {
                "line-color": "#f6f7f8",
                "plot-label": {
                    "border-radius": "5px",
                    "border-width": "1px",
                    "border-color": "#f6f7f8",
                    "padding": "10px",
                    "font-weight": "bold"
                },
                "scale-label": {
                    "font-color": "#00baf0",
                    "background-color": "#f6f7f8",
                    "border-radius": "5px"
                }
            },
       
        "refresh": {
    			type: "feed",
  			transport: "js",
  			url: "feedLTC()",
  			interval: 500
  	    },
        "plot": {
            "tooltip-text": "%t views: %v<br>%k",
            "shadow": 0,
            "line-width": "3px",
            "marker": {
                "type": "circle",
                "size": 3
             },
                "hover-marker": {
                    "type": "circle",
                    "size": 4,
                    "border-width": "1px"
                }
        },
        "plotarea":{
            "margin":"35% 3.5% 20% 7.5%"
        },
        "series": [
                {
                    "values": [],
                    "text": "Last Trade",
                    "line-color": "#d83a0f",
                    "legend-marker": {
                        "type": "circle",
                        "size": 5,
                        "background-color": "#d83a0f",
                        "border-width": 1,
                        "shadow": 0,
                        "border-color": "#d83a0f"
                    },
                    "marker": {
                        "background-color": "#d83a0f",
                        "border-width": 1,
                        "shadow": 0,
                        "border-color": "#d83a0f"
                    }
                }
        ]
    }
]
};
 
zingchart.render({ 
	id : 'myChart', 
	data : myConfig, 
	height: 600, 
	width: 825 
});0


function newFeed(topic) {
  var feed = {}
  feed.feed = function(callback) {
    var tick = feed.events.shift()
    if (tick) {
      callback(JSON.stringify(tick))
    }
  }
  feed.events = []
  feed.ws = {}
  feed.connect = function() {
    var url = "ws://35.197.123.209:9090/ws/consumer/" + topic
    feed.ws = new WebSocket(url);
    feed.ws.onmessage = function (evt) 
    { 
      console.log("event:")

      var receiveMsg = JSON.parse(evt.data);
      // covert base64 data
      data = atob(receiveMsg.payload)
      console.log("data %o", data)
      data = JSON.parse(data)[0]
      var tick = {}
      tick.plot0 = data.Price
      tick["scale-x"] = data.LastUpdate
      feed.events.push(tick)
    };
  }

  feed.connect()

  return feed
}



window.feedBTC = newFeed("persistent/cryptodemo/north-america/quotes/BTC_USD/dashboard-subscription").feed

// for other charts
window.feedETH = newFeed("persistent/cryptodemo/north-america/quotes/ETH_USD/dashboard-subscription").feed
window.feedLTC = newFeed("persistent/cryptodemo/north-america/quotes/LTC_USD/dashboard-subscription").feed




