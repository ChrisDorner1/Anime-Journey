const db = require('./connection');
const { User, List, Anime } = require('../models');

db.once('open', async () => {
    await User.deleteMany();
    const users = await User.insertMany([
        {
            "username": "Gandalf The Grey",
            "email": "gandalf@gmail.com",
            "password": "password1"
        },
        {
            "username": "Levi Ackerman",
            "email": "levi@gmail.com",
            "password": "password2"
        },
        {
            "username": "Naruto Uzumaki",
            "email": "naruto@gmail.com",
            "password": "password3"
        },
        {
            "username": "Roy Mustang",
            "email": "roymustang@gmail.com",
            "password": "password4"
        }
    ]);

    console.log('users seeded');

    const lists = await List.insertOne([
        {
            animes: {
                name: 'Nautro Uzumaki',
                poster: {
                    src: 'https://cdn.myanimelist.net/images/anime/13/17405.jpg',
                    alt: 'Naruto Poster'
                },
            },
            name: 'List 1',
            createdBy: 'Gandalf The Grey'
        }
    ]);

    const animes = await Anime.insertMany([
        {
           name: 'Cowboy Bebop',
           poster: {
                src: 'https://cdn.myanimelist.net/images/anime/1439/93480.jpg',
                alt: 'Bebop Poster'
           } 
        },
        {
            name: 'Jujutsu Kaisen',
            poster: {
                src: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg',
                alt: 'Jujutsu Kaisen Poster'
            }
        }
    ]);

    process.exit();
});