import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        users: [
            {
                id: 12345,
                firstName: 'Ryan',
                lastName: 'Howard',
                birthDate: '01/01/2000',
                photo: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/06/02/13/gettyimages-469954510.jpg?w968h681'
            },
            {
                id: 12346,
                firstName: 'Dwight',
                lastName: 'Schrute',
                birthDate: '01/01/1968',
                photo: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/06/02/13/gettyimages-469954510.jpg?w968h681'
            },
            {
                id: 12347,
                firstName: 'Kelly',
                lastName: 'Kapoor',
                birthDate: '01/01/1978',
                photo: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/06/02/13/gettyimages-469954510.jpg?w968h681'
            },
            {
                id: 12348,
                firstName: 'Angela',
                lastName: 'Martin',
                birthDate: '01/01/1999',
                photo: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/06/02/13/gettyimages-469954510.jpg?w968h681'
            },
            {
                id: 12349,
                firstName: 'Pam',
                lastName: 'Beesly',
                birthDate: '01/01/2005',
                photo: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/06/02/13/gettyimages-469954510.jpg?w968h681'
            },
            {
                id: 12350,
                firstName: 'Michael',
                lastName: 'Scott',
                birthDate: '01/01/1998',
                photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'
            },
            {
                id: 12351,
                firstName: 'Oscar',
                lastName: 'Nunez',
                birthDate: '01/01/1985',
                photo: 'http://www.lessentiel.lu/diashow/29899/66135-pSNe3FaAuOnAQgpTh6m3Qw.jpg'
            },
            {
                id: 12352,
                firstName: 'Creed',
                lastName: 'Bratton',
                birthDate: '01/01/1994',
                photo: 'https://static.lexpress.fr/medias_11023/w_420,c_limit,g_north/v1469611467/star-sexy-kylie-jenner-et-son-decollete-plongeant_5644015.jpg'
            }
          ],
        patients: {}
    },
    mutations:{},
    getters:{
        usersAll: state => state.users,
        usersOne: (state, id) => {
            return state.users.filter(users => users.id == id)
          }
    },
    actions:{}
})

export default store;