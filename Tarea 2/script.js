import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm"

const cities = [
    {name:"Amieirinha",population:4812946},
    {name:"Kinshasa",population:1027499},
    {name:"Blantyre",population:1992831},
    {name:"Pueblo Nuevo Viñas",population:6106658},
    {name:"Ko Si Chang",population:1258350},
    {name:"Rabak",population:5611054},
    {name:"Port-Cartier",population:2014142},
    {name:"Detroit",population:8927289},
    {name:"Medeiros Neto",population:6847563},
    {name:"Kushchëvskaya",population:4160962}
]

d3. select('.bars')
    .selectAll('rect')
    .data(cities)
    .join('rect')
    .attr('width', 40)
    .attr('height', function(d){
        return d.population * 40e-6
    })
    .attr('x', function(d, i){
        return i * 45 + 20 
    })
    .attr('y', function(d){
        return 200 - d.population * 40e-6 - 20
    })

d3.select('.labels')
    .selectAll('text')
    .data(cities)
    .join('text')
    .attr('x', function(d, i){
        return i * 45 + 20
    })
    .attr('y', 205)
    .attr('transform', function(d, i){
        return `rotate(90, ${i * 45 + 35
        }, 205)`
    })
    .attr('text-anchor', 'start')
    .text(function(d){
        return d.name
    })
   