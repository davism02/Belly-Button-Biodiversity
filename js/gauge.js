function gauge(){
    d3.json("samples.json").then((data) =>{
        var currentID = d3.selectAll("#selDataset").node().value;
        filteredMeta = data.metadata.filter(entry => entry.id == currentID);
        x = filteredMeta[0].wfreq
        path = pathFind(x)
        createGauge()
     
    });

    var trace3 = [
        {
          x : filteredID[0].otu_ids,
          y : filteredID[0].sample_values,
          title: { text: "Speed" },
          type: "indicator",
          mode: "gauge+number",
          delta: { reference: 400 },
          gauge: { axis: { range: [null, 500] } }
        }
      ];
      
      var layout = { width: 600, height: 400 };
      Plotly.newPlot('gauge', data, layout);  
}