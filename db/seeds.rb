# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')

   apartments_array = [
    {
      street: "23 snugglebunny lane",
      city: "Inglewood",
      state: "CA",
      manager: "Doctor Doom",
      email: "doom@snugglebunny.com", 
      price: "5 hugs per month", 
      bedrooms: 2, 
      bathrooms: 2, 
      pets: "of course",
      image: "www.urlhelper.com"
    },
    {
      street: "42 Wallaby Way",
      city: "Sydney",
      state: "NSW",
      manager: "Steve Irwin",
      email: "crikey@crocs.com", 
      price: "500,000 dollerydoos", 
      bedrooms: 10, 
      bathrooms: 1, 
      pets: "sure",
      image: "www.urlhelper.com"
    }
  ]

  apartments_array.each do |apartment_obj|
    user.apartments.create apartment_obj
  end

  p user.apartments
  p "Apartments were made successfully"