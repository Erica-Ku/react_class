//import Gheader from './Gheader'
import Gc1 from './Gc1'
import Gdt from './Gdt'
import './GalMain.css';
import { useState } from "react";
import { useEffect } from 'react';

const GalMain = ({c1, dataAll}) => {

    let [selC1, setSelC1] = useState();

    let [selData, setSelData] = useState({});

    useEffect (()=> {
        console.log(selC1);
    }, [selC1])

    useEffect (()=> {
        if (selC1) {
            setSelData(dataAll.filter((item) => item.galTitle === selC1)[0])}
    }, [selC1])

    useEffect(()=>{
        console.log(selData);
    },[selData]);

    return(
        <div className="content">
            <div className="main">
                <Gc1 c1 = {c1} selC1 = {selC1} setSelC1 = {setSelC1}/>
                <Gdt selData = {selData} />      
            </div>
        </div>
    );
}

export default GalMain;

