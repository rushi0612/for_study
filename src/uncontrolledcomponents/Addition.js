import { useRef } from "react"

function Addition() {
    const refnum1 = useRef()
    const refnum2 = useRef()

    function add(e){
        let a = refnum1.current.value
        let b = refnum2.current.value
        let sum = parseInt(a) + parseInt(b)
        alert("The result is: " + sum)
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={add}>
                <input type="text" ref={refnum1} placeholder="Enter First Number" /> <br /><br />
                <input type="text" ref={refnum2} placeholder="Enter Second Number" /> <br /><br />
                <input type="submit" name="btnsubmit" value="Add" />
            </form>    
        </div>
    )
}
export default Addition