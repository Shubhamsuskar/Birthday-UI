import { it } from "date-fns/locale/it"

export interface Coupon {
  id: string
  title: string
  description: string
}

export interface DayData {
  day: number
  riddle: string
  answer: string
  imageUrl: string
  note: string
  coupons: Coupon[]
}

export const daysData: DayData[] = [
  {
    day: 1,
    riddle: "I have no legs, but I can run. I have no lungs, but I need air. I have no mouth, but water is my downfall. What am I?",
    answer: "fire",
    imageUrl: "/images/image 1.jpeg",
    note: "The way my eyes look for you in this moment…it’s not just love, it’s home.Even when I don’t say anything, my eyes always tell you the truth —you are the only place they want to rest on.If love had a language, it would look exactly like this.",
    coupons: [
      { id: "1-1", title: "Breakfast in Bed", description: "One lazy morning with your favorite meal served with love" },
      { id: "1-2", title: "Movie Night Pick", description: "You choose the movie, I'll bring the snacks and cuddles" },
      { id: "1-3", title: "Love Letter", description: "A handwritten love letter just for you, whenever you want" },
    ],
  },
  {
    day: 2,
    riddle: "I can fly without wings. I can cry without eyes. Wherever I go, darkness follows me. What am I?",
    answer: "cloud",
    imageUrl: "/images/image2.jpeg",
    note: "The day I followed you, I had no ideathat I was actually following my destiny.That one small click changed my everyday, my smiles, my nights.Thank you for unknowingly stepping into my life…and making it feel complete.",
    coupons: [
      { id: "2-1", title: "Sunset Walk", description: "A peaceful evening stroll, hand in hand, wherever you want" },
      { id: "2-2", title: "Warm Hug Session", description: "10 minutes of uninterrupted, world-melting hugs" },
    ],
  },
  {
    day: 3,
    riddle: "I am given to you but am used more by others. What am I?",
    answer: "name",
    imageUrl: "/images/image3.jpeg",
    note: "That day wasn’t just beautiful…it became special because of us.There are some moments we don’t explain to the world,we just keep them safe inside our hearts.This is one of those moments I’ll always protect.",
    coupons: [
      { id: "3-1", title: "Spa Evening", description: "A relaxing massage and face mask night, all for you" },
      { id: "3-2", title: "Surprise Dessert", description: "Your favorite dessert appears like magic, made with love" },
      { id: "3-3", title: "Stargazing Date", description: "A blanket under the stars, just you and me" },
    ],
  },
  {
    day: 4,
    riddle: "The more you take, the more you leave behind. What am I?",
    answer: "footsteps",
    imageUrl: "/images/image4.jpeg",
    note: "Tum jab simple hoti ho na,tab bhi meri duniya bright ho jaati hai.No filter, no extra effort —bas tum aur tumhari woh natural smile,jo bina bole mujhe shaant kar deti hai.",
    coupons: [
      { id: "4-1", title: "Cook Together", description: "We pick a recipe and cook it together with music and laughter" },
      { id: "4-2", title: "Photo Shoot", description: "A fun couple's photo session to capture our love" },
    ],
  },
  {
    day: 5,
    riddle: "I have cities but no houses, mountains but no trees, and water but no fish. What am I?",
    answer: "map",
    imageUrl: "/images/image5.jpeg",
    note: "Is simple se look mein tum mujheapni zindagi ki tasveer lagti ho.Na shor, na drama — bas sukoon.Kabhi kabhi lagta haijaise tum meri kal ho… sirf meri..",    coupons: [
      { id: "5-1", title: "Picnic Date", description: "A beautiful picnic in the park with all your favorites" },
      { id: "5-2", title: "Dance in the Kitchen", description: "Slow dancing to our favorite songs, no occasion needed" },
      { id: "5-3", title: "Sweet Nothing Notes", description: "Tiny love notes hidden for you to find all day" },
    ],
  },
  {
    day: 6,
    riddle: "I speak without a mouth and hear without ears. I have nobody, but I come alive with the wind. What am I?",
    answer: "echo",
    imageUrl: "/images/image6.jpeg",
    note: "Tumne jab meri baat maani aur waise hi ready hui,mujhe laga meri choice sirf suni nahi… samjhi bhi gayi.Tum waise hi khoobsurat ho,par us din tum meri aankhon ki tasveer ban gayi.Thank you for trusting my silly instructions.",
    coupons: [
      { id: "6-1", title: "Playlist Gift", description: "A custom playlist of songs that remind me of you" },
      { id: "6-2", title: "Late Night Drive", description: "Windows down, music up, going wherever the road takes us" },
    ],
  },
  {
    day: 7,
    riddle: "I am always hungry, I must always be fed. The finger I touch will soon turn red. What am I?",
    answer: "fire",
    imageUrl: "/images/image7.jpeg",
    note: "Tumhe is roop mein dekh karmujhe tum par aur bhi garv hua.Tumhari simplicity mein bhi ek alag si shaan hai,aur tumhari muskurahat mein mera Maharashtra.Pehli Shivjayanti saath… yaadein ban gayi.",
    coupons: [
      { id: "7-1", title: "Bubble Bath", description: "A luxurious bubble bath with candles and your favorite music" },
      { id: "7-2", title: "Breakfast Date", description: "Your favorite cafe, my treat, no rush at all" },
      { id: "7-3", title: "Compliment Jar", description: "A jar filled with 50 reasons why I adore you" },
    ],
  },
  {
    day: 8,
    riddle: "I have hands but cannot clap. I have a face but cannot smile. What am I?",
    answer: "clock",
    imageUrl: "/images/image8.jpeg",
    note: "Tumhe woh necklace pehne dekh karmujhe laga jaise meri ek chhoti si feeling tum tak pahunch gayi.It wasn’t just a gift,it was a piece of my care around your neck.Tumhara har smile us din aur zyada chamak raha tha.",
    coupons: [
      { id: "8-1", title: "Garden Stroll", description: "Exploring a botanical garden hand in hand" },
      { id: "8-2", title: "Ice Cream Date", description: "Two scoops of love at your favorite ice cream spot" },
    ],
  },
  {
    day: 9,
    riddle: "I can be cracked, made, told, and played. What am I?",
    answer: "joke",
    imageUrl: "/images/image9.jpeg",
    note: "Naya hairstyle, wahi purani pyaari si tum.Par sach kahu toh,tum har badlaav mein aur bhi khoobsurat lagti ho.Shayad wajah tumhare baal nahi,tumhari aankhon ki chamak hai.",
    coupons: [
      { id: "9-1", title: "Art Night", description: "We paint together, no skills required, just fun and love" },
      { id: "9-2", title: "Forehead Kisses", description: "Unlimited forehead kisses for an entire day" },
      { id: "9-3", title: "Bed Fort", description: "Building a cozy blanket fort and watching cartoons" },
    ],
  },
  {
    day: 10,
    riddle: "I follow you everywhere but you can never catch me. What am I?",
    answer: "shadow",
    imageUrl: "/images/image10.jpeg",
    note: "Rang sirf chehre par nahi lage the,dil par bhi lag gaye the.Hamari pehli Holi saath —thodi si sharm, thoda sa pyaar,aur bahut saari yaadein rangon ke saath.",
    coupons: [
      { id: "10-1", title: "Book Reading", description: "I read your favorite book chapter to you before bed" },
      { id: "10-2", title: "Flower Surprise", description: "Fresh flowers delivered to brighten your day" },
    ],
  },
  {
    day: 11,
    riddle: "I have keys but open no locks. I have space but there is no room. You can enter but cannot go inside. What am I?",
    answer: "keyboard",
    imageUrl: "/images/image11.jpeg",
    note: "Tumhare hoth… sach mein gulab ke pankhudi jaise lagte hain.Naram, khoobsurat, aur bilkul tumhari tarah gentle.Shayad isiliye main unhe dekh kar baar baar bhool jaata hoonki duniya mein baaki sab bhi exist karta hai.Tumhari ek muskurahat, meri saari thakaan le jaati hai",
    coupons: [
      { id: "11-1", title: "Coffee Date", description: "A cozy afternoon at our favorite coffee shop" },
      { id: "11-2", title: "Hand Massage", description: "A soothing hand massage after a long day" },
      { id: "11-3", title: "Memory Lane", description: "We look through old photos and relive our favorite moments" },
    ],
  },
  {
    day: 12,
    riddle: "I am not alive but I grow. I do not have lungs but I need air. What am I?",
    answer: "fire",
    imageUrl: "/images/image12.jpeg",
    note: "Pehli trip saath… hawa thandi thi,par tumhare paas hone se dil garam tha.Raaste thakane wale the,lekin tumhara saath unhe aasaan bana raha tha.Wahan se zyada khoobsurat, tum mere saath lag rahi thi..",
    coupons: [
      { id: "12-1", title: "Puzzle Night", description: "A 500-piece puzzle and hot chocolate, cozy evening guaranteed" },
      { id: "12-2", title: "Love Voicemail", description: "A voice note telling you everything I love about you" },
    ],
  },
  {
    day: 13,
    riddle: "What has a heart that doesn't beat?",
    answer: "artichoke",
    imageUrl: "/images/image13.jpeg",
    note: "Tum jab professional banti ho,toh tumhari aankhon mein ek alag confidence hota hai.Mujhe tumhari mehnat aur tumhara focus dono pasand hain.Office look mein bhi tumne mera dil chura liya —shayad tumhara style nahi, tumhara andaaz hi kaafi hai.",
    coupons: [
      { id: "13-1", title: "Candlelight Dinner", description: "A homemade candlelight dinner, dressed up just for you" },
      { id: "13-2", title: "Wish Granted", description: "One wish, anything you want, and I'll make it happen" },
      { id: "13-3", title: "Morning Serenade", description: "I'll sing (or try to!) your favorite song to wake you up" },
    ],
  },
  {
    day: 14,
    riddle: "I am full of holes but still hold water. What am I?",
    answer: "sponge",
    imageUrl: "/images/image14.jpeg",
    note: "Is look mein tum sirf bold nahi lag rahi thi,tum apni hi duniya ki queen lag rahi thi.Meri aankhen kuch zyada hi ruk gayi tum par,par us pal mujhe sharm nahi,sirf fakr mehsoos hua — tum meri ho.",
    coupons: [
      { id: "14-1", title: "Adventure Day", description: "A surprise adventure to a place you've never been" },
      { id: "14-2", title: "Cuddle Marathon", description: "An entire afternoon of doing nothing but cuddling" },
    ],
  },
  {
    day: 15,
    riddle: "What comes once in a minute, twice in a moment, but never in a thousand years?",
    answer: "m",
    imageUrl: "/images/image15.jpeg",
    note: "Hamare haath milte hidil ko ajeeb si shanti mil jaati hai.Jaise bina kuch bole bhisab samajh mein aa jaata ho.Tumhara haath pakad kar lagta haiki main akela nahi hoon… kabhi bhi nahi..",
    coupons: [
      { id: "15-1", title: "Baking Together", description: "Let's bake your favorite treats and eat them warm" },
      { id: "15-2", title: "Love Scrapbook", description: "A page added to our love scrapbook, documenting us" },
      { id: "15-3", title: "Feet Massage", description: "A relaxing foot massage after your long day" },
    ],
  },
  {
    day: 16,
    riddle: "What gets wetter the more it dries?",
    answer: "towel",
    imageUrl: "/images/image16.jpeg",
    note: "Is tasveer mein tumhari simplicityaur tumhare hoth dono hi dil chura lete hain.Time ke saath tum aur bhi khoobsurat hoti ja rahi ho,shayad isliye nahi ki tum badal rahi ho,par isliye ki main tumhe aur gehra mehsoos kar raha hoon..",
    coupons: [
      { id: "16-1", title: "Karaoke Night", description: "Embarrassing duets and lots of laughter, just us two" },
      { id: "16-2", title: "Dream Journal", description: "We write down our shared dreams and future plans together" },
    ],
  },
  {
    day: 17,
    riddle: "I am the beginning of everything, the end of time and space, the beginning of every end. What am I?",
    answer: "e",
    imageUrl: "/images/image17.jpeg",
    note: "Is rose ke saath maine sirf phool nahi diya tha,maine phir se apna dil tumhare haath mein rakha tha.Har baar tumhe choose karna,mujhe naya lagta hai… aur sahi bhi.Aaj bhi main tumhe waise hi propose karta hoon —poori zindagi ke liye.",
    coupons: [
      { id: "17-1", title: "Birthday Wish", description: "The biggest, most heartfelt birthday wish from my soul to yours" },
      { id: "17-2", title: "Forever Promise", description: "A promise to love you more with each passing day" },
      { id: "17-3", title: "Anything You Want", description: "Today is YOUR day. Name it, and it's yours. No limits." },
    ],
  },
]
