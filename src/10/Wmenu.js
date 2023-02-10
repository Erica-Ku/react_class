import Wheader from "./Wheader";
import { Link } from "react-router-dom";

const Wmenu = () => {
    return (
        <div className="content">
            <Wheader title={'일기예보'} />
            <div className="wmdiv"><Link to='/w1'>단기</Link></div>
            <div className="wmdiv"><Link to='/w2'>중기</Link></div>
        </div>
    ) ;
}

export default Wmenu ;