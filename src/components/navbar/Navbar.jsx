import React from 'react'
import './navbar.css'
import './navbar-dark.css'
import { Link } from 'react-router-dom'
import { useState , useEffect } from 'react'
// import { ThemeProvider , createGlobalStyle } from 'styled-components';
import styled from 'styled-components'

import AOS from 'aos';
import 'aos/dist/aos.css'; 




const Navbar1 = styled.div`
    background-color: ${props =>
        props.theme.dark  ? '#38285c' : '#fff' };
`


export default function Navbar(kk) {

    // console.log(kk);

    useEffect(() => {
       AOS.init({duration:100 , offset: '40'})
    }, [])


const [toggle, settoggle] = useState(false);

// const [dark1, setdark] = useState(false)



// const themechange = ()=>{
//      setdark(!dark) 
// }
const dark = kk.dark;

    return (

             <>

        <Navbar1 theme={{dark}}>  
        <div className={dark ? "navbar-1" : "navbar"}>
            <div className={dark ? "start-1" : "start"}>
                <h3>CP <span>CALENDAR</span> </h3>
            </div>
            <div className={dark ? "middle-1" : "middle"}>
                 <ul className={dark ? "header-middle-1" : "header-middle"}>
                        <li className={dark ? "header-middle-icon-1 icon-1" : "header-middle-icon icon"}><Link className="link" to="/">HOME</Link></li>
                        <li className={dark ? "header-middle-icon-1 icon-1" : "header-middle-icon icon"}><Link className="link" to="/codeforces">CODEFORCES</Link></li>
                        <li className={dark ? "header-middle-icon-1 icon-1" : "header-middle-icon icon"}><Link className="link" to="/codechef">CODECHEF</Link></li>
                        <li className={dark ? "header-middle-icon-1 icon-1" : "header-middle-icon icon"}><Link className="link" to="/leetcode">LEETCODE</Link></li>
                        <li className={dark ? "header-middle-icon-1 icon-1" : "header-middle-icon icon"}><Link className="link" to="/hackerearth">HACKEREARTH</Link></li>
                        {/* <li className={dark ? "header-middle-icon-1 icon-1" : "header-middle-icon"}><Link className="link" to="/hackerank">HACKERRANK</Link></li> */}
                        <li className={dark ? "header-middle-icon-1 icon-1" : "header-middle-icon icon"}><Link className="link" to="/atcoder">ATCODER</Link></li>
                        <li className={dark ? "header-middle-icon-1 icon-1" : "header-middle-icon icon"}><Link className="link" to="/topcoder">TOPCODER</Link></li>
                        <li className={dark ? "header-middle-icon-1 icon-1" : "header-middle-icon icon"}><Link className="link" to="/kickstart">KICKSTART</Link></li>
                        <button  className={dark ? "header-middle-icon-1" : "header-middle-icon"} onClick ={kk.themechange}>{dark ? <i class="far fa-moon"></i> : <i class="fas fa-moon"></i>}</button>
                    </ul> 
                    
                    
            </div>
            <div className={dark ? "end-1" : "end"}> 
                <button  className={dark ? "button-icon-1" : "button-icon"} onClick ={kk.themechange}>{dark ? <i className="i1 far fa-moon"></i> : <i class="i1 fas fa-moon"></i>}</button>
                <button className={dark ? "button-icon-1" : "button-icon"} onClick ={()=> settoggle(!toggle) }>{toggle ? <i className="i2 fas fa-times"></i> : <i class="i2 fas fa-bars"></i> }</button>                
            </div>

        </div>
        
        </Navbar1>   

        
              {toggle ? 

                    <>
                    <div className={dark ? "mid-1" : "mid"} data-aos="slide-right"  >
                            <div className={dark ? "small-mid-1 start-1" : "small-mid start"}>
                                <h3>CP <span>CALENDAR</span> </h3>
                            </div>
                        <ul  className={dark ? "header-mid-1" : "header-mid"}>
                            <li  className={dark ? "header-mid-icon-1" : "header-mid-icon"}><Link className="link" onClick ={()=> settoggle(!toggle) } to="/">HOME</Link></li>
                            <li  className={dark ? "header-mid-icon-1" : "header-mid-icon"}><Link className="link" onClick ={()=> settoggle(!toggle) } to="/codeforces">CODEFORCES</Link></li>
                            <li  className={dark ? "header-mid-icon-1" : "header-mid-icon"}><Link className="link" onClick ={()=> settoggle(!toggle) } to="/codechef">CODECHEF</Link></li>
                            <li  className={dark ? "header-mid-icon-1" : "header-mid-icon"}><Link className="link" onClick ={()=> settoggle(!toggle) } to="/leetcode">LEETCODE</Link></li>
                            <li  className={dark ? "header-mid-icon-1" : "header-mid-icon"}><Link className="link" onClick ={()=> settoggle(!toggle) } to="/hackerearth">HACKEREARTH</Link></li>
                            {/* <li  className={dark ? "header-mid-icon-1" : "header-mid-icon"}><Link className="link" onClick ={()=> settoggle(!toggle) } to="/hackerank">HACKERRANK</Link></li> */}
                            <li  className={dark ? "header-mid-icon-1" : "header-mid-icon"}><Link className="link" onClick ={()=> settoggle(!toggle) } to="/atcoder">ATCODER</Link></li>
                            <li  className={dark ? "header-mid-icon-1" : "header-mid-icon"}><Link className="link" onClick ={()=> settoggle(!toggle) } to="/topcoder">TOPCODER</Link></li>
                            <li  className={dark ? "header-mid-icon-1" : "header-mid-icon"}><Link className="link" onClick ={()=> settoggle(!toggle) } to="/kickstart">KICKSTART</Link></li>
                        </ul> 
                    </div> 
                    
                     {/* <div className={dark ? "end-1" : "end"}>  */}
                        {/* <button  className={dark ? "button-icon-1" : "button-icon"} onClick ={kk.themechange}>dark</button> */}
                     {/* </div> */}

                    </>

                    : null }
                    
                </>


    )
}
