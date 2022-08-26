import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld'
import './App.css'
import TreeList from './components/TreeList';

export default defineComponent({
  props: {
  },

  setup(props) {

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
                    <TreeList name='服务器1' expand={false}/>
                    <TreeList name='服务器2' expand={false}/>
                    <TreeList name='服务器3' expand={false}/>
                    <TreeList name='收藏夹' expand={false}/>
                    <TreeList name='回收站' expand={false}/>
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