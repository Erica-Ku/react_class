import { Link } from "react-router-dom";

const Wheader = ({title}) => {
    return (
        <>
            <div className="wh">
                <h1>{title}</h1>
                <div className="bt"><Link to='/'>🟪</Link></div>
            </div>
        </>
    ) ;
}

export default Wheader ;