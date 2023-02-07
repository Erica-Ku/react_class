import Div11 from "./Div11";
import { useState } from "react";
import { useEffect } from "react";

const Mydiv1 = ({rname, n, setN}) => {
    const user = rname ;
    let [cnt, setCnt] = useState(0) ;

    const addCnt = () => {
        setCnt(++cnt) ;
        //setN(cnt) ;
        //setCnt(cnt % 2 === 0 ? cnt * 10 : cnt) ;
        console.log(cnt) ;
    }

    useEffect(()=>{
        console.log('변경되었습니다...')
    }) ;

    useEffect(()=>{
        console.log('처음입니다...') ;
        return (
            console.log('종료')
        ) ;
    }, []) ;

    useEffect(() => {
        setN(cnt) ;
    }, [cnt]) ;

    return (
        <div className="mydiv1">
            <h2 className="divh2">Mydiv1 {user} {n}</h2>
            <Div11 user = {user} divname={"사용자정의 "+ cnt} />
            <div className="divbt">
                <button onClick={addCnt}>❤</button>
                <span>{cnt}</span>
            </div>
        </div>
    ) ;
}

export default Mydiv1 ;