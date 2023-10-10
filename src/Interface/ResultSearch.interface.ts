export interface Iitems {
    id: string,
    title: string,
    price: {
        currency: string,
        amount: string,
        decimals: number
    },
    picture: string,
    condition: string,
    free_shipping: string
}

export interface IResultSearch {
    author: {
        name: string,
        lastname: string
    },
    categories: string[],
    items: Iitems[],
}