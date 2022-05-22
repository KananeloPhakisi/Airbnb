import React, {useState, useEffect, useRef} from "react";
import { View, FlatList, useWindowDimensions } from "react-native";
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import CustomMarker from "../../Components/CustomMarker";
import places from '../../../Assets/Data/feed';
import PostCarouselItem from "../../Components/PostCarouselItem";

const SearchResultsMaps = (props) => {
    const [selectedPlaceId, setSelectedPlaceId] = useState(null);
    return (
        <View style={{width: '100%', height: '100%'}}>
            <MapView
                style={{width: '100%', height: '100%'}}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                latitude: -29.8224312,
                longitude: 27.238816,
                latitudeDelta: 0.5,
                longitudeDelta: 0.5,
                }}
            >
                {places.map(place => (
                <CustomMarker
                    key={place.id}
                    coordinate={place.coordinate}
                    price={place.newPrice}
                    isSelected={place.id === selectedPlaceId}
                    onPress={() => setSelectedPlaceId(place.id)}
                />)
                )}
            </MapView>
        </View>
    );
}

export default SearchResultsMaps;
