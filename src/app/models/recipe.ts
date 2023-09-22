export interface Ingredients {
  ingredient: string;
  quantity: number;
}

export interface Instructions {
  instruction: string;
  photo: string;
}

export class Recipe {
  public title: string;
  public description: string;
  public instructions: Instructions[];
  public ingredients: Ingredients[];
  public cover_photo: string;

  constructor(
    title: string,
    description: string,
    instructions: Instructions[],
    ingredients: Ingredients[],
    cover_photo?: string
  ) {
    this.title = title;
    this.instructions = instructions;
    this.description = description;
    this.ingredients = ingredients;
    if (cover_photo != null && cover_photo?.length > 0)
      this.cover_photo = cover_photo;
    else this.cover_photo = 'assets/recipe-generic.jpg';
  }
}
