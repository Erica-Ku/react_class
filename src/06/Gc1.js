import { useState, useEffect, useRef } from "react";

const Gc1 = ({c1, selC1, setSelC1}) => {
    const txtR = useRef() ;
    useEffect(()=>{
        txtR.current.focus()
    }) ;

    const handleSelect = (item) => {
        setSelC1(item);
    };

    let c1Tag = [...c1];
    c1Tag = c1Tag.map((item) => 
        <div className={item === selC1 ? "c1Sel" : "c1Tag"} key={item} onClick={()=> handleSelect(item)}> {item} </div>
    );

    return(
        <div className="gc1">
            <div>
                <form>
                    <input ref={txtR} type="text" name='txt1' />
                    <button type='reset'>취소</button>
                </form>
            </div>
            <div className="gc1b">
                {c1Tag}
            </div>
        </div>
    );
}

export default Gc1;