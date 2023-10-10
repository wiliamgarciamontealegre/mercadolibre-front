import instance from "../Axios";

export const getResults = (find:any) =>
instance.get("findResults", {params: {search:find}});