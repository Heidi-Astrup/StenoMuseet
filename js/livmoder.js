/* 
fil: livmoder.js 
*Denne fil er til for at lave livmoderen til et "kort" hvor man kan trykke og læse om ting*
formål: at bruge leaflet (https://leafletjs.com/) til at lave en interaktiv infographic
*/

var map = L.map('livmoder', {
    crs: L.CRS.Simple
    
});

var bounds = [[0,0], [1000,1000]];
var image = L.imageOverlay('images/Livmoder.svg', bounds).addTo(map);

map.fitBounds(bounds);

//det hvor kortet starter
map.setView( [500, 505], -10);


//æggeleder
var leder = L.polygon([
    [750, 300], //højre top
    [750, 100], //venstre top
    [700, 100], //venstre bund
    [690, 320]  //højre bund
], {color: 'rgba(255,0,0,0)'}
).addTo(map).bindPopup("<p>Æggeleder - Bruges til at føre ægget ud i livmoderen</p>");

//livmoder
var moder = L.polygon([
    [850, 650], //højre top
    [850, 350], //venstre top
    [550, 350], //venstre bund
    [550, 650]  //højre bund
], {color: 'rgba(255,0,0,0)'}
).addTo(map).bindPopup("<p>Livmoder</p>");

//skede
var skede = L.polygon([
    [540, 590], //højre top
    [540, 410], //venstre top
    [150, 450], //venstre bund
    [150, 560]  //højre bund
], {color: 'rgba(255,0,0,0)'}
).addTo(map).bindPopup("<p>Skede</p>");

//modnet æg
var modnetEg = L.circle([730, 865], {
    color: 'rgba(255,0,0,0)',
    fillColor: 'rgba(255,0,0,0)',
    radius: 25
}).addTo(map).bindPopup("<p>Modnet æg</p>");

//eggestok
var skede = L.polygon([
    [660, 920], //højre top
    [660, 780], //venstre top
    [570, 780], //venstre bund
    [540, 830], //højre bund
    [570, 910]  //højre midt
], {color: 'rgba(255,0,0,0)'}
).addTo(map).bindPopup("<p>Æggestok = æggebakke til alle ægene</p>");

//folikkel
var folikkel = L.circle([583, 850], {
    color: 'rgba(255,0,0,0)',
    fillColor: 'rgba(255,0,0,0)',
    radius: 20
}).addTo(map).bindPopup("<p>Folikkel = basiclly en æggeskal, hvor æget ligger indeni</p>");

//eg
var eg = L.circle([623, 875], {
    color: 'rgba(255,0,0,0)',
    fillColor: 'rgba(255,0,0,0)',
    radius: 10
}).addTo(map).bindPopup("<p>Æg = æggehvide og æggeblomme</p>");