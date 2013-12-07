class SupporterMailer < ActionMailer::Base
  default from: "admin@evolve.com"
  
  def self.subscribe(supporter, list_id)
    @supporter = supporter
	gb = Gibbon::API.new
	gb.lists.subscribe({:id => 'list_id', :email => {:email => @supporter.email}, :merge_vars => {:FNAME => @supporter.name_first, :LNAME => @supporter.name_last}, :double_optin => false, :send_welcome => true})
  end
end
