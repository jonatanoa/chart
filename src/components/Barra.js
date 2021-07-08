import React from 'react'
import * as d3 from 'd3';

const Barra =()=>{
    var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
        11, 12, 15, 20, 18, 17, 16, 18, 23, 25];

//Width and height
    var w = 500;
    var h = 300;
    var barPadding = 1;  // <-- Nueva!
//Creará un elemento SVG 
var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", w / dataset.length - barPadding)//el ancho de cada barra se acopla al contenedor svg
    .attr("height", function(d) {
        return d * 4;  //Solo el dato
    })
    .attr("x", function(d, i) {
         return i * (w / dataset.length); //esto permitira que las columnas se extiendan por todo el contenedor svg
    })
    .attr("y", function(d) { //para poder poner las graficas de abajo para arriba
         return h - d * 4;  //Altura menos el dato
    })
    .attr("fill", function(d) {
        return "rgb(0, 0, " + (d * 10) + ")";
    });

    

} 



export default Barra;