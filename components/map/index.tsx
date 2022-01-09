import { useEffect, useState } from "react";
import { ICoords } from "../../common/coords";

const Map = () => {
  const [defaultCenter, setDefaultCenter] = useState<ICoords>({
    latitude: process.env.DEFAULT_LATITUDE,
    longitude: process.env.DEFAULT_LONGITUDE,
  });
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setDefaultCenter({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      });
    }

    const map = document.getElementById("map");
    const mapOptions: naver.maps.MapOptions = {
      zoom: 10,
      center: new naver.maps.LatLng(
        defaultCenter.latitude,
        defaultCenter.longitude
      ),
    };

    console.log(map);
    if (map) {
      const mapContainer = new naver.maps.Map(map, mapOptions);
    }
  }, [defaultCenter.latitude, defaultCenter.longitude]);
  return <div id="map" className="full-content"></div>;
};

export default Map;
