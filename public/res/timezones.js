


// The MIT License (MIT)

// Copyright (c) 2014 Dmitriy Filipenko

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.









var Timezone = [
  {
    "value": "Dateline Standard Time",
    "abbr": "DST",
    "offset": -720,
    "text": "(UTC-12:00) International Date Line West",
    "utc": [
      "Etc/GMT+12"
    ],
    "id": "tz0"
  },
  {
    "value": "UTC-11",
    "abbr": "U",
    "offset": -660,
    "text": "(UTC-11:00) Coordinated Universal Time-11",
    "utc": [
      "Etc/GMT+11",
      "Pacific/Midway",
      "Pacific/Niue",
      "Pacific/Pago Pago"
    ],
    "id": "tz1"
  },
  {
    "value": "Hawaiian Standard Time",
    "abbr": "HST",
    "offset": -600,
    "text": "(UTC-10:00) Hawaii",
    "utc": [
      "Etc/GMT+10",
      "Pacific/Honolulu",
      "Pacific/Johnston",
      "Pacific/Rarotonga",
      "Pacific/Tahiti"
    ],
    "id": "tz2"
  },
  {
    "value": "Alaskan Standard Time",
    "abbr": "AKDT",
    "offset": -480,
    "text": "(UTC-09:00) Alaska",
    "utc": [
      "America/Anchorage",
      "America/Juneau",
      "America/Nome",
      "America/Sitka",
      "America/Yakutat"
    ],
    "id": "tz3"
  },
  {
    "value": "Pacific Standard Time (Mexico)",
    "abbr": "PDT",
    "offset": -420,
    "text": "(UTC-08:00) Baja California",
    "utc": [
      "America/Santa Isabel"
    ],
    "id": "tz4"
  },
  {
    "value": "Pacific Daylight Time",
    "abbr": "PDT",
    "offset": -420,
    "text": "(UTC-07:00) Pacific Time (US & Canada)",
    "utc": [
      "America/Dawson",
      "America/Los Angeles",
      "America/Tijuana",
      "America/Vancouver",
      "America/Whitehorse"
    ],
    "id": "tz5"
  },
  {
    "value": "Pacific Standard Time",
    "abbr": "PST",
    "offset": -480,
    "text": "(UTC-08:00) Pacific Time (US & Canada)",
    "utc": [
      "America/Dawson",
      "America/Los Angeles",
      "America/Tijuana",
      "America/Vancouver",
      "America/Whitehorse",
      "PST8PDT"
    ],
    "id": "tz6"
  },
  {
    "value": "US Mountain Standard Time",
    "abbr": "UMST",
    "offset": -420,
    "text": "(UTC-07:00) Arizona",
    "utc": [
      "America/Creston",
      "America/Dawson Creek",
      "America/Hermosillo",
      "America/Phoenix",
      "Etc/GMT+7"
    ],
    "id": "tz7"
  },
  {
    "value": "Mountain Standard Time (Mexico)",
    "abbr": "MDT",
    "offset": -360,
    "text": "(UTC-07:00) Chihuahua, La Paz, Mazatlan",
    "utc": [
      "America/Chihuahua",
      "America/Mazatlan"
    ],
    "id": "tz8"
  },
  {
    "value": "Mountain Standard Time",
    "abbr": "MDT",
    "offset": -360,
    "text": "(UTC-07:00) Mountain Time (US & Canada)",
    "utc": [
      "America/Boise",
      "America/Cambridge Bay",
      "America/Denver",
      "America/Edmonton",
      "America/Inuvik",
      "America/Ojinaga",
      "America/Yellowknife",
      "MST7MDT"
    ],
    "id": "tz9"
  },
  {
    "value": "Central America Standard Time",
    "abbr": "CAST",
    "offset": -360,
    "text": "(UTC-06:00) Central America",
    "utc": [
      "America/Belize",
      "America/Costa Rica",
      "America/El Salvador",
      "America/Guatemala",
      "America/Managua",
      "America/Tegucigalpa",
      "Etc/GMT+6",
      "Pacific/Galapagos"
    ],
    "id": "tz10"
  },
  {
    "value": "Central Standard Time",
    "abbr": "CDT",
    "offset": -300,
    "text": "(UTC-06:00) Central Time (US & Canada)",
    "utc": [
      "America/Chicago",
      "America/Indiana/Knox",
      "America/Indiana/Tell City",
      "America/Matamoros",
      "America/Menominee",
      "America/North Dakota/Beulah",
      "America/North Dakota/Center",
      "America/North Dakota/New Salem",
      "America/Rainy River",
      "America/Rankin Inlet",
      "America/Resolute",
      "America/Winnipeg",
      "CST6CDT"
    ],
    "id": "tz11"
  },
  {
    "value": "Central Standard Time (Mexico)",
    "abbr": "CDT",
    "offset": -300,
    "text": "(UTC-06:00) Guadalajara, Mexico City, Monterrey",
    "utc": [
      "America/Bahia Banderas",
      "America/Cancun",
      "America/Merida",
      "America/Mexico City",
      "America/Monterrey"
    ],
    "id": "tz12"
  },
  {
    "value": "Canada Central Standard Time",
    "abbr": "CCST",
    "offset": -360,
    "text": "(UTC-06:00) Saskatchewan",
    "utc": [
      "America/Regina",
      "America/Swift Current"
    ],
    "id": "tz13"
  },
  {
    "value": "SA Pacific Standard Time",
    "abbr": "SPST",
    "offset": -300,
    "text": "(UTC-05:00) Bogota, Lima, Quito",
    "utc": [
      "America/Bogota",
      "America/Cayman",
      "America/Coral Harbour",
      "America/Eirunepe",
      "America/Guayaquil",
      "America/Jamaica",
      "America/Lima",
      "America/Panama",
      "America/Rio Branco",
      "Etc/GMT+5"
    ],
    "id": "tz14"
  },
  {
    "value": "Eastern Standard Time",
    "abbr": "EDT",
    "offset": -240,
    "text": "(UTC-05:00) Eastern Time (US & Canada)",
    "utc": [
      "America/Detroit",
      "America/Havana",
      "America/Indiana/Petersburg",
      "America/Indiana/Vincennes",
      "America/Indiana/Winamac",
      "America/Iqaluit",
      "America/Kentucky/Monticello",
      "America/Louisville",
      "America/Montreal",
      "America/Nassau",
      "America/New York",
      "America/Nipigon",
      "America/Pangnirtung",
      "America/Port-au-Prince",
      "America/Thunder Bay",
      "America/Toronto",
      "EST5EDT"
    ],
    "id": "tz15"
  },
  {
    "value": "US Eastern Standard Time",
    "abbr": "UEDT",
    "offset": -240,
    "text": "(UTC-05:00) Indiana (East)",
    "utc": [
      "America/Indiana/Marengo",
      "America/Indiana/Vevay",
      "America/Indianapolis"
    ],
    "id": "tz16"
  },
  {
    "value": "Venezuela Standard Time",
    "abbr": "VST",
    "offset": -270,
    "text": "(UTC-04:30) Caracas",
    "utc": [
      "America/Caracas"
    ],
    "id": "tz17"
  },
  {
    "value": "Paraguay Standard Time",
    "abbr": "PYT",
    "offset": -240,
    "text": "(UTC-04:00) Asuncion",
    "utc": [
      "America/Asuncion"
    ],
    "id": "tz18"
  },
  {
    "value": "Atlantic Standard Time",
    "abbr": "ADT",
    "offset": -180,
    "text": "(UTC-04:00) Atlantic Time (Canada)",
    "utc": [
      "America/Glace Bay",
      "America/Goose Bay",
      "America/Halifax",
      "America/Moncton",
      "America/Thule",
      "Atlantic/Bermuda"
    ],
    "id": "tz19"
  },
  {
    "value": "Central Brazilian Standard Time",
    "abbr": "CBST",
    "offset": -240,
    "text": "(UTC-04:00) Cuiaba",
    "utc": [
      "America/Campo Grande",
      "America/Cuiaba"
    ],
    "id": "tz20"
  },
  {
    "value": "SA Western Standard Time",
    "abbr": "SWST",
    "offset": -240,
    "text": "(UTC-04:00) Georgetown, La Paz, Manaus, San Juan",
    "utc": [
      "America/Anguilla",
      "America/Antigua",
      "America/Aruba",
      "America/Barbados",
      "America/Blanc-Sablon",
      "America/Boa Vista",
      "America/Curacao",
      "America/Dominica",
      "America/Grand Turk",
      "America/Grenada",
      "America/Guadeloupe",
      "America/Guyana",
      "America/Kralendijk",
      "America/La Paz",
      "America/Lower Princes",
      "America/Manaus",
      "America/Marigot",
      "America/Martinique",
      "America/Montserrat",
      "America/Port of Spain",
      "America/Porto Velho",
      "America/Puerto Rico",
      "America/Santo Domingo",
      "America/St Barthelemy",
      "America/St Kitts",
      "America/St Lucia",
      "America/St Thomas",
      "America/St Vincent",
      "America/Tortola",
      "Etc/GMT+4"
    ],
    "id": "tz21"
  },
  {
    "value": "Pacific SA Standard Time",
    "abbr": "PSST",
    "offset": -240,
    "text": "(UTC-04:00) Santiago",
    "utc": [
      "America/Santiago",
      "Antarctica/Palmer"
    ],
    "id": "tz22"
  },
  {
    "value": "Newfoundland Standard Time",
    "abbr": "NDT",
    "offset": -150,
    "text": "(UTC-03:30) Newfoundland",
    "utc": [
      "America/St Johns"
    ],
    "id": "tz23"
  },
  {
    "value": "E. South America Standard Time",
    "abbr": "ESAST",
    "offset": -180,
    "text": "(UTC-03:00) Brasilia",
    "utc": [
      "America/Sao Paulo"
    ],
    "id": "tz24"
  },
  {
    "value": "Argentina Standard Time",
    "abbr": "AST",
    "offset": -180,
    "text": "(UTC-03:00) Buenos Aires",
    "utc": [
      "America/Argentina/La Rioja",
      "America/Argentina/Rio Gallegos",
      "America/Argentina/Salta",
      "America/Argentina/San Juan",
      "America/Argentina/San Luis",
      "America/Argentina/Tucuman",
      "America/Argentina/Ushuaia",
      "America/Buenos Aires",
      "America/Catamarca",
      "America/Cordoba",
      "America/Jujuy",
      "America/Mendoza"
    ],
    "id": "tz25"
  },
  {
    "value": "SA Eastern Standard Time",
    "abbr": "SEST",
    "offset": -180,
    "text": "(UTC-03:00) Cayenne, Fortaleza",
    "utc": [
      "America/Araguaina",
      "America/Belem",
      "America/Cayenne",
      "America/Fortaleza",
      "America/Maceio",
      "America/Paramaribo",
      "America/Recife",
      "America/Santarem",
      "Antarctica/Rothera",
      "Atlantic/Stanley",
      "Etc/GMT+3"
    ],
    "id": "tz26"
  },
  {
    "value": "Greenland Standard Time",
    "abbr": "GDT",
    "offset": -180,
    "text": "(UTC-03:00) Greenland",
    "utc": [
      "America/Godthab"
    ],
    "id": "tz27"
  },
  {
    "value": "Montevideo Standard Time",
    "abbr": "MST",
    "offset": -180,
    "text": "(UTC-03:00) Montevideo",
    "utc": [
      "America/Montevideo"
    ],
    "id": "tz28"
  },
  {
    "value": "Bahia Standard Time",
    "abbr": "BST",
    "offset": -180,
    "text": "(UTC-03:00) Salvador",
    "utc": [
      "America/Bahia"
    ],
    "id": "tz29"
  },
  {
    "value": "UTC-02",
    "abbr": "U",
    "offset": -120,
    "text": "(UTC-02:00) Coordinated Universal Time-02",
    "utc": [
      "America/Noronha",
      "Atlantic/South Georgia",
      "Etc/GMT+2"
    ],
    "id": "tz30"
  },
  {
    "value": "Mid-Atlantic Standard Time",
    "abbr": "MDT",
    "offset": -60,
    "text": "(UTC-02:00) Mid-Atlantic - Old",
    "utc": [],
    "id": "tz31"
  },
  {
    "value": "Azores Standard Time",
    "abbr": "ADT",
    "offset": 0,
    "text": "(UTC-01:00) Azores",
    "utc": [
      "America/Scoresbysund",
      "Atlantic/Azores"
    ],
    "id": "tz32"
  },
  {
    "value": "Cape Verde Standard Time",
    "abbr": "CVST",
    "offset": -60,
    "text": "(UTC-01:00) Cape Verde Is.",
    "utc": [
      "Atlantic/Cape Verde",
      "Etc/GMT+1"
    ],
    "id": "tz33"
  },
  {
    "value": "Morocco Standard Time",
    "abbr": "MDT",
    "offset": 60,
    "text": "(UTC) Casablanca",
    "utc": [
      "Africa/Casablanca",
      "Africa/El Aaiun"
    ],
    "id": "tz34"
  },
  {
    "value": "UTC",
    "abbr": "UTC",
    "offset": 0,
    "text": "(UTC) Coordinated Universal Time",
    "utc": [
      "America/Danmarkshavn",
      "Etc/GMT"
    ],
    "id": "tz35"
  },
  {
    "value": "GMT Standard Time",
    "abbr": "GMT",
    "offset": 0,
    "text": "(UTC) Edinburgh, London",
    "utc": [
      "Europe/Isle of Man",
      "Europe/Guernsey",
      "Europe/Jersey",
      "Europe/London"
    ],
    "id": "tz36"
  },
  {
    "value": "British Summer Time",
    "abbr": "BST",
    "offset": 60,
    "text": "(UTC+01:00) Edinburgh, London",
    "utc": [
      "Europe/Isle of Man",
      "Europe/Guernsey",
      "Europe/Jersey",
      "Europe/London"
    ],
    "id": "tz37"
  },
  {
    "value": "GMT Standard Time",
    "abbr": "GDT",
    "offset": 60,
    "text": "(UTC) Dublin, Lisbon",
    "utc": [
      "Atlantic/Canary",
      "Atlantic/Faeroe",
      "Atlantic/Madeira",
      "Europe/Dublin",
      "Europe/Lisbon"
    ],
    "id": "tz38"
  },
  {
    "value": "Greenwich Standard Time",
    "abbr": "GST",
    "offset": 0,
    "text": "(UTC) Monrovia, Reykjavik",
    "utc": [
      "Africa/Abidjan",
      "Africa/Accra",
      "Africa/Bamako",
      "Africa/Banjul",
      "Africa/Bissau",
      "Africa/Conakry",
      "Africa/Dakar",
      "Africa/Freetown",
      "Africa/Lome",
      "Africa/Monrovia",
      "Africa/Nouakchott",
      "Africa/Ouagadougou",
      "Africa/Sao Tome",
      "Atlantic/Reykjavik",
      "Atlantic/St Helena"
    ],
    "id": "tz39"
  },
  {
    "value": "W. Europe Standard Time",
    "abbr": "WEDT",
    "offset": 120,
    "text": "(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
    "utc": [
      "Arctic/Longyearbyen",
      "Europe/Amsterdam",
      "Europe/Andorra",
      "Europe/Berlin",
      "Europe/Busingen",
      "Europe/Gibraltar",
      "Europe/Luxembourg",
      "Europe/Malta",
      "Europe/Monaco",
      "Europe/Oslo",
      "Europe/Rome",
      "Europe/San Marino",
      "Europe/Stockholm",
      "Europe/Vaduz",
      "Europe/Vatican",
      "Europe/Vienna",
      "Europe/Zurich"
    ],
    "id": "tz40"
  },
  {
    "value": "Central Europe Standard Time",
    "abbr": "CEDT",
    "offset": 120,
    "text": "(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague",
    "utc": [
      "Europe/Belgrade",
      "Europe/Bratislava",
      "Europe/Budapest",
      "Europe/Ljubljana",
      "Europe/Podgorica",
      "Europe/Prague",
      "Europe/Tirane"
    ],
    "id": "tz41"
  },
  {
    "value": "Romance Standard Time",
    "abbr": "RDT",
    "offset": 120,
    "text": "(UTC+01:00) Brussels, Copenhagen, Madrid, Paris",
    "utc": [
      "Africa/Ceuta",
      "Europe/Brussels",
      "Europe/Copenhagen",
      "Europe/Madrid",
      "Europe/Paris"
    ],
    "id": "tz42"
  },
  {
    "value": "Central European Standard Time",
    "abbr": "CEDT",
    "offset": 120,
    "text": "(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb",
    "utc": [
      "Europe/Sarajevo",
      "Europe/Skopje",
      "Europe/Warsaw",
      "Europe/Zagreb"
    ],
    "id": "tz43"
  },
  {
    "value": "W. Central Africa Standard Time",
    "abbr": "WCAST",
    "offset": 60,
    "text": "(UTC+01:00) West Central Africa",
    "utc": [
      "Africa/Algiers",
      "Africa/Bangui",
      "Africa/Brazzaville",
      "Africa/Douala",
      "Africa/Kinshasa",
      "Africa/Lagos",
      "Africa/Libreville",
      "Africa/Luanda",
      "Africa/Malabo",
      "Africa/Ndjamena",
      "Africa/Niamey",
      "Africa/Porto-Novo",
      "Africa/Tunis",
      "Etc/GMT-1"
    ],
    "id": "tz44"
  },
  {
    "value": "Namibia Standard Time",
    "abbr": "NST",
    "offset": 60,
    "text": "(UTC+01:00) Windhoek",
    "utc": [
      "Africa/Windhoek"
    ],
    "id": "tz45"
  },
  {
    "value": "GTB Standard Time",
    "abbr": "GDT",
    "offset": 180,
    "text": "(UTC+02:00) Athens, Bucharest",
    "utc": [
      "Asia/Nicosia",
      "Europe/Athens",
      "Europe/Bucharest",
      "Europe/Chisinau"
    ],
    "id": "tz46"
  },
  {
    "value": "Middle East Standard Time",
    "abbr": "MEDT",
    "offset": 180,
    "text": "(UTC+02:00) Beirut",
    "utc": [
      "Asia/Beirut"
    ],
    "id": "tz47"
  },
  {
    "value": "Egypt Standard Time",
    "abbr": "EST",
    "offset": 120,
    "text": "(UTC+02:00) Cairo",
    "utc": [
      "Africa/Cairo"
    ],
    "id": "tz48"
  },
  {
    "value": "Syria Standard Time",
    "abbr": "SDT",
    "offset": 180,
    "text": "(UTC+02:00) Damascus",
    "utc": [
      "Asia/Damascus"
    ],
    "id": "tz49"
  },
  {
    "value": "E. Europe Standard Time",
    "abbr": "EEDT",
    "offset": 180,
    "text": "(UTC+02:00) E. Europe",
    "utc": [
      "Asia/Nicosia",
      "Europe/Athens",
      "Europe/Bucharest",
      "Europe/Chisinau",
      "Europe/Helsinki",
      "Europe/Kiev",
      "Europe/Mariehamn",
      "Europe/Nicosia",
      "Europe/Riga",
      "Europe/Sofia",
      "Europe/Tallinn",
      "Europe/Uzhgorod",
      "Europe/Vilnius",
      "Europe/Zaporozhye"
    ],
    "id": "tz50"
  },
  {
    "value": "South Africa Standard Time",
    "abbr": "SAST",
    "offset": 120,
    "text": "(UTC+02:00) Harare, Pretoria",
    "utc": [
      "Africa/Blantyre",
      "Africa/Bujumbura",
      "Africa/Gaborone",
      "Africa/Harare",
      "Africa/Johannesburg",
      "Africa/Kigali",
      "Africa/Lubumbashi",
      "Africa/Lusaka",
      "Africa/Maputo",
      "Africa/Maseru",
      "Africa/Mbabane",
      "Etc/GMT-2"
    ],
    "id": "tz51"
  },
  {
    "value": "FLE Standard Time",
    "abbr": "FDT",
    "offset": 180,
    "text": "(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius",
    "utc": [
      "Europe/Helsinki",
      "Europe/Kiev",
      "Europe/Mariehamn",
      "Europe/Riga",
      "Europe/Sofia",
      "Europe/Tallinn",
      "Europe/Uzhgorod",
      "Europe/Vilnius",
      "Europe/Zaporozhye"
    ],
    "id": "tz52"
  },
  {
    "value": "Turkey Standard Time",
    "abbr": "TDT",
    "offset": 180,
    "text": "(UTC+03:00) Istanbul",
    "utc": [
      "Europe/Istanbul"
    ],
    "id": "tz53"
  },
  {
    "value": "Israel Standard Time",
    "abbr": "JDT",
    "offset": 180,
    "text": "(UTC+02:00) Jerusalem",
    "utc": [
      "Asia/Jerusalem"
    ],
    "id": "tz54"
  },
  {
    "value": "Libya Standard Time",
    "abbr": "LST",
    "offset": 120,
    "text": "(UTC+02:00) Tripoli",
    "utc": [
      "Africa/Tripoli"
    ],
    "id": "tz55"
  },
  {
    "value": "Jordan Standard Time",
    "abbr": "JST",
    "offset": 180,
    "text": "(UTC+03:00) Amman",
    "utc": [
      "Asia/Amman"
    ],
    "id": "tz56"
  },
  {
    "value": "Arabic Standard Time",
    "abbr": "AST",
    "offset": 180,
    "text": "(UTC+03:00) Baghdad",
    "utc": [
      "Asia/Baghdad"
    ],
    "id": "tz57"
  },
  {
    "value": "Kaliningrad Standard Time",
    "abbr": "KST",
    "offset": 180,
    "text": "(UTC+03:00) Kaliningrad, Minsk",
    "utc": [
      "Europe/Kaliningrad",
      "Europe/Minsk"
    ],
    "id": "tz58"
  },
  {
    "value": "Arab Standard Time",
    "abbr": "AST",
    "offset": 180,
    "text": "(UTC+03:00) Kuwait, Riyadh",
    "utc": [
      "Asia/Aden",
      "Asia/Bahrain",
      "Asia/Kuwait",
      "Asia/Qatar",
      "Asia/Riyadh"
    ],
    "id": "tz59"
  },
  {
    "value": "E. Africa Standard Time",
    "abbr": "EAST",
    "offset": 180,
    "text": "(UTC+03:00) Nairobi",
    "utc": [
      "Africa/Addis Ababa",
      "Africa/Asmera",
      "Africa/Dar es Salaam",
      "Africa/Djibouti",
      "Africa/Juba",
      "Africa/Kampala",
      "Africa/Khartoum",
      "Africa/Mogadishu",
      "Africa/Nairobi",
      "Antarctica/Syowa",
      "Etc/GMT-3",
      "Indian/Antananarivo",
      "Indian/Comoro",
      "Indian/Mayotte"
    ],
    "id": "tz60"
  },
  {
    "value": "Moscow Standard Time",
    "abbr": "MSK",
    "offset": 180,
    "text": "(UTC+03:00) Moscow, St. Petersburg, Volgograd",
    "utc": [
      "Europe/Kirov",
      "Europe/Moscow",
      "Europe/Simferopol",
      "Europe/Volgograd"
    ],
    "id": "tz61"
  },
  {
    "value": "Samara Time",
    "abbr": "SAMT",
    "offset": 240,
    "text": "(UTC+04:00) Samara, Ulyanovsk, Saratov",
    "utc": [
      "Europe/Astrakhan",
      "Europe/Samara",
      "Europe/Ulyanovsk"
    ],
    "id": "tz62"
  },
  {
    "value": "Iran Standard Time",
    "abbr": "IDT",
    "offset": 270,
    "text": "(UTC+03:30) Tehran",
    "utc": [
      "Asia/Tehran"
    ],
    "id": "tz63"
  },
  {
    "value": "Arabian Standard Time",
    "abbr": "AST",
    "offset": 240,
    "text": "(UTC+04:00) Abu Dhabi, Muscat",
    "utc": [
      "Asia/Dubai",
      "Asia/Muscat",
      "Etc/GMT-4"
    ],
    "id": "tz64"
  },
  {
    "value": "Azerbaijan Standard Time",
    "abbr": "ADT",
    "offset": 300,
    "text": "(UTC+04:00) Baku",
    "utc": [
      "Asia/Baku"
    ],
    "id": "tz65"
  },
  {
    "value": "Mauritius Standard Time",
    "abbr": "MST",
    "offset": 240,
    "text": "(UTC+04:00) Port Louis",
    "utc": [
      "Indian/Mahe",
      "Indian/Mauritius",
      "Indian/Reunion"
    ],
    "id": "tz66"
  },
  {
    "value": "Georgian Standard Time",
    "abbr": "GET",
    "offset": 240,
    "text": "(UTC+04:00) Tbilisi",
    "utc": [
      "Asia/Tbilisi"
    ],
    "id": "tz67"
  },
  {
    "value": "Caucasus Standard Time",
    "abbr": "CST",
    "offset": 240,
    "text": "(UTC+04:00) Yerevan",
    "utc": [
      "Asia/Yerevan"
    ],
    "id": "tz68"
  },
  {
    "value": "Afghanistan Standard Time",
    "abbr": "AST",
    "offset": 270,
    "text": "(UTC+04:30) Kabul",
    "utc": [
      "Asia/Kabul"
    ],
    "id": "tz69"
  },
  {
    "value": "West Asia Standard Time",
    "abbr": "WAST",
    "offset": 300,
    "text": "(UTC+05:00) Ashgabat, Tashkent",
    "utc": [
      "Antarctica/Mawson",
      "Asia/Aqtau",
      "Asia/Aqtobe",
      "Asia/Ashgabat",
      "Asia/Dushanbe",
      "Asia/Oral",
      "Asia/Samarkand",
      "Asia/Tashkent",
      "Etc/GMT-5",
      "Indian/Kerguelen",
      "Indian/Maldives"
    ],
    "id": "tz70"
  },
  {
    "value": "Yekaterinburg Time",
    "abbr": "YEKT",
    "offset": 300,
    "text": "(UTC+05:00) Yekaterinburg",
    "utc": [
      "Asia/Yekaterinburg"
    ],
    "id": "tz71"
  },
  {
    "value": "Pakistan Standard Time",
    "abbr": "PKT",
    "offset": 300,
    "text": "(UTC+05:00) Islamabad, Karachi",
    "utc": [
      "Asia/Karachi"
    ],
    "id": "tz72"
  },
  {
    "value": "India Standard Time",
    "abbr": "IST",
    "offset": 330,
    "text": "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi",
    "utc": [
      "Asia/Kolkata"
    ],
    "id": "tz73"
  },
  {
    "value": "Sri Lanka Standard Time",
    "abbr": "SLST",
    "offset": 330,
    "text": "(UTC+05:30) Sri Jayawardenepura",
    "utc": [
      "Asia/Colombo"
    ],
    "id": "tz74"
  },
  {
    "value": "Nepal Standard Time",
    "abbr": "NST",
    "offset": 345,
    "text": "(UTC+05:45) Kathmandu",
    "utc": [
      "Asia/Kathmandu"
    ],
    "id": "tz75"
  },
  {
    "value": "Central Asia Standard Time",
    "abbr": "CAST",
    "offset": 360,
    "text": "(UTC+06:00) Astana",
    "utc": [
      "Antarctica/Vostok",
      "Asia/Almaty",
      "Asia/Bishkek",
      "Asia/Qyzylorda",
      "Asia/Urumqi",
      "Etc/GMT-6",
      "Indian/Chagos"
    ],
    "id": "tz76"
  },
  {
    "value": "Bangladesh Standard Time",
    "abbr": "BST",
    "offset": 360,
    "text": "(UTC+06:00) Dhaka",
    "utc": [
      "Asia/Dhaka",
      "Asia/Thimphu"
    ],
    "id": "tz77"
  },
  {
    "value": "Myanmar Standard Time",
    "abbr": "MST",
    "offset": 390,
    "text": "(UTC+06:30) Yangon (Rangoon)",
    "utc": [
      "Asia/Rangoon",
      "Indian/Cocos"
    ],
    "id": "tz78"
  },
  {
    "value": "SE Asia Standard Time",
    "abbr": "SAST",
    "offset": 420,
    "text": "(UTC+07:00) Bangkok, Hanoi, Jakarta",
    "utc": [
      "Antarctica/Davis",
      "Asia/Bangkok",
      "Asia/Hovd",
      "Asia/Jakarta",
      "Asia/Phnom Penh",
      "Asia/Pontianak",
      "Asia/Saigon",
      "Asia/Vientiane",
      "Etc/GMT-7",
      "Indian/Christmas"
    ],
    "id": "tz79"
  },
  {
    "value": "N. Central Asia Standard Time",
    "abbr": "NCAST",
    "offset": 420,
    "text": "(UTC+07:00) Novosibirsk",
    "utc": [
      "Asia/Novokuznetsk",
      "Asia/Novosibirsk",
      "Asia/Omsk"
    ],
    "id": "tz80"
  },
  {
    "value": "China Standard Time",
    "abbr": "CST",
    "offset": 480,
    "text": "(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi",
    "utc": [
      "Asia/Hong Kong",
      "Asia/Macau",
      "Asia/Shanghai"
    ],
    "id": "tz81"
  },
  {
    "value": "North Asia Standard Time",
    "abbr": "NAST",
    "offset": 480,
    "text": "(UTC+08:00) Krasnoyarsk",
    "utc": [
      "Asia/Krasnoyarsk"
    ],
    "id": "tz82"
  },
  {
    "value": "Singapore Standard Time",
    "abbr": "MPST",
    "offset": 480,
    "text": "(UTC+08:00) Kuala Lumpur, Singapore",
    "utc": [
      "Asia/Brunei",
      "Asia/Kuala Lumpur",
      "Asia/Kuching",
      "Asia/Makassar",
      "Asia/Manila",
      "Asia/Singapore",
      "Etc/GMT-8"
    ],
    "id": "tz83"
  },
  {
    "value": "W. Australia Standard Time",
    "abbr": "WAST",
    "offset": 480,
    "text": "(UTC+08:00) Perth",
    "utc": [
      "Antarctica/Casey",
      "Australia/Perth"
    ],
    "id": "tz84"
  },
  {
    "value": "Taipei Standard Time",
    "abbr": "TST",
    "offset": 480,
    "text": "(UTC+08:00) Taipei",
    "utc": [
      "Asia/Taipei"
    ],
    "id": "tz85"
  },
  {
    "value": "Ulaanbaatar Standard Time",
    "abbr": "UST",
    "offset": 480,
    "text": "(UTC+08:00) Ulaanbaatar",
    "utc": [
      "Asia/Choibalsan",
      "Asia/Ulaanbaatar"
    ],
    "id": "tz86"
  },
  {
    "value": "North Asia East Standard Time",
    "abbr": "NAEST",
    "offset": 480,
    "text": "(UTC+08:00) Irkutsk",
    "utc": [
      "Asia/Irkutsk"
    ],
    "id": "tz87"
  },
  {
    "value": "Japan Standard Time",
    "abbr": "JST",
    "offset": 540,
    "text": "(UTC+09:00) Osaka, Sapporo, Tokyo",
    "utc": [
      "Asia/Dili",
      "Asia/Jayapura",
      "Asia/Tokyo",
      "Etc/GMT-9",
      "Pacific/Palau"
    ],
    "id": "tz88"
  },
  {
    "value": "Korea Standard Time",
    "abbr": "KST",
    "offset": 540,
    "text": "(UTC+09:00) Seoul",
    "utc": [
      "Asia/Pyongyang",
      "Asia/Seoul"
    ],
    "id": "tz89"
  },
  {
    "value": "Cen. Australia Standard Time",
    "abbr": "CAST",
    "offset": 570,
    "text": "(UTC+09:30) Adelaide",
    "utc": [
      "Australia/Adelaide",
      "Australia/Broken Hill"
    ],
    "id": "tz90"
  },
  {
    "value": "AUS Central Standard Time",
    "abbr": "ACST",
    "offset": 570,
    "text": "(UTC+09:30) Darwin",
    "utc": [
      "Australia/Darwin"
    ],
    "id": "tz91"
  },
  {
    "value": "E. Australia Standard Time",
    "abbr": "EAST",
    "offset": 600,
    "text": "(UTC+10:00) Brisbane",
    "utc": [
      "Australia/Brisbane",
      "Australia/Lindeman"
    ],
    "id": "tz92"
  },
  {
    "value": "AUS Eastern Standard Time",
    "abbr": "AEST",
    "offset": 600,
    "text": "(UTC+10:00) Canberra, Melbourne, Sydney",
    "utc": [
      "Australia/Melbourne",
      "Australia/Sydney"
    ],
    "id": "tz93"
  },
  {
    "value": "West Pacific Standard Time",
    "abbr": "WPST",
    "offset": 600,
    "text": "(UTC+10:00) Guam, Port Moresby",
    "utc": [
      "Antarctica/DumontDUrville",
      "Etc/GMT-10",
      "Pacific/Guam",
      "Pacific/Port Moresby",
      "Pacific/Saipan",
      "Pacific/Truk"
    ],
    "id": "tz94"
  },
  {
    "value": "Tasmania Standard Time",
    "abbr": "TST",
    "offset": 600,
    "text": "(UTC+10:00) Hobart",
    "utc": [
      "Australia/Currie",
      "Australia/Hobart"
    ],
    "id": "tz95"
  },
  {
    "value": "Yakutsk Standard Time",
    "abbr": "YST",
    "offset": 540,
    "text": "(UTC+09:00) Yakutsk",
    "utc": [
      "Asia/Chita",
      "Asia/Khandyga",
      "Asia/Yakutsk"
    ],
    "id": "tz96"
  },
  {
    "value": "Central Pacific Standard Time",
    "abbr": "CPST",
    "offset": 660,
    "text": "(UTC+11:00) Solomon Is., New Caledonia",
    "utc": [
      "Antarctica/Macquarie",
      "Etc/GMT-11",
      "Pacific/Efate",
      "Pacific/Guadalcanal",
      "Pacific/Kosrae",
      "Pacific/Noumea",
      "Pacific/Ponape"
    ],
    "id": "tz97"
  },
  {
    "value": "Vladivostok Standard Time",
    "abbr": "VST",
    "offset": 660,
    "text": "(UTC+11:00) Vladivostok",
    "utc": [
      "Asia/Sakhalin",
      "Asia/Ust-Nera",
      "Asia/Vladivostok"
    ],
    "id": "tz98"
  },
  {
    "value": "New Zealand Standard Time",
    "abbr": "NZST",
    "offset": 720,
    "text": "(UTC+12:00) Auckland, Wellington",
    "utc": [
      "Antarctica/McMurdo",
      "Pacific/Auckland"
    ],
    "id": "tz99"
  },
  {
    "value": "UTC+12",
    "abbr": "U",
    "offset": 720,
    "text": "(UTC+12:00) Coordinated Universal Time+12",
    "utc": [
      "Etc/GMT-12",
      "Pacific/Funafuti",
      "Pacific/Kwajalein",
      "Pacific/Majuro",
      "Pacific/Nauru",
      "Pacific/Tarawa",
      "Pacific/Wake",
      "Pacific/Wallis"
    ],
    "id": "tz100"
  },
  {
    "value": "Fiji Standard Time",
    "abbr": "FST",
    "offset": 720,
    "text": "(UTC+12:00) Fiji",
    "utc": [
      "Pacific/Fiji"
    ],
    "id": "tz101"
  },
  {
    "value": "Magadan Standard Time",
    "abbr": "MST",
    "offset": 720,
    "text": "(UTC+12:00) Magadan",
    "utc": [
      "Asia/Anadyr",
      "Asia/Kamchatka",
      "Asia/Magadan",
      "Asia/Srednekolymsk"
    ],
    "id": "tz102"
  },
  {
    "value": "Kamchatka Standard Time",
    "abbr": "KDT",
    "offset": 780,
    "text": "(UTC+12:00) Petropavlovsk-Kamchatsky - Old",
    "utc": [
      "Asia/Kamchatka"
    ],
    "id": "tz103"
  },
  {
    "value": "Tonga Standard Time",
    "abbr": "TST",
    "offset": 780,
    "text": "(UTC+13:00) Nuku'alofa",
    "utc": [
      "Etc/GMT-13",
      "Pacific/Enderbury",
      "Pacific/Fakaofo",
      "Pacific/Tongatapu"
    ],
    "id": "tz104"
  },
  {
    "value": "Samoa Standard Time",
    "abbr": "SST",
    "offset": 780,
    "text": "(UTC+13:00) Samoa",
    "utc": [
      "Pacific/Apia"
    ],
    "id": "tz105"
  }
]


StorInMain( Timezone )

