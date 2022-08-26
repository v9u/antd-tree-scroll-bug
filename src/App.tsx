import { defineComponent, ref } from 'vue';
import HelloWorld from './components/HelloWorld'
import './App.css'
import TreeList from './components/TreeList';

export default defineComponent({
  props: {
  },

  setup(props) {
    const list = window.location.search.slice(1).split('&')        
    let obj:any={ expand:false}
    if(list&&list.length>0){
      list.forEach(item=>{
        const arr=item.split('=')
        if(arr&&arr.length===2){
          obj[arr[0]]=arr[1]
        }
      })
      if(obj.expand==='0'){
        obj.expand=false
      }else{
        obj.expand=true
      }
      console.log('obj:',obj)
    }
    const expand=ref(obj.expand)
    
    return () => (
      <div class='root'>
        <div class='header'>
          <h1>Hearder</h1>
        </div>
        <div class='container'>
          <div class='aside'>
            <div class='view'>
              <div>
                <input type='text' placeholder='search...'/>
              </div>
              <div class='tree'>
                    <TreeList name='服务器1' expand={expand.value}/>
                    <TreeList name='服务器2' expand={expand.value}/>
                    <TreeList name='服务器3' expand={expand.value}/>
                    <TreeList name='收藏夹' expand={expand.value}/>
                    <TreeList name='回收站' expand={expand.value}/>
              </div>
            </div>
            <div class='info'>
              <p>info panel</p>
            </div>
          </div>
          <div class='content'>
            <p>content</p>
          </div>
        </div>
      </div>
    )
  }
})