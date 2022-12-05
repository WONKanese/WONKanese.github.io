console.log("Welcome To The AWW");
var game = 0;

const english = ['','Hello', 'Hi', 'I', 'You', 'me', 'we', 'are', 'a', 'water', 'family', 'am', 'bad', 'not', 'good', 'is', 'dog', 'amazing', 'tree', 'human', 'people', 'car', 'poo', 'it', 'stop', 'dead', 'yet', 'dont', 'no', 'murder', 'do', 'the', 'will', 'like', 'cookie', 'very', 'your', 'eat', 'food', 'teeth', 'they', 'weird', 'cool', 'kill', 'how', 'with', 'there', 'because', 'at', 'baby', 'yes', 'have', 'frog', 'leg', 'jump', 'happy', 'excited', 'soggy', 'waffle', 'please', 'break', 'go', 'heart', 'cant', 'just', 'die', 'can', 'stupid', 'went', 'to', 'got', 'store', 'or', 'name', 'what', 'smell', 'angry', 'idiot', 'bed', 'door', 'and', 'breakfast', 'want', 'ok', 'now', 'sorry', 'cat', 'great', 'had', 'sleep', 'then', 'when', 'wish', 'hour', 'speak', 'way', 'that', 'im', 'thank', 'so', 'much', 'be', 'oh', 'table', 'let', 'attack', 'fat', 'alright', 'her', 'him', 'he', 'she', 'was', 'how', 'old', 'need', 'has', 'next', 'each', 'hamburger', 'same', 'all', 'elephant', 'make', 'kid', 'anyone', 'guy', 'today', 'tomorrow', 'play', 'tennis', 'tonight', 'night', 'wait', 'love', 'iâ€™ll', 'say', 'about', 'talk', 'shall', 'praise', 'best', 'language', 'country', 'forever', 'word', 'from', 'turn', 'on', 'volume', 'granola', 'bar', 'put', 'snow', 'does', 'taste', 'rule', 'distaste', 'truth', 'sense', 'skill', 'going', 'future', 'past', 'wonkanese', 'my', 'up', 'down', 'right', 'left', 'fuck', 'doing', 'indeed', 'through', 'this', 'wire', 'absolute', 'limit', 'balls', 'ball', 'big', 'small', 'dude', "its", "it's", "i'm", "but", "also", "of"];
const wonkanese = ['','Herro', 'Heb', 'Leb', 'di', 'moi', 'weed', 'ari', 'o', 'wader', 'famery', 'ma', 'bood', 'ned', 'gund', 'un', 'doggo', 'harrison', 'eod', 'bad', 'good', 'vroom', 'tote', 'ay', 'iet', 'iip', 'tey', 'ant', 'ned', 'mukduk', 'dood', 'tee', 'dil', 'lood', 'tredee', 'vado', 'yoor', 'mid', 'fud', 'muc', 'floo', 'weede', 'ilio', 'cal', 'towie', 'gier', 'teled', 'dababy', 'aiti', 'dabody', 'yoos', 'avid', 'bogd', 'rulu', 'deed', 'bloop', 'yelito', 'sowsi', 'bafalil', 'peed', 'baku', 'gad', 'hart', 'tanti', 'judi', 'didi', 'tant', 'stupide', 'sool', 'al', 'gado', 'overd', 'ore', 'nomod', 'uhid', 'lestod', 'andgust', 'idia', 'quix', 'stood', 'tos', 'adud', 'toot', 'ke', 'napa', 'sosari', 'cati', 'tim', 'sal', 'saoup', 'zood', 'send', 'wasod', 'alii', 'kayen', 'ewt', 'taiyo', 'lem', 'tank', 'la', 'such', 'boo', 'flun', 'tibet', 'tel', 'katod', 'abu', 'outoo', 'haya', 'hayo', 'ayo', 'aya', 'soup', 'towie', 'ond', 'nasood', 'haco', 'nexd', 'siya', 'meco', 'sami', 'alo', 'latooboo', 'kluka', 'blati', 'zasaloo', 'guen', 'huty', 'fliwo', 'lodtay', 'glumi', 'hutyshale', 'shale', 'abad', 'lexo', 'leedwild', 'deeto', 'blooz', 'tack', 'hoyod', 'present', 'gand', 'alapa', 'pribet', 'wonk', 'zallo', 'fram', 'royo', 'fo', 'block', 'rasoono', 'bar', 'plut', 'brod', 'ronk', 'tosto', 'kimo', 'distosto', 'erbuth', 'sinoth', 'casket', 'gading', 'zosoom', 'twisoom', 'wonkanese', 'moord', 'whoop', 'whoon', 'whit', 'whift', 'track', 'dooding', 'sloteez', 'whoold', 'twil', 'koir', 'cranti', 'handerp', 'loofts', 'looft', 'hoit', 'hosh', 'blaze', "ays", "ay's", "lem", "sou", "flare", "foo"];

const input = document.querySelector("input");
const wonkanese_output = document.getElementById('wonkout');

//goofy thing that I added
console.log("Would you like to play a game? (yes(); for yes and no(); for no)")
console.log(english);
function yes(){
    if (game == 0){
        console.log("Great!");
    }
}
function no(){
    if (game == 0){
        console.log("you are bad");
    }
}

function updateValue(e) { //convert english to wonkanese
    let display = "";
    
    let totrans = e.target.value.toLowerCase();
    let totransARR = totrans.split(" ");
    let finished_sentence = [];

    for (let i = 0; i < totransARR.length; i++){
        let completed_word = 0;
        let word_i;
        let non_english = "";

        for (let j = 1; j < english.length; j++){
            let line = english[j].toLowerCase();
            if(line == totransARR[i].toLowerCase()){
                completed_word = 1;
                word_i = j;
                break;
            }
            else{
                non_english = totransARR[i].toLowerCase();
            }
        }

        if(completed_word == 0){
            finished_sentence.push(non_english);
        }
        else{
            for (let k = 1; k < wonkanese.length; k++){
                if(k == word_i){
                    finished_sentence.push(wonkanese[k])
                    break;
                }
            }
        }
    }

    for (let i = 0; i < finished_sentence.length; i++){
        display += finished_sentence[i]
        display += " ";
    }
    wonkanese_output.textContent = display;
}
input.addEventListener('change', updateValue);
