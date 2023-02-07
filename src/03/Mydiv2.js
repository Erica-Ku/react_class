import Div21 from "./Div21";

const Mydiv2 = ({rname, n}) => {
    const user = rname ;
    return (
        <div className="mydiv2">
            <h2 className="divh2">Mydiv2 {n}</h2>
            <Div21 user = {user}/>
        </div>
    ) ;
}

export default Mydiv2 ;