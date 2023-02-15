import { useState, useEffect, useRef } from "react";
import './Boxoffice.css' ;

const Boxoffice = () => {
    //상영일 선택 state 변수
    const [targetDt, setTargetDt] = useState() ;

    //input 제어
    const mvdR = useRef() ;

    //처음 랜더링
    useEffect(()=>{
        mvdR.current.focus() ;
    },[]) ;

    //targetDt 변경시
    useEffect(()=>{
        console.log(targetDt) ;
    }, [targetDt])

    //input 이벤트
    const handleMV = () => {
        console.log(mvdR.current.value) ;
        setTargetDt(mvdR.current.value.replaceAll('-','')) ;
    }

    return (
        <>
            <div className="mvh">
                <h1>박스오피스</h1>
                <form>
                    <input ref={mvdR} type="date" name="mvd" onChange={handleMV} />
                </form>
            </div>
            <div className="mvmain">
                목록나오기
            </div>
        </>
    ) ;
}

export default Boxoffice ;