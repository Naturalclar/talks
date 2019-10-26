---
name: "slide"
message: "Enter Title of your slide (no space)"
root: "./packages"
output: "./packages"
ignore: []
---

# {{ input }}/deck.mdx`

```markdown
import Code from "mdx-code";
import { Notes, Head, Appear } from "mdx-deck";
import {
Avatar,
Meta,
Profile,
} from "@naturalclar/slides-components";
import { CodeSurferLayout, CodeSurferColumnLayout } from "code-surfer";
export { dracula as theme } from "code-surfer";
import "prismjs/components/prism-tsx";

<Head>
  <Meta
    title="{{ input }}"
    description="Enter description here"
    publishedAt={'{{ 'new Date().toISOString()' | eval }}'}
    host="https://{{input}}.naturalclar.now.sh"
  />
</Head>

## {{ input }}

[Venue](url)
@naturalclar

<Notes>
</Notes>

---

## About Me

<Avatar />
<Profile />

<Notes>
  まずは自己紹介です。Jesseと申します。アメリカ人です。
  去年の9月に日本に引っ越してきました。 CureAppという会社で主にReact Native と
  TypeScript を扱った医療系のアプリを開発しています。
</Notes>

---

ありがとうございました。
```

# {{ input }}/package.json`

```json
{
  "name": "{{ input }}",
  "description": "Enter description here",
  "version": "1.0.0",
  "author": "Jesse Katsumata <jesse.katsumata@gmail.com>",
  "keywords": [],
  "license": "MIT",
  "private": true,
  "scripts": {
    "build": "mdx-deck build ./deck.mdx",
    "start": "mdx-deck ./deck.mdx",
    "deploy": "now"
  },
  "dependencies": {
    "@naturalclar/slides-components": "*"
  }
}
```

# {{ input }}/now.json`

```json
{
  "version": 2,
  "project": "{{ input }}",
  "builds": [{ "src": "dist/**", "use": "@now/static" }],
  "routes": [{ "src": "/(.*)", "dest": "dist/$1" }]
}
```

# {{ input }}/assets/oembed.json`

```json
{
  "type": "rich",
  "version": "1.0",
  "provider_name": "{{ input }}.naturalclar.now.sh",
  "provider_url": "https://{{ input }}.naturalclar.now.sh/",
  "title": "{{ input }}",
  "width": 658,
  "height": 408,
  "html": "<iframe style=\"width: 100%; overflow: hidden;\" src=\"https://{{ input }}.naturalclar.now.sh/index.html\" width=\"658\" height=\"408\" frameborder=\"0\" scrolling=\"no\" ></iframe>"
}
```
