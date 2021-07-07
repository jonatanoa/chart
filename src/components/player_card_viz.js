import * as d3 from 'd3';

const draw = (props) => {
  var viz_class = ".player_card_viz";
  d3.select(viz_class+' > *').remove();

  var containerWidth = d3.select(viz_class).style('width').slice(0, -2);
  var containerHeight = d3.select(viz_class).style('height').slice(0, -2);
  var viz = d3.select(viz_class);

  var svg = viz.append("svg")
                .attr("width", containerWidth)
                .attr("height", containerHeight);

  // var margin = {left:10, right:10, top: 10, bottom: 10}
  // var width = svg.attr("width") - margin.left - margin.right;
  // var height = svg.attr("height") - margin.bottom - margin.top;

  // console.log("props");
  // console.log(props);

  var player_text = props.player_data.player.player+" "+props.player_data.player.pos+" for the "+props.player_data.player.team.city+" "+props.player_data.player.team.name

  var headshot_circle_radius = 20;
  var defs = svg.append('svg:defs');
        defs.append('svg:pattern')
            .attr('id', 'tile-ww')
            .attr('patternUnits', 'userSpaceOnUse')
            .attr('width', headshot_circle_radius*2)
            .attr('height', headshot_circle_radius*2)
            .append('svg:image')
            .attr('xlink:href', props.player_data.player.photo_link)
            .attr('x', 0)
            .attr('y', 0)
            .attr('width', headshot_circle_radius*2)
            .attr('height', headshot_circle_radius*2);

  // var ccl = svg.append("circle")
  var g = svg.append("g");

  g.append("rect")
    .attr("x", headshot_circle_radius)
    .attr("width", 10)
    .attr("height", headshot_circle_radius*2)
    .attr('fill', "#6FCACD");
  g.append("circle")
    .attr("cx", headshot_circle_radius)
    .attr("cy", headshot_circle_radius)
    .attr("r", headshot_circle_radius)
    .attr('stroke', "#6FCACD")
    .attr('stroke-width', headshot_circle_radius/20)
    .attr('fill', 'url(#tile-ww)')
    // .attr('fill', 'yellow')
    // .attr("transform", "translate(60,0)")
    // .style("opacity", 0.8)
    // .style("background")

  g.append("text")
    .attr("x", headshot_circle_radius+20)
    .attr("y", 25)
    .attr("height", 300)
    .attr("fill", "#2A1D00")
    .attr("stroke", "#F9CF6F")
    .attr("stroke-width", 0.3)
    .text(player_text);

    var text;
    svg.selectAll("text").each(function(d, i) {
        text = this.getBBox(); // get bounding box of text field and store it in texts array
    });
    // console.log(text);

    svg.select('rect')
      .attr("width", text.width+(headshot_circle_radius*2))
}

export default draw