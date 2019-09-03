# talks

naturalclar's LT slides, made with [mdx-deck](https://github.com/jxnblk/mdx-deck), deployed with [now](https://github.com/zeit/now)

## creating new slide

Creating new slide is done by [scaffdog](https://github.com/cats-oss/scaffdog)

```
yarn new slide
```

## screenshot

Screenshot is taken by [puppeteer](https://github.com/GoogleChrome/puppeteer)

```
yarn screenshot
mv card.png packages/{{title}}/assets/card.png
```

## tech stack

- [lerna](https://github.com/lerna/lerna)
- [mdx-deck](https://github.com/jxnblk/mdx-deck)
- [Code-surfer](https://github.com/pomber/code-surfer)
