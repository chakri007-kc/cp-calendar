import { BrowserRouter as Router ,Route ,Switch } from 'react-router-dom'
// import Homepage from './pages/Home/Home'
import Navbar from './components/navbar/Navbar'
import Info from './pages/info/Info'
import { useState } from 'react'
import { ThemeProvider , createGlobalStyle } from 'styled-components';



const GlobalStyle = createGlobalStyle`
body{
    background-color: ${props =>
        props.theme.dark  ? '#212121' : '#fff' };
}
`;


function App() {


const [dark, setdark] = useState(true)
const themechange = ()=>{
     setdark(!dark) 
}
//  console.log(dark);

  return (
    <ThemeProvider theme={{dark}}>
    <div className="App">
       <GlobalStyle/>
       
      <Router>
        
          <Navbar dark={dark} themechange={themechange}/>
          {/* <Switch>
            <Route exact  path ='/' render={(props) => <Info url="all"  dark={dark} {...props} />} />
            <Route exact  path ='/atcoder' render={(props) => <Info url="at_coder"  dark={dark} {...props} />} />
            <Route exact  path ='/hackerrank' render={(props) => <Info url="hacker_rank" dark={dark} {...props} />} />
            <Route exact  path ='/codechef' render={(props) => <Info url="code_chef" dark={dark} {...props} />} />
            <Route exact  path ='/hackerearth' render={(props) => <Info url="hacker_earth" dark={dark} {...props} />} />
            <Route exact  path ='/leetcode' render={(props) => <Info url="leet_code" dark={dark} {...props} />} />
            <Route exact  path ='/topcoder' render={(props) => <Info url="top_coder" dark={dark} {...props} />} />
            <Route exact  path ='/kickstart' render={(props) => <Info url="kick_start" dark={dark} {...props} />} />   
            <Route exact  path ='/codeforces' render={(props) => <Info url="codeforces" dark={dark} {...props} />} />     
          </Switch> */}
            <Switch>
            <Route exact path="/">
              <Info url="all"  dark={dark}/>
            </Route>
            <Route  path="/atcoder">
              <Info url="at_coder"  dark={dark}/>
            </Route>
              <Route  path="/hackerrank">
              <Info url="hacker_rank"  dark={dark}/>
            </Route>
            <Route  path="/codechef">
              <Info url="code_chef"  dark={dark}/>
            </Route>
            <Route  path="/codeforces">
              <Info url="codeforces"  dark={dark}/>
            </Route>
            <Route  path="/hackerearth">
              <Info url="hacker_earth" dark={dark}/>
            </Route>
            <Route  path="/leetcode">
              <Info url="leet_code"  dark={dark}/>
            </Route>
            <Route  path="/topcoder">
              <Info url="top_coder"  dark={dark}/>
            </Route>
            <Route  path="/kickstart">
              <Info url="kick_start"  dark={dark}/>
            </Route>
          </Switch>
      </Router>
               
       
    </div>
          
    </ThemeProvider>
  );
}

export default App;
