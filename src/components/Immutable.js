import React from 'react'
import { List, Map } from 'immutable'

/* こちらはimmutable.jsの簡単な使い方だけ */

export default class ImmutableComponent extends React.Component{
  render(){
    const map = Map({a:'map1', b:'map1', c:'map1', d:'map1', e:'map1'})
    const map2 = map.set('c', 'map2で追加')
    return(
      <div>
        <ul>
          {
            map.map((value, key) =>
              <li key="key">{value}</li>
            )
          }
        </ul>
        <ul>
          {
            map2.map((value, ley) =>
              <li key="key">{value}</li>
            )
          }
        </ul>
      </div>
    );
  }
}
