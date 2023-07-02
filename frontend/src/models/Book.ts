export interface Book {
  id?: string;
  title: string;
  imageLinks: {
    thumbnail: string;
  };
  authors: string;
  description: string;
}
