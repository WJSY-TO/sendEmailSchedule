const nodeMailer = require('nodemailer');
const fs = require('fs');
const juice = require('juice');
const ejs = require('ejs');

const transporter = nodeMailer.createTransport({
   service:  'qq',
   port: 465, //smtp
   secureConnection:true,
   auth:{
    user:'1622552511@qq.com',
    pass: 'vvlbabihujblbbed'
   }
});

 const html = fs.readFileSync('./template/index.ejs','utf8');
 const template = ejs.compile(html);
 const afterHtml = template({
     userName:'userName'
 })
 const css = fs.readFileSync('./template/index.css','utf8');
//  const afterWithInCss = juice(afterHtml);
const afterWithInCss = juice.inlineContent(afterHtml,css);

 //发送邮件
transporter.sendMail({
    to:'1622552511@qq.com',//发给谁
    html: afterWithInCss, //html模板
    from: '1622552511@qq.com', //谁发的
    subject: '吼吼吼' //主题是什么
},(err,info) =>{
     if(err){
         console.log('邮件出错了',err);
     }
});