import React from 'react';
import GoogleMapReact, { MapOptions } from 'google-map-react';

const defaultProps = {
  center: {
    lat: 50.0755,
    lng: 14.4378,
  },
  zoom: 11,
};

const defaultMapOptions: MapOptions = {
  disableDefaultUI: true,
};

const SimpleMap: React.FC = () => {
  return (
    <div style={{ height: 'inherit', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={defaultMapOptions}
      />
    </div>
  );
};

export default SimpleMap;
