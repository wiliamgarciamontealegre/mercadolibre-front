import { useState } from "react"
import { useNavigate } from "react-router-dom";

const useSearch = () =>{
    const navigate = useNavigate();

    const [search, setSearch] = useState("")
    const onChangeField = (value: string) =>{

        setSearch(value)
    }
    const onChangeEnter = () =>{
        navigate("/items?search=" + search, { replace: true });

    }
    return {search, onChangeField, onChangeEnter}
}

export default useSearch