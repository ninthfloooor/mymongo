
const mongoose = require('mongoose');
mongoose
  .connect(
    'mongodb+srv://ninthflooor:313171add@cluster0.px3eeui.mongodb.net/?retryWrites=true&w=majority',
    {
      // useNewUrlPaser: true,
      // useUnifiedTofology: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    },
    (error,client)
  )
  .then(() => {
    console.log('MongoDB conected')
    client.db("projects");
    db.collection("todoapp").insertOne({name : "jjeong", age: "38"}, (error,results) => {
        console.log("Done!");
    });
  })
  .catch((err) => {
    console.log(err);
  });


  let db;





/* // express 로 서버띄우기 기본 문법
const express = require("express");
const app = express();
// body-parser 추가해야함
app.use(express.urlencoded({extended: true}));

const MongoClient = require("mongodb").MongoClient;
MongoClient.connect("mongodb+srv://ninthflooor:313171add@cluster0.px3eeui.mongodb.net/?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true }, function (에러, client) {
	if (에러) {
        return console.log(에러);
    } else {
        return console.log("성공")
    }
   
    
});




/* 
const MongoClient = require("mongodb").MongoClient;
MongoClient.connect(
    "mongodb+srv://ninthflooor:313171add@cluster0.px3eeui.mongodb.net/?retryWrites=true&w=majority",
    (error, client) => {
        if(error) {
            return console.log(error)        
        }
        db = client.db("projects");
        db.collection("todoapp").insertOne({name : "jjeong", age: "38"}, (error,results) => {
            console.log("Done!");
        });
        app.listen(8080, () => {
            console.log("welcome my mongo")
        });
    }); */



/* 누군가가 /pet 으로 방문을 하면 pet 관련한 안내문을 띄우기 
req=요청, res=응답 */
/*
app.get("/pet", (req, res) => {
    res.send("펫펫");
});

// html 파일 로딩하기
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// 서버 refresh 자동화 npm install -d nodemon 
// npx nodemon app

app.get('/write', function(요청, 응답) { 
    응답.sendFile(__dirname +'/write.html')
  });

// 어떤 사람이 /add 경로로 POST 요청을 하면 ??를 해주세요~
// 보낸 데이터는 req param 에 저장되어 있다.

app.post("/add", (req, res) => {
    res.send("전송완료")
    console.log(req.body.title)
    console.log(req.body.date)
    
    // DB에 저장해주세요
app.listen(8080, () => {
    console.log("welcome")
}); 
})*/