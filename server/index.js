const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});
/////////////////

app.get("/api/fortune", (req, res) => {
  const compliments = ["A lifetime friend shall soon be made.",
					 "Believe in yourself and others will too.",
					 "Believe it can be done.",
           "Change is happening in your life, so go with the flow!",
           "Don’t just spend time. Invest it.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});


////////////////


app.get("/api/wouldurather", (req, res) => {
  const compliments = ["Would you rather be 11 feet tall or nine inches tall?",
  "Would you rather lounge by the pool or on the beach?",
  "Would you rather find a rat in your kitchen or a roach in your bed?",
  "Would you rather never eat watermelon ever again or be forced to eat watermelon with every meal?",
  "Would you rather be able to take back anything you say or hear any conversation that is about you?",
];

//   // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});


// //////////////////

app.get("/api/joke", (req, res) => {
  const compliments = ["Why did the M&M go to school? He wanted to be a Smartie.",
					 "What do you call bears with no ears? B.",
					 "Rest in peace boiling water. You will be mist!",
           "Why don't scientists trust atoms? Because they make up everything!",
           "Why did the gym close down? It just didn't work out!",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

//buggy
// let newAdvice = document.querySelector('#advice')

// app.post("/api/compliment3", (req, res) => {
//   console.log(Req.body)
//   newAdvice= req.body.newAdvice
//   res.status(200).send(newAdvice)
// })

app.listen(4000, () => console.log("Server running on 4000"));


