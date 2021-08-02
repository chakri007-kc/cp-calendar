import React from 'react'
import { useEffect,useState } from 'react'
import Card from '../../components/card/Card';
import './info.css'
import './info-dark.css'
import gif from '../images/content_Loading-Loop-1.gif';
import darkgif from '../images/output-onlinegiftools.gif'

// import axios from "axios";

export default function Homepage(props) {
    // console.log(props.dark);
    // const [contests, setcontest] = useState([]);
    const [ongoings, setongoing] = useState([]);
    const [upcomings, setupcoming] = useState([])

    const [loading, setloading] = useState(false);


    useEffect(() => {
        setloading(false);
    //  axios.get(`https://kontests.net/api/v1/${props.url}`)
    fetch(`https://kontests.net/api/v1/${props.url}`)
    .then(res => res.json())
    .then(data => {
        setongoing([])
        setupcoming([])
         data.map((d)=>{
            if(d.status==="CODING"){
                // console.log("H/II");
             
               setongoing((ongoings) => [...ongoings,d])
            }
            else{
                setupcoming((upcomings) => [...upcomings,d] );
            }
            // console.log(contest)
            // setongoing([])
            // setupcoming([])
        });
        // setcontest(data)
        setloading(true)
    })

    
    }, [props])


//    useEffect(() => {
//         // setloading(false);
//      axios.get(`https://kontests.net/api/v1/${props.url}`)
//       .then((Data) => {
//         setongoing([])
//         setupcoming([])
//         setloading(true);
//         Data.data.map((contest) => {
//           if (contest.status === "CODING") {
//             setongoing((ongoing) => [contest, ...ongoing]);
//           }
//           if (contest.status === "BEFORE") {
//             setupcoming((list) => [...list, contest]);
//           }
//         });
//     })
//       .catch((err) => console.log(err));
//    }, [props])


    // useEffect(() => {
    //  axios.get(`https://kontests.net/api/v1/${props.url}`)
    //  .then(response => {
    //     setcontest(response.data)
    //     console.log(response.data)
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    // }, [props])


    // console.log(ongoings,upcomings)
       

    const dark=props.dark;
    return (
       
    
        <>
        
        


        <div >
            {
            loading ?
                <>
                
                  {((upcomings.length===0) && (ongoings.length===0) ) ?
                <div className={dark ? "heading2-1" : "heading2"}>
                    <h2>There is no contest</h2>
                </div>

                : null
                }

                {(ongoings.length!==0) ?
                <div className={dark ? "heading-1" : "heading"}>
                    <h2>Ongoing Contests</h2>
                </div>

                : <div className={dark ? "heading-size-1" : "heading-size"}></div>
                }

            <div className={dark ? "atcoder-1" : "atcoder"}>
            {
            ongoings.map((contest) => {
                // console.log(contest);
                if(props.url==="at_coder") contest = {...contest , site: "AtCoder"}
                if(props.url==="hacker_rank") contest = {...contest , site: "HackerRank"}
                if(props.url==="codeforces") contest = {...contest , site: "CodeForces"}
                if(props.url==="code_chef") contest = {...contest , site: "CodeChef"}
                if(props.url==="leet_code") contest = {...contest , site: "LeetCode"}
                if(props.url==="hacker_earth") contest = {...contest , site: "HackerEarth"}
                if(props.url==="top_coder") contest = {...contest , site: "TopCoder"}
                if(props.url==="kick_start") contest = {...contest , site: "KickStart"}
                return(
                    <Card  contest={contest} dark={props.dark} />  
                )
            })
            
            }
            </div>

                {(upcomings.length!==0) ?
                <div className={dark ? "heading-1" : "heading"}>
                    <h2>Upcoming Contests</h2>
                </div>

                : null
                }

            <div className={dark ? "atcoder-1" : "atcoder"}>
             {
            upcomings.map((contest) => {
                // console.log(contest);
                if(props.url==="at_coder") contest = {...contest , site: "AtCoder"}
                if(props.url==="hacker_rank") contest = {...contest , site: "HackerRank"}
                if(props.url==="codeforces") contest = {...contest , site: "CodeForces"}
                if(props.url==="code_chef") contest = {...contest , site: "CodeChef"}
                if(props.url==="leet_code") contest = {...contest , site: "LeetCode"}
                if(props.url==="hacker_earth") contest = {...contest , site: "HackerEarth"}
                if(props.url==="top_coder") contest = {...contest , site: "TopCoder"}
                if(props.url==="kick_start") contest = {...contest , site: "KickStart"}
                return(
                    <Card  contest={contest} dark={props.dark} />  
                )
            })
            
            }
            </div>


            </>
            :

            <div className={dark ? "loading-1" : "loading"}>
                   {dark?  <img src={darkgif} alt="Loading..." />  : <img src={gif} alt="Loading..." />}
                </div>
        
        
        }


        </div>
        </>


    )
}
