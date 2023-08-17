# IssueAngularNestedLink

Show diff between ssr & client for nested links.

Use `npm run dev:ssr` to run dev server + ssr. You'll see DOM on http://localhost:4200/ produced by the angular client:

```
    <a href="/?source=outer" class="outer">
      Outer Link
      <br>
      <a href="/?source=inner" class="inner">Inner Link</a>

      <div>content behind inner, inside outer</div>
    </a>
```

But if you disable javascript (or look at the html response directly) you'll see:

```
    <a href="/?source=outer" class="outer">
      Outer Link
      <br>
    </a>

    <a href="/?source=inner" class="inner">Inner Link</a>

    <div>content behind inner, inside outer</div>
```

The DOM structure was altered. Dominos moved nested link.