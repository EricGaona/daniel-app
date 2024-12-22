"use client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Image from "next/image";

export default function Map() {

    const containerStyle = {
        width: "100%",
        height: "400px",
    };

    const center = {
        lat: 53.3556375, // Latitud
        lng: -6.2534486, // Longitud
    };

    return (
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
                {/* Agregar marcador */}
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    )
}