const MyForm = () => {
    const formCheck = () => {
        console.log("onClick") ;
    }
    return (
        <>
            <form name="myForm">
                <p>
                    <label for="txt1">아이디 : </label><br />
                    <input type="text" name=" txt1" id="txt1" placeholder="아이디입력" />
                </p>
                <p>
                    <label for="txt2">비밀번호 : </label><br />
                    <input type="password" name="txt2" id="txt2" placeholder="비밀번호입력" />
                </p>
                <p>
                    <label for="txt3">선택과목 : </label><br />
                    <select name="sel1">
                        <option value="자바">자바</option>
                        <option value="HTML">HTML</option>
                        <option value="자바스크립트">자바스크립트</option>
                        <option value="리액트">리액트</option>
                    </select>
                </p>
                <p>
                    <input class="button" type="button" value="확인" onClick={formCheck} /> 
                    <input class="button" type="reset" value="취소" /> 
                </p>
            </form>
            <div id="msg"></div>
        </>
    ) ;
}

export default MyForm ;