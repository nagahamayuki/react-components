import React from 'react'
import GoogleMap from 'google-map-react';

export default class GoogleMapComponent extends React.Component{

  constructor(){
    super();
    this.state = {
      center:{
        lat: 33.5865606,
        lng: 130.3948272
      },
      zoom: 15
    }
  }

  render() {
    return (
      <GoogleMap
        bootstrapURLKeys={{
          key: 'AIzaSyDo6NoIS5Eiq3DljafwgDySIyEFmifirxo'
        }}
        defaultCenter={this.state.center}
        defaultZoom={this.state.zoom}
        style={{margin: 'auto'}}
      />
    );
  }
}
