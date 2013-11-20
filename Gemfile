source 'http://rubygems.org'

gem 'rails', '3.2.14'
gem 'devise', '>= 2.2.3'
gem 'figaro'
gem 'ckeditor'
gem 'paperclip'
gem 'aws-sdk'
gem 'bootstrap-sass', '2.3.2.0'
gem 'activeadmin'
gem 'meta_search', '>= 1.1.0.pre'

# for Heroku deployment - as described in Ap. A of ELLS book
group :development, :test do
  gem 'sqlite3'
  gem 'ruby-debug19'
end

group :test do
  gem 'cucumber-rails', :require => false
  gem 'cucumber-rails-training-wheels'
  gem 'email_spec'
  gem 'rspec-rails'
  gem 'capybara'
  gem 'launchy'
  gem 'rspec-rails'
  gem 'rubyzip',  '~> 0.9.9'
  gem 'selenium-webdriver', '2.35.0'
  gem 'factory_girl_rails', '>= 4.2.0'
  gem 'database_cleaner'
  gem 'simplecov'
end

group :production do
  gem 'pg'
end

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'therubyracer', '~> 0.12.0'
  gem 'sass-rails', '~> 3.2.6'
  gem 'coffee-rails', '~> 3.2.2'
  gem 'haml-rails', '~> 0.4'
  gem 'uglifier'
end

gem 'jquery-rails'
gem 'haml'

