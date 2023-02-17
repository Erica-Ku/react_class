import { useState, useEffect } from "react";
import BoxofficeDetail from "./BoxofficeDetail";

const BoxofficeList = ({targetDt}) => {
    const [mvlist, setMvlist] = useState() ;
    const [mvcd, setMvcd] = useState() ;
    
    useEffect(()=>{
        const apikey = 'f5eef3421c602c6cb7ea224104795888' ;
        let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${targetDt}` ;
        fetch(url)
        .then((resp)=>resp.json())
        .then((data)=>{
                let temp = data.boxOfficeResult.dailyBoxOfficeList;
                setMvlist(temp.map((item)=>
                    <div className="mvrow" key={item.movieCd} onClick={()=>showDetail(item.movieCd)}>
                        <span className="mvcol1">{item.rank}</span>
                        <span className="mvcol2">{item.movieNm}</span>
                        <span className="mvcol3">{item.audiCnt}</span>
                    </div>
                ));
            })
        .catch((err)=>console.log(err))
    }, [targetDt]) ;

    //영화 클릭
    const showDetail = (cd) => {
        setMvcd(cd) ;
    }

    return (
        <div className="mvcontent">
            <div className="mvlist">
                <div className="mvrow0">
                    <span className="mvcol1">순위</span>
                    <span className="mvcol2">영화명</span>
                    <span className="mvcol3">관객수</span>
                </div>
                {mvlist}
            </div>
            <div className="mvdetail">
                {mvcd && <BoxofficeDetail mvcd={mvcd} />}
            </div>
        </div>
    ) ;
}

export default BoxofficeList ;