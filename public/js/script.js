$(document).ready(function(){
  drawSVG();
  getData();
  setTimeout(function(){
    var obj = data.filter(function(obj){
      return obj.year == 2016;
    });
    drawCircles(obj);
  },2000)
})


var drawSVG = function(){
  var w = 800;
  var h = 300;
  var margin = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20
  }

  svg = d3.select("body")
          .append("svg")
          .attr("width", w)
          .attr("height", h);
}

var getData = function(){
  d3.csv("js/data.csv")
    .row(function(d){ return{year: d.year, thing: d.thing, money: +d.money, time: +d.time, love: +d.love}; })
    .get(function(error, rows){ data = rows; });
}

var drawCircles = function(data){
  var circles = svg.selectAll("circle")
                  .data(data)
                  .enter()
                  .append("circle")
  circles.attr("cx", function(d){
            return d.time;
          })
          .attr("cy", function(d){
            return d.money;
          })
          .attr("r", function(d){
            return d.love;
          });

}