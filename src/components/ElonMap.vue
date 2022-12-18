<template>
  <div class="elon-map">
    <div ref="mapWrapperRef" class="map-wrapper" />
  </div>
</template>

<script setup lang="ts">
import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl'
import { computed, onMounted, ref, watch } from 'vue'
import useElonJet from '../controllers/elon'
import useDrawMap from '../controllers/mapDraw'

const props = withDefaults(defineProps<{
  mapStyle?: string;
}>(), {
  mapStyle: 'mapbox://styles/mapbox/streets-v12'
});

const mapWrapperRef = ref<HTMLDivElement>();

const mapboxAccessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN as string;

mapboxgl.accessToken = mapboxAccessToken;
const map = ref<mapboxgl.Map>();
onMounted(() => {
  if (mapWrapperRef.value) {
    const lastTraceRecord = trace.value ? trace.value[trace.value.length - 1] : undefined;
    map.value = new mapboxgl.Map({
      container: mapWrapperRef.value,
      style: props.mapStyle,
      center: lastTraceRecord ? [lastTraceRecord.latitude, lastTraceRecord.longitude] : [-118.2, 34],
      zoom: 9,
    });
  }
});
watch(() => props.mapStyle, () => {
  if (map.value) {
    map.value.setStyle(props.mapStyle);
  }
});

const { fetchStatus, trace } = useElonJet(import.meta.env.VITE_ELON_JET_ID as string);
fetchStatus();

const today = new Date();
today.setHours(0);
today.setMinutes(0);
today.setSeconds(0);
today.setMilliseconds(0);

const showDaysInPast = ref(3);
const latestTime = computed(() => today.getTime() - showDaysInPast.value * 1000 * 60 * 60 * 24);

useDrawMap(map, trace, latestTime);


</script>

<style scoped lang="scss">
.map-wrapper {
  width: 100%;
  height: 100%;
  --color: rgba(10, 122, 178, 0.5);
}
</style>

<style lang="scss">
.marker {
  background-image: url('https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg');
  background-size: cover;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid #fff;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.2);
}
</style>