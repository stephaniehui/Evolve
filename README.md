## Evolve

### Notice about testing w/ Cucumber
To load seed pages into the db, add them to db/seeds.rb, surrounded by a Rails.env.test? if block. These will be loaded when features/step_definitions/web_steps.rb is loaded

### Figaro and creating a local Admin user
To add yourself as an admin to your local configuration, create `config/application.yml` and add the following entries to it:

    ADMIN_NAME: Admin
    ADMIN_EMAIL: admin@berkeley.edu
    ADMIN_PASSWORD: mypassword

Now when you run `rake db:seed` it should create your new admin user.