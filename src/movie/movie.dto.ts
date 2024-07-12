import mongoose from "mongoose";

// movie.dto.ts
export class MovieDto {
  id: string;
  name: string;
  category: string;
  image: string;

  constructor(movie: any) { // Thay any bằng kiểu dữ liệu cụ thể nếu có
    this.id = movie._id; // Kiểm tra movie trước khi truy cập _id
    this.name = movie.name;
    this.category = movie.category;
    this.image = movie.image;
  }
}