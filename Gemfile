source 'http://rubygems.org'

gem 'rails', '3.2.14'
gem 'devise', '>= 2.2.3'
gem 'figaro'
gem 'ckeditor'
gem 'paperclip'

# for Heroku deployment - as described in Ap. A of ELLS book
group :development, :test do
  gem 'sqlite3'
  gem 'ruby-debug19'
  gem 'capybara'
  gem 'launchy'
  gem 'rspec-rails'
  gem 'factory_girl_rails', '>= 4.2.0'
  gem 'database_cleaner'
end

group :test do
  gem 'cucumber-rails'
  gem 'cucumber-rails-training-wheels'
  gem 'email_spec'
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

