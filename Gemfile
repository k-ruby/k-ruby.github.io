source "https://rubygems.org"

# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
#gem "jekyll", "~> 3.7.3"

# This is the default theme for new Jekyll sites. You may change this to anything you like.
gem "minima", "~> 2.0"

# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
gem "github-pages", group: :jekyll_plugins

# If you have any plugins, put them here!
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.15"
  gem "jekyll-paginate"
end

group :development do
  gem "webrick"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
#gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Performance-booster for watching directories on Windows
#gem "wdm", "~> 0.1.0" if Gem.win_platform?

# Suggestions for a vulnerability of Nokogiri from GitHub. 2019-08-21
gem "nokogiri", "~> 1.18.8"
# Fix for GitHub security alerts. 2020-08-08
gem "kramdown", ">= 2.3.0"

# Fix for GitHub security alerts. 2023-08-28
gem "commonmarker", "~> 0.23.10"
gem "activesupport", "~> 6.1.7.5"
