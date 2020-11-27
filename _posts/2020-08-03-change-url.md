---
layout: posts
title: WebサイトURL変更 
date: 2020-08-03
categories: blog
---

コロナ禍の状況、皆様いかがお過ごしでしょうか。

こちらは感染防止対応やらオンライン授業やら、呑みに行けないやらで、妙なストレスが溜まっております。

さて、当コミュニティは「k-ruby.com」というドメインを取得しているのですが、当Webサイトは、GitHubページを利用しており、アクセスURLも [https://k-ruby.github.io/] で案内していました。

せっかく「k-ruby.com」というドメインがありますし、毎年ドメイン使用料も払っているしもったいない、ということで、この度AWSの[EC2インスタンス](https://aws.amazon.com/jp/ec2/)にてリバースプロキシサーバを立ち上げました。Amazon Linux 2にNginxを入れてちょこっと設定しただけなんですがね。。。

```Nginx
:
server {
    listen       80;
    server_name  k-ruby.com www.k-ruby.com;
    return       301 https://$host$request_uri;
}

server {
    listen       443 ssl http2 default_server;
    listen       [::]:443 ssl http2 default_server;
    server_name  k-ruby.com www.k-ruby.com;
:
    location / {
        proxy_pass https://k-ruby.github.io/;
    }
:
```

httpでアクセスしてきたときも、一応httpsにリダイレクトするようにしています。

「k-ruby.com」のドメインゾーンも [Route 53](https://aws.amazon.com/jp/route53/) にあるので、AWSさんにおんぶにだっこです。

今は、必要になったら簡単にこのようなリソースが手に入る時代になってホント楽ですね。

ついでに [Let's Encrypt](https://letsencrypt.org/ja/) にSSLサーバ証明書を取得し、セットアップしました。この設定方法もAWSのサイト「[チュートリアル: Amazon Linux 2 に SSL/TLS を設定する - Amazon Elastic Compute Cloud](https://docs.aws.amazon.com/ja_jp/AWSEC2/latest/UserGuide/SSL-on-amazon-linux-2.html)」に詳しく載っていました。ありがたいです。

```ShellSession
$ sudo wget -r --no-parent -A 'epel-release-*.rpm'  http://dl.fedoraproject.org/pub/epel/7/x86_64/Packages/e/
$ sudo rpm -Uvh  dl.fedoraproject.org/pub/epel/7/x86_64/Packages/e/epel-release-*.rpm
$ sudo yum-config-manager --enable epel*
$ sudo yum install certbot-nginx
$ sudo certbot --nginx
```

これも楽ですね～。Nginxの設定ファイルから勝手に「server_name」を読み込んで、これをFQDNとしてCSR作成して、勝手にサーバ証明書と鍵ファイルをセットして、勝手にNginxの設定ファイルを書き換えてくれるんですから。

これで、https://www.k-ruby.com のURLでも、また https://k-ruby.com のURLでもアクセス可能になりました。
