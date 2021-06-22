import clone from "@/lib/clone";


const localStorageKeyName = 'recordList';


const recordStore = {
    recordList : [] as RecordItem[],
    //record store
    fetchRecords() {
        this.recordList = JSON.parse(window.localStorage.getItem(localStorageKeyName) ||'[]') as RecordItem[];
        return this.recordList;
    },
    saveRecords() {
        window.localStorage.setItem(localStorageKeyName,JSON.stringify(this.recordList));
    },
    createRecord (record:RecordItem){
        const record2: RecordItem = clone(record); //深拷贝，record2只是拷贝了record
        record2.createAt = new Date();
        this.recordList && this.recordList.push(record2);//判断存在才能push
        recordStore.saveRecords();
    },     
};
recordStore.fetchRecords();

export default recordStore;