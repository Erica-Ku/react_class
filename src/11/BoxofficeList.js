import { useState, useEffect } from "react";

const BoxofficeList = ({targetDt}) => {
    const [mvlist, setMvlist] = useState() ;
    
    //맨처음 랜더링
    useEffect(()=>{
        if (!targetDt) return ;
        const apikey = 'f5eef3421c602c6cb7ea224104795888' ;
        let url = `'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${targetDt}'` ;
        fetch(url)
        .then((resp)=>resp.json())
        .then((data)=>console.log(data.boxofficeResult.dailyBoxOfficelist))
        .catch((err)=>console.log(err))
    }, []) ;

    return (
        <div>
            <div>
                {targetDt && mvlist}
            </div>
            <div>
                상세
            </div>
        </div>
    ) ;
}

export default BoxofficeList ;