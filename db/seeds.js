const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Shark = require('../models/shark')
const User = require('../models/user')
const Fact = require('../models/fact')

mongoose.connect(
  dbURI, { useNewUrlParser: true, useUnifiedTopology: true },
  (err, db) => {
    if (err) return console.log(err)
    db.dropDatabase()
      .then(() => {
        return User.create([
          {
            username: 'clare3',
            email: 'clare3@email',
            password: 'pass',
            confirmPassword: 'pass'
          },
          {
            username: 'clare4',
            email: 'clare4@email',
            password: 'pass',
            confirmPassword: 'pass'
          }
        ])
      })
      .then(createdUsers => {
        console.log(`${createdUsers.length} users created`)
        return Shark.create( [
          {
            commonName: 'Great White Shark',
            scientificName: 'Carcharodon carcharias',
            manEater: true,
            lengthInFeet: 20,
            image: 'https://s.abcnews.com/images/Health/deep-sea-diving-gty-jpo-180208_17x11_992.jpg',
            location: 'Neptune Islands, South Australia',
            user: createdUsers[0]
          }, {
            commonName: 'Whale Shark',
            scientificName: 'Rhincodon typus',
            manEater: false,
            lengthInFeet: 40,
            image: 'https://i.insider.com/5d1a31f02516e92a1014446b?width=779&format=jpeg',
            location: 'Ningaloo, Western Australia',
            user: createdUsers[1]
          }, {
            commonName: 'Pelagic Thresher',
            scientificName: 'Alopias Pelagicus',
            manEater: false,
            lengthInFeet: 10,
            image: 'https://blog.padi.com/wp-content/uploads/2019/04/thresher-shark-8-1.jpg',
            location: 'Malapascua Island, Philippines',
            user: createdUsers[0]
          }, {
            commonName: 'Basking Shark',
            scientificName: 'Cetorhinus maximus',
            manEater: false,
            lengthInFeet: 33,
            image: 'https://baskingsharkscotland.co.uk/images/made/images/uploads/Basking_Shark_1060_600_70_imageslogontext.png_0_0_30_r_b_-10_-10_s_c1_c_c.jpg',
            location: 'Kyles of Bute, Scotland',
            user: createdUsers[1]
          }, {
            commonName: 'Wobbegong',
            scientificName: 'Orectolobus maculatus',
            manEater: false,
            lengthInFeet: 4,
            image: 'https://i.pinimg.com/originals/d0/52/3c/d0523cb0db2056e3e184a50ee030f829.jpg',
            location: 'Sydney, Australia',
            user: createdUsers[0]
          }
        ])
      })
      .then(createdSharks => {
        console.log(`${createdSharks.length} sharks created`)
        return Fact.create([
          {
            fact: 'Sharks are cartilaginous fish, which means their skeleton is not made of bone'
          }, {
            fact: 'You are more likely to be struck by lightning twice, than be attacked by a shark'
          }, {
            fact: 'There are nearly 500 species of shark worldwide'
          }, {
            fact: 'The bull shark can inhabit freshwater environments'
          }, {
            fact: 'The spotted pattern on a whale shark is as unique as a fingerprint'
          }, {
            fact: 'Deer, bees and cows are more likely to kill you than sharks'
          }, {
            fact: 'Baby leopard sharks start out with stripes and baby zebra sharks start out with spots'
          }, {
            fact: 'The tiger shark is known as the sea hyena, due to it\'s scavenging habits'
          }, {
            fact: 'Approximately 100 million sharks are killed globally by humans'
          }, {
            fact: 'On average, 100 people are attacked by sharks each year and only around 10 of those are fatal'
          }, {
            fact: 'You are significantly more likely to die from heart disease than from a shark attack - in fact, go do some exercise!'
          }
        ])
      })
      .then(createdFacts => console.log(`${createdFacts.length} facts were created`))
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close())
  })
