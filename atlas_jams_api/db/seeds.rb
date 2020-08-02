# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)





#users

#perfermers
performer1 = User.create({ 
  name: "Lando",  
  email: "example@gmail.com", 
  number: 3064703625, 
  profile_pic: "https://images.unsplash.com/photo-1549834125-82d3c48159a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", 
  description:"Lively band", 
  username: "lando123", 
  location: "saskatoon", 
  is_performer: true, 
  size: 4 
})
performer2 = User.create({ 
  name: "Massimo",  
  email: "massimo123@gmail.com", 
  number: 3062437814, 
  profile_pic: "https://images.unsplash.com/photo-1573470167254-315246dd477d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", 
  description:"I'm a classical piano musician.", 
  username: "massimo78", 
  location: "Calgary", 
  is_performer: true, 
  size: 1 
})


#hosts
host1 = User.create({ 
  name: "Rheema Timmer",  
  email: "rheemaexample@gmail.com", 
  number: 3064703625, 
  profile_pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", 
  description:"i love to host bands at my grape vineyard and help local artists get exposure", 
  username: "rheemat", 
  location: "calary", 
  is_performer: false
})


host2 = User.create({ 
  name: "Milana Rivera",  
  email: "milana@gmail.com", 
  number: 3064703612, 
  profile_pic: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", 
  description:"Backyard garden space", 
  username: "milanagarden", 
  location: "saskatoon", 
  is_performer: false, 
})


#genre_category

jazz = GenreCategory.create({
  name: "Jazz"
})

folk = GenreCategory.create({
  name: "Folk"
})

classical = GenreCategory.create({
  name: "Classical"
})

rock = GenreCategory.create({
  name: "Rock"
})

pop = GenreCategory.create({
  name: "Pop"
})

cultural = GenreCategory.create({
  name: "Cultural"
})


#genres

genre1 = Genre.create({
  user_id: 1,
  genre_categories_id: 1
})
