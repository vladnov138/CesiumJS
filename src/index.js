let longitude = prompt("Input the longitude", 0)
let latitude = prompt("Input the latitude", 0)
let height = prompt("Input the height", 300)

import { Ion, Viewer, createWorldTerrain, createOsmBuildings, Cartesian3, Math } from "cesium";
import "cesium/Widgets/widgets.css";
import "../src/css/main.css"


Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlYWE1OWUxNy1mMWZiLTQzYjYtYTQ0OS1kMWFjYmFkNjc5YzciLCJpZCI6NTc3MzMsImlhdCI6MTYyNzg0NTE4Mn0.XcKpgANiY19MC4bdFUXMVEBToBmqS8kuYpUlxJHYZxk';

// Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
const viewer = new Viewer('cesiumContainer', {
    terrainProvider: createWorldTerrain()
});

// Add Cesium OSM Buildings, a global 3D buildings layer.
//viewer.scene.primitives.add(createOsmBuildings());   

console.log(longitude, latitude, height);
viewer.camera.flyTo({
    //destination : Cartesian3.fromDegrees(104, 52, 400),
    destination : Cartesian3.fromDegrees(+longitude, +latitude, +height),
    orientation : {
        heading : Math.toRadians(0.0),
        pitch : Math.toRadians(-15.0),
    }
});