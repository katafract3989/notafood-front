export type Restaurant = {
   id: number,
   preview: string,
   title: string,
   rating: number,
   averageCheck: number,
   minDeliveryTime: number,
   maxDeliveryTime: number
}

export type Category = {
   title: string,
   food: Product[],
}

export type Product = {
   preview: string,
   price: number,
   structure: string,
   servingSize: number,
}
