export interface Image {
  _key: string;
  _ref: string;
  _type: string;
}

export interface Color {
  _key: string;
  _ref: string;
  _type: string;
  title: string;
  description: string;
}

export interface Category {
  _key: string;
  _ref: string;
  _type: string;
  title: string;
  description: string;
}

export interface ProductProps {
  _id: string;
  _type: string;
  _rev: string;
  _createdAt: string;
  price: number;
  rowprice: number;
  title: string;
  position: string;
  ratings: number;
  description: string;
  brand: string;
  slug: {
    current: string;
    _type: string;
  };
  images: Image[];
  color: Color[];
  category: Category[];
  isnew: boolean;
  bodyshort: any;
  body: any;
  quantity: number;
}

export interface StateProps {
  orebi: {
    productData: ProductProps[];
  };
}
