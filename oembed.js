const title = process.argv.slice(2)[0];
const oEmbed = {
  type: "rich",
  version: "1.0",
  provider_name: `${title}.naturalclar.now.sh`,
  provider_url: `https://${title}.naturalclar.now.sh/`,
  title: title,
  width: 658,
  height: 408,
  html:
    '<iframe style="width: 100%; overflow: hidden;" src="https://' +
    title +
    '.naturalclar.now.sh/" width="658" height="408" frameborder="0" scrolling="no" ></iframe>'
};
console.log(JSON.stringify(oEmbed));
