export type Restaurant = {
    id: number,
    preview: string,
    title: string,
    rating: number,
    averageCheck: number,
    minDeliveryTime: number,
    maxDeliveryTime: number,
    categories?: Category[]
}

export type Category = {
    id: number
    title: string,
    food: Food[]
}

export type Food = {
    id: number
    preview: string,
    price: number,
    title: string,
    portion: string,
    quantity: number,
}
