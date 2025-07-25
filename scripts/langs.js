(function ($) {
	// Look up ISO 639-1 language codes to be used as subtitle labels
	// In some instances "name" has been trunctation for readability
	// Sources:
	// http://stackoverflow.com/questions/3217492/list-of-language-codes-in-yaml-or-json/4900304#4900304
	// https://www.venea.net/web/culture_code

	var isoLangs = {
		"ab":{
				"name":"Abkhaz",
				"nativeName":"аҧсуа"
		},
		"aa":{
				"name":"Afar",
				"nativeName":"Afaraf"
		},
		"af":{
				"name":"Afrikaans",
				"nativeName":"Afrikaans"
		},
		"ak":{
				"name":"Akan",
				"nativeName":"Akan"
		},
		"sq":{
				"name":"Albanian",
				"nativeName":"Shqip"
		},
		"am":{
				"name":"Amharic",
				"nativeName":"አማርኛ"
		},
		"ar":{
				"name":"Arabic",
				"nativeName":"العربية"
		},
		"an":{
				"name":"Aragonese",
				"nativeName":"Aragonés"
		},
		"hy":{
				"name":"Armenian",
				"nativeName":"Հայերեն"
		},
		"as":{
				"name":"Assamese",
				"nativeName":"অসমীয়া"
		},
		"av":{
				"name":"Avaric",
				"nativeName":"авар мацӀ, магӀарул мацӀ"
		},
		"ae":{
				"name":"Avestan",
				"nativeName":"avesta"
		},
		"ay":{
				"name":"Aymara",
				"nativeName":"aymar aru"
		},
		"az":{
				"name":"Azerbaijani",
				"nativeName":"azərbaycan dili"
		},
		"bm":{
				"name":"Bambara",
				"nativeName":"bamanankan"
		},
		"ba":{
				"name":"Bashkir",
				"nativeName":"башҡорт теле"
		},
		"eu":{
				"name":"Basque",
				"nativeName":"euskara, euskera"
		},
		"be":{
				"name":"Belarusian",
				"nativeName":"Беларуская"
		},
		"bn":{
				"name":"Bengali",
				"nativeName":"বাংলা"
		},
		"bh":{
				"name":"Bihari",
				"nativeName":"भोजपुरी"
		},
		"bi":{
				"name":"Bislama",
				"nativeName":"Bislama"
		},
		"bs":{
				"name":"Bosnian",
				"nativeName":"bosanski jezik"
		},
		"br":{
				"name":"Breton",
				"nativeName":"brezhoneg"
		},
		"bg":{
				"name":"Bulgarian",
				"nativeName":"български език"
		},
		"my":{
				"name":"Burmese",
				"nativeName":"ဗမာစာ"
		},
		"ca":{
				"name":"Catalan",
				"nativeName":"Català"
		},
		"ch":{
				"name":"Chamorro",
				"nativeName":"Chamoru"
		},
		"ce":{
				"name":"Chechen",
				"nativeName":"нохчийн мотт"
		},
		"ny":{
				"name":"Chichewa",
				"nativeName":"chiCheŵa, chinyanja"
		},
		"zh":{
				"name":"Chinese",
				"nativeName":"中文 (Zhōngwén), 汉语, 漢語"
		},
		"cv":{
				"name":"Chuvash",
				"nativeName":"чӑваш чӗлхи"
		},
		"kw":{
				"name":"Cornish",
				"nativeName":"Kernewek"
		},
		"co":{
				"name":"Corsican",
				"nativeName":"corsu, lingua corsa"
		},
		"cr":{
				"name":"Cree",
				"nativeName":"ᓀᐦᐃᔭᐍᐏᐣ"
		},
		"hr":{
				"name":"Croatian",
				"nativeName":"hrvatski"
		},
		"cs":{
				"name":"Czech",
				"nativeName":"česky, čeština"
		},
		"da":{
				"name":"Danish",
				"nativeName":"dansk"
		},
		"dv":{
				"name":"Divehi",
				"nativeName":"ދިވެހި"
		},
		"nl":{
				"name":"Dutch",
				"nativeName":"Nederlands, Vlaams"
		},
		"en":{
				"name":"English",
				"nativeName":"English"
		},
		"eo":{
				"name":"Esperanto",
				"nativeName":"Esperanto"
		},
		"et":{
				"name":"Estonian",
				"nativeName":"eesti, eesti keel"
		},
		"ee":{
				"name":"Ewe",
				"nativeName":"Eʋegbe"
		},
		"fo":{
				"name":"Faroese",
				"nativeName":"føroyskt"
		},
		"fj":{
				"name":"Fijian",
				"nativeName":"vosa Vakaviti"
		},
		"fi":{
				"name":"Finnish",
				"nativeName":"suomi, suomen kieli"
		},
		"fr":{
				"name":"French",
				"nativeName":"français, langue française"
		},
		"ff":{
				"name":"Fula",
				"nativeName":"Fulfulde, Pulaar, Pular"
		},
		"gl":{
				"name":"Galician",
				"nativeName":"Galego"
		},
		"ka":{
				"name":"Georgian",
				"nativeName":"ქართული"
		},
		"de":{
				"name":"German",
				"nativeName":"Deutsch"
		},
		"el":{
				"name":"Greek",
				"nativeName":"Ελληνικά"
		},
		"gn":{
				"name":"Guaraní",
				"nativeName":"Avañeẽ"
		},
		"gu":{
				"name":"Gujarati",
				"nativeName":"ગુજરાતી"
		},
		"ht":{
				"name":"Haitian",
				"nativeName":"Kreyòl ayisyen"
		},
		"ha":{
				"name":"Hausa",
				"nativeName":"Hausa, هَوُسَ"
		},
		"he":{
				"name":"Hebrew",
				"nativeName":"עברית"
		},
		"hz":{
				"name":"Herero",
				"nativeName":"Otjiherero"
		},
		"hi":{
				"name":"Hindi",
				"nativeName":"हिन्दी, हिंदी"
		},
		"ho":{
				"name":"Hiri Motu",
				"nativeName":"Hiri Motu"
		},
		"hu":{
				"name":"Hungarian",
				"nativeName":"Magyar"
		},
		"ia":{
				"name":"Interlingua",
				"nativeName":"Interlingua"
		},
		"id":{
				"name":"Indonesian",
				"nativeName":"Bahasa Indonesia"
		},
		"ie":{
				"name":"Interlingue",
				"nativeName":"Originally called Occidental; then Interlingue after WWII"
		},
		"ga":{
				"name":"Irish",
				"nativeName":"Gaeilge"
		},
		"ig":{
				"name":"Igbo",
				"nativeName":"Asụsụ Igbo"
		},
		"ik":{
				"name":"Inupiaq",
				"nativeName":"Iñupiaq, Iñupiatun"
		},
		"io":{
				"name":"Ido",
				"nativeName":"Ido"
		},
		"is":{
				"name":"Icelandic",
				"nativeName":"Íslenska"
		},
		"it":{
				"name":"Italian",
				"nativeName":"Italiano"
		},
		"iu":{
				"name":"Inuktitut",
				"nativeName":"ᐃᓄᒃᑎᑐᑦ"
		},
		"ja":{
				"name":"Japanese",
				"nativeName":"日本語 (にほんご／にっぽんご)"
		},
		"jv":{
				"name":"Javanese",
				"nativeName":"basa Jawa"
		},
		"kl":{
				"name":"Kalaallisut",
				"nativeName":"kalaallisut, kalaallit oqaasii"
		},
		"kn":{
				"name":"Kannada",
				"nativeName":"ಕನ್ನಡ"
		},
		"kr":{
				"name":"Kanuri",
				"nativeName":"Kanuri"
		},
		"ks":{
				"name":"Kashmiri",
				"nativeName":"कश्मीरी, كشميري‎"
		},
		"kk":{
				"name":"Kazakh",
				"nativeName":"Қазақ тілі"
		},
		"km":{
				"name":"Khmer",
				"nativeName":"ភាសាខ្មែរ"
		},
		"ki":{
				"name":"Kikuyu",
				"nativeName":"Gĩkũyũ"
		},
		"rw":{
				"name":"Kinyarwanda",
				"nativeName":"Ikinyarwanda"
		},
		"ky":{
				"name":"Kyrgyz",
				"nativeName":"кыргыз тили"
		},
		"kv":{
				"name":"Komi",
				"nativeName":"коми кыв"
		},
		"kg":{
				"name":"Kongo",
				"nativeName":"KiKongo"
		},
		"ko":{
				"name":"Korean",
				"nativeName":"한국어 (韓國語), 조선말 (朝鮮語)"
		},
		"ku":{
				"name":"Kurdish",
				"nativeName":"Kurdî, كوردی‎"
		},
		"kj":{
				"name":"Kuanyama",
				"nativeName":"Kuanyama"
		},
		"la":{
				"name":"Latin",
				"nativeName":"latine, lingua latina"
		},
		"lb":{
				"name":"Luxembourgish",
				"nativeName":"Lëtzebuergesch"
		},
		"lg":{
				"name":"Luganda",
				"nativeName":"Luganda"
		},
		"li":{
				"name":"Limburgish",
				"nativeName":"Limburgs"
		},
		"ln":{
				"name":"Lingala",
				"nativeName":"Lingála"
		},
		"lo":{
				"name":"Lao",
				"nativeName":"ພາສາລາວ"
		},
		"lt":{
				"name":"Lithuanian",
				"nativeName":"lietuvių kalba"
		},
		"lu":{
				"name":"Luba-Katanga",
				"nativeName":""
		},
		"lv":{
				"name":"Latvian",
				"nativeName":"latviešu valoda"
		},
		"gv":{
				"name":"Manx",
				"nativeName":"Gaelg, Gailck"
		},
		"mk":{
				"name":"Macedonian",
				"nativeName":"македонски јазик"
		},
		"mg":{
				"name":"Malagasy",
				"nativeName":"Malagasy fiteny"
		},
		"ms":{
				"name":"Malay",
				"nativeName":"bahasa Melayu, بهاس ملايو‎"
		},
		"ml":{
				"name":"Malayalam",
				"nativeName":"മലയാളം"
		},
		"mt":{
				"name":"Maltese",
				"nativeName":"Malti"
		},
		"mi":{
				"name":"Māori",
				"nativeName":"te reo Māori"
		},
		"mr":{
				"name":"Marathi",
				"nativeName":"मराठी"
		},
		"mh":{
				"name":"Marshallese",
				"nativeName":"Kajin M̧ajeļ"
		},
		"mn":{
				"name":"Mongolian",
				"nativeName":"монгол"
		},
		"na":{
				"name":"Nauru",
				"nativeName":"Ekakairũ Naoero"
		},
		"nv":{
				"name":"Navajo",
				"nativeName":"Diné bizaad, Dinékʼehǰí"
		},
		"nb":{
				"name":"Norwegian Bokmål",
				"nativeName":"Norsk bokmål"
		},
		"nd":{
				"name":"North Ndebele",
				"nativeName":"isiNdebele"
		},
		"ne":{
				"name":"Nepali",
				"nativeName":"नेपाली"
		},
		"ng":{
				"name":"Ndonga",
				"nativeName":"Owambo"
		},
		"nn":{
				"name":"Norwegian Nynorsk",
				"nativeName":"Norsk nynorsk"
		},
		"no":{
				"name":"Norwegian",
				"nativeName":"Norsk"
		},
		"ii":{
				"name":"Nuosu",
				"nativeName":"ꆈꌠ꒿ Nuosuhxop"
		},
		"nr":{
				"name":"South Ndebele",
				"nativeName":"isiNdebele"
		},
		"oc":{
				"name":"Occitan",
				"nativeName":"Occitan"
		},
		"oj":{
				"name":"Ojibwe",
				"nativeName":"ᐊᓂᔑᓈᐯᒧᐎᓐ"
		},
		"cu":{
				"name":"Church Slavonic",
				"nativeName":"ѩзыкъ словѣньскъ"
		},
		"om":{
				"name":"Oromo",
				"nativeName":"Afaan Oromoo"
		},
		"or":{
				"name":"Oriya",
				"nativeName":"ଓଡ଼ିଆ"
		},
		"os":{
				"name":"Ossetian",
				"nativeName":"ирон æвзаг"
		},
		"pa":{
				"name":"Punjabi",
				"nativeName":"ਪੰਜਾਬੀ, پنجابی‎"
		},
		"pi":{
				"name":"Pāli",
				"nativeName":"पाऴि"
		},
		"fa":{
				"name":"Persian",
				"nativeName":"فارسی"
		},
		"pl":{
				"name":"Polish",
				"nativeName":"polski"
		},
		"ps":{
				"name":"Pashto",
				"nativeName":"پښتو"
		},
		"pt":{
				"name":"Portuguese",
				"nativeName":"Português"
		},
		"qu":{
				"name":"Quechua",
				"nativeName":"Runa Simi, Kichwa"
		},
		"rm":{
				"name":"Romansh",
				"nativeName":"rumantsch grischun"
		},
		"rn":{
				"name":"Kirundi",
				"nativeName":"kiRundi"
		},
		"ro":{
				"name":"Romanian",
				"nativeName":"română"
		},
		"ru":{
				"name":"Russian",
				"nativeName":"русский язык"
		},
		"sa":{
				"name":"Sanskrit",
				"nativeName":"संस्कृतम्"
		},
		"sc":{
				"name":"Sardinian",
				"nativeName":"sardu"
		},
		"sd":{
				"name":"Sindhi",
				"nativeName":"सिन्धी, سنڌي، سندھی‎"
		},
		"se":{
				"name":"Northern Sami",
				"nativeName":"Davvisámegiella"
		},
		"sm":{
				"name":"Samoan",
				"nativeName":"gagana faa Samoa"
		},
		"sg":{
				"name":"Sango",
				"nativeName":"yângâ tî sängö"
		},
		"sr":{
				"name":"Serbian",
				"nativeName":"српски језик"
		},
		"gd":{
				"name":"Gaelic",
				"nativeName":"Gàidhlig"
		},
		"sn":{
				"name":"Shona",
				"nativeName":"chiShona"
		},
		"si":{
				"name":"Sinhalese",
				"nativeName":"සිංහල"
		},
		"sk":{
				"name":"Slovak",
				"nativeName":"slovenčina"
		},
		"sl":{
				"name":"Slovene",
				"nativeName":"slovenščina"
		},
		"so":{
				"name":"Somali",
				"nativeName":"Soomaaliga, af Soomaali"
		},
		"st":{
				"name":"Southern Sotho",
				"nativeName":"Sesotho"
		},
		"es":{
				"name":"Spanish",
				"nativeName":"español, castellano"
		},
		"su":{
				"name":"Sundanese",
				"nativeName":"Basa Sunda"
		},
		"sw":{
				"name":"Swahili",
				"nativeName":"Kiswahili"
		},
		"ss":{
				"name":"Swati",
				"nativeName":"SiSwati"
		},
		"sv":{
				"name":"Swedish",
				"nativeName":"svenska"
		},
		"ta":{
				"name":"Tamil",
				"nativeName":"தமிழ்"
		},
		"te":{
				"name":"Telugu",
				"nativeName":"తెలుగు"
		},
		"tg":{
				"name":"Tajik",
				"nativeName":"тоҷикӣ, toğikī, تاجیکی‎"
		},
		"th":{
				"name":"Thai",
				"nativeName":"ไทย"
		},
		"ti":{
				"name":"Tigrinya",
				"nativeName":"ትግርኛ"
		},
		"bo":{
				"name":"Tibetan",
				"nativeName":"བོད་ཡིག"
		},
		"tk":{
				"name":"Turkmen",
				"nativeName":"Türkmen, Түркмен"
		},
		"tl":{
				"name":"Tagalog",
				"nativeName":"Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔"
		},
		"tn":{
				"name":"Tswana",
				"nativeName":"Setswana"
		},
		"to":{
				"name":"Tonga",
				"nativeName":"faka Tonga"
		},
		"tr":{
				"name":"Turkish",
				"nativeName":"Türkçe"
		},
		"ts":{
				"name":"Tsonga",
				"nativeName":"Xitsonga"
		},
		"tt":{
				"name":"Tatar",
				"nativeName":"татарча, tatarça, تاتارچا‎"
		},
		"tw":{
				"name":"Twi",
				"nativeName":"Twi"
		},
		"ty":{
				"name":"Tahitian",
				"nativeName":"Reo Tahiti"
		},
		"ug":{
				"name":"Uyghur",
				"nativeName":"Uyƣurqə, ئۇيغۇرچە‎"
		},
		"uk":{
				"name":"Ukrainian",
				"nativeName":"українська"
		},
		"ur":{
				"name":"Urdu",
				"nativeName":"اردو"
		},
		"uz":{
				"name":"Uzbek",
				"nativeName":"zbek, Ўзбек, أۇزبېك‎"
		},
		"ve":{
				"name":"Venda",
				"nativeName":"Tshivenḓa"
		},
		"vi":{
				"name":"Vietnamese",
				"nativeName":"Tiếng Việt"
		},
		"vo":{
				"name":"Volapük",
				"nativeName":"Volapük"
		},
		"wa":{
				"name":"Walloon",
				"nativeName":"Walon"
		},
		"cy":{
				"name":"Welsh",
				"nativeName":"Cymraeg"
		},
		"wo":{
				"name":"Wolof",
				"nativeName":"Wollof"
		},
		"fy":{
				"name":"Western Frisian",
				"nativeName":"Frysk"
		},
		"xh":{
				"name":"Xhosa",
				"nativeName":"isiXhosa"
		},
		"yi":{
				"name":"Yiddish",
				"nativeName":"ייִדיש"
		},
		"yo":{
				"name":"Yoruba",
				"nativeName":"Yorùbá"
		},
		"za":{
				"name":"Zhuang",
				"nativeName":"Saɯ cueŋƅ, Saw cuengh"
		},
		"ar-dz":{
				"name":"Arabic (Algeria)",
				"nativeName":"العربية (الجزائر)"
		},
		"ar-bh":{
				"name":"Arabic (Bahrain)",
				"nativeName":"العربية (البحرين)"
		},
		"ar-eg":{
				"name":"Arabic (Egypt)",
				"nativeName":"العربية (مصر)"
		},
		"ar-iq":{
				"name":"Arabic (Iraq)",
				"nativeName":"العربية (العراق)"
		},
		"ar-jo":{
				"name":"Arabic (Jordan)",
				"nativeName":"العربية (الأردن)"
		},
		"ar-kw":{
				"name":"Arabic (Kuwait)",
				"nativeName":"العربية (الكويت)"
		},
		"ar-lb":{
				"name":"Arabic (Lebanon)",
				"nativeName":"العربية (لبنان)"
		},
		"ar-ly":{
				"name":"Arabic (Libya)",
				"nativeName":"العربية (ليبيا)"
		},
		"ar-ma":{
				"name":"Arabic (Morocco)",
				"nativeName":"العربية (المملكة المغربية)"
		},
		"ar-om":{
				"name":"Arabic (Oman)",
				"nativeName":"العربية (عمان)"
		},
		"ar-qa":{
				"name":"Arabic (Qatar)",
				"nativeName":"العربية (قطر)"
		},
		"ar-sa":{
				"name":"Arabic (Saudi Arabia)",
				"nativeName":"العربية (المملكة العربية السعودية)"
		},
		"ar-sy":{
				"name":"Arabic (Syria)",
				"nativeName":"العربية (سوريا)"
		},
		"ar-tn":{
				"name":"Arabic (Tunisia)",
				"nativeName":"العربية (تونس)"
		},
		"ar-ae":{
				"name":"Arabic (U.A.E.)",
				"nativeName":"العربية (الإمارات العربية المتحدة)"
		},
		"ar-ye":{
				"name":"Arabic (Yemen)",
				"nativeName":"العربية (اليمن)"
		},
		"de-at":{
				"name":"German (Austria)",
				"nativeName":"Deutsch (Österreich)"
		},
		"de-li":{
				"name":"German (Liechtenstein)",
				"nativeName":"Deutsch (Liechtenstein)"
		},
		"de-lu":{
				"name":"German (Luxembourg)",
				"nativeName":"Deutsch (Luxemburg)"
		},
		"de-ch":{
				"name":"German (Switzerland)",
				"nativeName":"Deutsch (Schweiz)"
		},
		"en-au":{
				"name":"English (Australia)",
				"nativeName":"English (Australia)"
		},
		"en-bz":{
				"name":"English (Belize)",
				"nativeName":"English (Belize)"
		},
		"en-ca":{
				"name":"English (Canada)",
				"nativeName":"English (Canada)"
		},
		"en-ie":{
				"name":"English (Ireland)",
				"nativeName":"English (Ireland)"
		},
		"en-jm":{
				"name":"English (Jamaica)",
				"nativeName":"English (Jamaica)"
		},
		"en-nz":{
				"name":"English (New Zealand)",
				"nativeName":""
		},
		"en-za":{
				"name":"English (South Africa)",
				"nativeName":"English (South Africa)"
		},
		"en-tt":{
				"name":"English (Trinidad)",
				"nativeName":"English (Trinidad y Tobago)"
		},
		"en-gb":{
				"name":"English (United Kingdom)",
				"nativeName":"English (United Kingdom)"
		},
		"en-us":{
				"name":"English (United States)",
				"nativeName":"English (United States)"
		},
		"es-ar":{
				"name":"Spanish (Argentina)",
				"nativeName":"Español (Argentina)"
		},
		"es-bo":{
				"name":"Spanish (Bolivia)",
				"nativeName":"Español (Bolivia)"
		},
		"es-cl":{
				"name":"Spanish (Chile)",
				"nativeName":"Español (Chile)"
		},
		"es-co":{
				"name":"Spanish (Colombia)",
				"nativeName":"Español (Colombia)"
		},
		"es-cr":{
				"name":"Spanish (Costa Rica)",
				"nativeName":"Español (Costa Rica)"
		},
		"es-do":{
				"name":"Spanish (Dominican Republic)",
				"nativeName":"Español (República Dominicana)"
		},
		"es-ec":{
				"name":"Spanish (Ecuador)",
				"nativeName":"Español (Ecuador)"
		},
		"es-sv":{
				"name":"Spanish (El Salvador)",
				"nativeName":"Español (El Salvador)"
		},
		"es-gt":{
				"name":"Spanish (Guatemala)",
				"nativeName":"Español (Guatemala)"
		},
		"es-hn":{
				"name":"Spanish (Honduras)",
				"nativeName":"Español (Honduras)"
		},
		"es-mx":{
				"name":"Spanish (Mexico)",
				"nativeName":"Español (México)"
		},
		"es-ni":{
				"name":"Spanish (Nicaragua)",
				"nativeName":"Español (Nicaragua)"
		},
		"es-pa":{
				"name":"Spanish (Panama)",
				"nativeName":"Español (Panamá)"
		},
		"es-py":{
				"name":"Spanish (Paraguay)",
				"nativeName":"Español (Paraguay)"
		},
		"es-pe":{
				"name":"Spanish (Peru)",
				"nativeName":"Español (Perú)"
		},
		"es-pr":{
				"name":"Spanish (Puerto Rico)",
				"nativeName":"Español (Puerto Rico)"
		},
		"es-uy":{
				"name":"Spanish (Uruguay)",
				"nativeName":"Español (Uruguay)"
		},
		"es-ve":{
				"name":"Spanish (Venezuela)",
				"nativeName":"Español (Venezuela)"
		},
		"fr-be":{
				"name":"French (Belgium)",
				"nativeName":"français (Belgique)"
		},
		"fr-ca":{
				"name":"French (Canada)",
				"nativeName":"français (Canada)"
		},
		"fr-lu":{
				"name":"French (Luxembourg)",
				"nativeName":"français (Luxembourg)"
		},
		"fr-ch":{
				"name":"French (Switzerland)",
				"nativeName":"français (Suisse)"
		},
		"it-ch":{
				"name":"Italian (Switzerland)",
				"nativeName":"italiano (Svizzera)"
		},
		"nl-be":{
				"name":"Dutch (Belgium)",
				"nativeName":"Nederlands (België)"
		},
		"pt-br":{
				"name":"Portuguese (Brazil)",
				"nativeName":"Português (Brasil)"
		},
		"sv-fi":{
				"name":"Swedish (Finland)",
				"nativeName":"svenska (Finland)"
		},
		"zh-hk":{
				"name":"Chinese (Hong Kong)",
				"nativeName":"中文(香港特别行政區)"
		},
		"zh-cn":{
				"name":"Chinese (PRC)",
				"nativeName":"中文(中华人民共和国)"
		},
		"zh-sg":{
				"name":"Chinese (Singapore)",
				"nativeName":"中文(新加坡)"
		},
		"zh-tw":{
				"name":"Chinese Traditional (Taiwan)",
				"nativeName":"中文（台灣）"
		}
	}

	AblePlayer.prototype.getLanguageName = function (key,whichName) {

		// return language name associated with lang code "key"
		// whichName is either "English" or "local" (i.e., native name)

		var lang, code, subTag;
		lang = isoLangs[key.toLowerCase()];
		if (lang) {
			if (whichName === 'local') {
				return lang.nativeName;
			}
			else {
				return lang.name;
			}
		}
		else if (key.includes('-')) {
			code = key.substring(0,2);
			subTag = key.substring(3);
			lang = isoLangs[code.toLowerCase()];
			if (lang) {
				if (whichName === 'local') {
					return lang.nativeName + ' (' + subTag + ')';
				}
				else {
					return lang.name + ' (' + subTag + ')';
				}
			}
		}
		// if all else has failed, use the key as the label
		return key;
	};

})(jQuery);