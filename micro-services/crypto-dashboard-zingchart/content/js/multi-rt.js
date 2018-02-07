zingchart.THEME="classic";
var myConfig = 
        {
            "type": "line",
            "background-color": "#003849",
            "utc": true,
            "title": {
                "y": "7px",
                "text": "BTC",
                "background-color": "#003849",
                "font-size": "24px",
                "font-color": "white",
                "height": "25px"
            },
            "plotarea": {
                "margin": "20% 8% 14% 12%",
                "background-color": "#003849"
            },
            "legend": {
                "layout": "float",
                "background-color": "none",
                "border-width": 0,
                "shadow": 0,
                "width":"75%",
                "text-align":"middle",
                "x":"25%",
                "y":"10%",
                "item": {
                    "font-color": "#f6f7f8",
                    "font-size": "14px"
                }
            },
            "scale-x": {
                "min-value": 1383292800000,
                "shadow": 0,
                "step": 1000,
                "line-color": "#f6f7f8",
                "tick": {
                    "line-color": "#f6f7f8"
                },
                "guide": {
                    "line-color": "#f6f7f8"
                },
                "item": {
                    "font-color": "#f6f7f8"
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
                "line-color": "#f6f7f8",
                "shadow": 0,
                "tick": {
                    "line-color": "#f6f7f8"
                },
                "guide": {
                    "line-color": "#f6f7f8",
                    "line-style": "dashed"
                },
                "item": {
                    "font-color": "#f6f7f8"
                },
                "label": {
                    "text": "USD",
                    "font-color": "#f6f7f8"
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
            "tooltip": {
                "visible": false
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
        };

zingchart.render({ 
	id : 'myChart', 
	data : myConfig, 
	height: 500, 
	width: 725 
});

//real-time feed random math function
window.feed = function(callback) {
  var tick = {};
  tick.plot0 = parseInt(10 + 900 * Math.random(), 10);
  tick.plot1 = parseInt(10 + 900 * Math.random(), 10);
  tick.plot2 = parseInt(10 + 900 * Math.random(), 10);
  callback(JSON.stringify(tick));
};