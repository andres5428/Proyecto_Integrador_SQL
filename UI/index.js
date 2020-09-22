import request from './services.js';

const URL_REGISTER_BAND = 'http://localhost:3000/band';
const URL_REGISTER_ALBUM = 'http://localhost:3000/album';
const URL_REGISTER_SONG = 'http://localhost:3000/song';
const URL_REGISTER_USER = 'http://localhost:3000/user/register';
const URL_REGISTER_ARTICLE = 'http://localhost:3000/product/register';

/**
 * DOM
 */

const band_Name = document.querySelector('.band_Name');
const band_Members = document.querySelector('.band_Members');
const band_StartDate = document.querySelector('.band_StartDate');
const band_Country = document.querySelector('.band_Country');
const btn_band = document.querySelector('.btn_band');
const btn_Album = document.querySelector('.btn_Album');
const album_Name = document.querySelector('.album_Name');
const album_band = document.querySelector('.album_band');
const album_publishDate = document.querySelector('.album_publishDate');
const btn_Song = document.querySelector('.btn_Song');
const song_Name = document.querySelector('.song_Name');
const song_Duration = document.querySelector('.song_Duration');
const song_Album = document.querySelector('.song_Album');
const song_Band = document.querySelector('.song_Band');
const get_All = document.querySelector('.get_All');
const Post = document.querySelector('.Post');
const put = document.querySelector('.put');
const delete_method = document.querySelector('.delete_method');
const band_Number = document.querySelector('.band_Number');

let data_Band = {};
let data_Album = {};
let data_Song = {};
let data_Usuario = {};

// post band
const register_Event_Band = (() => {
    data_Usuario = {
        username: band_Name.value,
        password: band_Members.value,
        firstName: band_StartDate.value,
        lastName: band_Country.value,
        phone: band_Number.value

    };
    request.register(URL_REGISTER_USER, data_Usuario)
        .then((response) => {
            console.log(response)
        }
        ).catch((error) => {
            console.log(error)
        }
        )
})

// get band
const get_Bands = (() => {
    request.get(URL_REGISTER_BAND).then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error)
    })
})

// put banda

const modify_Event_Band = (() => {
    data_Band = {
        name: band_Name.value,
        members: band_Members.value,
        startDate: band_StartDate.value,
        country: band_Country.value
    };
    request.put(URL_REGISTER_BAND, data_Band)
        .then((response) => {
            console.log(response)
            console.log('Modificado')
        }
        ).catch((error) => {
            console.log(error)

        }
        )
})

// Delete banda
const delete_Event_Band = (() => {
    data_Band = {};
    data_Band = {
        name: band_Name.value
    };
    request.delete(URL_REGISTER_BAND, data_Band)
        .then((response) => {
            console.log(response)
            console.log('Banda eliminada')
        }
        ).catch((error) => {
            console.log(error)
        }
        )
})

btn_band.addEventListener('click', () => {
    if (get_All.checked == true) {
        get_Bands();
    }
    if (Post.checked == true) {
        register_Event_Band();
        console.log('post')
    }

    if (put.checked == true) {
        console.log('put')
        modify_Event_Band();
    }

    if (delete_method.checked == true) {
        console.log('delete')
        delete_Event_Band();
    }

});

// post album
const register_Event_Album = (() => {
    data_Album = {
        itemName: album_Name.value,
        price: album_band.value,
        state: album_publishDate.value
    };
    request.register(URL_REGISTER_ARTICLE, data_Album)
        .then((response) => {
            console.log(response)
        }
        ).catch((error) => {
            console.log(error)
        }
        )
})



// get album
const get_Albums = (() => {
    request.get(URL_REGISTER_ALBUM).then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error)
    })
})

// put album
const modify_Event_Album = (() => {
    data_Album = {
        name: album_Name.value,
        band: album_band.value,
        publishDate: album_publishDate.value
    };
    request.put(URL_REGISTER_ALBUM, data_Album)
        .then((response) => {
            console.log(response)
            console.log('modificado')
        }
        ).catch((error) => {
            console.log(error)
        }
        )
})

// Delete Album
const delete_Event_Album = (() => {
    data_Album = {};
    data_Album = {
        name: album_Name.value
    };
    request.delete(URL_REGISTER_ALBUM, data_Album)
        .then((response) => {
            console.log(response)
            console.log('Album eliminada')
        }
        ).catch((error) => {
            console.log(error)
        }
        )
})

btn_Album.addEventListener('click', () => {
    if (get_All.checked == true) {
        get_Albums();
    }
    if (Post.checked == true) {
        register_Event_Album();
    }
    if (put.checked == true) {
        modify_Event_Album();
    }

    if (delete_method.checked == true) {
        delete_Event_Album();
    }


});

// post song
const register_Event_Song = (() => {
    data_Song = {
        name: song_Name.value,
        duration: song_Duration.value,
        band: song_Band.value,
        album: song_Album.value
    };
    request.register(URL_REGISTER_SONG, data_Song)
        .then((response) => {
            console.log(response)
            console.log('Modificado')
        }
        ).catch((error) => {
            console.log(error)
        }
        )
})
// get song
const get_Songs = (() => {
    request.get(URL_REGISTER_SONG).then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error)
    })
})
// put song
const modify_Event_Song = (() => {
    data_Song = {
        name: song_Name.value,
        duration: song_Duration.value,
        band: song_Band.value,
        album: song_Album.value
    };
    request.put(URL_REGISTER_SONG, data_Song)
        .then((response) => {
            console.log(response)
            console.log('Modificado')
        }
        ).catch((error) => {
            console.log(error)
        }
        )
})

// Delete song
const delete_Event_Song = (() => {
    data_Song = {};
    data_Song = {
        name: song_Name.value
    };
    request.delete(URL_REGISTER_SONG, data_Song)
        .then((response) => {
            console.log(response)
            console.log('canción eliminada')
        }
        ).catch((error) => {
            console.log(error)
        }
        )
})

btn_Song.addEventListener('click', () => {
    if (get_All.checked == true) {
        get_Songs();
    }
    if (Post.checked == true) {
        register_Event_Song();
    }
    if (put.checked == true) {
        modify_Event_Song();
    }

    if (delete_method.checked == true) {
        delete_Event_Song();
    }
});