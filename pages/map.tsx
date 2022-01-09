import type { NextPage } from "next";
import Script from "next/script";
import Map from "../components/map";

const MapPage: NextPage = () => {
  return (
    <>
      <Script
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.X_NCP_APIGW_API_KEY_ID}`}
        strategy="beforeInteractive"
      />
      <div className="full-content">
        <Map />
      </div>
    </>
  );
};

export default MapPage;
