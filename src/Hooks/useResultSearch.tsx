import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom";
import { getResults } from "../ApiServices/findResults";
import {IResultSearch} from "../Interface/ResultSearch.interface"

const initState = {
    author: {
        name: "",
        lastname: ""
    },
    categories: [],
    items:[],
}



const useResultSearch = () => {
    const [dataApi, setDataApi] = useState<IResultSearch>(initState)
    const [searchParams] = useSearchParams();
    const [openLoading, setOpenLoading] = useState<Boolean>(false)

    const searchUrl = searchParams.get("search")

    const getDataApi = async () => {
        setOpenLoading(true)
        getResults(searchUrl).then(response => {
            setDataApi(response.data)
            setOpenLoading(false)
        }).catch(error => {
            setOpenLoading(false)
            console.log("error", error)
        })

    }

    useEffect(() => {
        getDataApi()
    }, [searchUrl])


    return { dataApi, openLoading }
}
export default useResultSearch