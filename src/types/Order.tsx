export type Address = {
    id: number,
    street: string,
    apartment?: string,
    intercom?: string,
    approach?: string,
    floor?: string,
    comment?: string,
}

export type DeliveryType = {
    id: number,
    title: string,
    price: number,
}

export type DeliveryTime = {
    time: string,
    availability: true,
}
