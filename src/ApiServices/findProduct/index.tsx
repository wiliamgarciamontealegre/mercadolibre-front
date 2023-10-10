import instance from "../Axios";

export const getDataProduct = (find:any) =>
instance.get("findProduct", {params: {id:find}});