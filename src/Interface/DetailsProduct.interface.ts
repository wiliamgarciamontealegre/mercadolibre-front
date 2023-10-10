export interface IDetailsProduct {
    author: {
        name: string,
        lastname: string
    },
    item: {
        id: string,
        title: string,
        price: {
            currency: string,
            amount: string,
            decimals: number
        },
        picture: string,
        condition: string,
        free_shipping: string,
        sold_quantity:string,
        description: string
    }
}