import { getDataProduct } from "../ApiServices/findProduct";
import { IDetailsProduct } from "../Interface/DetailsProduct.interface"
import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom";
import { message } from 'antd';

const initState = {
    author: {
        name: "",
        lastname: ""
    },
    item: {
        id: "",
        title: "",
        price: {
            currency: "",
            amount: "",
            decimals: 0
        },
        picture: "",
        condition: "",
        free_shipping: "",
        sold_quantity: "",
        description: ""
    }
}
const useDetailsProducts = () => {
    const [dataApi, setDataApi] = useState < IDetailsProduct > (initState)
    const ulrParams = useParams()
    const [openLoading, setOpenLoading] = useState < Boolean > (false)


    const getDataApi = async () => {
        setOpenLoading(true)
        getDataProduct(ulrParams.id).then(response => {
            setDataApi(response.data)
            setOpenLoading(false)
        }).catch(error => {
            console.log("error", error)
            setOpenLoading(false)
            message.error(error.response.data.mensage ?? 'Hemos tenido problemas al obtener la información del producto, por favor intente de nuevo');
        })

    }

    useEffect(() => {
        getDataApi()
    }, [])

    return { dataApi, openLoading }
}

export default useDetailsProducts