import axios from 'axios' 
import DomParser from 'dom-parser'

axios.get('http://localhost:5042/ko/docs/web/html/element/style#_flaws')
.then(res => {
  const parser = new DomParser()
  const doc = parser.parseFromString(res.data)
  console.log(res.data)
  console.log(doc.getElementById('#_flaws'))
})
.catch(err => console.log(err))