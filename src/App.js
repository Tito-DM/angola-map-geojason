import { Map, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import "./App.css";
import data from "./angola.json";

function App() {
  const cityStyle = {
    fillColor: "red",
    color: "black",
  };
  const onEachCity =(city,layer)=>{
    //city is the geojson data 
    const provincia = city.properties.provincia
    // the layer represents what is display on the screen
    //bindPopup: allow to display a tooltip 
    layer.bindPopup(provincia)

    //add events
    layer.on({
      click: (e)=>{
        e.target.setStyle({
          fillColor: "green"
        })
      },
      mouseout: (e)=>{
        e.target.setStyle({
          fillColor: "red"
        })
    }
    })
  }

  return (
    <Map center={[-11.202692, 17.873887]} zoom={5.5} scrollWheelZoom={false}>
      <GeoJSON style={cityStyle} data={data} onEachFeature={onEachCity}  />
    </Map>
  );
}

export default App;
