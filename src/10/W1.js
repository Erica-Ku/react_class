import Wheader from "./Wheader";
import item from "../db/item.json";
import weather2 from "../db/weather2.json";

const W1 = () => {
    let items = weather2.response.body.items.item
    let w2 = items.map((i)=>{
        let temp = [] ;
        temp.push(item[i.category][0]) ;
        temp.push(i.obsrValue) ;
        temp.push(item[i.category][1]) ;

        return 
    }) ;

    return (
        <div className="content">
            <Wheader title={'날씨예보-단기정보'} />
            <div className="w1div">
                <span className="sp0">강수량</span>
                <span className="sp1">0</span>
                <span className="sp2">mm</span>
            </div>
        </div>
    ) ;
}

export default W1 ;