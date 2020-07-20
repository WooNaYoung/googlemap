import React, { Component } from "react";

import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

class MapAPI extends Component {
  render() {
    return (
      <div className="MapAPI">
        <Map
          google={this.props.google}
          zoom={15}
          initialCenter={{ lat: 37.5, lng: 127 }}
        ></Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC54MBKa78_EDw3PV0QHVU77Bo4VfOp1R4",
})(MapAPI);
