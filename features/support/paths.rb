# TL;DR: YOU SHOULD DELETE THIS FILE
#
# This file is used by web_steps.rb, which you should also delete
#
# You have been warned
module NavigationHelpers
  # Maps a name to a path. Used by the
  #
  #   When /^I go to (.+)$/ do |page_name|
  #
  # step definition in web_steps.rb
  #
  def path_to(page_name)
    case page_name

    when /^the (Evolve )?home\s?page$/
      '/'

    when /^the (Evolve )? Admin home\s?page$/
      admin_path

    when /^the page creation page/
      new_page_path

    when /^the page index page/
      pages_path

    when /^the address (.*)/
      $1

    when /^the page (.*)/
      Page.find_by_title($1).path

    when /^(.+)'s edit page$/i
      page = Page.find_by_title($1)
      edit_page_path(page.id)

    when /^the email sign up page$/
      new_supporter_path

    # Add more mappings here.
    # Here is an example that pulls values out of the Regexp:
    #
    #   when /^(.*)'s profile page$/i
    #     user_profile_path(User.find_by_login($1))

    else
      begin
        page_name =~ /^the (.*) page$/
        path_components = $1.split(/\s+/)
        self.send(path_components.push('path').join('_').to_sym)
      rescue NoMethodError, ArgumentError
        raise "Can't find mapping from \"#{page_name}\" to a path.\n" +
          "Now, go and add a mapping in #{__FILE__}"
      end
    end
  end
end

World(NavigationHelpers)
