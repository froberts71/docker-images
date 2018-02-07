zingchart.THEME="classic";
var myConfig = {
"background-color":"#3F5666",
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
            "text":"Today's Activity",
            "text-align":"left",
            "font-size":"14px",
            "font-color":"#ffffff",
            "background-color":"none"
        }
    },
    {
        "type":"pie",
        "height":"40%",
        "width":"30%",
        "x":"3%",
        "y":"10%",
        "background-color":"#ffffff",
        "border-radius":4,
        "title":{
            "text":"Crytpo Currencies",
            "text-align":"left",
            "background-color":"none",
            "font-color":"#000000",
            "font-size":"13px",
            "offset-y":"10%",
            "offset-x":"10%"
        },
        "value-box":{
            "visible":true
        },
        "plotarea":{
            "margin":"20% 0% 0% 0%"
        },
        "plot":{
            "slice":50,
            "ref-angle":270,
            "detach":false,
            "hover-state":{
                "visible":false
            },
            "value-box":{
                "visible":true,
                "type":"first",
                "connected":false,
                "placement":"center",
                "text":"%v",
                "rules":[
                    {
                        "rule":"%v < 3850",
                        "visible":false
                    }
                ],
                "font-color":"#000000",
                "font-size":"20px"
            },
            "tooltip":{
                "rules":[
                    {
                        "rule":"%i == 0",
                        "text":"%v %t Owned",
                        "shadow":false,
                        "border-radius":4
                    },
                    {
                        "rule":"%i == 1",
                        "text":"%v Remaining",
                        "shadow":false,
                        "border-radius":4
                    }
                ]
            },
            "animation":{
                "delay":0,
                "effect":2,
                "speed":"600",
                "method":"0",
                "sequence":"1"
            }
        },
        "series":[
            {
                "values":[3852],
                "text":"BTC",
                "background-color":"#00baf0",
                "border-width":"0px",
                "shadow":0
            },
            {
                "values":[1148],
                "background-color":"#dadada",
                "alpha":"0.5",
                "border-color":"#dadada",
                "border-width":"1px",
                "shadow":0
            }
        ]
    },
    {
        "type":"pie",
        "height":"40%",
        "width":"30%",
        "x":"35%",
        "y":"10%",
        "background-color":"#ffffff",
        "border-radius":4,
        "title":{
            "text":"Portfolio",
            "text-align":"left",
            "background-color":"none",
            "font-color":"#000000",
            "font-size":"13px",
            "offset-y":"10%",
            "offset-x":"10%"
        },
        "value-box":{
            "visible":true
        },
        "plotarea":{
            "margin":"20% 0% 0% 0%"
        },
        "plot":{
            "slice":50,
            "ref-angle":270,
            "detach":false,
            "hover-state":{
                "visible":false
            },
            "value-box":{
                "visible":true,
                "type":"first",
                "connected":false,
                "placement":"center",
                "text":"%v",
                "rules":[
                    {
                        "rule":"%v < 5.6",
                        "visible":false
                    }
                ],
                "font-color":"#000000",
                "font-size":"20px"
            },
            "tooltip":{
                "rules":[
                    {
                        "rule":"%v == 5.6",
                        "text":"%v %t Completed",
                        "shadow":false,
                        "border-radius":4
                    },
                    {
                        "rule":"%v == 4.4",
                        "text":"%v Remaining",
                        "shadow":false,
                        "border-radius":4
                    }
                ]
            },
            "animation":{
                "delay":0,
                "effect":2,
                "speed":"600",
                "method":"0",
                "sequence":"1"
            }
        },
        "series":[
            {
                "values":[5.6],
                "text":"Miles",
                "background-color":"#8AB839",
                "border-width":"0px",
                "shadow":0
            },
            {
                "values":[4.4],
                "background-color":"#dadada",
                "alpha":"0.5",
                "border-color":"#dadada",
                "border-width":"1px",
                "shadow":0
            }
        ]
    },
    {
        "type":"pie",
        "height":"40%",
        "width":"30%",
        "x":"67%",
        "y":"10%",
        "background-color":"#ffffff",
        "border-radius":4,
        "title":{
            "text":"Calories",
            "text-align":"left",
            "background-color":"none",
            "font-color":"#000000",
            "font-size":"13px",
            "offset-y":"10%",
            "offset-x":"10%"
        },
        "value-box":{
            "visible":true
        },
        "plotarea":{
            "margin":"20% 0% 0% 0%"
        },
        "plot":{
            "slice":50,
            "ref-angle":270,
            "detach":false,
            "hover-state":{
                "visible":false
            },
            "value-box":{
                "visible":true,
                "type":"first",
                "connected":false,
                "placement":"center",
                "text":"%v",
                "rules":[
                    {
                        "rule":"%v < 2078",
                        "visible":false
                    }
                ],
                "font-color":"#000000",
                "font-size":"20px"
            },
            "tooltip":{
                "rules":[
                    {
                        "rule":"%v == 2078",
                        "text":"%v %t Burned",
                        "shadow":false,
                        "border-radius":4
                    },
                    {
                        "rule":"%v == 422",
                        "text":"%v Remaining",
                        "shadow":false,
                        "border-radius":4
                    }
                ]
            },
            "animation":{
                "delay":0,
                "effect":2,
                "speed":"600",
                "method":"0",
                "sequence":"1"
            }
        },
        "series":[
            {
                "values":[2078],
                "text":"Calories",
                "background-color":"#FABE28",
                "border-width":"0px",
                "shadow":0
            },
            {
                "values":[422],
                "background-color":"#dadada",
                "alpha":"0.5",
                "border-color":"#dadada",
                "border-width":"1px",
                "shadow":0
            }
        ]
    },
    {
      "type": "line",
      "background-color": "#ffffff",
      "height":"42%",
      "width":"95%",
      "x":"3%",
      "y":"53%",
      "utc": true,
      "border-radius":4,
      "title":{
         "text":"BTC/USD",
         "text-align":"left",
         "font-size":"13px",
         "font-color":"#000000",
         "background-color":"none",
         "offset-x":"10%",
         "offset-y":"10%"
      },    
      "legend":{
          "toggle-action":"remove",
          "layout":"x3",
          "x":"52.5%",
          "shadow":false,
          "border-color":"none",
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
        "min-value": 1383292800000,
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
        "values": "0:1000:250",
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
    				url: 'feed()',
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
window.feed = function(callback) {
  var tick = {};
  tick.plot0 = parseInt(10 + 900 * Math.random(), 10);
  tick.plot1 = parseInt(10 + 900 * Math.random(), 10);
  tick.plot2 = parseInt(10 + 900 * Math.random(), 10);
  callback(JSON.stringify(tick));
};