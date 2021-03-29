export class Products {
  constructor(
    public id: string,
    public name: string | null,
    public description: string | null,
    public image: number | null,
    public create: Date | null,
  ) {}
}
