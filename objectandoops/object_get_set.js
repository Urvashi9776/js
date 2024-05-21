const User={
   _email:"uri@com",
   _pass:"uri",
   get email()
   {
    return this._email.toUpperCase()
   },
   set email(val)
   {
    this._email=val
   }
}
const tea = Object.create(User)
console.log(tea.email);