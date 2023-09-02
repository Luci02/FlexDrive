export class HomepageForm {

  constructor(
    private name: String,
    private surname: String,
    private email: String,
    private phoneNumber: String,
    private description: String
  ){}

  setName( name: String ): void {
    this.name = name;
  }

  setSurname( surname: String ): void {
    this.surname = surname;
  }

  setEmail( email: String ): void {
    this.email = email;
  }

  setPhoneNumber( phoneNumber: String ): void {
    this.phoneNumber = phoneNumber;
  }

  setDescription( description: String ): void {
    this.description = description;
  }

}
