---
name: "slide"
message: "Enter Title of your slide (no space)"
root: "./packages"
output: "./packages"
ignore: []
questions:
  value: 'Please enter title of the slide.'
---

# {{ inputs.value }}/deck.mdx

```markdown
import Code from "mdx-code";
import { Notes, Head, Appear } from "mdx-deck";
import {
Avatar,
Logo,
Meta,
Profile,
Title,
AlignLeft,
Header
} from "@naturalclar/slides-components";
import { CodeSurferLayout, CodeSurferColumnLayout } from "code-surfer";
import "prismjs/components/prism-tsx";

<Head>
  <Meta
    title="{{ inputs.value }}"
    description="Enter description here"
    publishedAt={'{{ 'new Date().toISOString()' | eval }}'}
    host="https://{{inputs.value}}.vercel.app"
  />
</Head>

## {{ inputs.value }}

[Venue](url)
@naturalclar

<Notes>Title</Notes>

---

<AlignLeft>

<Header>About Me</Header>

<Profile />

<Notes>Introduction</Notes>

</AlignLeft>

---

THANK YOU
```

# {{ inputs.value }}/package.json

```json
{
  "name": "{{ inputs.value }}",
  "description": "Enter description here",
  "version": "1.0.0",
  "author": "Jesse Katsumata <jesse.katsumata@gmail.com>",
  "keywords": [],
  "license": "MIT",
  "private": true,
  "scripts": {
    "build": "mdx-deck build ./deck.mdx",
    "start": "mdx-deck ./deck.mdx",
    "deploy": "vercel"
  },
  "dependencies": {
    "@naturalclar/slides-components": "*"
  }
}
```

# {{ inputs.value }}/vercel.json

```json
{
  "version": 2,
  "project": "{{ inputs.value }}",
  "builds": [{ "src": "dist/**", "use": "@now/static" }],
  "routes": [{ "src": "/(.*)", "dest": "dist/$1" }]
}
```

# {{ inputs.value }}/assets/oembed.json

```json
{
  "type": "rich",
  "version": "1.0",
  "provider_name": "{{ inputs.value }}.vercel.app",
  "provider_url": "https://{{ inputs.value }}.vercel.app/",
  "title": "{{ inputs.value }}",
  "width": 658,
  "height": 408,
  "html": "<iframe style=\"width: 100%; overflow: hidden;\" src=\"https://{{ inputs.value }}.vercel.app/index.html\" width=\"658\" height=\"408\" frameborder=\"0\" scrolling=\"no\" ></iframe>"
}
```
