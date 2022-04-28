export class User {
  constructor(
    public firstname?: string,
    public lastname?: string,
    public email?: string,
    public phone?: number,
    public DOB?: number,
    public status?: boolean,
    public socialLinks?: string[]
  ) {}
}
