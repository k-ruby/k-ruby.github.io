---
layout: posts
title: First post
date: 2018-04-02
categories: blog
---
K-Rubyのウェブサイトは、これまでAWSのEC2でWebサーバを立ち上げて公開していましたが、
この度、[GitHub Pages]のサービスを利用してみました。
そんでもって、ついでに[Jekyll]を導入してみました。

```bash
$ git clone git@github.com:username/username.github.io.git
$ cd username.github.io
$ bundle init
$ echo "gem 'github-pages', group: :jekyll_plugins" >> Gemfile
$ bundle install --path vendor/bundle
$ bundle exec jekyll new . --force
$ bundle exec jekyll server
$ echo "/vendor" > .gitignore
$ git add .
$ git commit -m "first commit"
$ git push origin master
```

[GitHub Pages]: https://pages.github.com/
[Jekyll]: https://jekyllrb-ja.github.io/

