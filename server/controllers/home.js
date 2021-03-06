async function index(ctx) {
  await ctx.render('home/index');
}

async function about(ctx) {
  await ctx.render('home/about');
}

async function honorable(ctx) {
  ctx.body = '<img style="height: 100%;" src="/images/honorable.jpg">';
}

module.exports = { index, about, honorable };
