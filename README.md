# react-components  
## Reactのコンポーネント集

## ■ Chat.js  

reduxアーキテクチャによって実行。サーバーサイドと繋げられたらより良い。  


## ■ Facebook.js  

Facebookでのログイン実装。  


## ■ Google.js  

Googleでのログイン実装。  


## ■ GoogleMap.js  

Google mapを実装。  
[npm : google-map-react](https://www.npmjs.com/package/google-map-react)  


## ■ Immutable  

![2017-01-16 18 40 30](https://cloud.githubusercontent.com/assets/22278305/21977842/519776ca-dc1b-11e6-83ba-bec6651264b5.png)  


### Immutable.js  

Immutableの簡単な使い方のみ。  
[immutable.jsを使ってみる](http://smart.ataglance.jp/2015-06-04-try-immutable-js/)  

#### List  
JavaScriptのarrayに当たるオブジェクトがimmutable.jsのListである。

```
const map = List([1,2,3])
const map2 = map.push(4)
console.log(map); //1,2,3
console.log(map2); //1,2,3,4
```

#### Map  
{}に対応するオブジェクトがMapである。  
