const PROGRESS_BLOCK_CLASS = "progress";
const TOTAL_BLOCK_CLASS = "ex_total_number";
const SUCCESS_BLOCK_CLASS = "progress-bar-success";
const ERRORS_BLOCK_CLASS = "progress-bar-danger";
let count = 0;
let success = 0;
let errors = 0;
const DEFAULT_BTN_GENERATED_VAL_TXT = "Generated time";
const DEFAULT_GENERATED_TEXT = "---";
const DEFAULT_GENERATED_TEXT_TIME = "--:--";
const exercisesType1Array = [
    {
        id: "exercise_1",
        htmlcomment: `<!--01:12 pm -> 13:12-->`,
        title:"24-hour time format",
        description: "Convert the time from the 12-hour format into 24-hour format",
        instructionHTML: `  <lo>
                                <li>Press <span class="ex_desc_btn_name">&#9850;</span>. The time in 12-hour time format will be generated for you</li>
                                <li>Input the same time in 24-hour time format into an input field</li>
                                <li>Press <span class="ex_desc_btn_name">&#x2714;</span>. You will be given the check result. This exercise statistics will be refreshed</li>
                                <li>Press <span class="ex_desc_btn_name">&#x1f441;</span>. You will be given You will be given the answer for the generated time</li>
                                <li>Press <span class="ex_desc_btn_name">&#x21bb;</span> to reset statistics for this exercise</li>
                            </lo>
                            <div class="ex_note">
                                <p class="small"><em>You can do this exercise as many times as you wish</em>
                                </p>
                            </div>`,
        btnGenerateTxt: "Generate time",
        taskTxt: "Enter 24-hour time",
        defaultGeneratedTxt: DEFAULT_GENERATED_TEXT_TIME,
        inputPlaceholder: "hh:mm",
        inputPattern: "[012][0123456789]:[012345][0123456789]"
    },
    {
        id: "exercise_2",
        htmlcomment: `<!--13:12 -> 01:12 pm-->`,
        title:"12-hour time format",
        description: "Convert the time from the 24-hour format into 12-hour format",
        instructionHTML: `   <lo>
                                <li>Press <span class="ex_desc_btn_name">&#9850;</span>. The time in 24-hour time format will be generated for you</li>
                                <li>Input the same time in 12-hour time format (hh:mm am/pm) into an input field</li>
                                <li>Press <span class="ex_desc_btn_name">&#x2714;</span>. You will be given the check result. This exercise statistics will be refreshed</li>
                                <li>Press <span class="ex_desc_btn_name">&#x1f441;</span>. You will be given You will be given the answer for the generated time</li>
                                <li>Press <span class="ex_desc_btn_name">&#x21bb;</span> to reset statistics for this exercise</li>
                              </lo>
                            <div class="ex_note">
                                <p class="small"><em>You can do this exercise as many times as you wish</em></p>
                            </div>`,
        btnGenerateTxt: "Generate time",
        taskTxt: "Enter 12-hour time",
        defaultGeneratedTxt: DEFAULT_GENERATED_TEXT_TIME,
        inputPlaceholder: "hh:mm am/pm",
        inputPattern: "[012][0123456789]:[012345][0123456789][ap]m"
    },
    {
        id: "exercise_3",
        htmlcomment: `<!--therteen twenty -> 01:12 pm-->`,
        title:"Understand the written time",
        description: "Read the time and write it in 12-hour format correctly",
        instructionHTML: `  <lo>
                                <li>Press <span class="ex_desc_btn_name">&#9850;</span>. The time describtion will be generated for you</li>
                                <li>Write the same time in 12-hour time format (hh:mm am/pm) into an input field</li>
                                <li>Press <span class="ex_desc_btn_name">&#x2714;</span>. You will be given the check result. This exercise statistics will be refreshed</li>
                                <li>Press <span class="ex_desc_btn_name">&#x1f441;</span>. You will be given You will be given the answer for the generated time</li>
                                <li>Press <span class="ex_desc_btn_name">&#x21bb;</span> to reset statistics for this exercise</li>
                            </lo>
                            <div class="ex_note">
                                <p class="small"><em>You can do this exercise as many times as you wish</em></p>
                            </div>`,
        btnGenerateTxt: "Generate text",
        taskTxt: "Enter the time",
        defaultGeneratedTxt: DEFAULT_GENERATED_TEXT,
        inputPlaceholder: "hh:mm am/pm",
        inputPattern: "[012][0123456789]:[012345][0123456789][ap]m"
    },
    {
        id: "exercise_4",
        htmlcomment: `<!--01:12 pm -> therteen twenty-->`,
        title:"Read time in 24-hour format and write time correctly in TV/Time table format",
        description: "Convert the time from the 12-hour format into 24-hour format",
        instructionHTML: ` <lo>
                                <li>Press <span class="ex_desc_btn_name">&#9850;</span>. The time in 12-hour format will be generated for you</li>
                                <li>Write the same time in TV/Time tables time format into an input field</li>
                                <li>Press <span class="ex_desc_btn_name">&#x2714;</span>. You will be given the check result. This exercise statistics will be refreshed</li>
                                <li>Press <span class="ex_desc_btn_name">&#x1f441;</span>. You will be given You will be given the answer for the generated time</li>
                                <li>Press <span class="ex_desc_btn_name">&#x21bb;</span> to reset statistics for this exercise</li>
                            </lo>
                            <div class="ex_note">
                                <p class="small"><em>You can do this exercise as many times as you wish</em></p>
                            </div>`,
        btnGenerateTxt: "Generate time",
        taskTxt: "Enter text",
        defaultGeneratedTxt: DEFAULT_GENERATED_TEXT_TIME,
        inputPlaceholder: "Input your time spelling",
        inputPattern: ""
    },
    {
        id: "exercise_5",
        htmlcomment: `<!--thirty past two-> 02:30; thirty past one-> 01:30;-->`,
        title:"Understand the general time format",
        description: "Read the time and write it in the 12-hour time format",
        instructionHTML: `  <lo>
                                <li>Press <span class="ex_desc_btn_name">&#9850;</span>. The time description will be generated for you</li>
                                <li>Rewrite the same time in the hh:mm am/pm format into an input field</li>
                                <li>Press <span class="ex_desc_btn_name">&#x2714;</span>. You will be given the check result. This exercise statistics will be refreshed</li>
                                <li>Press <span class="ex_desc_btn_name">&#x1f441;</span>. You will be given You will be given the answer for the generated time</li>
                                <li>Press <span class="ex_desc_btn_name">&#x21bb;</span> to reset statistics for this exercise</li>
                            </lo>
                            <div class="ex_note">
                                <p class="small"><em>You can do this exercise as many times as you wish</em></p>
                            </div>`,
        btnGenerateTxt: "Generate text",
        taskTxt: "Enter the time",
        defaultGeneratedTxt: DEFAULT_GENERATED_TEXT,
        inputPlaceholder: "hh:mm am/pm",
        inputPattern: ""
    },
    {
        id: "exercise_6",
        htmlcomment: ` <!-- 02:30->thirty past two/half past two; 01:30 am-> thirty past one am/ a half past one am;-->`,
        title:"Write in the time with to/past",
        description: "Read the 12-hour time and rewrite it with to/past preposition",
        instructionHTML: `  <lo>
                                <li>Press <span class="ex_desc_btn_name">&#9850;</span>. The time in 12-hour format will be generated for you</li>
                                <li>Rewrite the same time correctly using 'past' and 'to' prepositions into an input field</li>
                                <li>Press <span class="ex_desc_btn_name">&#x2714;</span>. You will be given the check result. This exercise statistics will be refreshed</li>
                                <li>Press <span class="ex_desc_btn_name">&#x1f441;</span>. You will be given You will be given the answer for the generated time</li>
                                <li>Press <span class="ex_desc_btn_name">&#x21bb;</span> to reset statistics for this exercise</li>
                            </lo>
                            <div class="ex_note">
                                <p class="small"><em>You can do this exercise as many times as you wish</em></p>
                            </div>`,
        btnGenerateTxt: "Generate time",
        taskTxt: "Enter text",
        defaultGeneratedTxt: DEFAULT_GENERATED_TEXT_TIME,
        inputPlaceholder: "Input your time spelling",
        inputPattern: ""
    }    
]
let wholeStatistics = {
    "exercise_1": {
        count: 0,
        errors: 0,
        success: 0,
        successPercent: 0,
        errorPercent: 0,
        defaultGeneratedText: DEFAULT_GENERATED_TEXT_TIME
    },
    "exercise_2": {
        count: 0,
        errors: 0,
        success: 0,
        successPercent: 0,
        errorPercent: 0,
        defaultGeneratedText: DEFAULT_GENERATED_TEXT_TIME
    },
    "exercise_3": {
        count: 0,
        errors: 0,
        success: 0,
        successPercent: 0,
        errorPercent: 0,
        defaultGeneratedText: DEFAULT_GENERATED_TEXT
    },
    "exercise_4": {
        count: 0,
        errors: 0,
        success: 0,
        successPercent: 0,
        errorPercent: 0,
        defaultGeneratedText: DEFAULT_GENERATED_TEXT_TIME
    },
    "exercise_5": {
        count: 0,
        errors: 0,
        success: 0,
        successPercent: 0,
        errorPercent: 0,
        defaultGeneratedText: DEFAULT_GENERATED_TEXT
    },
    "exercise_6": {
        count: 0,
        errors: 0,
        success: 0,
        successPercent: 0,
        errorPercent: 0,
        defaultGeneratedText: DEFAULT_GENERATED_TEXT_TIME
    }
}
const TV_TIME_SPELLING = {
    "00:00": ["midnight", "a midnight"],
    "12:00": ["midday","a midday", "noon", "a noon"],
    "24:00": ["midnight", "a midnight"],
    "hours":{
        "00": "midnight",
        "01": "one",
        "02": "two",
        "03": "three",
        "04": "four",
        "05": "five",
        "06": "six",
        "07": "seven",
        "08": "eight",
        "09": "nine",
        "10": "ten",
        "11": "eleven",
        "12": "twelve",
        "13": "thirteen",
        "14": "fourteen",
        "15": "fifteen",
        "16": "sixteen",
        "17": "seventeen",
        "18": "eighteen",
        "19": "ninteen",
        "20": "twenty",
        "21": "twenty one",
        "22": "twenty two",
        "23": "twenty three",
        "24": "twenty four"
    },
    "minuts": {
        "00": ["o' clock"],
        "01": ["one", "one minutes"],
        "02": ["two", "two minutes"],
        "03": ["three", "three minutes"],
        "04": ["four", "four minutes"],
        "05": ["five", "five minutes"],
        "06": ["six", "six minutes"],
        "07": ["seven", "seven minutes"],
        "08": ["ejght", "eight minutes"],
        "09": ["nine", "nine minutes"],
        "10": ["ten", "ten minutes"],
        "11": ["eleven", "eleven minutes"],
        "12": ["twelve", "twelve minutes"],
        "13": ["thirteen", "thrteen minutes"],
        "14": ["fourteen", "fourteen minutes"],
        "15": ["fifteen", "fifteen minutes"],
        "16": ["sixteen", "sixteen minutes"],
        "17": ["seventeen", "seventeen minutes"],
        "18": ["eighteen", "eighteen minutes"],
        "19": ["nineteen", "ninteen minutes"],
        "20": ["twenty", "twenty minutes"],
        "21": ["twenty one", "twenty one minutes"],
        "22": ["twenty two", "twenty two minutes"],
        "23": ["twenty three", "twenty three minutes"],
        "24": ["twenty four", "twenty four minutes"],
        "25": ["twenty five", "twenty five minutes"],
        "26": ["twenty six", "twenty six minutes"],
        "27": ["twenty seven", "twenty seven minutes"],
        "28": ["twenty eight", "twenty eight minutes"],
        "29": ["twenty nine", "twenty nine minutes"],
        "30": ["thirty", "thirty minutes"],
        "31": ["thirty one", "thirty one minutes"],
        "32": ["thirty two","thirty two minutes"],
        "33": ["thirty three", "thirty three minutes"],
        "34": ["thirty four", "thirty four minutes"],
        "35": ["thirty five", "thirty five minutes"],
        "36": ["thirty six", "thirty six minutes"],
        "37": ["thirty seven", "thirty seven minutes"],
        "38": ["thirty eight", "thirty eight minutes"],
        "39": ["thirty nine", "thirty nine minutes"],
        "40": ["fourty", "fourty minutes"],
        "41": ["fourty one", "fourty one minutes"],
        "42": ["fourty two", "fourty two minutes"],
        "43": ["fourty three", "fourty three minutes"],
        "44": ["fourty four", "fourty four minutes"],
        "45": ["fourty five", "fourty five minutes"],
        "46": ["fourty six", "fourty six minutes"],
        "47": ["fourty seven", "fourty seven minutes"],
        "48": ["fourty eight", "fourty eight minutes"],
        "49": ["fourty nine", "fourty nine minutes"],
        "50": ["fifty", "fifty minutes"],
        "51": ["fifty one", "fifty one minutes"],
        "52": ["fifty two", "fifty two minutes"],
        "53": ["fifty three", "fifty three minutes"],
        "54": ["fifty four", "fifty four minutes"],
        "55": ["fifty five", "fifty five minutes"],
        "56": ["fifty six", "fifty six minutes"],
        "57": ["fifty seven", "fifty seven minutes"],
        "58": ["fifty eight", "fifty eight minutes"],
        "59": ["fifty nine", "fifty nine minutes"]
    }
}
const TIME_SPELLING = {
    "00:00": ["midnight", "a midnight"],
    "12:00": ["midday","a midday", "noon", "a noon"],
    "24:00": ["midnight", "a midnight"],
    "past": {
        "pastHours": {
            "00": ["midnight"],
            "01": ["one"],
            "02": ["two"],
            "03": ["three"],
            "04": ["four"],
            "05": ["five"],
            "06": ["six"],
            "07": ["seven"],
            "08": ["eight"],
            "09": ["nine"],
            "10": ["ten"],
            "11": ["eleven"],
            "12": ["midday", "noon"],
            "13": ["one"],
            "14": ["two"],
            "15": ["three"],
            "16": ["four"],
            "17": ["five"],
            "18": ["six"],
            "19": ["seven"],
            "20": ["eight"],
            "21": ["nine"],
            "22": ["ten"],
            "23": ["eleven"],
            "24": ["midnight"]
        },
        "00": ["o' clock"],
        "01": ["one", "one minute"],
        "02": ["two", "two minutes"],
        "03": ["three", "three minutes"],
        "04": ["four", "four minutes"],
        "05": ["five", "five minutes"],
        "06": ["six", "six minutes"],
        "07": ["seven", "seven minutes"],
        "08": ["eight", "eight minutes"],
        "09": ["nine", "nine minutes"],
        "10": ["ten", "ten minutes"],
        "11": ["eleven", "eleven minutes"],
        "12": ["twelve", "twelve minutes"],
        "13": ["thirteen", "thirteen minutes"],
        "14": ["fourteen", "fourteen minutes"],
        "15": ["quarter", "a quarter", "fifteen", "fifteen minutes"],
        "16": ["sixteen", "sixteen minutes"],
        "17": ["seventeen", "seventeen minutes"],
        "18": ["eighteen", "eighteen minutes"],
        "19": ["nineteen", "nineteen minutes"],
        "20": ["twenty", "twenty minutes"],
        "21": ["twenty one", "twenty one minutes"],
        "22": ["twenty two", "twenty two minutes"],
        "23": ["twenty three", "twenty three minutes"],
        "24": ["twenty four", "twenty four minutes"],
        "25": ["twenty five", "twenty five minutes"],
        "26": ["twenty six", "twenty six minutes"],
        "27": ["twenty seven", "twenty seven minutes"],
        "28": ["twenty eight", "twenty eight minutes"],
        "29": ["twenty nine", "twenty nine minutes"],
        "30": ["half", "a half", "two quarters", "thirty minutes"],
    },
    "to": {
        "toTime":{
            "12:00":["noon"]
        },
        "toHours": {
            "00": "one",
            "01": "two",
            "02": "three",
            "03": "four",
            "04": "five",
            "05": "six",
            "06": "seven",
            "07": "eight",
            "08": "nine",
            "09": "ten",
            "10": "eleven",
            "11": "midday",
            "12": "one",
            "13": "two",
            "14": "three",
            "15": "four",
            "16": "five",
            "17": "six",
            "18": "seven",
            "19": "eight",
            "20": "nine",
            "21": "ten",
            "22": "eleven",
            "23": "midnight",
            "24": "one"
        },
        "31": ["twenty nine", "twenty nine minutes"],
        "32": ["twenty two", "twenty eight minutes"],
        "33": ["twenty three", "twenty seven minutes"],
        "34": ["twenty six", "twenty six minutes"],
        "35": ["twenty five", "twenty five minutes"],
        "36": ["twenty four", "twenty four minutes"],
        "37": ["twenty three", "twenty three minutes"],
        "38": ["twenty two", "twenty two minutes"],
        "39": ["twenty one", "twenty one minutes"],
        "40": ["twenty", "twenty minutes"],
        "41": ["nineteen", "ninteen minutes"],
        "42": ["eighteen", "eigthteen minutes"],
        "43": ["seventeen", "seventeen minutes"],
        "44": ["sixteen", "sixteen minutes"],
        "45": ["fifteen", "fifteen minutes", "quarter", "a quarter"],
        "46": ["fourteen", "fouteen minutes"],
        "47": ["thirteen", "thirteen minutes"],
        "48": ["twelve", "twelve minutes"],
        "49": ["eleven", "eleven minutes"],
        "50": ["ten", "ten minutes"],
        "51": ["nine", "nine minutes"],
        "52": ["eight", "eight minutes"],
        "53": ["seven", "seven minutes"],
        "54": ["six", "six minutes"],
        "55": ["five", "five minutes"],
        "56": ["four", "four minutes"],
        "57": ["three", "three minutes"],
        "58": ["two", "two minutes"],
        "59": ["one", "one minutes"]
    }
}
class JSUtilities{
    constructor(){}
    static addExcercisesType1ToDom(){
        $("#execise_cards").html("");
        if (exercisesType1Array.length > 0){
            for(let i = 0; i < exercisesType1Array.length; i++){
                let ex = exercisesType1Array[i];
                let exDIVhtml = `
                ${ex.htmlcomment}
                <div class="card card-img border-0">
                    <div class="card-wraper card shadow py-3" style="background-image: url(bgImg.png);background-size:cover;background-position: top left;background-repeat: no-repeat;background-size: cover;">
                        <div class="text-center align-items-center rgba-grey-strong my-2 p-3">
                            <h3 class="card-title responsive-h3"><strong>${i + 1}. ${ex.title}</strong></h3>
                            <p class="">${ex.description}</p>
                            <a href="#${ex.id}" class="btn btn-primary waves-effect waves-light" ><i class="fas fa-pen-alt pr-2"></i>More info</a>
                        </div>
                    </div>
                </div>
                `;
                $("#execise_cards").append($(exDIVhtml));
            }
        }
    }
    static addExcercisesType1BlocksToDom(){
        let sections = $("#exercises section");
        if (sections.length > 0 ){
            $("#exercises section").remove();
        }
        if (exercisesType1Array.length > 0){
             for(let i = 0; i < exercisesType1Array.length; i++){
                let ex = exercisesType1Array[i];
                let exBlockHTML = `
                                   <section id="${ex.id}" class="ex_block">
                                    <h2>Exercise ${i + 1}. ${ex.title}</h2>
                                    <div class="ex_description container">
                                        <div class="card">
                                            <div class="card-header">
                                             ${ex.description}
                                            </div>
                                            <div class="card-body">
                                            <h5 class="card-title">Instruction</h5>
                                            <div class="card-text">
                                               ${ex.instructionHTML}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="exercise_wrapper">
                                        <div class="c_statistics">
                                            <div class="ex_statistic">
                                                <h4 class="ex_total small">
                                                <span>Total: <span class="ex_total_number">0</span>time/s</span>
                                                <button type="button" for="${ex.id}" class="btn btn-secondary ex_reset_statistics">&#x21bb;</button>
                                                </h4>
                                            </div>
                                            <div class="progress">
                                                <div class="progress-bar progress-bar-success" role="progressbar" title="0%" style="width:0%">
                                                </div>
                                                <div class="progress-bar progress-bar-danger" role="progressbar" title="0%" style="width:0%">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ex_body container">
                                            <div class="ex_wrapper">
                                                <div>
                                                    <button for="${ex.id}" type="button" class="btn btn-primary generate_time ml-0">&#9850;</button>
                                                    <button disabled for="${ex.id}" type="button" class="btn btn-primary ex_check">&#x2714;</button>
                                                    <button disabled for="${ex.id}" type="button" class="btn btn-primary ex_show_answer">&#x1f441;</button>
                                                </div>
                                                <div class="time_wrapper">
                                                    <div class="ex_task_wrapper mb-3">
                                                        <div class="task-cell ex_task">${DEFAULT_BTN_GENERATED_VAL_TXT}</div>
                                                        <span class="time-format"></span>
                                                        <span class="badge badge-primary ex_text_show">${ex.defaultGeneratedTxt}</span>
                                                    </div>
                                                    <div class="ex_answer_wrapper mb-3">
                                                        <div class="task-cell ex_task">${ex.taskTxt}</div>
                                                        <input disabled type="text" placeholder="${ex.inputPlaceholder}" for="${ex.id}" data-answer="" pattern="${ex.inputPattern}" class="ex_answer text-center"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </section>`;
                                $("#exercises").append($(exBlockHTML));
            }
        }
    }
    static calculateStatistic(count = 0, errors = 0, success = 0){
        let successPercent = 0;
        let errorPercent = 0;
        if (count == 0){
            success = 0;
            errors = 0;
        } else if (count > 0){
            successPercent = Math.round(100 * (count - erorrs) / count);
            errorPercent =  Math.round(100 * (count - success) / count);
        }
        let statistic = {
            count: count,
            successPercent: successPercent,
            errorPercent: errorPercent
        }
        return statistic;
    }
    static resetStatistics(sectionId = -1){
        if (sectionId != -1){
            //reset statistics for one particular exercise
            JSUtilities.resetStatisticForExercise(sectionId);
            JSUtilities.setProgress(sectionId);
        } else{
            //reset statistics for all exercises
            for(var key in wholeStatistics) {
                JSUtilities.resetStatisticForExercise(key);
                JSUtilities.setProgress(key);
            }
        }
    }
    static resetStatisticForExercise(sectionId = -1){
        if (sectionId != -1){
            wholeStatistics[sectionId].count = 0;
            wholeStatistics[sectionId].errors = 0;
            wholeStatistics[sectionId].success = 0;
            wholeStatistics[sectionId].errorPercent = 0;
            wholeStatistics[sectionId].successPercent = 0;
        }
    }
    static resetProgressBar(sectionId){
        if (sectionId != -1){
            let elt = $(`#${sectionId}`);
            if (elt.length > 0){
                //total
                let totalElt = elt.find("span.ex_total_number");
                totalElt.text(`0 `);
            }
            //success
            let successElt = elt.find(".progress-bar-success");
            successElt[0].setAttribute("style", "width: 0%");
            successElt[0].setAttribute("title", "0%");
            successElt[0].innerText = "";
            //error
            let errorElt = elt.find(".progress-bar-danger");
            errorElt[0].setAttribute("style", "width: 0%");
            errorElt[0].setAttribute("title", "0%");
            errorElt[0].innerText = "";
        }
    }
    static setProgress(sectionId = -1){
        if (sectionId != -1){
            let sObj = wholeStatistics[sectionId];
            if (sObj == undefined){
                sObj =  {
                    count: 0,
                    successPercent: 0,
                    errorPercent: 0
                }
            }
            let elt = $(`#${sectionId}`);
            if (elt.length > 0){
                //total
                let totalElt = elt.find("span.ex_total_number");
                totalElt.text(`${sObj.count} `);
            }
            //success
            let successElt = elt.find(".progress-bar-success");
            if (sObj.count != 0){
                successElt[0].setAttribute("style", `width: ${sObj.successPercent}%`);
                successElt[0].setAttribute("title", `"${sObj.successPercent}%"`);
                successElt[0].innerText = `Success ${sObj.successPercent}%`;
            } else if (successElt.length != 0){
                successElt[0].setAttribute("style", "width: 0%");
                successElt[0].setAttribute("title", "0%");
                successElt[0].innerText = "";
            }
            //error
            let errorElt = elt.find(".progress-bar-danger");
            if (sObj.count != 0){
                errorElt[0].setAttribute("style", `width: ${sObj.errorPercent}%`);
                errorElt[0].setAttribute("title", `"${sObj.errorPercent}%"`);
                errorElt[0].innerText = `Errors ${sObj.errorPercent}%`;
            } else if (errorElt.length != 0){
                errorElt[0].setAttribute("style", "width: 0%");
                errorElt[0].setAttribute("title", "0%");
                errorElt[0].innerText = "";
            }
        }
    }
    static resetClassesForAnswerInput(inputElt){
        let elt = $(inputElt);
        if (elt.hasClass("invalid_value")){
            elt.removeClass("invalid_value");
        }
        if (elt.hasClass("valid_value")){
            elt.removeClass("valid_value");
        }
    }
    static checkInputValue(e, inputId){
        let elt = $(`#${inputId}`);
        let val = elt.val();
        let right_val = elt.attr("data-answer");
        if (elt.hasClass("invalid_value")){
            elt.removeClass("invalid_value");
        }
        if (elt.hasClass("valid_value")){
            elt.removeClass("valid_value");
        }
        if (val == right_val){
            elt.addClass("valid_value")
        } else{      
            elt.addClass("invalid_value")
        }
    }
    static checkValueIsValid(e, eltId){
        let res = false;
        let elt = $(`#${eltId}`);
        let val = elt.val();
        let right_val = elt.attr("data-answer");
        if (val == right_val){
            res = true;
        } 
        return res;
    }
    static clearTimeInput(inputId ){
        let inputElt = $(`#${inputId}`);
        if (inputElt.length >0){
            $(`#${inputId}`).val("");
        }
    }
    static setClassesToAnswerElt(inputEt, user_answer, correct_answer){
        let elt = $(inputEt);
        let id = elt.attr("for");
        if (elt.hasClass("invalid_value")){
            elt.removeClass("invalid_value");
        }
        if (elt.hasClass("valid_value")){
            elt.removeClass("valid_value");
        }
        switch(id){
            case "exercise_1": case "exercise_2": case "exercise_3": case "exercise_4":
                case "exercise_5": {
                    if (user_answer == correct_answer){
                        elt.addClass("valid_value");
                    } else{      
                        elt.addClass("invalid_value");
                    }
                break;
            }
            case "exercise_6":{
                let allcorrectAnswers = correct_answer.split(';')
                if (allcorrectAnswers.indexOf(user_answer) != -1){
                    elt.addClass("valid_value");
                } else{      
                    elt.addClass("invalid_value");
                }
                break;
            }
            default:{
                break;
            }
        }
    }
    static checkAnsverIsCorrect(inputEt){
        let elt = $(inputEt);
        let result = false;
        let user_answer = elt.val();
        let correct_answer = elt.attr("data-answer");
        JSUtilities.setClassesToAnswerElt(elt, user_answer, correct_answer);
        let id = elt.attr("for");
        switch(id){
            case "exercise_1": case "exercise_2": case "exercise_3": case "exercise_4":
                case "exercise_5": {
                    if (user_answer == correct_answer){
                        result = true;
                    } 
                break;
            }
            case "exercise_6":{
                let allcorrectAnswers = correct_answer.split(';')
                if (allcorrectAnswers.indexOf(user_answer) != -1){
                    result = true;
                }
                break;
            }
            default:{
                break;
            }
        }
        if (user_answer == correct_answer){
            result = true;
        } 
        return result;
    }
    static addListenersToDOM(){
        $(".generate_time").click(function(e) {
            let btn_elt = $(e.target);
            let id = ControlsActions.getSectionIdFromForAttr(e);
            ControlsActions.addCountsOnGenerate(id);
            ControlsActions.disableElt(btn_elt);
            let timeObj = ControlsActions.generateTimeFullObj();
            let text = ControlsActions.getTextToShowOnGenerate(id, timeObj);
            ControlsActions.showGeneratedExpression(id, text);
            let answerInputElt = ControlsActions.addAnswerOnGenerate(id, timeObj);
            $(answerInputElt).val("");
            JSUtilities.resetClassesForAnswerInput(answerInputElt);
            ControlsActions.enableElt(answerInputElt);
            ControlsActions.enableCheckBtn(id);
            let showAnswerElt = btn_elt.parent().find(".ex_show_answer")[0];
            ControlsActions.enableElt(showAnswerElt);
            console.log(timeObj);
            console.log(wholeStatistics[id]);
        });
        $(".ex_check").click(function(e) {
            let btn_elt = $(e.target);
            let id = ControlsActions.getSectionIdFromForAttr(e);
            let generateElt = btn_elt.parent().find(".generate_time")[0];
            let answerInputElt = btn_elt.parent().parent().parent().find("input.ex_answer")[0];
            let answerIsCorrext = JSUtilities.checkAnsverIsCorrect(answerInputElt);
            if (answerIsCorrext == true){
                ControlsActions.enableElt(generateElt);
                ControlsActions.disableElt(btn_elt);
                let showAnswerElt = btn_elt.parent().find(".ex_show_answer")[0];
                ControlsActions.disableElt(showAnswerElt);
                ControlsActions.addSuccessTostatistics(id);
                JSUtilities.setProgress(id);
            } else{
                console.log("incorrect answer");
                ControlsActions.addErrorTostatistics(id);
                JSUtilities.setProgress(id);
            }
        }); 
        $(".ex_show_answer").click(function(e) {
            let btn_elt = $(e.target);
            let id = ControlsActions.getSectionIdFromForAttr(e);
            let generateElt = btn_elt.parent().find(".generate_time")[0];
            let answerInputElt = btn_elt.parent().parent().parent().find("input.ex_answer")[0];
            let checkElt = btn_elt.parent().find(".ex_check")[0];
            let answer = answerInputElt.getAttribute("data-answer");
            answerInputElt.value = answer;
            ControlsActions.removeCountsOnShowAnswer(id);
            JSUtilities.setProgress(id);
            ControlsActions.enableElt(generateElt);
            ControlsActions.disableElt(btn_elt);
            ControlsActions.disableElt(checkElt);
        });         
        $(".ex_reset_statistics").click(function(e) {
            let btn_elt = $(e.target);
            let id = ControlsActions.getSectionIdFromForAttr(e);
            let answerInputElt = btn_elt.parent().parent().parent().parent().find("input.ex_answer")[0];
            let checkBtn = btn_elt.parent().parent().parent().parent().find(".ex_check")[0];
            ControlsActions.disableElt(checkBtn);
            $(answerInputElt).val("");
            JSUtilities.resetStatisticForExercise(id);
            JSUtilities.resetProgressBar(id);
            JSUtilities.resetClassesForAnswerInput(answerInputElt);
            let generateElt = btn_elt.parent().parent().parent().parent().find(".generate_time")[0];
            ControlsActions.enableElt(generateElt);
            ControlsActions.showGeneratedExpression(id, wholeStatistics[id].defaultGeneratedText);
        });
        $("button.ex_reset_statistics").click(function(e){
            let section = $(e.target).parent().parent().parent().parent().parent().parent();
            let sectionId = section[0].id;
            JSUtilities.setProgress(sectionId);
        });
        $("button.ex_statistic_test").click(function(e){
            let section = $(e.target).parent().parent().parent().parent().parent().parent();
            let sectionId = section[0].id;
            JSUtilities.setProgress(sectionId);
        });
        $("button#resetAll").click(function(e){
            JSUtilities.resetStatistics();
            let allAnswerInputs = $(".ex_answer");
            for (let i=0; i < allAnswerInputs.length; i++){
                let elt = $(allAnswerInputs[i]);
                if (elt.hasClass("invalid_value")){
                    elt.removeClass("invalid_value");
                }
                if (elt.hasClass("valid_value")){
                    elt.removeClass("valid_value");
                }
            }
        });
    }
    static checkIsMidTime(timeObj){
        let result = false;
        let full12Time = `${timeObj["12"].h1}${timeObj["12"].h2}:${timeObj["12"].m1}${timeObj["12"].m2}`;
        let full24Time = `${timeObj["24"].h1}${timeObj["24"].h2}:${timeObj["24"].m1}${timeObj["24"].m2}`
        if ( TIME_SPELLING[full12Time] !== undefined || TIME_SPELLING[full24Time] !== undefined ){
            result = true;
        }
        return result;
    }
    static checkIs12Hours(str){
        let result = false;
        if ( str == "12" ){
            result = true;
        }
        return result;
    }
    static checkIs24Hours(str){
        let result = false;
        if(str == "24"){
            result = true;
        }
        return result;
    }
    static getTimeToSpellings(timeObj){
        let spellings = [];
        let hh12 = timeObj["12"].hh12;
        let hh24Int = parseInt(timeObj["24"].hh24);
        let mm = timeObj["12"].mm;
        let period = " " + JSUtilities.getPeriodSpelling(timeObj);
        if (hh24Int == 11 || hh24Int == 23){
            period = "";
        }
        if (TIME_SPELLING["to"][mm] != undefined){
            let allwords = TIME_SPELLING["to"][mm];
            for (let i = 0; i < allwords.length; i++){
                let toPrase = `${TIME_SPELLING["to"][mm][i]} to ${TIME_SPELLING["to"]["toHours"][hh12]}${period}`;
                spellings.push(toPrase);
            }
        }       
        return spellings;
    }
    static getTimePastSpellings(timeObj){
        let spellings = [];
        let hh12 = timeObj["12"].hh12;
        let mm = timeObj["12"].mm;
        let hh24Int = parseInt(timeObj["24"].hh24);
        let period = " " + JSUtilities.getPeriodSpelling(timeObj);
        if (hh24Int == 12 || hh24Int == 24){
            period = "";
        }
        if (TIME_SPELLING["past"][mm] != undefined){
            let allwords = TIME_SPELLING["past"][mm];
            for (let i = 0; i < allwords.length; i++){
                let toPrase = `${TIME_SPELLING["past"][mm][i]} past ${TIME_SPELLING["past"]["pastHours"][hh12]}${period}`;
                spellings.push(toPrase);
            }
        }       
        return spellings;
    }
    static getTimeClockSpelling(timeObj){
        let hh12 = timeObj["12"].hh12;
        let period = JSUtilities.getPeriodSpelling(timeObj);
        let spelling = `${TV_TIME_SPELLING["hours"][hh12]} o'clock ${period}`;
        return spelling;
    }
    static getPeriodSpelling(timeObj){
        return timeObj["12"].isPM? "pm" : "am";
    }
}
class TimeUtilites{
    constructor(){}
    static getFullTimeFormat(timeObj){
        let timeFullObj = {
            //it is time am by default
            "id": count,
            "24": {
                fullTime: `${timeObj.h1}${timeObj.h2}:${timeObj.m1}${timeObj.m2}`,
                hh24: `${timeObj.h1}${timeObj.h2}`,
                h1: timeObj.h1,
                h2: timeObj.h2,
                mm: `${timeObj.m1}${timeObj.m2}`,
                m1: timeObj.m1,
                m2: timeObj.m2,
                isPM: timeObj.isPM
            },
            "12": {
                fullTime: `${timeObj.h1}${timeObj.h2}:${timeObj.m1}${timeObj.m2}`,
                hh12: `${timeObj.h1}${timeObj.h2}`,
                h1: timeObj.h1,
                h2: timeObj.h2,
                mm: `${timeObj.m1}${timeObj.m2}`,
                m1: timeObj.m1,
                m2: timeObj.m2,
                isPM: timeObj.isPM
            }
        }
        if (timeObj.isPM){
            let fh1;
            let fh2;
            let h1 = `${timeObj.h1}`;
            let h2 = `${timeObj.h2}`;
            let int24 = parseInt(10*h1) + parseInt(h2);
            let difHoursStr = (int24 - 12).toString();
            if (int24 > 21 && int24 < 24){
                fh1 = difHoursStr[0];
                fh2 = difHoursStr[1];
            } else if (int24 == 24){
                fh1 = `1`;
                fh2 = `2`;
            } else{
                fh1 = "0";
                fh2 = difHoursStr;
            }
            let ft24 = `${h1}${h2}:${timeObj.m1}${timeObj.m2}`;
            let ft12  = `${fh1}${fh2}:${timeObj.m1}${timeObj.m2}`
            timeFullObj = {
                //it is time am by default
                "id": count,
                "24": {
                    hh24: `${h1}${h2}`,
                    fullTime: ft24,
                    h1: timeObj.h1,
                    h2: timeObj.h2,
                    mm: `${timeObj.m1}${timeObj.m2}`,
                    m1: timeObj.m1,
                    m2: timeObj.m2,
                    isPM: timeObj.isPM
                },
                "12": {
                    hh12: `${fh1}${fh2}`,
                    fullTime: ft12,
                    h1: fh1,
                    h2: fh2,
                    mm: `${timeObj.m1}${timeObj.m2}`,
                    m1: timeObj.m1,
                    m2: timeObj.m2,
                    isPM: timeObj.isPM
                }
            }
        }
        //console.log(timeFullObj);
        return timeFullObj;
    }
    static generateTime(){
        // returns a random integer from 0 to 2
        let hourSecond = Math.floor(Math.random() * 10);
        let hourFirst = Math.floor(Math.random() * 2);
        if (hourSecond <= 4){
            hourFirst = Math.floor(Math.random() * 3);
        }
        let minutFirst = Math.floor(Math.random() * 6);
        let minutSecond = Math.floor(Math.random() * 10);
        let isPM = parseInt(`${hourFirst}${hourSecond}`) > 12 ;
        return {
            h1: hourFirst,
            h2: hourSecond,
            m1: minutFirst,
            m2: minutSecond,
            isPM: isPM
        }
    }
    static getTVSpelling(timeFullFormatObj){
    }
}
class ControlsActions{
    constructor(){}
    static generateTimeFullObj(){
        let timeObj = TimeUtilites.generateTime();
        let fullTimeObj = TimeUtilites.getFullTimeFormat(timeObj);
        return fullTimeObj;
    }
    static getSectionIdFromForAttr(e){
        let btn_elt = $(e.target);
        let id = btn_elt[0].getAttribute("for");
        return id;
    }
    static addCountsOnGenerate(id){
        wholeStatistics[id].count = wholeStatistics[id].count + 1;
    }
    static removeCountsOnShowAnswer(id){
        wholeStatistics[id].count = wholeStatistics[id].count - 1;
         wholeStatistics[id].successPercent =  Math.round(100 * ((wholeStatistics[id].success)/wholeStatistics[id].count));
        wholeStatistics[id].errorPercent = Math.round(100 * ((wholeStatistics[id].errors)/wholeStatistics[id].count));
    }
    static addSuccessTostatistics(id){
        wholeStatistics[id].success = wholeStatistics[id].success + 1;
        wholeStatistics[id].successPercent =  Math.round(100 * ((wholeStatistics[id].success)/wholeStatistics[id].count));
        wholeStatistics[id].errorPercent = Math.round(100 * ((wholeStatistics[id].errors)/wholeStatistics[id].count));
    }   
    static addErrorTostatistics(id){
        wholeStatistics[id].count = wholeStatistics[id].count + 1;
        wholeStatistics[id].errors = wholeStatistics[id].errors + 1;
        wholeStatistics[id].successPercent =  Math.round(100 * ((wholeStatistics[id].success)/(wholeStatistics[id].count -1)));
        wholeStatistics[id].errorPercent = Math.round(100 * ((wholeStatistics[id].errors)/(wholeStatistics[id].count -1 )));
    }
    static addErrorTostatisticsMinusOne(id){
        wholeStatistics[id].errors = wholeStatistics[id].errors + 1;
        wholeStatistics[id].successPercent =  Math.round(100 * ((wholeStatistics[id].success)/wholeStatistics[id].count));
        wholeStatistics[id].errorPercent = Math.round(100 * ((wholeStatistics[id].errors)/(wholeStatistics[id].count-1)));
    }
    static getTextToShowOnGenerate(id, timeObj){
        let elt = $(`#${id}`);
        let text = "";
        switch(id){
            case "exercise_2":{
                let fullTime = timeObj["24"].fullTime;
                text = `${fullTime}`;
                break;
            }
            case "exercise_3":{
                let fullTime = timeObj["24"].fullTime;
                if (TV_TIME_SPELLING[fullTime] !== undefined){
                    //00:00, 12:00 or 24:00
                    text = TV_TIME_SPELLING[fullTime][0];
                } else{
                    let hoursSpelling = TV_TIME_SPELLING["hours"][timeObj["24"]["hh24"]];
                    let minutsSpelling = TV_TIME_SPELLING["minuts"][timeObj["24"]["mm"]][0];
                    text = `${hoursSpelling} ${minutsSpelling}`;
                }
                break;
            }
            case "exercise_1": case "exercise_4": case "exercise_6":{
                let fullTime = timeObj["12"].fullTime;
                let period = JSUtilities.getPeriodSpelling(timeObj);
                text = `${fullTime} ${period}`;
                break;
            }
            case "exercise_5":{
                let spellings = [];
                let minuts = `${timeObj["12"].m1}${timeObj["12"].m2}`;
                let hours24 = `${timeObj["24"].hh24}`;
                if (JSUtilities.checkIsMidTime(timeObj)){
                    //12:00 or 24:00 exactly
                    if (JSUtilities.checkIs12Hours(hours24) == true){
                        spellings = [`${TIME_SPELLING["12:00"]}`];
                    } else if (JSUtilities.checkIs24Hours(hours24) == true){
                        spellings = [`${TIME_SPELLING["24:00"]}`];
                    } else{
                        //00:00
                        spellings = [`${TIME_SPELLING["00:00"]}`];
                    }
                } else {
                    let minutsInt = parseInt(minuts);
                    if (minutsInt > 0 && minutsInt <= 30){
                        spellings = JSUtilities.getTimePastSpellings(timeObj);
                    } else if (minutsInt > 30 && minutsInt <= 59){
                        spellings = JSUtilities.getTimeToSpellings(timeObj);
                    } else{
                        //00 minutes
                        spellings = [JSUtilities.getTimeClockSpelling(timeObj)];
                    }
                }
                let randomIndex = 0;
                if(spellings.length > 0){
                    randomIndex = Math.floor(Math.random() * (spellings.length+1));
                }
                text = spellings[randomIndex];
                console.log(`The random time spelling: '${text}'`);
                break;
            }
            default:{
                text = "---";
                break;
            }
        }
        return text;
    }
    static showGeneratedExpression(id, expressionText=DEFAULT_GENERATED_TEXT){
        let elt = $(`#${id}`);
        elt.find("span.ex_text_show").text(expressionText);
    }
    static disableCheckBtn(id){
        let elt = $(`#${id}`);
        let checkElt = elt.find("button.ex_check")[0];
        ControlsActions.disableElt(checkElt);
    }
    static disableElt(elt){
        try{
            elt.setAttribute("disabled", "disabled");
        }
        catch(e){
            elt.attr("disabled", "disabled");
        }
    }
    static enableCheckBtn(id){
        let elt = $(`#${id}`);
        let checkElt = elt.find("button.ex_check")[0];
        ControlsActions.enableElt(checkElt);
    }
    static enableElt(elt){
        if (elt.hasAttribute("disabled")){
            elt.removeAttribute("disabled");
       }
    }
    static get12TimeText(timeObj){
        let period = timeObj["12"].isPM? "pm" : "am";
        let resText =`${timeObj["12"].fullTime} ${period}`;
       return resText;
    }
    static getTVSpellingText(timeObj){
        let text = "";
        let fullTime = timeObj["24"].fullTime;
        if (TV_TIME_SPELLING[fullTime] !== undefined){
            //00:00, 12:00 or 24:00
            text = TV_TIME_SPELLING[fullTime][0];
        } else{
            let hoursSpelling = TV_TIME_SPELLING["hours"][timeObj["24"]["hh24"]];
            let minutsSpelling = TV_TIME_SPELLING["minuts"][timeObj["24"]["mm"]][0];
            text = `${hoursSpelling} ${minutsSpelling}`;
        }
        return text;
    }
    static addAnswerOnGenerate(id, timeObj){
        let elt = $(`#${id}`);
        let answerElt = elt.find("input.ex_answer")[0];
        let timeText = "";
        switch(id){
            case "exercise_1":{
                timeText = timeObj["24"].fullTime;
                break;
            }
            case "exercise_2": case "exercise_3":{
                timeText = ControlsActions.get12TimeText(timeObj);
                break;
            }
            case "exercise_4":{
                timeText = ControlsActions.getTVSpellingText(timeObj);
                break;
            }
            case "exercise_5":{
                let period = JSUtilities.getPeriodSpelling(timeObj);
                timeText = `${timeObj["12"].fullTime} ${period}`;
                break;
            } 
            case "exercise_6":{
                let minutesInt = parseInt(timeObj["24"].mm);
                if (minutesInt > 0 && minutesInt < 31){
                    timeText = JSUtilities.getTimePastSpellings(timeObj).join(';');
                }
                else{
                    timeText = JSUtilities.getTimeToSpellings(timeObj).join(';');
                }
                break;
            }              
            default:{
                break;
            }
        }
        answerElt.setAttribute("data-answer", timeText);
        console.log(`timeText = ${timeText}`); 
        return answerElt;
    }
    static btnGenerate12TimeClicked(e){
       let timeObj = TimeUtilites.generateTime();
       let fullTimeObj = TimeUtilites.getFullTimeFormat(timeObj);
       console.log(fullTimeObj);
       let timeBlock = $("span#ex_12_time_show");
       let period = fullTimeObj[12].isPM == true? "pm" : "am"
       timeBlock[0].innerText = `${fullTimeObj[12].fullTime} ${period}`;
       $("#time_12_answer").attr("pattern", fullTimeObj[24].fullTime);
       let elt = $("#time_12_answer");
       if (elt.hasClass("invalid_value")){
            elt.removeClass("invalid_value")
       } else if (elt.hasClass("valid_value")){
            elt.removeClass("valid_value")
       }
       if (elt[0].hasAttribute("disabled")){
            elt[0].removeAttribute("disabled");
        }
       elt.val("");
       let btn_elt = $("button#check_12_time");
       if (btn_elt[0].hasAttribute("disabled")){
            btn_elt[0].removeAttribute("disabled");
       }
    }
    static btnGenerate24TimeClicked(e){
       let timeObj = TimeUtilites.generateTime();
       let fullTimeObj = TimeUtilites.getFullTimeFormat(timeObj);
       console.log(fullTimeObj);
       let timeBlock = $("span#ex_24_time_show");
       let period = fullTimeObj[12].isPM == true? "pm" : "am"
       timeBlock[0].innerText = `${fullTimeObj[24].fullTime}`;
       $("#time_24_answer").attr("pattern", `${fullTimeObj[12].fullTime} ${period}`);
       let elt = $("#time_24_answer");
       if (elt.hasClass("invalid_value")){
            elt.removeClass("invalid_value")
       } else if (elt.hasClass("valid_value")){
            elt.removeClass("valid_value")
       }
       if (elt[0].hasAttribute("disabled")){
            elt[0].removeAttribute("disabled");
        }
       elt.val("");
       let btn_elt = $("button#check_24_time");
       if (btn_elt[0].hasAttribute("disabled")){
            btn_elt[0].removeAttribute("disabled");
       }
    } 
}
$(document).ready(function(){
    JSUtilities.addExcercisesType1ToDom();
    JSUtilities.addExcercisesType1BlocksToDom();   
    JSUtilities.addListenersToDOM();
});