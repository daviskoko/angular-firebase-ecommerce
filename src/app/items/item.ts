export class Item {
    constructor(
        public slug: string,
        public name: string,
        public category: Category,
        public price: number,
        public old_price: number,
        public availability: string,
        public description: string,
        public photos: Image[]
    ) {}
}

export class Image {
    constructor(public path: string) {}
}

export class Category {
    constructor(public slug: string, public title: string) {}
}
