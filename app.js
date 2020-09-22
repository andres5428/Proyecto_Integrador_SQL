const express = require('express')
const app = express();
const port = 3000;
const sequelize = require('./database/db');

// const album = require('./database/models/album');
// const band = require('./database/models/band');
// const song = require('./database/models/song');
const user = require('./database/models/user');
const article = require('./database/models/article');

user.hasOne(article);


app.use(express.json());
var cors = require('cors');

app.use(cors());

app.post('/user/register', (req, res) => {
    user.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone
    }).then(() => {
        res.send({
                result: `El usuario ${req.body.username} ha sido creada`
            })
            // res.send({ result: `El usuario ${req.body.username} ha sido creado` })
    }).catch((error) => {
        res.status(500).end(error)
    })
})

app.post('/product/register', (req, res) => {
    article.create({
        itemName: req.body.itemName,
        price: req.body.price,
        state: req.body.state,
        userId: req.body.userId

    }).then(() => {
        res.send({
            result: `El usuario ${req.body.itemName} ha sido creada`
        })

    }).catch((error) => {
        res.status(500).end(error)
    })
})

app.get('/get/products', (req, res) => {
    article.findAll().then((articles) => {
        res.send({
            result: articles
        })
    })
})

app.get('/get/product', (req, res) => {
    article.findAll({
        attributes: ['itemName', 'price', 'state'],
        where: { userId: `${req.body.userId}` }
    }).then((articles) => {
        res.send({
            result: articles
        })
    })
})

// app.put('/post/buy', (req, res) => {
//     article.update({
//         state: 'Vendido'
//     }, {
//         where: { id: `${req.body.id}` }
//     })
//     state: 'Vendido'
// }, {
//     where: { id: `${req.body.id}` }
// })
// state: 'Vendido'
// }, {
//     where: { id: `${req.body.id}` }
// })

// })

// app.get('/get/product', (req, res) => {
//     article.findAll({
//         include:
//     }).then((articles) => {
//         res.send({
//             result: articles
//         })
//     })
// })

// Iniciar servidor
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    sequelize.sync({ force: false }).then(() => {
        console.log("Conexión establecida con la base de datos")
    }).catch((error) => {
        console.log("Se ha producido un error", error);
    })

});


// // Bring one band with the name
// app.get('/band/:band', (req, res) => {
//     band.findOne({ where: { name: `${req.params.band}` } }).then(band => {
//         if (band === null) {
//             console.log('Not Found!');
//             res.send('Not Found!')
//         }
//         else {
//             console.log(band)
//             res.send(band)
//         }
//     })
// })

// // Bring one album with the name
// app.get('/album/:album', (req, res) => {
//     album.findOne({ where: { name: `${req.params.album}` } }).then(album => {
//         if (album === null) {
//             console.log('Not Found!');
//             res.send('Not Found!')
//         }
//         else {
//             console.log(album)
//             res.send(album)
//         }
//     })
// })

// // Bring one song with the name
// app.get('/song/:song', (req, res) => {
//     song.findOne({ where: { name: `${req.params.song}` } }).then(song => {
//         if (song === null) {
//             console.log('Not Found!');
//             res.send('Not Found!')
//         }
//         else {
//             console.log(song)
//             res.send(song)
//         }
//     })
// })

// // Bring all the bands

// app.get('/band', (req, res) => {
//     band.findAll({}).then(bands => {
//         if (bands === null) {
//             console.log('Not Found!');
//             res.send('Not Found!')
//         }
//         else {
//             res.send(bands)
//         }
//     })
// })

// // Bring all the albums

// app.get('/album', (req, res) => {
//     album.findAll({}).then(albums => {
//         if (albums === null) {
//             console.log('Not Found!');
//             res.send('Not Found!')
//         }
//         else {
//             res.send(albums)
//         }
//     })
// })

// // Bring all the songs

// app.get('/song', (req, res) => {
//     song.findAll({}).then(songs => {
//         if (songs === null) {
//             console.log('Not Found!');
//             res.send('Not Found!')
//         }
//         else {
//             res.send(songs)
//         }
//     })
// })

// //Create band

// app.post('/band', (req, res) => {
//     band.create({
//         name: req.body.name,
//         members: Number(req.body.members),
//         startDate: req.body.startDate,
//         country: req.body.country
//     }).then(band => {
//         res.send({
//             result: `La banda ${req.body.name} ha sido creada`
//         })
//     })
// })

// //Create album

// app.post('/album', (req, res) => {
//     album.create({
//         name: req.body.name,
//         band: req.body.band,
//         publishDate: req.body.publishDate,
//     }).then(album => {
//         res.send(`El album ${req.body.name} ha sido creada`)
//     })
// })

// //Create song

// app.post('/song', (req, res) => {
//     song.create({
//         name: req.body.name,
//         duration: req.body.duration,
//         album: req.body.album,
//         band: req.body.band
//     }).then(song => {
//         res.send(`La canción ${req.body.name} ha sido creada`)
//     })
// })

// // Modify band
// app.put('/band/', (req, res) => {
//     band.findOne({ where: { name: `${req.body.name}` } }).then(band => {
//         if (band === null) {
//             console.log('Not Found!');
//             res.send('Not Found!')
//         }
//         else {
//             band.name = req.body.name;
//             band.members = req.body.members;
//             band.startDate = req.body.startDate;
//             band.country = req.body.country;
//             band.save();
//             res.send(band)
//         }
//     })
// })

// // Modify album
// app.put('/album/', (req, res) => {
//     album.findOne({ where: { name: `${req.body.name}` } }).then(album => {
//         if (album === null) {
//             console.log('Not Found!');
//             res.send('Not Found!')
//         }
//         else {
//             album.name = req.body.name;
//             album.band = req.body.band;
//             album.publishDate = req.body.publishDate;
//             album.save();
//             res.send(album);
//         }
//     })
// })

// // Modify song
// app.put('/song/', (req, res) => {
//     song.findOne({ where: { name: `${req.body.name}` } }).then(song => {
//         if (song === null) {
//             console.log('Not Found!');
//             res.send('Not Found!')
//         }
//         else {
//             song.name = req.body.name;
//             song.duration = req.body.duration;
//             song.album = req.body.album;
//             song.band= req.body.band;
//             song.save();
//             res.send(song);
//         }
//     })
// })

// // Delete band
// app.delete('/band', (req, res) => {
//     band.findOne({ where: { name: `${req.body.name}` } }).then(band => {
//         if (band === null) {
//             console.log('Not Found!');
//             res.send('Not Found!')
//         }
//         else {  
//             band.destroy();
//             res.send(`La banda ${req.body.name} ha sido eliminada`) // revisar
//         }
//     })
// })

// // Delete album
// app.delete('/album', (req, res) => {
//     album.findOne({ where: { name: `${req.body.name}` } }).then(album => {
//         if (album === null) {
//             console.log('Not Found!');
//             res.send('Not Found!')
//         }
//         else {
//             album.destroy();
//             res.send(`El album ${req.body.name} ha sido eliminada`)
//         }
//     })
// })

// // Delete song
// app.delete('/song', (req, res) => {
//     song.findOne({ where: { name: `${req.body.name}` } }).then(song => {
//         if (song === null) {
//             console.log('Not Found!');
//             res.send('Not Found!')
//         }
//         else {
//             song.destroy();
//             res.send(`La canción ${req.body.name} ha sido eliminada`)
//         }
//     })
// })



// app.get('/find', (req, res) => {
//     user.findAll().then(users => {
//         res.json(users);
//         //res.send("Hola Mundo");
//     })
// })

// app.get('/challenge', (req, res) => {
//     sequelize.query('SELECT "Hola Mundo!"').then(() => {
//         console.log('Hola Mundo');
//         res.send('Hola Mundo');
//     }
//     )
// })