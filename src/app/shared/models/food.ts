export class Foods {
  id!: string;
  price!: number;
  name!: string;
  cookTime!: string;
  favorite: boolean = false;
  stars: number = 0;
  tags?: string[];
  imageUrl!: string;
  origins?: string[];
}
