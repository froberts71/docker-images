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
      
      "tooltip": {
         "visible": false
      },
      "scale-x": {
        "min-value": 1518640974669,
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
        "values": "9200:9350:10",
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
    				"type": 'feed',
    				"transport":"websockets",
    				"url": "ws://localhost:5218",
    				"method" : "push"
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
        "min-value": 1518640974669,
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
        "values": "880:980:10",
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
    				"type": 'feed',
    				"transport":"websockets",
    				"url": "ws://localhost:5219",
    				"method" : "push"
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
        "min-value": 1518640974669,
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
        "values": "190:220:5",
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
    				"type": 'feed',
    				"transport":"websockets",
    				"url": "ws://localhost:5220",
    				"method" : "push"
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
});
