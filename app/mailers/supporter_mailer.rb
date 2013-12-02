class SupporterMailer < ActionMailer::Base
  default from: "admin@evolve.com"
  
  def welcome_email(supporter)
    @supporter = supporter
    @url  = 'http://evolve.com/'
    mail(to: @supporter.email, 
		subject: 'Welcome to Evolve!')
  end
  
  def petition_email(supporter)
    @supporter = supporter
    @url  = 'http://evolve.com/'
    mail(to: @supporter.email, 
		subject: 'Thank you for signing the petition!')
  end
  
  def mass_email(supporters, headline)
  supporters.each do |supporter|
	mail(to: supporter.email, 
		subject: headline)
end
