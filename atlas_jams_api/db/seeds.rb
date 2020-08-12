#performers 
performer1 = User.create!({ 
  name: "Peach Euphoria",  
  email: "peach@gmail.com", 
  number: 3064703625, 
  profile_pic: "https://images.unsplash.com/photo-1549834125-20817c614d41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  description:"Our band aims for a simple and minimal sound where each instrument contributes and does not dominate. Recordings are done live with real instruments, and very seldom are different takes cut and mixed. Improvisation is a significant part of our song development.", 
  password: "peach", 
  password_confirmation: "peach", 
  location: "Saskatoon", 
  is_performer: true, 
  size: 4 
})
performer2 = User.create!({ 
  name: "Massimo",  
  email: "massimo@gmail.com", 
  number: 3062437814, 
  profile_pic: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", 
  description:"I'm an Italian composer and pianist particularly noted for the use of developing melodious phrases in  piano compositions. I began my musical training at the Conservatorio Verdi in Milan, gaining a diploma in composition. Later, I studied with Luciano Berio. In 1982 I gained a scholarship to the Tanglewood Music Festival.", 
  password: "massimo", 
  password_confirmation:  "massimo",
  location: "Saskatoon", 
  is_performer: true, 
  size: 1 
})
performer3 = User.create!({ 
  name: "Nya James",  
  email: "Nya@gmail.com", 
  number: 3062097804, 
  profile_pic: "https://images.unsplash.com/photo-1596486744424-0e9d06213883?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  description:"I was a dedicated choir student during my childhood, I studied clarinet, violin, and piano before moving on to guitar. I began writing songs in high school and sang in a choir group, the Madrigals. I credits my choral experiences as indispensable in learning to musically notate, as well as to sing harmonies. That molded and created who I am today.",
  password: "nyaJames", 
  password_confirmation:  "nyaJames",
  location: "Saskatoon", 
  is_performer: true, 
  size: 1
})
performer4 = User.create!({ 
  name: "Atikh",  
  email: "Atikh@gmail.com", 
  number: 3062091234, 
  profile_pic: "https://images.unsplash.com/photo-1471565661762-b9dfae862dbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=800&q=60",
  description:"Musician and singer known for incorporating the saxophone into  my songs. I  grew up in a room with over 200 vinyl records on the walls while simultaneously having friends giving me hard hitting drums and trap music influences. I often refer to my music as TrapHouseJazz",
  password: "Atikh", 
  password_confirmation:  "Atikh",
  location: "Saskatoon", 
  is_performer: true, 
  size: 1
})
performer5 = User.create!({ 
  name: "Zibik",  
  email: "zibik@gmail.com", 
  number: 3062098934, 
  profile_pic: "https://images.unsplash.com/photo-1575650272057-912a9b9f19ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  description:"My commitment to contemporary music and to the expansion of the guitar repertoire has led me to collaborations with distinguished composers. Here for all your classical events!",
  password: "zibik", 
  password_confirmation:  "zibik",
  location: "Calgary", 
  is_performer: true, 
  size: 1
})
performer6 = User.create!({ 
  name: "The Pine Beetles",  
  email: "pine@gmail.com", 
  number: 3098098934, 
  profile_pic: "https://images.unsplash.com/photo-1544191674-3d2c0f2342f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1962&q=80",
  description:" Born from the simple desire among friends to play and share music with others, we began with spontaneous Sunday evening jams. Matt Krane: Guitar and Vocals - Ben Brewer: Guitar and Vocals - C. Louis Perrinjaquet M.D.: Bass and Vocals - Daniel “Moose” Bednarski: Harmonica, Vocals, M.C. - Mark Gidney: Banjo and Vocals - Jacob Brewer: Ukelele, Vocals",
  password: "pineBeetles", 
  password_confirmation: "pineBeetles",
  location: "Calgary", 
  is_performer: true, 
  size: 7
})
performer7 = User.create!({ 
  name: "Ace",  
  email: "ace@gmail.com", 
  number: 3061098934, 
  profile_pic: "https://images.unsplash.com/photo-1589180155195-db40d7dfa37b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
  description:" Folk pop duo consisting of husband-and-wife  Kofi and Safiya. The duo met in Vancouver in 2011. ",
  password: "ace12345", 
  password_confirmation:  "ace12345",
  location: "Vancouver", 
  is_performer: true, 
  size: 2
})
performer8 = User.create!({
  name: "Josh G's Quartet",
  email: "joshuagomberoff@gmail.com",
  number: 9293020833,
  profile_pic: "https://i1.wp.com/valleyofthemoonmusicfestival.org/wp-content/uploads/2019/09/IMG_0708.jpg?fit=600%2C400&ssl=1",
  description: "We are a classical string quartet. We play all the big time pop radio bangers from the 1600s, 1700s, 1800s, and 1900s, from Mozart to Beethoven to Brahms. NY Times Magazine has described our performances as 'it wasn't horrible', and The Strad Magazine has described our sound as 'ok'. If you like anything that you enjoy, then you will surely find our music...palatable",
  password: "password",
  password_confirmation: "password",
  location: "Vancouver",
  is_performer: true,
  size: 4
})


#hosts
host1 = User.create!({ 
  name: "Kofi",  
  email: "kofi@gmail.com", 
  number: 306103625, 
  profile_pic: "https://images.unsplash.com/photo-1559893088-c0787ebfc084?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80", 
  description:"I know there are ways we can support and serve our music community this summer. I love working in partnership with local musicians to help others get exposure and allow performers to show case their talent. Support your local musicians!", 
  password: "kofi123", 
  password_confirmation: "kofi123", 
  location: "Saskatoon", 
  is_performer: false,
  is_host: true
})


host2 = User.create!({ 
  name: "Milana Rivera",  
  email: "milana@gmail.com", 
  number: 3065703612, 
  profile_pic: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", 
  description:"Creating a family friendly, sustainable and successful music event. In a rich celebration of music and community, come check out my latest events for a fun night out!", 
  password: "milana", 
  password_confirmation: "milana", 
  location: "Calgary", 
  is_performer: false, 
  is_host: true
})
host3 = User.create!({ 
  name: "Alvarro Fam",  
  email: "alvarro@gmail.com", 
  number: 3066783612, 
  profile_pic: "https://images.unsplash.com/photo-1501005727661-77318235fcac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
  description:"Our passion is creating lively, fun events in celebration of our local musicians! This is one way we love giving back to out community and a way for you to have a little fun! Put on your dancing shows invite your pals and join us at our events!",
  password: "alvarro", 
  password_confirmation: "alvarro", 
  location: "Vancouver", 
  is_performer: false, 
  is_host: true
})


#genre_category

jazz = GenreCategory.create!({
  name: "Jazz"
})

folk = GenreCategory.create!({
  name: "Folk"
})

classical = GenreCategory.create!({
  name: "Classical"
})

funk = GenreCategory.create!({
  name: "funk"
})

pop = GenreCategory.create!({
  name: "Pop"
})

indie = GenreCategory.create!({
  name: "Indie"
})


#genre
genre6_performer1 = Genre.create!({
  user_id: performer1.id,
  genre_category_id: indie.id
})
genre3_performer2 = Genre.create!({
  user_id: performer2.id,
  genre_category_id: classical.id
})
genre6_performer3 = Genre.create!({
  user_id: performer3.id,
  genre_category_id: indie.id
})
genre2_performer3 = Genre.create!({
  user_id: performer3.id,
  genre_category_id: folk.id
})
genre1_performer3 = Genre.create!({
  user_id: performer3.id,
  genre_category_id: jazz.id
})
genre4_performer4 = Genre.create!({
  user_id: performer4.id,
  genre_category_id: funk.id
})
genre1_performer4 = Genre.create!({
  user_id: performer4.id,
  genre_category_id: jazz.id
})
genre5_performer4 = Genre.create!({
  user_id: performer4.id,
  genre_category_id: pop.id
})
genre1_performer4 = Genre.create!({
  user_id: performer4.id,
  genre_category_id: jazz.id
})
genre3_performer5 = Genre.create!({
  user_id: performer5.id,
  genre_category_id: classical.id
})
genre1_performer5 = Genre.create!({
  user_id: performer5.id,
  genre_category_id: jazz.id
})
genre2_performer6 = Genre.create!({
  user_id: performer6.id,
  genre_category_id: folk.id
})
genre2_performer7 = Genre.create!({
  user_id: performer7.id,
  genre_category_id: folk.id
})
genre5_performer7 = Genre.create!({
  user_id: performer7.id,
  genre_category_id: pop.id
})
genre3_performer8 = Genre.create!({
  user_id: performer8.id,
  genre_category_id: classical.id
})




#recordings
performer1.recordings.create!({
  name: "California Sun",
  url: "https://www.youtube.com/watch?v=AbEsUNOk2gc",
  description: "Chill feel good song for all your chill events"
})
performer1.recordings.create!({
  name: "Gone",
  url: "https://www.youtube.com/watch?v=nq0mpgHNapc",
  description: "Wrote music, met so many wonderful people, and saw so many beautiful places on our travels."
})
performer1.recordings.create!({
  name: "Low",
  url: "https://www.youtube.com/watch?v=HJgNeiGVvq4",
  description: "Wrote music, met so many wonderful people, and saw so many beautiful places on our travels."
})
performer1.recordings.create!({
  name: "Young Forever",
  url: "https://www.youtube.com/watch?v=EftPnOt5cGw&list=RDHJgNeiGVvq4&index=31",
  description: "Chill feel good song for all your chill events"
})
performer1.recordings.create!({
  name: "California Sun",
  url: "https://www.youtube.com/watch?v=tNte9ZNRppQ&list=RDtNte9ZNRppQ&index=1",
  description: "Chill feel good song for all your chill events"
})

performer2.recordings.create!({
  name: "Automne",
  url: "https://www.youtube.com/watch?v=ubkaG2rmD0g",
  description: "La douceur du musique."
})
performer2.recordings.create!({
  name: "Prélude",
  url: "https://www.youtube.com/watch?v=rzDL9RzXbdo",
  description: "La douceur du musique."
})
performer2.recordings.create!({
  name: "Le vieillard",
  url: "https://www.youtube.com/watch?v=-vAz_HTFEXs&list=OLAK5uy_mDqJG7pGOYFxxmtL77fLeFuMU8sJ2Gt64&index=9",
  description: "La douceur du musique."
})
performer2.recordings.create!({
  name: "Comptine",
  url: "https://www.youtube.com/watch?v=BQLz6_Rmr2E&list=OLAK5uy_mDqJG7pGOYFxxmtL77fLeFuMU8sJ2Gt64&index=10",
  description: "La douceur du musique."
})
performer2.recordings.create!({
  name: "Bourrasques",
  url: "https://www.youtube.com/watch?v=j89I3QQLPz8&list=OLAK5uy_mDqJG7pGOYFxxmtL77fLeFuMU8sJ2Gt64&index=8",
  description: "La douceur du musique."
})

performer3.recordings.create!({
  name: "Honey",
  url: "https://www.youtube.com/watch?v=1w2JV01fTPs",
  description: "Smooth beats"
})
performer3.recordings.create!({
  name: "KOTA The Friend",
  url: "https://www.youtube.com/watch?v=ybwrxjiAJrM&list=RD1w2JV01fTPs&index=2",
  description: "Smooth beats"
})
performer3.recordings.create!({
  name: "Tough Pill",
  url: "https://www.youtube.com/watch?v=Dc_D7PHkdzQ",
  description: "Smooth beats"
})
performer3.recordings.create!({
  name: "Berry",
  url: "https://www.youtube.com/watch?v=ZVvNwoxLHQE",
  description: "Smooth beats"
})
performer3.recordings.create!({
  name: "Bubbles",
  url: "https://www.youtube.com/watch?v=m-W4IsnKQZk&list=RDhmxrVDj7ghs&index=4",
  description: "Smooth beats"
})
performer3.recordings.create!({
  name: "The Friend",
  url: "https://www.youtube.com/watch?v=f-VLwrT0pzs&list=RDhmxrVDj7ghs&index=7",
  description: "Smooth beats"
})
performer3.recordings.create!({
  name: "DAYLIGHT",
  url: "https://www.youtube.com/watch?v=upJPaPZldvM&list=RDhmxrVDj7ghs&index=16",
  description: "Smooth beats"
})

performer4.recordings.create!({
  name: "Float",
  url: "https://www.youtube.com/watch?v=Nl9LrqV_HG8&list=RDNl9LrqV_HG8&start_radio=1",
  description: "Chill instrumental"
})
performer4.recordings.create!({
  name: "Jazz",
  url: "https://www.youtube.com/watch?v=HepnHvykQGA",
  description: "Snazzy Jazz"
})
performer4.recordings.create!({
  name: "Lemonade",
  url: "https://www.youtube.com/watch?v=xN2TVpsIo34",
  description: "Chill summer beats"
})
performer4.recordings.create!({
  name: "Hope",
  url: "https://www.youtube.com/watch?v=5Jd-gfq3aDo",
  description: "Chill summer beats"
})
performer4.recordings.create!({
  name: "Feel Good",
  url: "https://www.youtube.com/watch?v=_6EsfNOM0Yc&list=RD5Jd-gfq3aDo&index=35",
  description: "Chill summer beats"
})
performer5.recordings.create!({
  name: "Bluebird",
  url: "https://www.youtube.com/watch?v=gArIvTJdrEc",
  description: "Classical melodies"
})
performer5.recordings.create!({
  name: "Radiate",
  url: "https://www.youtube.com/watch?v=wlWsDwY8p2Y",
  description: "Classical melodies"
})
performer5.recordings.create!({
  name: "Butterflies",
  url: "https://www.youtube.com/watch?v=iDJrSunrf3k&list=RDgArIvTJdrEc&index=13",
  description: "Classical melodies"
})
performer5.recordings.create!({
  name: "Quiet Resource",
  url: "https://www.youtube.com/watch?v=ou6eguGdLaQ&list=RDgArIvTJdrEc&index=45",
  description: "Classical melodies"
})

performer6.recordings.create!({
  name: "Moments",
  url: "https://www.youtube.com/watch?v=oQSD3mzvSuw",
  description: " We wanted to share some of the beautiful scenery we have nearby so we decided to record a unique acoustic session "
})
performer6.recordings.create!({
  name: "Second Sun",
  url: "https://www.youtube.com/watch?v=VllseHmQzds",
  description: " We wanted to share some of the beautiful scenery we have nearby so we decided to record a unique acoustic session "
})
performer6.recordings.create!({
  name: "Coastline",
  url: "https://www.youtube.com/watch?v=Cp-1t9B62zc&list=RDVllseHmQzds&index=20",
  description: " We wanted to share some of the beautiful scenery we have nearby so we decided to record a unique acoustic session "
})
performer6.recordings.create!({
  name: "Follow The Sun",
  url: "https://www.youtube.com/watch?v=0E1bNmyPWww&list=RDVllseHmQzds&index=24",
  description: " We wanted to share some of the beautiful scenery we have nearby so we decided to record a unique acoustic session "
})
performer6.recordings.create!({
  name: "Follow The Sun",
  url: "https://www.youtube.com/watch?v=0E1bNmyPWww&list=RDVllseHmQzds&index=24",
  description: " We wanted to share some of the beautiful scenery we have nearby so we decided to record a unique acoustic session "
})

performer7.recordings.create!({
  name: "Modern Chemistry",
  url: "https://www.youtube.com/watch?v=8P5zE6mJKUw",
  description: "Feel good indie-pop tunes!"
})
performer7.recordings.create!({
  name: "Buttons",
  url: "https://www.youtube.com/watch?v=6m3tfRwK6pw",
  description: "Feel good indie-pop tunes!"
})
performer7.recordings.create!({
  name: "1969Dime",
  url: "https://www.youtube.com/watch?v=TfxWnW6VTxw",
  description: "Feel good indie-pop tunes!"
})
performer7.recordings.create!({
  name: "SunShy",
  url: "https://www.youtube.com/watch?v=ta9C7O5ULxU",
  description: "Feel good indie-pop tunes!"
})
performer8.recordings.create!({
  name: "As Time Goes By",
  url: "https://www.youtube.com/watch?v=_bWtmFhOekM&feature=youtu.be&fbclid=IwAR3VbDu4U1AI0AYNObbHMxQsiStvrTWyHNWbzRSGZU5GEBg1e_miqYeWoc0",
  description: "String pop"
})
performer8.recordings.create!({
  name: "Fanny Mendelssohn Quartet",
  url: "https://www.youtube.com/watch?v=eT8RADoQj88",
  description: "Rarely played quartet by Fanny Mendelssohn!"
})
performer8.recordings.create!({
  name: "Felix Mendelssohn Piano Quartet",
  url: "https://www.youtube.com/watch?v=K6HCdc8qcbg",
  description: "Mendelssohn was a teenager when he wrote this....no fair"
})




#host spaces
#host 1
host1_space1 = host1.spaces.create!({
  capacity: 100,
  address: "4037 Orenda Rd"
})

host1_space2 = host1.spaces.create!({
  capacity: 50,
  address: "2223 rue des Champs"
})
host1_space3 = host1.spaces.create!({
  capacity: 200,
  address: "126 Kensington Blvd"
})

#host 2
host2_space1 = host2.spaces.create!({
  capacity: 50,
  address: "315 Ave A South"
})

host2_space2 = host2.spaces.create!({
  capacity: 50,
  address: "4365  Scarth Street"
})

host2_space3 = host2.spaces.create!({
  capacity: 50,
  address: "22 Spadina Crescent"
})

#host 3
host3_space1 = host3.spaces.create!({
  capacity: 50,
  address: "140 8 Ave SE"
})

host3_space2 = host3.spaces.create!({
  capacity: 50,
  address: " 618 Confluence Way SE"
})

host3_space3 = host3.spaces.create!({
  capacity: 50,
  address: "807 1 St SW"
})
#space pics
#host 1 space 1
host1_space1.space_pictures.create!({
  url: "https://images.unsplash.com/photo-1551806235-fa3578e4ec2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
})
host1_space1.space_pictures.create!({
  url: "https://images.unsplash.com/photo-1551806136-68d2868db7b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
})
host1_space1.space_pictures.create!({
  url: "https://images.unsplash.com/photo-1551806235-a05dd14a54c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
})
#host 1 space 2
host1_space2.space_pictures.create!({
  url: "https://images.unsplash.com/photo-1587702068694-a909ef4aa346?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
})
#host 1 space 3
host1_space3.space_pictures.create!({
  url: "https://images.unsplash.com/photo-1563341591-ad0a750911cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
})

#host 2 space 1
host2_space1.space_pictures.create!({
  url: "https://images.unsplash.com/photo-1592008432356-8ef189954b5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
})
host2_space1.space_pictures.create!({
  url: "https://images.unsplash.com/photo-1590725121839-892b458a74fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
})
host2_space1.space_pictures.create!({
  url: "https://images.unsplash.com/photo-1591825381767-c7137b8eda0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
})
#host 2 space 2
host2_space2.space_pictures.create!({
  url: "https://images.unsplash.com/photo-1572251774336-17ceaed13251?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
})
#host 2 space 3
host2_space3.space_pictures.create!({
  url: "https://images.unsplash.com/photo-1564785443572-3c5489904468?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
})
#host 3 space 1
host3_space1.space_pictures.create!({
  url: "https://images.unsplash.com/photo-1514053026555-49ce8886ae41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
})
#host 3 space 2
host3_space2.space_pictures.create!({
  url: "https://images.unsplash.com/photo-1527359443443-84a48aec73d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
})
#host 3 space 3
host3_space3.space_pictures.create!({
  url: "https://images.unsplash.com/photo-1531729138901-25529e715df1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
})

#events
#host 1 space 1
jazzy_bop = host1_space1.events.create!({
  date: "2020-08-21",
  time: "7:00",
  am: true,
  name: "Jazzy Bop",
  price: 10.00,
  description: "Check out the jazziest bopalapolous peeps in town. Generally we're known for hosting a lot of open mic nights, however, we're happy to announce that we will be hosting a jazz-pop stage for our rising local artists! Come check it out, grab your pals and come on down! Enjoy the ambient with some drinks and tunes.",
  duration: "270",
  attendants: 50,
  event_picture: "https://images.unsplash.com/photo-1466232373731-46205f0b668e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
  
})
jazz_fest = host1_space2.events.create!({
  date: "2020-08-14",
  time: "4:00",
  am: false,
  name: "Jazz Fest",
  price: 15.00,
  description: "Join us at our annual jazz festival and show case your jazzy tunes",
  duration: "440",
  attendants: 100,
  event_picture: "https://images.unsplash.com/photo-1483842293911-b0f670601cdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2024&q=80"
})

just_folks = host1_space3.events.create!({
  date: "2020-08-23" ,
  time: "11:00",
  am: true,
  name: "Just the Folks",
  price: 12.50,
  description: "Come on down for a light brunch and some good old folk tunes. This is a perfect family outing for the weekend, kids under 7 can join for free! ",
  duration: "250",
  attendants: 50,
  event_picture: "https://images.unsplash.com/photo-1479707341578-d3f239e493d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
})
#host 2 space 1
indie_moment = host2_space1.events.create!({
  date: "2020-09-01",
  time: "7:00",
  am: false,
  name: "Indie Moment",
  price: 5.00,
  description: "Indie feel goods.",
  duration: "300",
  attendants: 30,
  event_picture: "https://images.unsplash.com/photo-1587731556938-38755b4803a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1957&q=80"
})
#host 2 space 2
wine_and_cheese = host2_space2.events.create!({
  date: "2020-09-01",
  time: "9:00",
  am: false,
  name: "Wine and Cheese Night",
  price: 20.00,
  description: "Wine and cheese night with mellow music",
  duration: "230",
  attendants: 50,
  event_picture: 'https://images.unsplash.com/photo-1470019693664-1d202d2c0907?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
})
#host 2 space 3

classical_evening = host2_space3.events.create!({
  date: "2020-09-15",
  time: "8:00",
  am: false,
  name: "Classical Evening",
  price: 25.00,
  description: "Black tie event! Spend an evening with top notch classical performances.",
  duration: "280",
  attendants: 70,
  event_picture: "https://images.unsplash.com/photo-1476287803067-f714aa78eaa7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
})



#host 3 space 1
kick_it = host3_space1.events.create!({
  date: "2020-09-09",
  time: "8:00",
  am: false,
  name: "Kick it",
  price: 12.50,
  description: "Grab your pals and enjoy a night out with some upbeat funk beats, and check out the latest pop/funk musicians!",
  duration: "260",
  attendants: 100,
  event_picture: "https://images.unsplash.com/photo-1499415479124-43c32433a620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
})
#host 3 space 2
sunset = host3_space2.events.create!({
  date: "2020-09-20",
  time:"7:00",
  am: false,
  name: "Sunset",
  price: 15.50,
  description: "Sunset dine to some folk music",
  duration: "240",
  attendants: 80,
  event_picture: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  
})
#host 3 space 3
garden_tea = host3_space3.events.create!({
  date: "2020-10-01",
  time: "10:00",
  am: true,
  name: "garden_tea",
  price: 10.00,
  description: "Morning tea with some relaxing classical music",
  duration: "200",
  attendants: 100,
  event_picture: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
})


#Events_performers
jazzy_bop_performer3 = EventsPerformer.create!({
  user_id: performer3.id,
  event_id: jazzy_bop.id
})
jazzy_bop_performer4 = EventsPerformer.create!({
  user_id: performer4.id,
  event_id: jazzy_bop.id
})
jazzy_bop_performer5 = EventsPerformer.create!({
  user_id: performer5.id,
  event_id: jazzy_bop.id
})

jazz_fest_performer3 = EventsPerformer.create!({
  accepted: true,
  user_id: performer3.id,
  event_id: jazz_fest.id
})
jazz_fest_performer4 = EventsPerformer.create!({
  accepted: true,
  user_id: performer4.id,
  event_id: jazz_fest.id
})

just_folks_performer1 = EventsPerformer.create!({
  user_id: performer1.id,
  event_id: just_folks.id
})
just_folks_performer6 =  EventsPerformer.create!({
  user_id: performer6.id,
  event_id: just_folks.id
})
just_folks_performer7 = EventsPerformer.create!({
  user_id: performer7.id,
  event_id: just_folks.id
})


indie_moment_performer1 = EventsPerformer.create!({
  user_id: performer1.id,
  event_id: indie_moment.id
})
indie_moment_performer3 = EventsPerformer.create!({
  user_id: performer3.id,
  event_id: indie_moment.id
})



wine_and_cheese_night_performer2 = EventsPerformer.create!({
  user_id: performer2.id,
  event_id: wine_and_cheese.id
})
wine_and_cheese_night_performer5 = EventsPerformer.create!({
  user_id: performer5.id,
  event_id: wine_and_cheese.id
})


classical_evening_performer2 = EventsPerformer.create!({
  user_id: performer2.id,
  event_id: classical_evening.id
})
classical_evening_performer5 = EventsPerformer.create!({
  user_id: performer5.id,
  event_id: classical_evening.id
})

kick_it_performer1= EventsPerformer.create!({
  user_id: performer1.id,
  event_id: kick_it.id
})
kick_it_performer3= EventsPerformer.create!({
  user_id: performer3.id,
  event_id: kick_it.id
})
kick_it_performer4= EventsPerformer.create!({
  user_id: performer4.id,
  event_id: kick_it.id
})
kick_it_performer7= EventsPerformer.create!({
  user_id: performer7.id,
  event_id: kick_it.id
})

sunset_performer4 = EventsPerformer.create!({
  user_id: performer4.id,
  event_id: sunset.id
})
sunset_performer7 = EventsPerformer.create!({
  accepted: true,
  user_id: performer7.id,
  event_id: sunset.id
})

garden_tea_performer2 = EventsPerformer.create!({
  user_id: performer2.id,
  event_id: garden_tea.id
})
garden_tea_performer5 = EventsPerformer.create!({
  user_id: performer5.id,
  event_id: garden_tea.id
})




