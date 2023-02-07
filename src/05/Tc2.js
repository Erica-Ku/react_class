const Tc2 = ({selC2A, selC2, setSelC2}) => {
    const handleSelect = (item) => {
        console.log(item) ;
        setSelC2(item[1]) ;
    }
    const c2tag = selC2A.map((item)=>
        <div className={item[1]===selC2? "tc2dSel":"tc2d"} key={[...item]} onClick={()=>handleSelect(item)}>
            {item[1]}
        </div>
    ) ;
    return (
        <>
        <div className="tc2">
            <h2>중분류</h2>            
            {c2tag}
        </div>
        </>
    ) ;
}

export default Tc2 ;