require('./bot')
const Koa = require('koa');
const app = new Koa();


app.use(async ctx => {
    ctx.body = 'Hello Vercel';
});

app.listen(3008, () => {
    console.log('http://localhost:3008 启动')
});