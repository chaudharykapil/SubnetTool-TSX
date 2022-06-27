const Elements = {
    "textarea":<input></input>,
    "textbox":<textarea></textarea>,
    "button":<button></button>,
    "div":<div></div>
}

export default function createElement(type,data=null){
    if(type === "textarea"){
        return <input onChange={data["onChange"]}></input>
    }
    else if(type === "textbox"){
        return <textarea onChange={data["onChange"]}></textarea>
    }
    else if(type === "button"){
        return <button></button>
    }
    else if(type === "div"){
        return <div></div>
    }
    else{
        return <></>
    }
}