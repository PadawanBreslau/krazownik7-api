source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.1.2"
gem 'figaro'
gem "rails", "~> 7.0.4"
gem "sprockets-rails"
gem "pg"
gem "puma", "~> 5.0"
gem "jsbundling-rails"
gem "turbo-rails"
gem "stimulus-rails"
gem "jbuilder"
gem "redis", "~> 4.0"
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]
gem "bootsnap", require: false

# Admin Panel
gem 'trestle'
gem 'trestle-active_storage', git: 'https://github.com/rzilient-club/trestle-active_storage.git', ref: '3d066c7d2c401d04d12ea346f93e1201c45454b7'
gem 'trestle-auth'
gem 'trestle-search'

group :development, :test do
  gem "debug", platforms: %i[ mri mingw x64_mingw ]
  gem 'rspec-rails', '~> 4.0'
  gem 'rubocop', '1.14', require: false
  gem 'rubocop-faker', require: false
  gem 'rubocop-performance', require: false
  gem 'rubocop-rails', require: false
  gem 'rubocop-rake', require: false
  gem 'rubocop-rspec', require: false
end

group :development do
  gem "web-console"
end

group :test do
  gem "capybara"
  gem 'factory_bot_rails'
  gem "selenium-webdriver"
  gem "webdrivers"
end
