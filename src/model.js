const localStorageKeyName = 'recordList'
const model = {
    fetch(){
        return JSON.parse(window.localStorage.getItem('localStorageKeyName') ||'[]');
    },
    save(data){
        window.localStorage.setItem('recordList',JSON.stringify(data));
    },
}
export {model}