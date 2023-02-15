import Wheader from "./Wheader";
import weather from "../db/weather.json"

const W2 = () => {
    const data = weather.response.body.items.item ;
    
    return (
        <div className="content">
            <Wheader title={'날씨예보-중기정보'} />
            <h2>w2</h2>
        </div>
    ) ;
}

export default W2 ;