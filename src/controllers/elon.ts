import { computed, ref } from 'vue';
import { ElonTrace, ElonTraceRecord } from '../types'
import { NativeEventSource, EventSourcePolyfill } from 'event-source-polyfill'
import _ from 'lodash'

const EventSource = NativeEventSource || EventSourcePolyfill;

export type ElonTraceSingleRecord = ElonTraceRecord & { datetime: string; };
// export type ElonTraceSingleRecord = {
//   datetime: string;
//   records: [number, number, number][];
// }
export type ElonTraceMinified = {
  datetime: string;
  records: [number, number, number][];
}

export type TraceMessage = {
  type: 'update' | 'initialization';
  data: ElonTraceMinified[];
}

async function getTrace(id: string) {
  const url = `${ import.meta.env.VITE_BACKEND_BASE_URL }/api/trace/${ id }`;
  const response = await fetch(url);
  return await response.json() as ElonTrace[];
}

export default function useElonJet(jetId: string) {
  const traceSource = ref<ElonTraceMinified[]>();
  const fetchStatus = async () => {
    //traceSource.value = await getTrace(jetId);
  }

  const connect = async () => {
    const url = `${ import.meta.env.VITE_BACKEND_BASE_URL }/api/trace/${ jetId }`;
    const response = await fetch(url);
    const initData = await response.json();
    traceSource.value = initData;

    const connection = new EventSource(`${ url }?${ new URLSearchParams({ ignoreInitialization: 'true' }).toString() }`, {
      headers: {
        'Accept': 'text/event-stream'
      }
    } as any);

    connection.addEventListener('message', ({ data }) => {
      const newTrace = JSON.parse(data) as TraceMessage;

      
      
      if (newTrace.type === 'initialization') {
        traceSource.value = newTrace.data;
      }
      else if (traceSource.value) {
        for (const traceWrapper of newTrace.data) {
          const traceObj = traceSource.value.find(({ datetime }) => datetime === traceWrapper.datetime);
          if (traceObj) {
            traceObj.records = [
              ...traceObj.records ? traceObj.records : [],
              ...traceWrapper.records ? traceWrapper.records : []
            ];
          }
          else {
            traceSource.value.push(traceWrapper);
          }
        }
        traceSource.value = _.cloneDeep(traceSource.value);
      }     
    
      
    });
    
    
  }
  connect();

  const trace = computed(() => {
    if (traceSource.value) {

      return ([] as ElonTraceSingleRecord[]).concat(...traceSource.value.map(({ datetime, records }) => {
        if (records) {
          return records.map(([ altitude, latitude, longitude ]) => {
            return { altitude, longitude, latitude, datetime };
          });
        }
        else {
          return [];
        }
      }));
    }
  });

  return {
    fetchStatus,
    trace
  }
}