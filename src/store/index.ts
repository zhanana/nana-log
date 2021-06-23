import clone from '@/lib/clone';
import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
  state:{
    recordList:[] as RecordItem[]
  },
  mutations:{
    fetchRecords(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') ||'[]') as RecordItem[];
  },
    createRecord(state,record){
      const record2: RecordItem = clone(record); //深拷贝，record2只是拷贝了record
        record2.createAt = new Date();
        state.recordList.push(record2);//判断存在才能push
        console.log(state.recordList);
        store.commit('saveRecords')
    },
    saveRecords(state) {
      window.localStorage.setItem('recordList',JSON.stringify(state.recordList));
  },
  },
});


export default store;
