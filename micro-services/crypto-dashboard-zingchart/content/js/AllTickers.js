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
      "legend":{
          "toggle-action":"remove",
          "layout":"x4",
          "x":"20%",
          "shadow":false,
          "border-color":"#000000",
          "background-color":"none",
          "item":{
             "font-color":"#000000"
          },
          "marker":{
                "type":"circle",
                "border-width":0
            },
            "tooltip":{
                "text":"%plot-description"
                }
      },
      "tooltip": {
         "visible": false
      },
      "scale-x": {
        "min-value": 1518020658724,
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
        "values": "7000:8000:100",
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
    				type: 'feed',
    				transport: 'js',
    				url: 'BTCfeed()',
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
                    "text": "CryptoCompare",
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
                },
                {
                    "values": [],
                    "text": "BTCChina",
                    "line-color": "#009872",
                    "legend-marker": {
                        "type": "circle",
                        "size": 5,
                        "background-color": "#009872",
                        "border-width": 1,
                        "shadow": 0,
                        "border-color": "#69f2d0"
                    },
                    "marker": {
                        "background-color": "#009872",
                        "border-width": 1,
                        "shadow": 0,
                        "border-color": "#69f2d0"
                    }
                },
                {
                    "values": [],
                    "text": "Cryptsy",
                    "line-color": "#da534d",
                    "legend-marker": {
                        "type": "circle",
                        "size": 5,
                        "background-color": "#da534d",
                        "border-width": 1,
                        "shadow": 0,
                        "border-color": "#faa39f"
                    },
                    "marker": {
                        "background-color": "#da534d",
                        "border-width": 1,
                        "shadow": 0,
                        "border-color": "#faa39f"
                    }
                },
                {
                    "values": [],
                    "text": "EWMA",
                    "line-color":"#3f0bff",
    		  			"line-style":"dashed",
                    "legend-marker": {
                        "type": "circle",
                        "size": 5,
                        "background-color": "#3f0bff",
                        "border-width": 1,
                        "shadow": 0,
                        "border-color": "#3f0bff"
                    },
                    "marker": {
                        "background-color": "#3f0bff",
                        "border-width": 1,
                        "shadow": 0,
                        "border-color": "#3f0bff"
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
      "legend":{
          "toggle-action":"remove",
          "layout":"x4",
          "x":"20%",
          "shadow":false,
          "border-color":"#000000",
          "background-color":"none",
          "item":{
             "font-color":"#000000"
          },
          "marker":{
                "type":"circle",
                "border-width":0
            },
            "tooltip":{
                "text":"%plot-description"
                }
      },
      "tooltip": {
         "visible": false
      },
      "scale-x": {
        "min-value": 1518020658724,
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
        "values": "650:800:25",
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
    				type: 'feed',
    				transport: 'js',
    				url: 'ETHfeed()',
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
                    "text": "CryptoCompare",
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
                },
                {
                    "values": [],
                    "text": "BTCChina",
                    "line-color": "#009872",
                    "legend-marker": {
                        "type": "circle",
                        "size": 5,
                        "background-color": "#009872",
                        "border-width": 1,
                        "shadow": 0,
                        "border-color": "#69f2d0"
                    },
                    "marker": {
                        "background-color": "#009872",
                        "border-width": 1,
                        "shadow": 0,
                        "border-color": "#69f2d0"
                    }
                },
                {
                    "values": [],
                    "text": "Cryptsy",
                    "line-color": "#da534d",
                    "legend-marker": {
                        "type": "circle",
                        "size": 5,
                        "background-color": "#da534d",
                        "border-width": 1,
                        "shadow": 0,
                        "border-color": "#faa39f"
                    },
                    "marker": {
                        "background-color": "#da534d",
                        "border-width": 1,
                        "shadow": 0,
                        "border-color": "#faa39f"
                    }
                },
                {
                    "values": [],
                    "text": "EWMA",
                    "line-color":"#3f0bff",
    		  			"line-style":"dashed",
                    "legend-marker": {
                        "type": "circle",
                        "size": 5,
                        "background-color": "#3f0bff",
                        "border-width": 1,
                        "shadow": 0,
                        "border-color": "#3f0bff"
                    },
                    "marker": {
                        "background-color": "#3f0bff",
                        "border-width": 1,
                        "shadow": 0,
                        "border-color": "#3f0bff"
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
      "legend":{
          "toggle-action":"remove",
          "layout":"x4",
          "x":"20%",
          "shadow":false,
          "border-color":"#000000",
          "background-color":"none",
          "item":{
             "font-color":"#000000"
          },
          "marker":{
                "type":"circle",
                "border-width":0
            },
            "tooltip":{
                "text":"%plot-description"
                }
      },
      "tooltip": {
         "visible": false
      },
      "scale-x": {
        "min-value": 1518020658724,
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
        "values": "50:100:5",
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
    				type: 'feed',
    				transport: 'js',
    				url: 'LTCfeed()',
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
                    "text": "CryptoCompare",
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
                },
                {
                    "values": [],
                    "text": "BTCChina",
                    "line-color": "#009872",
                    "legend-marker": {
                        "type": "circle",
                        "size": 5,
                        "background-color": "#009872",
                        "border-width": 1,
                        "shadow": 0,
                        "border-color": "#69f2d0"
                    },
                    "marker": {
                        "background-color": "#009872",
                        "border-width": 1,
                        "shadow": 0,
                        "border-color": "#69f2d0"
                    }
                },
                {
                    "values": [],
                    "text": "Cryptsy",
                    "line-color": "#da534d",
                    "legend-marker": {
                        "type": "circle",
                        "size": 5,
                        "background-color": "#da534d",
                        "border-width": 1,
                        "shadow": 0,
                        "border-color": "#faa39f"
                    },
                    "marker": {
                        "background-color": "#da534d",
                        "border-width": 1,
                        "shadow": 0,
                        "border-color": "#faa39f"
                    }
                },
                {
                    "values": [],
                    "text": "EWMA",
                    "line-color":"#3f0bff",
    		  			"line-style":"dashed",
                    "legend-marker": {
                        "type": "circle",
                        "size": 5,
                        "background-color": "#3f0bff",
                        "border-width": 1,
                        "shadow": 0,
                        "border-color": "#3f0bff"
                    },
                    "marker": {
                        "background-color": "#3f0bff",
                        "border-width": 1,
                        "shadow": 0,
                        "border-color": "#3f0bff"
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
});

//real-time feed random math function
window.BTCfeed = function(callback) {
  var tick = {};
  tick.plot0 = parseInt(1000 * Math.random() + 7000, 10);
  tick.plot1 = parseInt(1000 * Math.random() + 7000, 10);
  tick.plot2 = parseInt(1000 * Math.random() + 7000, 10);
  tick.plot3 = Math.round( ((tick.plot0 + tick.plot1 + tick.plot2) / 3));
  callback(JSON.stringify(tick));
};

window.ETHfeed = function(callback) {
  var tick = {};
  tick.plot0 = parseInt(100 * Math.random() + 650, 10);
  tick.plot1 = parseInt(100 * Math.random() + 650, 10);
  tick.plot2 = parseInt(100 * Math.random() + 650, 10);
  tick.plot3 = Math.round( ((tick.plot0 + tick.plot1 + tick.plot2) / 3));
  callback(JSON.stringify(tick));
};

window.LTCfeed = function(callback) {
  var tick = {};
  tick.plot0 = parseInt(25 * Math.random() + 60, 10);
  tick.plot1 = parseInt(25 * Math.random() + 60, 10);
  tick.plot2 = parseInt(25 * Math.random() + 60, 10);
  tick.plot3 = Math.round( ((tick.plot0 + tick.plot1 + tick.plot2) / 3));
  callback(JSON.stringify(tick));
};