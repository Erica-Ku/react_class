import { useLocation } from "react-router-dom";
import qs from "query-string" ;

const RouterPage2 = () => {
    let location = useLocation().search ;
    console.log(location) ;
    let item = qs.parse(location).item ;
    console.log(item) ;

    const fruits = ['μ¬κ³Όπ', 'λ°λλπ']  ;
    let tag = fruits.includes(item) ? "κ³ΌμΌμλλ€." : "κ³ΌμΌμ΄ μλλλ€."

    return (
        <>
            <h1>Page2</h1>
            <p>{`${item}λ ${tag}`}</p>
        </>
    ) ;
}

export default RouterPage2 ;