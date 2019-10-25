// Created by 🧱🔨 Gopal Kataria

// ❌📦 crossbox studios [ single handed 😉 ]

//
//  The Earth clock's main javascript


// all the timezones are in timezones.js
// Thanks to Mr Dmitriy Filipenko For providing Time zone Offset values
//
//
// //

//     The MIT License

//          Copyright(c) 2019 Gopal Kataria


//      Permission is hereby granted, free of charge, to any person
//      obtaining a copy of this software and associated documentation
//      files(the "Software"), to deal in the Software without
//      restriction, including without limitation the rights to use,
//          copy, modify, merge, publish, distribute, sublicense, and / or sell
//      copies of the Software, and to permit persons to whom the
//      Software is furnished to do so, subject to the following
//      conditions:

//      The above copyright notice and this permission notice shall be
//      included in all copies or substantial portions of the Software.

//      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
//          EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
//      OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
//      NONINFRINGEMENT.IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
//      HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
//      WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//      FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
//      OTHER DEALINGS IN THE SOFTWARE

'use strict';


// web app config firebase hheerree
var firebaseConfig = {
    apiKey: "AIzaSyAv-znMUI_JPhnW2G_EoMisF0TP4zkOWGI",
    authDomain: "earth-clock.firebaseapp.com",
    databaseURL: "https://earth-clock.firebaseio.com",
    projectId: "earth-clock",
    storageBucket: "earth-clock.appspot.com",
    messagingSenderId: "734447679901",
    appId: "1:734447679901:web:93bbdfaddb409023f4d774",
    measurementId: "G-FY34E6WKLG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// firebase in up !!







function get_time(offset, elem_id, abbr, info) {

    // updating time from the given data on time cards

    var x = document.getElementById(elem_id)


    // date object to  be used for getting time
    var { new_time, date } = Global_time(offset);

    if (x) {
        new_time = new_time < 0 ? 1440 + new_time : new_time
        new_time = new_time > 1440 ? new_time - 1440 : new_time
        x.textContent = " " + (new_time - (new_time % 60)) / 60 + " : " + (new_time % 60) + " : " + date.getUTCSeconds() + "  "
        x.innerHTML += '<br>   ' + abbr + "  " + info

    }


}

function Global_time(offset) {
    var date = new Date;
    var new_time = (date.getUTCHours()) * 60 + date.getUTCMinutes() + offset;
    return { new_time, date };
}

// making time cards [ all places on earth !! ]

function add_all_times(Timezone) {
    Timezone.map(zone => {
        if (Timezone_cities.includes(zone.id)) {
            make_card(zone)
        }
    });
}

function make_card(zone) {




    var new_card = document.createElement('div')
    new_card.classList.add('cards')
    new_card.id = zone.id + "x"

    var remove_btn = document.createElement('button')
    remove_btn.classList.add('remove_btn')
    remove_btn.textContent = "X"


    var time_val = document.createElement('div')
    time_val.classList.add('time')
    time_val.id = zone.id

    new_card.appendChild(remove_btn)
    new_card.appendChild(time_val)

    document.getElementById('time_card_holder').appendChild(new_card)


    remove_btn.addEventListener('click', evt => {
        evt.srcElement.parentElement.remove()
        Timezone_cities = Timezone_cities.filter(city => {
            if (evt.srcElement.parentElement.id.split('x').indexOf(city) > -1) {
                console.log('[ user action ] removed a time card ' + evt.srcElement.parentElement.id)
                return city;
            }

        });
        set_cookie_time()
        Timezone_cities = get_cookie_time()


    });

    new_card.appendChild(remove_btn)

    get_time(zone.offset, zone.id, zone.abbr, zone.text)


}

function add_city(Timezone, Timezone_id) {
    Timezone.map(zone => {
        if (!document.getElementById(Timezone_id)) {
            if (zone.id == Timezone_id) {
                make_card(zone)
                set_cookie_time()
            }
        }
    });
}



// list of timezones to be added
var Timezone_cities = get_cookie_time()


//
function search(e) {


    var search_item = document.getElementById('srch').value.toUpperCase()

    var found = []


    Timezone.map(zone => {

        if (
            zone.text.toUpperCase().indexOf(search_item) > -1 ||
            zone.abbr.toUpperCase().indexOf(search_item) > -1 ||
            zone.value.toUpperCase().indexOf(search_item) > -1

        ) {
            console.log(" [search] Matches " + zone.abbr + "\n " + zone.value + '\n  ' + zone.text + "\n  Time Zone ID " + zone.id)
            found.push(zone.id)

        }

        zone.utc.map(area => {
            if (
                area.toUpperCase().indexOf(search_item) > -1

            ) {
                console.log(" [search] Matches in list area " + area + "\n " + zone.value + '\n  ' + zone.text + "\n  Time Zone ID " + zone.id)
                found.push(zone.id)

            }
        })




    })

    var city_found = found[0]

    if (found.length == 1) {



        if (city_found != undefined) {
            console.log(" [search]  Found exact match " + city_found)
            Timezone_cities.push(city_found)
            add_city(Timezone, city_found)
            remove_srch()



        }

    }

    if ((e.code == "Enter" || e.keyCode == 13) && search_item.length > 2) {
        console.log(" [search] trying to add all matching time zones ")
        if (found.length == 0) {
            document.getElementById('head').innerText = "No Match Found "
            window.setTimeout("document.getElementById('head').innerText = 'The Earth Clock' ", 2000)
        }
        found.map(city_found => {
            if (city_found != undefined) {
                console.log(" [search]  Found match " + city_found)
                Timezone_cities.push(city_found)
                add_city(Timezone, city_found)
                remove_srch()



            }
        })

    }

}


function set_cookie_time() {

    if (Timezone_cities) {
        document.cookie = escape(Timezone_cities)
    } else {
        document.cookie = ['tz35']
    }
}
function get_cookie_time() {

    var times = unescape(document.cookie).split(',')
    if (times.reverse()[0].indexOf("tz") > -1 ) {
        return times
    } else {
        return ['tz35']
    }


}

function show_srch() {

    // show search box

    var search_box = document.getElementById("srch")
    search_box.style.visibility = 'visible'
    search_box.style.display = 'inline'
    search_box.focus()

    var greyback = document.getElementById('grey_back')
    greyback.style.visibility = 'visible'
    greyback.style.display = 'inline'

    greyback.addEventListener('click', remove_srch)


}
function remove_srch() {

    // clear search box
    document.getElementById('srch').value = ""

    // hide search box

    var search_box = document.getElementById("srch")
    search_box.style.visibility = 'hidden'
    search_box.style.display = 'none'


    var greyback = document.getElementById('grey_back')
    greyback.style.visibility = 'hidden'
    greyback.style.display = 'none'



}

// Timezones json data is in this var
var Timezone;

function StorInMain(List_of_timeZones) {

    // getting json data from other files

    Timezone = List_of_timeZones;
}

function refresh_time() {
    Timezone.map(zone => {

        if (Timezone_cities.includes(zone.id)) {

            get_time(zone.offset, zone.id, zone.abbr, zone.text)
        }
        // refreshing the time in the cards


    });
}

window.addEventListener('load', () => {

    // all the loading functions are fired here

    add_all_times(Timezone)
    const refresh_rate = 1000
    window.setInterval('refresh_time()', refresh_rate)
    remove_loading_circle()
    Timezone_cities = get_cookie_time()
});

document.addEventListener('keydown', evt => {
    if (evt.key == 'a' && evt.ctrlKey == true) {
        show_srch()
        console.log("[search] Initiated from Ctrl + A ")
    }
    if (evt.key == 'Escape') {
        remove_srch()
    }
})

function remove_loading_circle() {

    // things have loaded and time to remove loading circle

    var loading = document.getElementById('loading')
    var greyback = document.getElementById('grey_back')
    loading.style.visibility = 'hidden'
    loading.style.display = 'none'
    greyback.style.visibility = 'hidden'
    greyback.style.display = 'none'


}


// regitering the service worker
if ("serviceWorker" in navigator) { // checking if the browser can use it
    window.addEventListener('load', function () {
        // registering
        console.log("trying to register service worker ")
        navigator.serviceWorker.register('/sw.js').then(function (register) {
            //successfully registered and logging
            console.log("service worker registered \n scope :" + register.scope)
        }).catch(function (err) {
            // catching any errors and logging
            console.log("service worker was not registered \n error : " + err)
        })
    })
}

