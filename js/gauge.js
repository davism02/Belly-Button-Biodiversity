function gauge(wfreq){
    var frequency = parseFloat(wfreq);
    
    var data = [
        {
          domain: { x: [0, 1], y: [0, 1] },
          value: frequency,
          title: { text: "<b>Belly Button Washing Frequency</b> <br><span style='font-size:0.8em;color:gray'>Scrubs per Week</span>" },
          type: "indicator",
          mode: "gauge+number",
          
          gauge: {
            axis: { range: [null, 9], tickwidth: 2, tickmode: "linear"},
            bar: { color: "black" },
            steps: [
              { range: [0, 1], color: "#F6F8F2" },
              { range: [1, 2], color: "#ebf0e5" },
              { range: [2, 3], color: "#cae3cf" },
              { range: [3, 4], color: "#bcdcc3" },
              { range: [4, 5], color: "#afd5b7" },
              { range: [5, 6], color: "#87c093" },
              { range: [6, 7], color: "#468654" },
              { range: [7, 8], color: "#386b43" },
              { range: [8, 9], color: "#2a5032" },
            ],
            threshold: {
              line: { color: "red", width: 3 },
              thickness: 0.75,
              value: frequency
            }
          }
        }
      ];
      
      var layout = { width: 600, height: 450, margin: { t: 0, b: 0 } };
      Plotly.newPlot('gauge', data, layout);
}
