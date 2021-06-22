type RecordItem = {
    tags: string[];
    notes: string;
    type: string;
    amount: number;
    createAt?: Date;
  };

type Tag = {
    id:string;
    name:string;
}
type TagListModel = {
    data:Tag[]
    fetch:()=> Tag[]
    create:(name:string) =>'success'|'duplicated' //联合类型
    update:(id:string,name:string) => 'success'|'not found'|'duplicated'
    remove:(id:string) => boolean
    save:()=>void
}

 interface Window {
   store:{
    tagList:Tag[];
    findTag:(id:string)=>tag;
    createTag: (name:string)=>void;
    removeTag:(id:string)=>boolean;
    updateTag:(id:string,name:string)=>'success'|'not found'|'duplicated';
    recordList:RecordItem[];
    createRecord:(record:RecordItem)=>void;
   }
 }
