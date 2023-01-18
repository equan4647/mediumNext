export interface Post {
  _id: string;
  autherId: string;
  title: string;
  slug: string;
  body: string;
  createdAt: Date;
  thumbnail: string;
  authDetails: Author;
  subheading:string;
}
export interface Author {
  _id: string;
  email: string;
  name: string;
  avatar: string;
}
