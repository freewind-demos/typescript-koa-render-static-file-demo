import Koa from 'koa';
import KoaStatic from 'koa-static';

const app = new Koa();

app.use(KoaStatic('public'))

app.listen(3000, () => {
    console.log('http://localhost:3000');
});

