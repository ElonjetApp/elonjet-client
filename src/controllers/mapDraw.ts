import mapboxgl, { LngLat } from 'mapbox-gl'
import { computed, ref, Ref, watch, watchEffect } from 'vue'
import { ElonTraceSingleRecord } from './elon';

export default function useDrawMap(mapRef: Ref<mapboxgl.Map | undefined>, trace: Ref<ElonTraceSingleRecord[] | undefined>, latestTime: Ref<number>) {
  let initialized = false;

  const routeData = computed(() => {
    const coordinates = trace.value ? trace.value?.filter(({ datetime }) => {
      const timestamp = new Date(datetime).getTime();
      return timestamp >= latestTime.value;
    }).map(({ longitude, latitude }) => [ latitude, longitude ]) : [];
    
    return {
      'type': 'Feature',
      'properties': {},
      'geometry': {
        'type': 'LineString',
        'coordinates': coordinates //trace.value ? trace.value?.map(({ longitude, latitude }) => [ longitude, latitude ]) : []
      }
    }
  });

  const markersGeoJSON = computed(() => {
    const lastCoords = routeData.value.geometry.coordinates[routeData.value.geometry.coordinates.length - 1];
    return {
      type: 'FeatureCollection',
      features: lastCoords ? ([{
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: lastCoords
        },
        properties: {
          title: 'Mapbox',
          description: 'Washington, D.C.'
        }
      }]) : []
    }
  });

  const markers = ref<mapboxgl.Marker[]>([]);

  const setRoute = () => {
    console.log(routeData.value);
    
    const source = mapRef.value?.getSource('route');
    console.log(source);
    
    if (source) {
      (source as any).setData(routeData.value);
      const lngs = routeData.value.geometry.coordinates.map(([ , longitude ]) => longitude);      
      const lats = routeData.value.geometry.coordinates.map(([ latitude ]) => latitude);
      const lastCoordinates = routeData.value.geometry.coordinates[routeData.value.geometry.coordinates.length - 1];
      if (lngs.length > 0 && lats.length > 0) {
        // mapRef.value?.fitBounds([
        //    [Math.min(...lats), Math.max(...lngs)],
        //    [Math.max(...lats), Math.min(...lngs)]
        // ], {
        //   padding: 120,
        //   offset: [0, 0]
        // });
      }
      if (lastCoordinates) {
        mapRef.value?.flyTo({
          center: lastCoordinates as any as LngLat,
          zoom: 3
        });
      }
      
    }

    if (mapRef.value) {
      for (const marker of markers.value) {
        marker.remove();
      }
      console.log(markersGeoJSON.value.features);
      
      for (const feature of markersGeoJSON.value.features) {
        // create a HTML element for each feature
        const el = document.createElement('div');
        el.className = 'marker';
      
        // make a marker for each feature and add to the map
        const marker = new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates as any as LngLat).addTo(mapRef.value);
        markers.value.push(marker);
      }
    }
  }

  const init = () => {
    const map = mapRef.value;
    if (map) {
      map.on('load', () => {
        console.log('!!!', routeData.value);
        
        map.addSource('route', {
          'type': 'geojson',
          'data': routeData.value as any
        });
        map.addLayer({
          'id': 'route',
          'type': 'line',
          'source': 'route',
          'layout': {
            'line-join': 'round',
            'line-cap': 'round'
          },
          'paint': {
            'line-color': 'rgba(10, 122, 178, 0.5)',
            'line-width': 4
          }
        });
        setRoute();
      });
    }
  }

  watch(routeData, setRoute);

  watch(mapRef, () => {
    if (!initialized) {
      init();
      initialized = true;
    }
  });

}