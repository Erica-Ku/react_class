import data from '../db/data.json' ;
//import GalCard2 from './GalCard2';
import { useState, useEffect, useRef } from 'react';
import './Gal.css' ;
import GalCard from './GalCard';

const GalSelect = () => {
    //데이터 가져오기
    const items = data.response.body.items.item ;
    console.log('items', items) ;
    const c1 = items.map((obj)=>obj.galTitle) ;
    console.log('c1', c1) ;
    const optionTag = c1.map((item)=>
        <option key={item} value={item}>{item}</option>
    );
    
    //랜더링 제어변수
    const [selItem, setSelItem] = useState({}) ;
    //const [selItem, setSelItem] = useState() ;

    //select box 제어
    const selR = useRef() ;

    //컴포넌트가 처음 랜더링이 일어났을 때
    useEffect(()=>{
        selR.current.focus() ;
        //console.log(selR.current) ;
    },[]) ;

    const handleSel = (e) => {
        e.preventDefault() ;
        if(selR.current.value==="") return ;
        //console.log(selR.current.value) ;
        let temp = items.filter((item)=>item.galTitle === selR.current.value) ;
        console.log(temp) ;
        setSelItem(temp[0]) ;
    }
    
    return (
        <>
            <div>
                <form>
                    <select ref={selR} name='sel1' onChange={handleSel} onClick={handleSel}>
                        <option value="">항목을 선택하세요.</option>
                        {optionTag}
                    </select>
                </form>
                {Object.keys(selItem).length>0 && <GalCard cardItem={selItem} />}
                {/*{selItem && <GalCard cardItem={selItem} />}*/}
            </div>
        </>
    ) ;
}

export default GalSelect ;