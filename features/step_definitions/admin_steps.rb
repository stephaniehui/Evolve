Given /the following pages exist/ do |pages_table|
  pages_table.hashes.each do |page|
    # each returned element will be a hash whose key is the table header.
    # you should arrange to add that movie to the database here.
    Page.create!(page)
  end
  #flunk "Unimplemented"
end

# Make sure that one string (regexp) occurs before or after another one
#   on the same page

Then /I should see "(.*)" before "(.*)"/ do |e1, e2|
  #  ensure that that e1 occurs before e2.
  #  page.body is the entire content of the page as a string.
  assert page.body =~ /(#{e1}).*(#{e2})/m
  #flunk "Unimplemented"
end

When /I log in as administrator/ do 
  redirect_to(admin_page_path)
end

When /I (un)?check the following pages: (.*)/ do |uncheck, pages_list|
  pages_list.split(/,/).each do |r|
    if uncheck
      uncheck(r.strip)
    else
      check(r.strip)
    end
  end
end

Then /(.*) should have attribute (.*)/ do |pagename, attribute|
  # Make sure that the given page has the given attribute
  if attribute == "private"

  # Make sure that the given page has been removed from the database
  elsif attribute == "deleted"

  end
end
