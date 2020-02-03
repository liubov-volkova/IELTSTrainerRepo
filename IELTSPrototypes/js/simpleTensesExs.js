//Regular expressin, empty lines: ^(\s)*$\n
const WHO = {
    "do": ["I", "We", "You", "They"],
    "does": ["He", "She", "It"]
}
const SIMPLE_TENSES = [
    { "present": "present simple" },
    { "present_not": "negative present simple" },
    { "present_question": "present simple (question)" },
    { "past": "past simple" },
    { "past_not": "negative past simple" },
    { "past_question": "past simple (question)" },
    { "future": "future simple" },
    { "future_not": "negative future simple" },
    { "future_question": "future simple (question)" },
]
const topics = [
    {
        id: 0,
        name: "50 most common irregular verbs",
        locals:{
            "en-EN": "50 most common irregular verbs",
            "ru-RU":"50 неправильных глаголов",
        }
    },
];
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;
let speechSettings = {
    dialect: {
        val: "en-GB",
        dispName: "United Kingdom"
    },
    lang: {
        id: 10,
        dispName: "English"
    },
    voice: {
        name: "",
        lang: ""
    },
    rate: 1,
    pitch: 1
}
let generalSettings ={
    shuffleTenses:false,
    shuffleVerbs:true,
    showEngVerb:true,
    showTranslation:false,
    browserlang:"en-EN"
};
let voices = [];
var synth;
var voiceList;
const TOPIC_BLOCK_ID = "topic_links";
const TOPIC_INPUT_ID = "topicName";
const VERB_LIST_TBL_ID = "verb_tbl";
const VERB_VOCABULARY = {
    "Irregular verbs":[
        {   id: 0,
            translations:{
                "ru-RU": ["говорить"],
            },
            definitions: 
            [
               {
                "verb (used with object)": [
                        {
                            definition: "to utter or pronounce; speak",
                            example:'What did you say? I said "Hello!"'
                        },
                        {
                            definition: "to express in words; state; declare; word",
                            example:'I say her plan is the better one'
                        },
                        {
                            definition: "to state as an opinion or judgment",
                            example:'I say her plan is the better one'
                        } 
                    ]
               },
                { "verb (used without object)": [
                        {
                            definition: "to speak; declare; express an opinion. Say focuses on the words someone said",
                            example:""
                        }
                    ]
                }
            ],
            urlMoreInfo:"https://www.dictionary.com/browse/say",
            isIrregular: true,
            topicIds:[0],
            infinitive: "to say",
            v1: ["say", "says"],
            v2: ["said"],
            v3: ["said"]
        },
        {
            id: 1,
            translations:{
                "ru-RU": ["делать"],
            },
            definitions: 
            [
               {
                "verb (used with object)": [
                        {
                            definition: "to bring into existence by shaping or changing material, combining parts, etc.",
                            example:'to make a dress; to make a channel; to make a work of art"'
                        },
                        {
                            definition: "to produce; cause to exist or happen; bring about",
                            example:'to make trouble; to make war'
                        },
                        {
                            definition: "to produce, earn, or win for oneself",
                            example:"to make a good salary; to make one's fortune in oil"
                        } 
                    ]
               },
                { "verb (used without object)": [
                        {
                            definition: "to cause oneself, or something understood, to be as specified",
                            example:"to make sure"
                        },
                        {
                            definition: "to show oneself to be or seem in action or behavior",
                            example:"to make merry"
                        }
                    ]
                }
            ],
            urlMoreInfo:"https://www.dictionary.com/browse/make",
            isIrregular: true,
            topicIds:[0],
            infinitive: "to make",
            v1: ["make", "makes"],
            v2: ["made"],
            v3: ["made"]
        },
        {
            id: 2,
            translations:{
                "ru-RU": ["идти"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to go",
            v1: ["go", "goes"],
            v2: ["went"],
            v3: ["gone"]
        },
        {
            id: 4,
            translations:{
                "ru-RU": ["брать, принимать"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to take",
            v1: ["take", "takes"],
            v2: ["took"],
            v3: ["taken"]
        },
        {
            id: 5,
            translations:{
                "ru-RU": ["приходить, приезжать"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to come",
            v1: ["come", "comes"],
            v2: ["came"],
            v3: ["come"]
        },
        {
            id: 6,
            translations:{
                "ru-RU": ["видеть, смотреть"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to see",
            v1: ["see", "sees"],
            v2: ["saw"],
            v3: ["seen"]
        },
        {
            id: 7,
            translations:{
                "ru-RU": ["знать"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to know",
            v1: ["know", "knows"],
            v2: ["knew"],
            v3: ["known"]
        },
        {
            id: 8,
            translations:{
                "ru-RU": ["получать, становиться"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to get",
            v1: ["get", "gets"],
            v2: ["got"],
            v3: ["got"]
        },
        {
            id: 9,
            translations:{
                "ru-RU": ["давать, отдавать"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to give",
            v1: ["give", "gives"],
            v2: ["gave"],
            v3: ["given"]
        },
        {
            id: 10,
            translations:{
                "ru-RU": ["нахрдить, открывать"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to find",
            v1: ["find", "finds"],
            v2: ["found"],
            v3: ["found"]
        },
        {
            id: 11,
            translations:{
                "ru-RU": ["думать, мыслить"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to think",
            v1: ["think", "thinks"],
            v2: ["thought"],
            v3: ["thought"]
        },
        {
            id: 12,
            translations:{
                "ru-RU": ["сказать, рассказать, говорить"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to tell",
            v1: ["tell", "tells"],
            v2: ["told"],
            v3: ["told"]
        },
        {
            id: 13,
            translations:{
                "ru-RU": ["становиться, делаться"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to become",
            v1: ["become", "becomes"],
            v2: ["became"],
            v3: ["become"]
        },
        {
            id: 14,
            translations:{
                "ru-RU": ["показывать, демонстрировать"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to show",
            v1: ["show", "shows"],
            v2: ["showed"],
            v3: ["shown"]
        },
        {
            id: 15,
            translations:{
                "ru-RU": ["покидать, уезжать, уходить"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to leave",
            v1: ["leave", "leaves"],
            v2: ["left"],
            v3: ["left"]
        },
        {
            id: 16,
            translations:{
                "ru-RU": ["чувствовать, ощущать"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to feel",
            v1: ["feel", "feels"],
            v2: ["felt"],
            v3: ["felt"]
        },
        {
            id: 17,
            translations:{
                "ru-RU": ["класть, помещать, ставить"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to put",
            v1: ["put", "puts"],
            v2: ["put"],
            v3: ["put"]
        },
        {
            id: 18,
            translations:{
                "ru-RU": ["приносить, приводить, доставлять"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to bring",
            v1: ["bring", "brings"],
            v2: ["brought"],
            v3: ["brought"]
        },
        {
            id: 19,
            translations:{
                "ru-RU": ["начинать"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to begin",
            v1: ["begin", "begins"],
            v2: ["began"],
            v3: ["begun"]
        },
        {
            id: 20,
            translations:{
                "ru-RU": ["брать, принимать"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to keep",
            v1: ["keep", "keeps"],
            v2: ["kept"],
            v3: ["kept"]
        },
        {
            id: 21,
            translations:{
                "ru-RU": ["держать, удерживать, занимать"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to hold",
            v1: ["hold", "holds"],
            v2: ["held"],
            v3: ["held"]
        },
        {
            id: 22,
            translations:{
                "ru-RU": ["писать, записывать, вводить информацию"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to write",
            v1: ["write", "writes"],
            v2: ["wrote"],
            v3: ["written"]
        },
        {
            id: 23,
            translations:{
                "ru-RU": ["стоять, постоять, терпеть"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to stand",
            v1: ["stand", "stands"],
            v2: ["stood"],
            v3: ["stood"]
        },
        {
            id: 24,
            translations:{
                "ru-RU": ["слышать, услышать, выслушивать"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to hear",
            v1: ["hear", "hears"],
            v2: ["heard"],
            v3: ["heard"]
        },
        {
            id: 25,
            translations:{
                "ru-RU": ["позволять, разрешать"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to let",
            v1: ["let", "lets"],
            v2: ["let"],
            v3: ["let"]
        },
        {
            id: 26,
            translations:{
                "ru-RU": ["занчить, означать, подразумевать"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to mean",
            v1: ["mean", "means"],
            v2: ["meant"],
            v3: ["meant"]
        },
        {
            id: 27,
            translations:{
                "ru-RU": ["устанавливать, ставить, задавать"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to set",
            v1: ["set", "sets"],
            v2: ["set"],
            v3: ["set"]
        },
        {
            id: 28,
            translations:{
                "ru-RU": ["встречаться"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to meet",
            v1: ["meet", "meets"],
            v2: ["met"],
            v3: ["met"]
        },
        {
            id: 29,
            translations:{
                "ru-RU": ["бежать"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to run",
            v1: ["run", "runs"],
            v2: ["ran"],
            v3: ["run"]
        },
        {
            id: 30,
            translations:{
                "ru-RU": ["платить, заплатить, оплачивать"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to pay",
            v1: ["pay", "pays"],
            v2: ["paid"],
            v3: ["paid"]
        },
        {
            id: 31,
            translations:{
                "ru-RU": ["сидеть"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to sit",
            v1: ["sit", "sits"],
            v2: ["sat"],
            v3: ["sat"]
        },
        {
            id: 32,
            translations:{
                "ru-RU": ["говорить, выступать, разговаривать"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to speak",
            v1: ["speak", "speaks"],
            v2: ["spoke"],
            v3: ["spoken"]
        },
        {
            id: 33,
            translations:{
                "ru-RU": ["врать, лгать"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to lie",
            v1: ["lie", "lies"],
            v2: ["lay"],
            v3: ["lain"]
        },
        {
            id: 34,
            translations:{
                "ru-RU": ["вести, руководить, возглавлять"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to lead",
            v1: ["lead", "leads"],
            v2: ["led"],
            v3: ["led"]
        },
        {
            id: 35,
            translations:{
                "ru-RU": ["читать, толковать, прочесть"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to read",
            v1: ["read", "reads"],
            v2: ["read"],
            v3: ["read"]
        },
        {
            id: 36,
            translations:{
                "ru-RU": ["расти, выращивать, увеличиваться"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to grow",
            v1: ["grow", "grows"],
            v2: ["grew"],
            v3: ["grown"]
        },
        {
            id: 37,
            translations:{
                "ru-RU": ["терять, проигрывать, упускать, заблудиться"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to lose",
            v1: ["lose", "loses"],
            v2: ["lost"],
            v3: ["lost"]
        },
        {
            id: 38,
            translations:{
                "ru-RU": ["падать"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to fall",
            v1: ["fall", "falls"],
            v2: ["fell"],
            v3: ["fallen"]
        },
        {
            id: 39,
            translations:{
                "ru-RU": ["отправлять, посылать, передавать, присылать"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to send",
            v1: ["send", "sends"],
            v2: ["sent"],
            v3: ["sent"]
        },
        {
            id: 40,
            translations:{
                "ru-RU": ["строить, создавать, сооружать, полагаться"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to build",
            v1: ["build", "builds"],
            v2: ["built"],
            v3: ["built"]
        },
        {
            id: 41,
            translations:{
                "ru-RU": ["понять, понимать, уяснить, сообразить"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to understand",
            v1: ["understand", "understands"],
            v2: ["understood"],
            v3: ["understood"]
        },
        {
            id: 42,
            translations:{
                "ru-RU": ["рисовать"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to draw",
            v1: ["draw", "draws"],
            v2: ["drew"],
            v3: ["drawn"]
        },
        {
            id: 43,
            translations:{
                "ru-RU": ["сломать, ломать, разбивать, рвать"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to break",
            v1: ["break", "breaks"],
            v2: ["broke"],
            v3: ["broken"]
        },
        {
            id: 44,
            translations:{
                "ru-RU": ["потратить, тратить, расходовать, проводить"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to spend",
            v1: ["spend", "spends"],
            v2: ["spent"],
            v3: ["spent"]
        },
        {
            id: 45,
            translations:{
                "ru-RU": ["отрезать"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to cut",
            v1: ["cut", "cuts"],
            v2: ["cut"],
            v3: ["cut"]
        },
        {
            id: 46,
            translations:{
                "ru-RU": ["подниматься, расти, возрастать, вставать, восходить"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to rise",
            v1: ["rise", "rises"],
            v2: ["rose"],
            v3: ["risen"]
        },
        {
            id: 47,
            translations:{
                "ru-RU": ["водить"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to drive",
            v1: ["drive", "drives"],
            v2: ["drove"],
            v3: ["driven"]
        },
        {
            id: 48,
            translations:{
                "ru-RU": ["носить, одевать"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to wear",
            v1: ["wear", "wears"],
            v2: ["wore"],
            v3: ["worn"]
        },
        {
            id: 49,
            translations:{
                "ru-RU": ["держать, удерживать, занимать"],
            },
            isIrregular: true,
            topicIds:[0],
            infinitive: "to choose",
            v1: ["choose", "chooses"],
            v2: ["chose"],
            v3: ["chosen"]
        }
    ],
}
let verbsToTraingList = VERB_VOCABULARY["Irregular verbs"];
class SpeechUtils {
    constructor() { }
    static speak(text = '') {
        if (synth.speaking) {
            console.error('speechSynthesis.speaking');
            return;
        }
        if (text !== '') {
            var utterThis = new SpeechSynthesisUtterance(text);
            utterThis.onend = function (event) {
                console.log('SpeechSynthesisUtterance.onend');
            }
            utterThis.onerror = function (event) {
                console.error('SpeechSynthesisUtterance.onerror');
            }
            var selectedOption = speechSettings.voice.name;
            for (let i = 0; i < voices.length; i++){
                if (voices[i].name === selectedOption){
                    utterThis.voice = voices[i];
                }
            }
            utterThis.pitch = speechSettings.pitch;
            utterThis.rate = speechSettings.rate;
            synth.speak(utterThis);
        }
    }
    static sayAnswer(e) {
        let answer = e.getAttribute("data-full-answer");
        let inputV1Elt = $(e)
        var grammar = '#JSGF V1.0; grammar phrase; public <phrase> = ' + answer + ';';
        var recognition = new SpeechRecognition();
        var speechRecognitionList = new SpeechGrammarList();
        speechRecognitionList.addFromString(grammar, 1);
        recognition.grammars = speechRecognitionList;
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
        recognition.start();
        recognition.onresult = function (event) {
            // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
            // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
            // It has a getter so it can be accessed like an array
            // The first [0] returns the SpeechRecognitionResult at position 0.
            // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
            // These also have getters so they can be accessed like arrays.
            // The second [0] returns the SpeechRecognitionAlternative at position 0.
            // We then return the transcript property of the SpeechRecognitionAlternative object 
            var speechResult = event.results[0][0].transcript.toLowerCase();
            console.log(`Your input is: ${speechResult}.`);
            let words = speechResult.split(' ');
            let v1Elt = $(e).parent().find("input[data-answer-v1]")[0];
            let v2Elt = $(e).parent().find("input[data-answer-v2]")[0];
            let v3Elt = $(e).parent().find("input[data-answer-v3]")[0];
            if (words.length == 1){
                v1Elt.value = words[0];
            } else if (words.length == 2){
                v1Elt.value = words[0];
                v2Elt.value = words[1];
            } else if (words.length == 3){
                v1Elt.value = words[0];
                v2Elt.value = words[1];
                v3Elt.value = words[2];
            } else{
                v1Elt.value = words.join(' ');
            }
            if (speechResult === answer) {
                console.log("correct");
            } else {
                console.log("incorrect")
            }
            console.log('Confidence: ' + event.results[0][0].confidence);
        }
        recognition.onspeechend = function () {
            recognition.stop();
            $(e).disabled = false;
        }
        recognition.onerror = function (event) {
            $(e).disabled = false;
            console.log('Error occurred in recognition: ' + event.error);
        }
        recognition.onaudioend = function (event) {
            //Fired when the user agent has finished capturing audio.
            console.log('SpeechRecognition.onaudioend');
        }
        recognition.onend = function (event) {
            //Fired when the speech recognition service has disconnected.
            console.log('SpeechRecognition.onend');
        }
        recognition.onnomatch = function (event) {
            //Fired when the speech recognition service returns a final result with no significant recognition. This may involve some degree of recognition, which doesn't meet or exceed the confidence threshold.
            console.log('SpeechRecognition.onnomatch');
        }
        recognition.onsoundstart = function (event) {
            //Fired when any sound — recognisable speech or not — has been detected.
            console.log('SpeechRecognition.onsoundstart');
        }
        recognition.onsoundend = function (event) {
            //Fired when any sound — recognisable speech or not — has stopped being detected.
            console.log('SpeechRecognition.onsoundend');
        }
        recognition.onspeechstart = function (event) {
            //Fired when sound that is recognised by the speech recognition service as speech has been detected.
            console.log('SpeechRecognition.onspeechstart');
        }
        recognition.onstart = function (event) {
            //Fired when the speech recognition service has begun listening to incoming audio with intent to recognize grammars associated with the current SpeechRecognition.
            console.log('SpeechRecognition.onstart');
            $(e).disabled = true;
        }
    }
    static sayYourAnswerEx2(e){
        let inputV1Elt = $(e);
        let answer = e.getAttribute("data-full-answer");
          let answerInputElt = $(e).parent().find("input[data-answer]")[0];
        var grammar = '#JSGF V1.0; grammar phrase; public <phrase> = ' + answer + ';';
        var recognition = new SpeechRecognition();
        var speechRecognitionList = new SpeechGrammarList();
        var whatDidYoySay = "";
        speechRecognitionList.addFromString(grammar, 1);
        recognition.grammars = speechRecognitionList;
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
        recognition.start();
        recognition.onresult = function (event) {
            // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
            // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
            // It has a getter so it can be accessed like an array
            // The first [0] returns the SpeechRecognitionResult at position 0.
            // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
            // These also have getters so they can be accessed like arrays.
            // The second [0] returns the SpeechRecognitionAlternative at position 0.
            // We then return the transcript property of the SpeechRecognitionAlternative object 
            var speechResult = event.results[0][0].transcript;
            whatDidYoySay = speechResult;
            console.log(`Your input is: ${speechResult}.`);
            answerInputElt.value = speechResult;
            console.log('Confidence: ' + event.results[0][0].confidence);
        }
        recognition.onspeechend = function () {
            recognition.stop();
            $(e).disabled = false;
            if (whatDidYoySay == ""){
                console.log("I am not able to understand you");
            }
        }
        recognition.onerror = function (event) {
            $(e).disabled = false;
            console.log('Error occurred in recognition: ' + event.error);
            if (whatDidYoySay == ""){
                console.log("I am not able to understand you beacuse an error");
            }
        }
        recognition.onaudioend = function (event) {
            //Fired when the user agent has finished capturing audio.
            console.log('SpeechRecognition.onaudioend');
            if (whatDidYoySay == ""){
                console.log("audio is finished but there is no result");
            }
        }
        recognition.onend = function (event) {
            //Fired when the speech recognition service has disconnected.
            console.log('SpeechRecognition.onend');
        }
        recognition.onnomatch = function (event) {
            //Fired when the speech recognition service returns a final result with no significant recognition. This may involve some degree of recognition, which doesn't meet or exceed the confidence threshold.
            console.log('SpeechRecognition.onnomatch');
        }
        recognition.onsoundstart = function (event) {
            //Fired when any sound — recognisable speech or not — has been detected.
            console.log('SpeechRecognition.onsoundstart');
        }
        recognition.onsoundend = function (event) {
            //Fired when any sound — recognisable speech or not — has stopped being detected.
            console.log('SpeechRecognition.onsoundend');
        }
        recognition.onspeechstart = function (event) {
            //Fired when sound that is recognised by the speech recognition service as speech has been detected.
            console.log('SpeechRecognition.onspeechstart');
        }
        recognition.onstart = function (event) {
            answerInputElt.value = "";
            //Fired when the speech recognition service has begun listening to incoming audio with intent to recognize grammars associated with the current SpeechRecognition.
            console.log('SpeechRecognition.onstart');
            $(e).disabled = true;
        }
    }
}
class JSUtiles {
    constructor() { }
    static getBrowserLanguage(){
        var language = window.navigator.userLanguage || window.navigator.language;
            console.log(language); //works IE/SAFARI/CHROME/FF
            //en-ENg, ru !!!  
        return language;
    }
    static ShowHideSettings(e) {
        let elt = $("#all_settings");
        if (elt.hasClass("show_settings")) {
            elt.removeClass("show_settings");
            elt.addClass("hide_settings");
        } else {
            elt.removeClass("hide_settings");
            elt.addClass("show_settings");
        }
    }
    static setShuffleTensesSettings(e) {
        if (e.checked) {
            generalSettings.shuffleTenses = true;
        } else {
            generalSettings.shuffleTenses = false;
        }
        console.log(generalSettings);
    }
    static setShuffleVerbsSettings(e) {
        if (e.checked) {
            generalSettings.shuffleVerbs = true;
        } else {
            generalSettings.shuffleVerbs = false;
        }
        console.log(generalSettings);
    }
    static checkAllverbs(e) {
        let boxes = $(`#${VERB_LIST_TBL_ID} tbody`).find("input[type='checkbox']");
        if (e.checked) {
            $(`#${VERB_LIST_TBL_ID} tbody`).find("input[type='checkbox']").attr("checked", "checked");
            verbsToTraingList = VERB_VOCABULARY["Irregular verbs"];
            for (let i = 0; i < boxes.length; i++) {
                boxes[i].checked = true;
            }
        } else {
            $(`#${VERB_LIST_TBL_ID} tbody`).find("input[type='checkbox']").removeAttr("checked");
            verbsToTraingList = [];
            for (let i = 0; i < boxes.length; i++) {
                boxes[i].checked = false;
            }
        }
        JSUtiles.showHideStartButton();
        console.log("Verbs to train:");
        console.log(verbsToTraingList);
    }
    static getTopicHTML(topic) {
        let locale = generalSettings.browserlang === undefined? "en-EN" : generalSettings.browserlang;
        let html = `<a class="dropdown-item" data-id="${topic.id}" href="#" onClick="JSUtiles.setDDTopic(this)">${topic.locals[locale]}</a>`;
        return html;
    }
    static getVoiceHTML(voice) {
        let html = `<a class="dropdown-item" data-lang="${voice.lang}" href="#speech_settings" onClick="JSUtiles.setDDVoice(this)">${voice.name}</a>`;
        return html;
    }
    static sayIt(e) {
        let verb = e.getAttribute("data-verb");
        console.log(verb);
        SpeechUtils.speak(`${verb}`);
    }
    static getVerbTblRowHTML(verb) {
        let classText = verb.isIrregular ? "verb-irregular" : "verb-regular";
        return `<tr>               
                    <td>
                        <p class="${classText}">${verb.v1.join('; ')}<span class="badge badge-default mx-2" data-verb="${verb.v1}" onClick="JSUtiles.sayIt(this)">&#x1F3A7;</span></p>
                    </td>
                    <td>
                        <p class="${classText}">${verb.v2.join('; ')}<span class="badge badge-default mx-2" data-verb="${verb.v2}" onClick="JSUtiles.sayIt(this)">&#x1F3A7;</span></p>
                    </td>
                    <td>
                        <p class="${classText}">${verb.v3.join('; ')}<span class="badge badge-default mx-2" data-verb="${verb.v3}" onClick="JSUtiles.sayIt(this)">&#x1F3A7;</span></p>
                    </td>
                 </tr>`;
                    // <td class="verb_cbx">
                    //     <div class="form-check">
                    //         <input type="checkbox" checked class="form-check-input" data-id="${verb.id}" id="verb_${verb.id}" onChange="JSUtiles.changeVebTrainingList(this)">
                    //     </div>
                    // </td>
    }
    static addTopicsToDOM(blockId = TOPIC_BLOCK_ID) {
        let elt = $(`#${blockId}`);
        topics.forEach(function (topic) {
            let topicHTML = JSUtiles.getTopicHTML(topic);
            elt.append($(topicHTML));
        });
    }
    static setDDTopic(e) {
        let id = e.getAttribute("data-id");
        let txt = e.text;
        $(`#${TOPIC_INPUT_ID}`).val(txt);
        $(`#${VERB_LIST_TBL_ID} tbody`).html("");
        JSUtiles.showTopicsListToDOM(txt);
    }
    static setDDVoice(e) {
        let lang = e.getAttribute("data-lang");
        let txt = e.text;
        $(`#voiceName`).val(txt);
        speechSettings.voice.name = txt;
        speechSettings.voice.lang = lang;
        console.log(speechSettings);
    }
    static setGlobalSynth(synthItem) {
        synth = synthItem;
    }
    static setGlobalVoices(items) {
        voices = [...items];
    }
    static getVoiceList() {
        JSUtiles.setVice()
        .then((items) => {
            voiceList = items;
            JSUtiles.setGlobalVoices(items);
            console.log(voices);
            let elt = $(`#voice_links`);
            voiceList.forEach(function (voice) {
                let voiceHTML = JSUtiles.getVoiceHTML(voice);
                elt.append($(voiceHTML));
            });
            $(`#voice_links a:first-child`).click();
        });
    }
    static setSpeechDialectSettings(val, name) {
        speechSettings.dialect.val = val;
        speechSettings.dialect.dispName = name;
        console.log(speechSettings);
    }

    static changePitchOrRate(e) {
        let id = e.id;
        let val = $(e).val();
        $(e).parent().find("span")[0].innerText = val;
        switch (id) {
            case "rate": {
                speechSettings.rate = val;
                break;
            }
            case "pitch": {
                speechSettings.pitch = val;
                break;
            }
            default: {
                break;
            }
        }
        console.log(speechSettings);
    }
    static setSpeechDialect(e) {
        let dialect = e.getAttribute("data-dialect");
        let txt = e.text;
        $(`#speechDialectName`).val(txt);
        JSUtiles.setSpeechDialectSettings(dialect, txt);
    }
    static setLocale(e) {
        let locale = e.getAttribute("data-browser-lang");
        let txt = e.text;
        $(`#localeName`).val(txt);
        generalSettings.browserlang = locale;
        console.log(generalSettings.browserlang);
    }
    static getVerbsByTopicId(id) {
        let words = VERB_VOCABULARY["Irregular verbs"].filter(function (w) {
            return (w.topicIds).indexOf(id) != -1;
        });
        return words;
    }
    static showTopicsListToDOM(topicName) {
        let targetTopics = topics.filter(function (t) {
            return t.name == topicName;
        });
        let topic = topics[0];
        if (targetTopics.length > 0) {
            topic = targetTopics[0];
        }
        let words = JSUtiles.getVerbsByTopicId(topic.id);
        console.log(words);
        JSUtiles.addVirbListToDOM(words);
    }
    static sortVerbsByName(v1, v2) {
        if (v1.infinitive > v2.infinitive) {
            return 1;
        } else if (v1.infinitive < v2.infinitive) {
            return -1;
        } else {
            return 0; s
        }
    }
    static addVirbListToDOM(verbs = VERB_VOCABULARY["Irregular verbs"]) {
        verbs.sort(JSUtiles.sortVerbsByName);
        $(`#${VERB_LIST_TBL_ID} tbody`).html("");
        if (verbs.length > 0) {
            verbs.forEach(function (v) {
                let verbHTML = JSUtiles.getVerbTblRowHTML(v);
                $(`#${VERB_LIST_TBL_ID} tbody`).append($(verbHTML));
            })
        } else {
        }
        $(`#${VERB_LIST_TBL_ID}`).show();
        $(`#${VERB_LIST_TBL_ID}`).DataTable();
    }
    static getVerbFormsById(id) {
        let forms = VERB_VOCABULARY["Irregular verbs"].filter(function (f) {
            return f.id == id;
        });
        if (forms.length > 0) {
            return forms[0];
        } else {
            return null;
        }
    }
    static async setVice() {
        return new Promise(
            function (resolve, reject) {
                let synth = window.speechSynthesis;
                JSUtiles.setGlobalSynth(synth);
                let id;
                id = setInterval(() => {
                    if (synth.getVoices().length !== 0) {
                        resolve(synth.getVoices());
                        clearInterval(id);
                    }
                }, 10);
            }
        )
    }
    static addVerbToTrainingList(verb) {
        let verbObjs = verbsToTraingList.filter(function (v) {
            return v.id == verb.id;
        });
        if (verbObjs.length == 0) {
            verbsToTraingList.push(verb);
        }
        JSUtiles.showHideStartButton();
        console.log("Verbs to train:");
        console.log(verbsToTraingList);
    }
    static removeVerbFromTrainingList(verb) {
        verbsToTraingList = verbsToTraingList.filter(function (v) {
            return v.id != verb.id;
        });
        JSUtiles.showHideStartButton();
        console.log("Verbs to train:");
        console.log(verbsToTraingList);
    }
    static changeVebTrainingList(e) {
        let verbId = e.getAttribute("data-id");
        let isChecked = e.checked;
        let verb = JSUtiles.getVerbFormsById(verbId);
        if (isChecked) {
            JSUtiles.addVerbToTrainingList(verb);
            e.checked = true;
            $(e).attr("checked", "checked");
        } else {
            JSUtiles.removeVerbFromTrainingList(verb);
            e.checked = false;
            $(e).removeAttr("checked");
        }
        console.log(JSUtiles.getVerbFormsById(verbId));
        JSUtiles.showHideStartButton();
        console.log("Verbs to train:");
        console.log(verbsToTraingList);
    }
    static shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    static getObjectRandomly(objArray) {
        let count = objArray.length;
        let raundomIndex = Math.floor(Math.random() * count);
        return objArray[raundomIndex];
    }
    static generateWho() {
        return JSUtiles.getObjectRandomly(WHO);
    }
    static generateSimpleTense() {
        console.log(JSUtiles.getObjectRandomly(SIMPLE_TENSES));
    }
    static getSimpleTenseHTML(tenseObj, baseTexts) {
        let html = "";
        let key = Object.keys(tenseObj)[0];
        html = `<div class="tense"><input data-key="${key}" data-answer="${baseTexts.word}" placeholder="${tenseObj[key]}" value=""/>
                </div>`;
        return html;
    }
    static generateTenses() {
        let baseTexts = JSUtiles.getBaseText();
        JSUtiles.setBaseText(baseTexts);
        $("#simple_table").html("");
        let suffledTenses = JSUtiles.shuffle(SIMPLE_TENSES);
        suffledTenses.forEach(function (tense) {
            let objHTML = JSUtiles.getSimpleTenseHTML(tense, baseTexts);
            $("#simple_table").append($(objHTML));
        });
    }
    static getRandomWord() {
        let count = VERB_TENSES_VOCABULARY["top100"].length;
        let raundomIndex = Math.floor(Math.random() * count);
        return VERB_TENSES_VOCABULARY["top100"][raundomIndex];
    }
    static getBaseText() {
        let word = JSUtiles.getRandomWord();
        let who = JSUtiles.generateWho();
        return {
            word: word,
            who: who
        }
    }
}
class TenseUtils {
    constructor() { }
    static getObjectRandomly(objArray) {
        let count = objArray.length;
        let raundomIndex = Math.floor(Math.random() * count);
        return objArray[raundomIndex];
    }
    static getPresentSimple(id, who = "I") {
        let verb = TenseUtils.getVerbById(id);
        if (verb == "to be" && who == "I") {
            return `${who} am`;
        }
        if (WHO["do"].indexOf(who) != -1) {
            //I, we, you or they
            return `${who} ${verb.v1[0]}`;
        } else {
            //he, she, it
            return `${who} ${verb.v1[1]}`;
        }
    }
    static getPresentNotSimple(id, who = "I") {
        let verb = TenseUtils.getVerbById(id);
        if (verb == "to be" && who == "I") {
            return `${who} am not`;
        }
        if (WHO["do"].indexOf(who) != -1) {
            //I, we, you or they
            return `${who} do not ${verb.v1[0]}`;
        } else {
            //he, she, it
            return `${who} does not ${verb.v1[0]}`;
        }
    }
    static getPresentSimpleQuestion(id, who = "I") {
        let verb = TenseUtils.getVerbById(id);
        if (verb == "to be" && who == "I") {
            return `Am ${who}?`;
        }
        if (WHO["do"].indexOf(who) != -1) {
            //I, we, you or they
            if (who == "I"){
                return `Do ${who} ${verb.v1[0]}?`;
            } else{
                return `Do ${who.toLowerCase()} ${verb.v1[0]}?`;
            }   
        } else {        
            //he, she, it
            return `Does ${who.toLowerCase()} ${verb.v1[0]}?`;
        }
    }
    static getPastSimple(id, who = "I") {
        let verb = TenseUtils.getVerbById(id);
        if (verb == "to be" && who == "I") {
            return `${who} was`;
        }
        return `${who} ${verb.v2[0]}`;
    }
    static getPastNotSimple(id, who = "I") {
        let verb = TenseUtils.getVerbById(id);
        return `${who} did not ${verb.v1[0]}`;
    }
    static getPastSimpleQuestion(id, who = "I") {
        let verb = TenseUtils.getVerbById(id);
        if (verb == "to be" && who == "I") {
            return `Did ${who}?`;
        }
        if (who == "I"){
            return `Did ${who} ${verb.v1[0]}?`;
        } else{
            return `Did ${who.toLowerCase()} ${verb.v1[0]}?`;
        }
    }
    static getFutureSimple(id, who = "I") {
        let verb = TenseUtils.getVerbById(id);
        return `${who} will ${verb.v1[0]}`;
    }
    static getFutureNotSimple(id, who = "I") {
        let verb = TenseUtils.getVerbById(id);
        return `${who} will not ${verb.v1[0]}`;
    }
    static getFutureSimpleQuestion(id, who = "I") {
        let verb = TenseUtils.getVerbById(id);
        if (verb == "to be" && who == "I") {
            return `Will ${who}?`;
        } else{
            if (who == "I"){
                return `Will ${who} ${verb.v1[0]}?`;
            } else{
                return `Will ${who.toLowerCase()} ${verb.v1[0]}?`;
            }
        }
    }
    static getVerbById(id = 0) {
        let verb = verbsToTraingList[0];
        let verbsById = verbsToTraingList.filter(function (v) {
            return v.id == id;
        });
        if (verbsById.length > 0) {
            verb = verbsById[0]
        } else {
            verb = verbsToTraingList[0];
        }
        return verb;
    }
    static generateSimpleTense() {
        console.log(JSUtiles.getObjectRandomly(SIMPLE_TENSES));
    }
    static getSimpleTenseHTML(tenseObj, baseTxtObj) {
        let html = "";
        let key = Object.keys(tenseObj)[0];
        let answerText = "";
        switch (key) {
            case "present": {
                answerText = TenseUtils.getPresentSimple(baseTxtObj.word.id, baseTxtObj.who);
               break;
            }
            case "present_not": {
                answerText = TenseUtils.getPresentNotSimple(baseTxtObj.word.id, baseTxtObj.who);
                break;
            }
            case "present_question": {
                answerText = TenseUtils.getPresentSimpleQuestion(baseTxtObj.word.id, baseTxtObj.who);
                break;
            }
            case "past": {
                answerText = TenseUtils.getPastSimple(baseTxtObj.word.id, baseTxtObj.who);
                break;
            }
            case "past_not": {
                answerText = TenseUtils.getPastNotSimple(baseTxtObj.word.id, baseTxtObj.who);
                break;
            }
            case "past_question": {
                answerText = TenseUtils.getPastSimpleQuestion(baseTxtObj.word.id, baseTxtObj.who);
                break;
            }
            case "future": {
                answerText = TenseUtils.getFutureSimple(baseTxtObj.word.id, baseTxtObj.who);
                break;
            }
            case "future_not": {
                answerText = TenseUtils.getFutureNotSimple(baseTxtObj.word.id, baseTxtObj.who);
                break;
            }
            case "future_question": {
                answerText = TenseUtils.getFutureSimpleQuestion(baseTxtObj.word.id, baseTxtObj.who);
                break;
            }
            default: {
                answerText = TenseUtils.getPresentSimple(baseTxtObj.word.id, baseTxtObj.who);
                break;
            }
        }
        html = `<div class="mb-2 text-left">
                    <span class="small py-0 mt-4 lead"><i>${tenseObj[key]}</i></span>
                    <div class="tense_3btn">
                        <span class="badge badge-default" title="Check" onClick="ExerciseUtils.checkTenseWriting(this)">&#x2714;</span>
                        <span class="badge badge-default" title="Show answer" onClick="ExerciseUtils.showAnswerForWritten(this)">&#x1f441;</span>
                        <span class="badge badge-default" title="Say" onClick="ExerciseUtils.sayTenseWritten(this)">&#x1F3A7;</span> 
                        <input data-key="${key}" 
                            data-verb-id=${baseTxtObj.word.id} 
                            data-answer="${answerText}" 
                            placeholder="write your answer..." value=""/>
                    </div>
                </div>`;
        return html;
    }
    static getEx2SimpleTenseHTML(tenseObj, baseTxtObj) {
        let html = "";
        let key = Object.keys(tenseObj)[0];
        let answerText = "";
        switch (key) {
            case "present": {
                answerText = TenseUtils.getPresentSimple(baseTxtObj.word.id, baseTxtObj.who);
                break;
            }
            case "present_not": {
                answerText = TenseUtils.getPresentNotSimple(baseTxtObj.word.id, baseTxtObj.who);
                break;
            }
            case "present_question": {
                answerText = TenseUtils.getPresentSimpleQuestion(baseTxtObj.word.id, baseTxtObj.who);
                break;
            }
            case "past": {
                answerText = TenseUtils.getPastSimple(baseTxtObj.word.id, baseTxtObj.who);
                break;
            }
            case "past_not": {
                answerText = TenseUtils.getPastNotSimple(baseTxtObj.word.id, baseTxtObj.who);
                break;
            }
            case "past_question": {
                answerText = TenseUtils.getPastSimpleQuestion(baseTxtObj.word.id, baseTxtObj.who);
                break;
            }
            case "future": {
                answerText = TenseUtils.getFutureSimple(baseTxtObj.word.id, baseTxtObj.who);
                break;
            }
            case "future_not": {
                answerText = TenseUtils.getFutureNotSimple(baseTxtObj.word.id, baseTxtObj.who);
                break;
            }
            case "future_question": {
                answerText = TenseUtils.getFutureSimpleQuestion(baseTxtObj.word.id, baseTxtObj.who);
                break;
            }
            default: {
                answerText = TenseUtils.getPresentSimple(baseTxtObj.word.id, baseTxtObj.who);
                break;
            }
        }
        if (answerText.length == 2){
            answerText = answerText.join(';');
        }
        answerText.replace("'","\'");
        html = `<div class="mb-2 text-left"><span class="small py-0 mt-4 lead"><i>${tenseObj[key]}</i></span>
                    <div class="tense_4btn">
                        <span class="badge badge-default p-2" title="Say" data-full-answer="${answerText}" onClick="SpeechUtils.sayYourAnswerEx2(this)">&#127908;</span>
                        <span class="badge badge-default p-2" title="Listen to" onClick='SpeechUtils.speak("${answerText}")'>&#x1F3A7;</span> 
                        <span class="badge badge-default p-2" title="Show answer" onClick="ExerciseUtils.showAnswerForWritten(this)">&#x1f441;</span>                   
                        <span class="badge badge-default p-2" title="Check" onClick="ExerciseUtils.checkTenseWriting(this)">&#x2714;</span>
                        <input data-key="${key}" 
                            data-verb-id=${baseTxtObj.word.id} 
                            data-answer="${answerText}" 
                            placeholder="say it..." value=""/>
                    </div>
                </div>`;
        return html;
    }
    static getRandomWord() {
        let count = verbsToTraingList.length;
        let raundomIndex = Math.floor(Math.random() * count);
        return verbsToTraingList[raundomIndex];
    }
    static generateWho() {
        let allWho = WHO.do.concat(WHO.does);
        return JSUtiles.getObjectRandomly(allWho);
    }
    static getBaseText() {
        let word = TenseUtils.getRandomWord();
        let who = TenseUtils.generateWho();
        return {
            word: word,
            who: who
        }
    }
}
class ExerciseUtils {
    constructor() { }
    static getExerciseArray() {
        let desktopHTML = `<img src="svg/DesktopOnly.svg" width="15%" alt="Desktop only" class="float-right m-2 text-center"/>`;
        let exercises = [
            {
                id: "exercise_1",
                desktopOnly: false,
                htmlcomment: `<!--I, to arrive -> I arrive, I arrived etc. Write simple tenses-->`,
                title: "Write sentences using simple tenses",
                description: "Get a verb and a Object. Write sentences using present, past and future simple",
                instructionHTML: `  <lo>
                                        <li>
                                            Press <span class="ex_desc_btn_name">Generate (&#x21bb;)</span>. A verb and an object will be generated for you, using your <a class="settings_ref" href="#main_settings" title="Change settings">settings</a>
                                        </li>
                                        <li>Type nine sentences using simple tenses into nine inputs</li>
                                        <li>Press <span class="ex_desc_btn_name">Check (&#x2714;)</span>. You will be given the check result</li>
                                        <li>Press <span class="ex_desc_btn_name">Show (&#x1f441;)</span>. You will be given the answer for the generated tense</li>
                                        <li>Press <span class="ex_desc_btn_name">Listen (&#x1F3A7;)</span>. The correct tense will be spoken for you</li>
                                        <li>Use buttons <span class="ex_desc_btn_name">&#x21a1;</span> and <span class="ex_desc_btn_name">&#x219f;</span> if you want show/hide exercise content</li>
                                        <li>Press <span class="ex_desc_btn_name">&#x2191;</span> to return back to the exercise list</li>
                                        </lo>
                                    <div class="ex_note">
                                        <p class="small"><em>You can do this exercise as many times as you wish</em>
                                        </p>
                                    </div>`
            },
            {
                id: "exercise_2",
                desktopOnly: true,
                htmlcomment: `<!--I, to arrive -> say simple tances-->`,
                title: "Say sentences using simple tenses",
                description: "Use simple tenses",
                instructionHTML: `   <lo>
                                        <li>
                                            Press <span class="ex_desc_btn_name">Generate (&#x21bb;)</span>. A verb and an object will be generated for you, using your <a class="settings_ref" href="#main_settings" title="Change settings">settings</a>
                                        </li>
                                        <li>Press <span class="ex_desc_btn_name">Say your answer (&#127908;)</span> and pronaunce sentence using correctly the written verb tense</li>
                                        <li>Press <span class="ex_desc_btn_name">Listen (&#x1F3A7;)</span>. The sentence will be spoken for you</li>
                                        <li>Press <span class="ex_desc_btn_name">Show (&#x1f441;)</span>. You will be shown the generated sentence</li>
                                        <li>Press <span class="ex_desc_btn_name">Check (&#x2714;)</span>. You will be given the check result</li>
                                        <li>Use buttons <span class="ex_desc_btn_name">&#x21a1;</span> and <span class="ex_desc_btn_name">&#x219f;</span> if you want show/hide exercise content</li>
                                        <li>Press <span class="ex_desc_btn_name">&#x2191;</span> to return back to the exercise list</li>
                                        </lo>
                                    ${desktopHTML}
                                    <div class="ex_note">
                                        <p class="small"><em>You can do this exercise as many times as you wish</em></p>
                                    </div>`
            },
            {
                id: "exercise_3",
                desktopOnly: false,
                htmlcomment: `<!--Learn verb forms-->`,
                title: "Learn verbs",
                description: "Learn verbs and their forms <br/>(V1, V2, V3) which you must know",
                instructionHTML: `  <lo>
                                        <li>
                                            Press the button <span class="ex_desc_btn_name">Generate (&#x21bb;)</span>. The list of verbs will be generated for you, using your <a class="settings_ref" href="#main_settings" title="Change settings">settings</a>
                                        </li>
                                        <li>Press <span class="ex_desc_btn_name">Say your answer (&#127908;)</span>. The coresponding verb will be spoken for you</li>
                                        <li>Press <span class="ex_desc_btn_name">Listen (&#x1F3A7;)</span>. The correct three tense forms (V1, V2, V3) will be spoken for you</li>
                                        <li>Write V1, V2 and V3 of the pronaunced verb into three input fields</li>
                                        <li>Press <span class="ex_desc_btn_name">Show (&#x1f441;)</span>. You will be given the answer for the generated verb</li>
                                        <li>Press <span class="ex_desc_btn_name">Check (&#x2714;)</span>. You will be given the check result</li>
                                        <li>Use buttons <span class="ex_desc_btn_name">&#x21a1;</span> and <span class="ex_desc_btn_name">&#x219f;</span> if you want show/hide exercise content</li>
                                        <li>Press <span class="ex_desc_btn_name">&#x2191;</span> to return back to the exercise list</li>
                                    </lo>
                                    <div class="ex_note">
                                        <p class="small"><em>You can do this exercise as many times as you wish</em></p>
                                    </div>`
            },
        ]
        return exercises;
    }
    static addExcercisesTypeToDom() {
        $("#execise_cards").html("");
        let exs = ExerciseUtils.getExerciseArray();
        if (exs.length > 0) {
            for (let i = 0; i < exs.length; i++) {
                let ex = exs[i];
                let desktopHTML = "";
                let desktopOnlyClass = " ";
                if (ex.desktopOnly == true){
                    desktopHTML = `<img src="svg/DesktopOnly.svg" width="15%" alt="Desktop only" title="Desktop Only" class="m-2 text-center desktop-only-img"/>`
                    desktopOnlyClass = " desktopOnlyBlock ";
                }
                let exDIVhtml = `
                ${ex.htmlcomment}
                <div class="card card-img border-0">
                    <div class="card-wraper card shadow py-3" style="background-image: url(bgImg.png);background-size:cover;background-position: top left;background-repeat: no-repeat;background-size: cover;">
                        <div class="ex_title_main_content${desktopOnlyClass}text-center align-items-center rgba-grey-strong my-2 p-3">
                            <h5 class="responsive-h3"><strong>${i + 1}. ${ex.title}</strong></h5>
                            <p class="ex_title_desc">${ex.description}${desktopHTML}</p>
                            <a href="#${ex.id}" class="btn btn-primary waves-effect waves-light ex_button_go">More info</a>
                        </div>
                    </div>
                </div>
                `;
                $("#execise_cards").append($(exDIVhtml));
            }
        }
    }
    static addExcercisesTypeBlocksToDom(exercises) {
        let sections = $("#exercises section");
        if (sections.length > 0) {
            $("#exercises section").remove();
        }
        if (exercises.length > 0) {
            for (let i = 0; i < exercises.length; i++) {
                let ex = exercises[i];
                let exBlockHTML = `
                                <section id="${ex.id}" class="ex_block">
                                    <h2>Exercise ${i + 1}. ${ex.title}</h2>
                                    <div class="ex_description">
                                        <div class="card">
                                            <div class="card-header">
                                             ${ex.description}
                                            </div>
                                            <div class="card-body">
                                            <h5 class="card-title">Instruction</h5>
                                            <div class="card-text">
                                               ${ex.instructionHTML}
                                            </div>
                                            <div class="card-footer text-center">
                                                <button data-ex-id="${ex.id}" class="btn btn-default ex_button_default p-3" onClick="ExerciseUtils.doExercise(this)">&#x21a1;</button>
                                                <a href="#top" title="Go to the exercise list" class="btn btn-default ex_button_default p-3">&#x2191;</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ex_content_block mt-4">
                                    </div>
                                </section>`;
                $("#exercises").append($(exBlockHTML));
            }
        }
    }
    static doExercise(e) {
        let id = e.getAttribute("data-ex-id");
        let exElt = $(e).parent().parent().parent().parent().find(".ex_content_block")[0];
        if (exElt.innerText == ""){
            $(e).html("&#x219f;");
            switch (id) {
                case "exercise_1": {
                    ExerciseUtils.doExercise1(exElt);
                    break;
                }
                case "exercise_2": {
                    ExerciseUtils.doExercise2(exElt);
                    break;
                }
                case "exercise_3": {
                    ExerciseUtils.doExercise3(exElt);
                    break;
                }
                default: {
                    ExerciseUtils.doExercise1(exElt);
                    break;
                }
            }
        } else{
            $(e).html("&#x21a1;");
            $(exElt).html("");
           
        }

    }
    static checkEx1(e) {
        let inputs = $("#simple_table_write input");
        for (let i = 0; i < inputs.length; i++) {
            let elt = inputs[i];
            if (elt.hasAttribute("correct")) {
                elt.removeAttribute("correct")
            }
            if (elt.hasAttribute("incorrect")) {
                elt.removeAttribute("incorrect")
            }
            let answers = elt.getAttribute("data-answer").split(',');
            // answers = answers.map(a => {
            //     return a.toLowerCase();
            // })
            if (answers.indexOf(elt.value) != -1) {
                $(elt).attr("data-validity", "correct");
            } else {
                $(elt).attr("data-validity", "incorrect");
            }
        }
    }
    static generateEx(exerciseId) {
        $(`section#${exerciseId} .ex_content_block`).html("");
        $(`button[data-ex-id="${exerciseId}"]`).click();
    }
    //for Ex 1   
    static showAnswerForWritten(e) {
        let inputElt = $(e).parent().find("input")[0];
        inputElt.value = inputElt.getAttribute("data-answer");
    }
    //for Ex 1 
    static checkTenseWriting(e) {
        let elt = $(e).parent().find("input")[0];
        let answers = elt.getAttribute("data-answer").split(',');
        if (elt.hasAttribute("correct")) {
            elt.removeAttribute("correct")
        }
        if (elt.hasAttribute("incorrect")) {
            elt.removeAttribute("incorrect")
        }
        if (answers.indexOf(elt.value) != -1) {
            $(elt).attr("data-validity", "correct");
        } else {
            $(elt).attr("data-validity", "incorrect");
        }
    }
    //for Ex 1 
    static sayTenseWritten(e) {
        let elt = $(e).parent().find("input")[0];
        let answers = elt.getAttribute("data-answer").split(',');
        SpeechUtils.speak(answers.join(';').replace("'","\'"));
    }
    static doExercise1(exElt) {
        let baseTexts = TenseUtils.getBaseText();
        let verbsToShow = SIMPLE_TENSES;
        if (generalSettings.shuffleTenses) {
            verbsToShow = JSUtiles.shuffle(verbsToShow);
        }
        let tableHTML = "";
        verbsToShow.forEach(function (tense) {
            let objHTML = TenseUtils.getSimpleTenseHTML(tense, baseTexts);
            tableHTML = tableHTML + objHTML;
        });
        let local = "ru-RU";
        let baseTxtObj = baseTexts.word;
        let verb = baseTxtObj.infinitive;
        if (generalSettings.showTranslation) {
            verb = baseTxtObj.translations[local] !== undefined ? baseTxtObj.translations[local] : baseTxtObj.infinitive;
        } else if (generalSettings.showDescription) {
            verb = baseTxtObj.description !== undefined ? baseTxtObj.description : baseTxtObj.infinitive;
        }
        let ex1HTML = `
        <div id="write_tenses" class="container text-center">
            <div id="ex1" class="badges">
                <div>Object:</div>
                <span class="base_text">${baseTexts.who}</span>
                <div>Verb:</div>
                <p class="base_text ml-1 mr-3">${verb}</p>
                <span class="badge badge-default mx-2" onClick="ExerciseUtils.generateEx('exercise_1')">&#x21bb;</span>
            </div>
            <div id="ex1_table_write" class="tense_grid text-center">
               ${tableHTML}
            </div>
        </div>`;
        $(exElt).append($(ex1HTML));
    }
    static doExercise2(exElt) {
        let baseTexts = TenseUtils.getBaseText();
        let verbsToShow = SIMPLE_TENSES;
        if (generalSettings.shuffleTenses) {
            verbsToShow = JSUtiles.shuffle(verbsToShow);
        }
        let tableHTML = "";
        verbsToShow.forEach(function (tense) {
            let objHTML = TenseUtils.getEx2SimpleTenseHTML(tense, baseTexts);
            tableHTML = tableHTML + objHTML;
        });
        let local = "ru-RU";
        let baseTxtObj = baseTexts.word;
        let verb = baseTxtObj.infinitive;
        if (generalSettings.showTranslation) {
            verb = baseTxtObj.translations[local] !== undefined ? baseTxtObj.translations[local] : baseTxtObj.infinitive;
        } else if (generalSettings.showDescription) {
            verb = baseTxtObj.description !== undefined ? baseTxtObj.description : baseTxtObj.infinitive;
        }
        let ex2HTML = `
        <div id="write_tenses" class="container text-center">
            <div id="ex1" class="badges mb-3">
                <div>Object:</div><span class="badge badge-primary base_text ml-1 mr-3">${baseTexts.who}</span>
                <div>Verb:</div><span class="base_text ml-1 mr-3">${verb}</span>
                <div><span class="badge badge-default mx-2" onClick="ExerciseUtils.generateEx('exercise_2')">&#x21bb;</span></div>
            </div>
            <div id="ex1_table_write" class="tense_grid text-center">
               ${tableHTML}
            </div>
        </div>`;
        $(exElt).append($(ex2HTML));
    }
    static showAnswerEx3(e) {
        let answerVerbs = e.getAttribute("data-answer").split(';');
        let v1Elt = $(e).parent().parent().find("input[data-answer-v1]")[0];
        let v2Elt = $(e).parent().parent().find("input[data-answer-v2]")[0];
        let v3Elt = $(e).parent().parent().find("input[data-answer-v3]")[0];
        v1Elt.value = answerVerbs[0];
        v2Elt.value = answerVerbs[1];
        v3Elt.value = answerVerbs[2];
    }
    static checkEx3(e) {
        let answerVerbs = e.getAttribute("data-full-answer").split(';');
        let v1Elt = $(e).parent().parent().find("input[data-answer-v1]")[0];
        let v2Elt = $(e).parent().parent().find("input[data-answer-v2]")[0];
        let v3Elt = $(e).parent().parent().find("input[data-answer-v3]")[0];
        if (v1Elt.hasAttribute("data-validity")) {
            v1Elt.removeAttribute("data-validity");
        }
        if (v2Elt.hasAttribute("data-validity")) {
            v2Elt.removeAttribute("data-validity");
        }
        if (v3Elt.hasAttribute("data-validity")) {
            v3Elt.removeAttribute("data-validity");
        }
        let v1 = v1Elt.value;
        let v2 = v2Elt.value;
        let v3 = v3Elt.value;
        if (v1 == answerVerbs[0]) {
            $(v1Elt).attr("data-validity", "correct");
        } else {
            $(v1Elt).attr("data-validity", "incorrect");
        }
        if (v2 == answerVerbs[1]) {
            $(v2Elt).attr("data-validity", "correct");
        } else {
            $(v2Elt).attr("data-validity", "incorrect");
        }
        if (v3 == answerVerbs[2]) {
            $(v3Elt).attr("data-validity", "correct");
        } else {
            $(v3Elt).attr("data-validity", "incorrect");
        }
    }
    static getEx3VerbHTML(verbObj) {
        let obj = TenseUtils.getVerbById(verbObj.id);
        let who = TenseUtils.generateWho();
        let local = "ru-RU";
        let verb = verbObj.infinitive;
        if (generalSettings.showTranslation) {
            verb = verbObj.translations[local] !== undefined ? verbObj.translations[local] : verbObj.infinitive;
        } else if (generalSettings.showDescription) {
            verb = verbObj.description !== undefined ? verbObj.description : verbObj.infinitive;
        }
        let v1;
        if (WHO["do"].indexOf(who) != -1) {
            if (who == "I" && verbObj.infinitive == "to be") {
                v1 = verbObj.v1[0];
            } else if (verbObj.infinitive == "to be") {
                v1 = verbObj.v1[1];
            }
            else {
                v1 = verbObj.v1[0];
            }
        } else if (verbObj.infinitive == "to be") {
            v1 = verbObj.v1[2];
        } else {
            v1 = verbObj.v1[1];
        }
        let verbHTML = `<div class="verb_block mb-5">
            <div class="ex3_verb_header text-center">
                <div>Object:</div>
                <span class="badge badge-primary base_text ml-1 mr-3">${who}</span>
                <div>Verb:</div>
                <div class="base_text ml-1 mr-3">${verb}</div>
                <span class="badge badge-default mx-2 ex3_generate" onClick="ExerciseUtils.generateEx('exercise_3')">&#x21bb;</span>
            </div>
           <div class="ex3_verb_buttons text-center my-3">
                <span class="badge badge-default p-2" title="Say your answer" data-full-answer="${v1};${verbObj.v2};${verbObj.v3}" onClick="SpeechUtils.sayAnswer(this)">&#127908;</span>
                <span class="badge badge-default p-2" title="Listen to answer" data-word-to-say="to take" onClick="SpeechUtils.speak('${v1};${verbObj.v2};${verbObj.v3}')">&#x1F3A7;</span>
                <span data-full-answer="${v1};${verbObj.v2};${verbObj.v3}" class="badge badge-default p-2" title="Show answer" data-answer="${v1};${verbObj.v2};${verbObj.v3}" onClick="ExerciseUtils.showAnswerEx3(this)">&#x1f441;</span>
                <span class="badge badge-default p-2" data-full-answer="${v1};${verbObj.v2};${verbObj.v3}" title="Check" onClick="ExerciseUtils.checkEx3(this)">&#x2714;</span>
           </div>
            <div id="ex3_verb_inputs">
                <div class="verb_input input-group mb-3">
                    <div class="input-group-prepend">
                            <span class="input-group-text">V1</span>
                        </div>
                        <input class="form-control"  
                            data-verb-id=${verbObj.id} 
                            data-answer-v1="${v1}" 
                            placeholder="write V1..." value="" />
                    </div>
                    <div class="verb_input input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">V2</span>
                        </div>
                        <input class="form-control"  
                            data-verb-id=${verbObj.id} 
                            data-answer-v2="${verbObj.v2}" 
                            placeholder="write V2..." value="" />
                    </div>
                    <div class="verb_input input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">V3</span>
                        </div>
                        <input class="form-control"  
                            data-verb-id=${verbObj.id} 
                            data-answer-v3="${verbObj.v3}" 
                            placeholder="write V3..." value="" />
                    </div>
                </div>
            </div>
        </div> 
        `;
        return verbHTML;
    }
    static doExercise3(exElt) {
        $(exElt).html("");
        let ex3VerbsHTML = "";
        if (generalSettings.shuffleVerbs) {
            verbsToTraingList = JSUtiles.shuffle(verbsToTraingList);
        }
        if (verbsToTraingList.length > 0) {
            verbsToTraingList.forEach(function (v) {
                ex3VerbsHTML = ex3VerbsHTML + ExerciseUtils.getEx3VerbHTML(v);
            });
        }
        let ex3HTML = `
                    <div id="ex3_tenses_say">
                        <div id="ex3_verbs">
                               ${ex3VerbsHTML}
                        </div>
                    </div>
                `;
        $(exElt).append($(ex3HTML));
    }
    static changeVerbShowSettings(e) {
        let show = e.getAttribute("data-val");
        $(e).parent().parent().find("input").removeAttr("checked");
        switch(show){
            case "show_verb":{
                generalSettings.showEngVerb = true;
                generalSettings.showTranslation = false;
                $("#show_verb").attr("checked", "checked");
                break;
            }
            case "show_translation":{
                generalSettings.showEngVerb = false;
                generalSettings.showTranslation = true;
                $("#show_translation").attr("checked", "checked")
                break;
            }
            default:{
                break;
            }
        }
        console.log(generalSettings);
        // let allRadioBoxes = $(e).parent().parent().find("input");
        // for (let i=0; i < allRadioBoxes.length; i++){
        //     let elt = allRadioBoxes[i];
        //     if (elt.hasAttribute("checked")){
        //         elt.removeAttribute("checked");
        //     }
        // }
        // let radiobox = $(e).parent().find("input")[0];
        // radiobox.click();
    }
}
$(document).ready(function () {
    // generalSettings.browserlang = JSUtiles.getBrowserLanguage();
    $(`#${VERB_LIST_TBL_ID}`).hide();
    JSUtiles.addTopicsToDOM();
    $(`#topic_links a`)[0].click();
    JSUtiles.getVoiceList();
    let exercisesList = ExerciseUtils.getExerciseArray();
    ExerciseUtils.addExcercisesTypeToDom();
    ExerciseUtils.addExcercisesTypeBlocksToDom(exercisesList);
    // $(".ex_button_default").click();
})