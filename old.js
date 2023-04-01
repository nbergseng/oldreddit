const pattern = 'https://www.reddit.com/*';

function redirect(requestDetails) {
  console.log(`Redirecting: ${requestDetails.url}`);

  const redirectUrl = requestDetails.url.replace(
    'www.reddit.com',
    'old.reddit.com'
  );
  return {
    redirectUrl,
  };
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  {
    urls: [pattern],
    types: ['main_frame'],
  },
  ['blocking']
);
