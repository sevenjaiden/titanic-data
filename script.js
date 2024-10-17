// import * as d3 from 'd3';
// import fs from 'fs';
// import csv from 'csv-parser';


d3.csv("./data/td.csv").then(function (data) {
  console.log(data);

  data.forEach(function(row) {

    let person = d3.select("div")
      .append("p")
      .text(`${row.age} years old`)
      .attr("class", "age")

      .append("p")
      .text(row.name)
      .attr("class", "name")
      


    if (row.survived == 0) {
      person.style("color", "red");  
    } else {
      person.style("color", "black");  
    }


  });
}).catch(function (error) {
  console.error("error loading CSV file: ", error);
});
  

  async function parseCSV() {
    try {
      const data = await d3.csv("../data/td.csv");
      console.log("Parsed CSV Data:", data);
      return data;
    } catch (error) {
      console.error("error loading CSV file:", error);
      return null;
    }
  }


  parseCSV().then(function(data) {
    let ones = 0;
    let zeros = 0;

    if (data) {

      data.forEach(function(row) {

        if (row.survived == 1) {
          ones++
        }
        else{
          zeros++
        }

      
        
      });
    }

    let xPos1 = 150
    let xPos2 = 350
    let yPos = 250

    d3.select("svg")
      .append("circle")
      .attr("cx", xPos1)
      .attr("cy", yPos)
      .attr("r", ones * .1)
      .attr("fill", "black")

    d3.select("svg")
      .append("circle")
      .attr("cx", xPos2)
      .attr("cy", yPos)
      .attr("r", zeros * .1)
      .attr("fill", "red")

    //alive number
    d3.select("svg")
      .append("text")
      .attr("x", xPos1)
      .attr("y", yPos)
      .attr("text-anchor", "middle")
      .style("fill", "rgb(227, 227, 227)")
      .text(ones)

    d3.select("svg")
      .append("text")
      .attr("x", xPos1)
      .attr("y", yPos + 80)
      .attr("text-anchor", "middle")
      .style("fill", "black")
      .text("Survivors")

    //not alive number
    d3.select("svg")
      .append("text")
      .attr("x", xPos2)
      .attr("y", yPos)
      .attr("text-anchor", "middle")
      .style("fill", "rgb(227, 227, 227)")
      .text(zeros)

    d3.select("svg")
      .append("text")
      .attr("x", xPos2)
      .attr("y", yPos + 80)
      .attr("text-anchor", "middle")
      .style("fill", "red")
      .text("Deceased")



    console.log(`lived: ${ones}`)
    console.log(`died: ${zeros}`)
  });








// // set the dimensions and margins of the graph
// var margin = {top: 30, right: 30, bottom: 70, left: 60},
//     width = 460 - margin.left - margin.right,
//     height = 400 - margin.top - margin.bottom;

// // append the svg object to the body of the page
// var svg = d3.select("#my_dataviz")
//   .append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//     .attr("transform",
//           "translate(" + margin.left + "," + margin.top + ")");

// // Parse the Data
// d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum_header.csv", function(data) {

// // X axis
// var x = d3.scaleBand()
//   .range([ 0, width ])
//   .domain(data.map(function(d) { return d.Country; }))
//   .padding(0.2);
// svg.append("g")
//   .attr("transform", "translate(0," + height + ")")
//   .call(d3.axisBottom(x))
//   .selectAll("text")
//     .attr("transform", "translate(-10,0)rotate(-45)")
//     .style("text-anchor", "end");

// // Add Y axis
// var y = d3.scaleLinear()
//   .domain([0, 13000])
//   .range([ height, 0]);
// svg.append("g")
//   .call(d3.axisLeft(y));

// // Bars
// svg.selectAll("mybar")
//   .data(data)
//   .enter()
//   .append("rect")
//     .attr("x", function(d) { return x(d.Country); })
//     .attr("y", function(d) { return y(d.Value); })
//     .attr("width", x.bandwidth())
//     .attr("height", function(d) { return height - y(d.Value); })
//     .attr("fill", "#69b3a2")

// })
