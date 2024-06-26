import React from 'react';
import {ControlPosition, MapControl} from '@vis.gl/react-google-maps';

import {PlaceAutocompleteClassic} from './autocomplete-classic';

type CustomAutocompleteControlProps = {
  controlPosition: ControlPosition;
  onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void;
};

export const CustomMapControl = ({
  controlPosition,
  onPlaceSelect
}: CustomAutocompleteControlProps) => {

  return (
    <MapControl position={controlPosition}>
      <div className="autocomplete-control mt-6 box-border w-80 border-slate-500">
        <PlaceAutocompleteClassic onPlaceSelect={onPlaceSelect} />
      </div>
    </MapControl>
  );
};