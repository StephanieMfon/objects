// Question 1. INSTAGRAM POST OBJECT CONSTRUCTOR

function InstagramPost (authorHandle, content, imageLink, noOfViews, noOfLikes){
this.authorHandle = authorHandle,
this.content = content,
this.imageLink = imageLink,
this.noOfViews = noOfViews,
this.noOfLikes = noOfLikes
}


// Question 2. CREATE 2 INSTAGRAM POSTS

const musas_InstagramAccount = new InstagramPost('Musa6603', 'Nigeria our country', 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Nigeria_Flag.svg', '503 views👁‍🗨', '47💖');

const tiffanys_InstagramAccount = new InstagramPost('Tiffany_Hadish', 'Your choices determine your life!', 'https://cdn.britannica.com/31/198731-050-9A6FF03F/Tiffany-Haddish-2017.jpg', '734 567👁‍🗨', '327 900💖' );


//Question 3A. IMPLEMENT A CREATE PERSON FACTORY FUNCTION

function CreatePerson(name, age, location){
    return{
        name, 
        age, 
        location
    }
}

let musas_Log = CreatePerson('Musa Dawodu', 19, 'Lekki, Lagos State')

// Question 3B. IMPLEMENT A JAMB SCORES FACTORY FUNCTION

function JambScores(ENG, MATH, LIT, CRK){
    return{
        ENG,
        MATH,
        LIT,
        CRK
    }
}
// Musa's jamb scores
musas_Log.jambScores = JambScores(66, 79, 43, 77)




// Question 4. DIFFERENT WAYS TO CLONE AN OBJECT 
/*
Object.assign() `
The spread operator
JSON.parse(JSON.stringify())
etc*/

const football = {
    team: 'Chealsea',
    yearFounded: '10 March 1905',
    starPlayer: 'Enzo Jeremias Fernandez',
    noOfTrophies: 25
}

// Object.assign
const chealseaCopy1 = Object.assign({}, football);

// spread operator
const chealseaCopy2 = {...football};

// JSON.parse(JSON.stringify())
const chealseaCopy3 = JSON.parse(JSON.stringify(football));




// Question 5. NIGERIAN PRESIDENTIAL CANDIDATES OBJECT
const presidentialCandidates = {
    AAC : 'Omoleye Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar'
}

for(let party in presidentialCandidates){
    console.log(`${presidentialCandidates[party]} is the presidential candidate of ${party}`)
}