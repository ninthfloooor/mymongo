const express = require('express'); // express 임포트
const app = express(); // app생성
const mongoose = require('mongoose'); // 몽구스 임포트
const Blog = require("./models/blogs"); // blogs.js 임포트
const cors = require("cors");
app.use(express.urlencoded({ extended: true})); // body-parser 임포트
app.use(express.json()); // 이거 필요한건지 모름
app.use(cors());


// app.use(cors()); // cors 설정 (이 설정은 모든 도메인을 허용한다는 뜻 실 서비스에 대포시 주의 :> )
/* 
api

/api/blogs                 GET  모든 blog 데이터 조회
/api/blogs/blog_id         GET  _id값으로 모든 blog 데이터 조회
/api/blogs/author/author   GET  author 값으로 데이터 조회
/api/blogs/add             POST blog 데이터 생성
/api/blogs/edit            PUT  blog 데이터 수정
/api/blogs/del             DELETE blog 데이터 제거 

*/

// port 설정
const port = process.env.PORT || 8080; 

// router 설정
const router = require("./routes")(app) 

// run server
const server = app.listen(port, () => {
    console.log("Server start on port" + port)
});


// connect mongoose
let db = mongoose.connection;
db.on("error", console.error);
db.once("open", () => {
    //connected to mongodb server
    console.log("Connected Mongo!");
});

mongoose.connect("mongodb+srv://ninthflooor:313171add@cluster0.px3eeui.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true });

