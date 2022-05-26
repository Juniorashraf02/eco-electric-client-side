import React from 'react';
import { DirectionsRenderer, DirectionsService, GoogleMap, LoadScript, } from '@react-google-maps/api';
import { useState } from 'react';

const Direction = () => {
    const [response, setResponse] = useState(null);
    const origin = 'uttara, dhaka';
    const destination = 'mirpur, dhaka';
    const directionsCallback= (res) =>{
        console.log(res)
    
        if (res !== null) {
          if (res.status === 'OK') {
           setResponse(res);
          } else {
            console.log('response: ', res)
          }
        }
      }
    return (
        <div>
            <LoadScript
                googleMapsApiKey="AIzaSyDdnUI5oF_hX399nhFPaVz3D-jxkv0ullM"
            >

                <GoogleMap
                    // required
                    id='direction-example'
                    // required
                    mapContainerStyle={{
                        height: '100vh',
                        width: '100vw'
                    }}
                    // required
                    zoom={16}
                    // required
                    center={{
                        lat: 0,
                        lng: -180
                    }}
                   
                   
                >
                    {
                        (
                            destination !== '' &&
                            origin !== ''
                        ) && (
                            <DirectionsService
                                // required
                                options={{
                                    destination: destination,
                                    origin: origin,
                                    travelMode: 'DRIVING'
                                }}
                                // required
                                callback={directionsCallback}
                            />
                        )
                    }

                    {
                        response !== null && (
                            <DirectionsRenderer
                                // required
                                options={{
                                    directions: response
                                }}
                                
                            />
                        )
                    }
                </GoogleMap>

            </LoadScript>
        </div>
    );
};

export default Direction;