export type RestaurantApiResponse = Restaurant | Restaurant[]

export type Restaurant = {
    id: number,
    preview: string,
    title: string,
    rating: number,
    minDeliveryTime: number,
    maxDeliveryTime: number,
    categories: Category[]
}

export type Category = {
    id: number
    title: string,
    products: Product[]
}

export type Product = {
    id: number
    preview: string,
    price: number,
    title: string,
    portion: string,
}

export type OrderProduct = {
    id: number
    preview: string,
    price: number,
    title: string,
    portion: string,
    quantity: number,
    totalPrice: number,
}
