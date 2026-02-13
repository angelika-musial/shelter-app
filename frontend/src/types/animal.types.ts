export interface Animal {
  _id: string;
  name: string;
  age: number;
  species: 'dog' | 'cat' | 'other';
  breed?: string;
  description: string;
  imageUrl: string;
  adoptionStatus: 'available' | 'adopted';
}