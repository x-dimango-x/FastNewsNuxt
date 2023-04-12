export interface INewsValue {
  title: string,
  body: string,
  image: File,
  category: {
    id: string,
    title: string
  }
}

export interface INewsData {
  id: string,
  value: INewsValue
}
