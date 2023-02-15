import Wheader from "./Wheader";
import item from "../db/item.json";
import weather2 from "../db/weather2.json";
import { useState, useEffect } from "react";

const W1 = () => {
    //state 변수
    const [items, setItems] = useState() ;
    const [itemTag, setItemTag] = useState() ;

    //useEffect
    //랜더링이 발생될때마다 실행
    //useEffect(()=>{}) ;

    //맨처음 컴포넌트 랜더링시 실행 
    useEffect(()=>{
        setItems(weather2.response.body.items.item) ;
    }, []) ;

    //특정 state변수 변경시 실행
    useEffect(()=>{
        if (!items) return ;
        let temp = items.map((i, n)=>
            <div className="w1div" key={"w1div"+n}>
                <span className="sp0">{item[i.category][0]}</span>
                <span className="sp1">{i.obsrValue}</span>
                <span className="sp2">{item[i.category][1]}</span>
            </div>
        );
        setItemTag(temp) ;
    }, [items]) ;

    return (
        <div className="content">
            <Wheader title={'날씨예보-단기정보'} />
            {items && itemTag}
        </div>
    ) ;
}

export default W1 ;