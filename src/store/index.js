import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase';


Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
        users: [],
        patients: []
    },
    mutations:{
        userInitiate: (state, user) => {

            const newUsers = state.users.concat(user)
            state.users = newUsers

            return state.users
            console.log('mutations/userInitiate')
        },
        userInitiate1: (state, data) => {
            console.log(data)
            console.log('mutations/userInitiate1')
        },
        userAdd: (state, user) => {
            return state.users.push(user)
            console.log('mutations/userAdd')
        }
    },
    getters:{
        usersAll: state => state.users,
        usersOne: (state, id) => {
            return state.users.filter(users => users.id == id)
            console.log('getters/usersOne')
        }
    },
    actions:{
        userInitiate (context) {
            var allUsers = [{
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
            }];

            context.commit('userInitiate', allUsers)
            console.log('actions/userInitiate')
        },
        async userInitiate1 (context, firestore) {
            /*
            const ref = firebase.firestore().collection('toto').doc();
            ref.get().then((doc) => {
            if (doc.exists) {
                console.log(doc.id + ' - ' + doc.data().firstName)
            } else {
                console.log("No such document!");
            }
            });
            */
            firebase.firestore().collection("toto").get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                });
            });

            //let convoRef = db.collection('toto')
            //.db.collection('toto')
            //console.log(convoRef)
            //let convos = await convoRef.get()
            //convos.forEach(conversation => commit('userInitiate', { conversation }))
        },
        userAdd (context) {
            var newUser = {
                id: 12390,
                firstName: 'Omar',
                lastName: 'LACHGAR',
                birthDate: '05/05/1982',
                photo: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/06/02/13/gettyimages-469954510.jpg?w968h681'
            }

            context.commit('userAdd', newUser)
            console.log('actions/userAdd')
        }
    }
})

export default store;