import DetailsProductView from "../Views/DetailsProduct";
import HomeView from "../Views/Home";
import ResultSearchView from "../Views/ResultSearch";

export const routers = [
    {
        path: "/",
        component:HomeView
    },
    {
        path: "/items",
        component:ResultSearchView
    },
    {
        path: "/items/:id",
        component:DetailsProductView
    },
]