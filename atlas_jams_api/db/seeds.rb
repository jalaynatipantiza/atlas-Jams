# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

performer1 = User.findbyname

performer1 = User.create( 
  name: "Lando",  
  email: "example@gmail.com", 
  number: 3064703625, 
  profile_pic: "https://images.unsplash.com/photo-1549834125-82d3c48159a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", 
  description:"Lively band", 
  username: "lando123", 
  location: "saskatoon", 
  is_performer: true, 
  size: 4 
)




