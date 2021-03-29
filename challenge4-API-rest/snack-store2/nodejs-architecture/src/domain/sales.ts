export class Sales {
  constructor(
    public idproduct: string | null,
    public idclient: string | null,
    public quantity: number | null,
    public register: Date | null,
    public amount: number | null,
    public id: number,
  ) {}
}
