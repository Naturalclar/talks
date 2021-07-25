const [title] = process.argv.slice(2);
const oEmbed = {
  type: "rich",
  version: "1.0",
  provider_name: `${title}.vercel.app`,
  provider_url: `https://${title}.vercel.app/`,
  title: "",
  width: 658,
  height: 408,
  html: `<iframe style="width: 100%; overflow: hidden;" src="https://${title}.naturalclar.now.sh/index.html" width="658" height="408" frameborder="0" scrolling="no" ></iframe>`,
};
console.log(JSON.stringify(oEmbed));
