import { useState, useEffect } from "react";

const BoxofficeDetail = ({mvcd}) => {
    const [mvdetail, setMvdetail] = useState() ;
    /*const getData = async() => {
        let url;
        try {
            const resp = await fetch(url) ;
            const data = await resp.json() ;

            //mvdetail 만들기
            let temp = data.movieInfoResult.movieInfo ;
        }
        catch (err) {
            console.log(err) ;
        }
    }*/

    useEffect(()=>{
        const apikey = 'f5eef3421c602c6cb7ea224104795888' ;
        let url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${apikey}&movieCd=${mvcd}` ;
        fetch(url)
        .then((resp)=>resp.json())
        .then((data)=>{
            let temp = [] ;
            temp.push(data.movieInfoResult.movieInfo.movieNm) ;
            temp.push(data.movieInfoResult.movieInfo.openDt) ;
            temp.push(data.movieInfoResult.movieInfo.prdtStatNm) ;
            temp.push(data.movieInfoResult.movieInfo.typeNm) ;
            setMvdetail(
                <div className="detail" key={temp[0]}>
                    <div className="div1"><span className="dcol1">영화명</span>
                                          <span className="dcol2">{temp[0]}</span></div>
                    <div className="div1"><span className="dcol1">개봉일</span>
                                          <span className="dcol2">{temp[1]}</span></div>
                    <div className="div1"><span className="dcol1">제작상태</span>
                                          <span className="dcol2">{temp[2]}</span></div>
                    <div className="div1"><span className="dcol1">영화구분</span>
                                          <span className="dcol2">{temp[3]}</span></div>
                </div> 
            ) ;
        })
        .catch((err)=>console.log(err))
    }, [mvcd]) ;

    return (
        <>
            {mvdetail}
        </>
    ) ;
}

export default BoxofficeDetail ;