const Tc1 = ({c1, selC1, setSelC1}) => {
    //대분류가 클릭되었을 때
    const handleSelect = (item) => {
        setSelC1(item) ;
    }
    //대분류 화면 표시 태그
    const c1tag = c1.map((item) => 
        <div className={item===selC1? "tc1dSel":"tc1d"} key={item} onClick={()=>handleSelect(item)}>
            {item}
        </div>
    ) ;

    return (
        <>
            <div className="tc1">
                <h2>대분류</h2>
                {c1tag}
            </div>
        </>
    ) ;
}

export default Tc1 ;