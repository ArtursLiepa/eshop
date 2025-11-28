export interface Type {
  shopId?: Number;
  typeName?: String;
}

export interface Address {
  Country?: String;
  Region?: String;
  City?: String;
  Street?: String;
  stNumber?: Number;
  Code?: Number;
}

export interface Shop extends Address, Type {
  id: Number;
  Name: String;
}
