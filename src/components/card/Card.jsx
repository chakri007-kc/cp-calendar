import React from 'react'
import './card.css';
import './card-dark.css'
import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { BrowserRouter as Router, Switch ,Route } from 'react-router-dom'

import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Card(props) {
           

    useEffect(() => {
       AOS.init({duration:1000 , offset:"100"})
    }, [])

const dark=props.dark; 
// const dark=false;
// console.log(dark);
// let z;
var a = parseInt(props.contest.start_time.substring(11,13));
var m = parseInt(props.contest.start_time.substring(14,16));
var date=parseInt(props.contest.start_time.substring(8,10))
var month=parseInt(props.contest.start_time.substring(5,7))
var year=parseInt(props.contest.start_time.substring(0,4))



a=a+5;
m=m+30;
if(m>=60)  a=a+1;
if(a>=24) date=date+1;
if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12){
    if(date>31)
    {
        date=date%31;
        if(month === 12){
            month=month%12;
            year=year+1;
        }
    } 
    
}
else if(month === 2){

    if((year%4 === 0 && year%100 !== 0) || (year%400 === 0)){
        if(date > 29) date=date%29;
    }
    else if(date>28) date=date%28;
}
else{
    if(date>30) date=date%30;
}
a=a%24;
m=m%60;


var b = parseInt(props.contest.end_time.substring(11,13));
var n = parseInt(props.contest.end_time.substring(14,16));
var date1=parseInt(props.contest.end_time.substring(8,10))
var month1=parseInt(props.contest.end_time.substring(5,7))
var year1=parseInt(props.contest.end_time.substring(0,4))

b=b+5;
n=n+30;
if(n>=60)  b=b+1; 
if(b>=24) date1=date1+1;
if(month1 === 1 || month1 === 3 || month1 === 5 || month1 === 7 || month1 === 8 || month1 === 10 || month1 === 12){
    if(date1>31)
    {
        date1=date1%31;
        if(month1 === 12){
            month1=month1%12;
            year1=year1+1;
        }
    } 
    
}
else if(month1 === 2){

    if((year1%4 === 0 && year1%100 !== 0) || (year1%400 === 0)){
        if(date1 > 29) date1=date1%29;
    }
    else if(date1>28) date1=date1%28;
}
else{
    if(date1>30) date1=date1%30;
}
b=b%24;
n=n%60;



    return (
        <div className={dark ? "card-1" : "card"} >
            <div className={dark ? "sitename-1" : "sitename"}><h4>{props.contest.site} </h4> { props.contest.status==="CODING" ? <div className="live">Live</div> : null} </div>
              
           <div className={dark ? "contestname-1" : "contestname"}> <h4>{props.contest.name}</h4></div>
         

            <div className={dark ? "starttime-1" : "starttime"}>
            
                <h3 className={dark ? "startcard-1-1" : "startcard-1"}>Start Time : {date}/{month}/{year} </h3>    
              {/* <h3 className={dark ? "startcard-2-1" : "startcard-2"}>{props.contest.start_time.substring(11,16)}</h3> */}
                <h3 className={dark ? "startcard-2-1" : "startcard-2"}>{ (a%12 === 0) ? "12" : a%12}:{m}</h3>
                <h3 className={dark ? "startcard-2-1" : "startcard-2"}>{ (a>=12) ? "PM"  : "AM"}</h3>

              
              
              
            </div>

            <div className={dark ? "endtime-1" : "endtime"}>
                <h3 className={dark ? "endcard-1-1" : "endcard-1"}>End Time : {date1}/{month1}/{year1}</h3>
                {/* <h3 className={dark ? "endcard-2-1" : "endcard-2"}>{props.contest.end_time.substring(11,16)}</h3> */}
                <h3 className={dark ? "endcard-2-1" : "endcard-2"}>{(b%12 === 0) ? "12" : b%12}:{n}</h3>
                <h3 className={dark ? "startcard-2-1" : "startcard-2"}>{ (b>=12) ? "PM"  : "AM"}</h3>
            </div>
            <a href={props.contest.url} className={dark ? "link regbutton-1" : "link regbutton"}  target="_blank" rel="noreferrer">
                <a className="link" href={props.contest.url} target="_blank" rel="noreferrer">Register</a>
            </a>
              {/* <hr /> */}
        </div>
    )
}
