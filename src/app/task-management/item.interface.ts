/**
 *  Title: Nodebucket
 *  Arthur: Professor Krasso
 *  Date: 08/27/2023
 *  Description: item interface
 */

export interface Category {
  categoryName: string
  backgroundColor: string
}

export interface Item {

  _id?: string // optional property
  text: string
  category: Category

}