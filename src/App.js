import { Map, TileLayer, Marker, Popup, GeoJSON , Circle, } from "react-leaflet";
import "./App.css";
import data from "./angola.json";

function App() {
  const cityStyle = {
    fillColor: "red",
    color: "black",
  };
  const color =["yellow", "blue", "red", "orange", "gray"]
  const onEachCity =(city,layer)=>{
    //city is the geojson data 
    const {provincia,capital,clima,populacao,area,grupo_etico} = city.properties
    // the layer represents what is display on the screen
    //bindPopup: allow to display a tooltip 
    
    layer.bindPopup( `
   <p> Província: ${provincia}</p>
   <p> Capital: ${capital}</p>
   <p>Clima: ${clima}</p>
   <p> população: ${populacao}</p>
   <p> Área: ${area}</p>

    `)
    const fillOpacityColor = color[Math.floor(Math.random()*color.length) ]
    //change fillcolor
    layer.options.fillColor= fillOpacityColor
    //add events
    layer.on({
      click: (e)=>{
        e.target.setStyle({
          fillColor: "green",
          fillOpacity: 1
        })
      },
     
    
    })
  }

  return (
    <Map center={[-11.202692, 17.873887]} zoom={5.5} scrollWheelZoom={false}>
      <GeoJSON style={cityStyle} data={data} onEachFeature={onEachCity}  />
     
  <Circle center ={[-8.83833, 13.2344]}  color= 'red'
    fillColor= '#f03'
    fillOpacity= {0.5}
    radius= {500}/>
     <Circle center ={[-8.91492, 13.178797]}  color= 'red'
    fillColor= '#f03'
    fillOpacity= {0.5}
    radius= {500}/>
     <Circle center ={[-8.950193, 13.161623]}  color= 'red'
    fillColor= '#f03'
    fillOpacity= {0.5}
    radius= {500}/>
     <Circle center ={[-8.838937, 13.222087]}  color= 'red'
    fillColor= '#f03'
    fillOpacity= {0.5}
    radius= {500}/>
     <Circle center ={[-8.779225, 13.345716]}  color= 'red'
    fillColor= '#f03'
    fillOpacity= {0.5}
    radius= {500}/>
     <Circle center ={[-9.7253, 13.477527]}  color= 'red'
    fillColor= '#f03'
    fillOpacity= {0.5}
    radius= {500}/>
  
    </Map>
  );
}

export default App;
