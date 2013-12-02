require 'spec_helper'

describe SupporterMailer do
  before :each do
    @supporter = Supporter.make("email@example.com")
  end
  
  it "should deliver the signup email" do
    # expect
    SupporterMailer.should_receive(:welcome_email).with("email@example.com")
    # when
    post :signup, "Email" => "email@example.com"
  end
  
  it "sends a welcome email to supporters who have just signed up" do
    # Send the email, then test that it got queued
    email = SupporterMailer.welcome_email('email@example.com').deliver
    ActionMailer::Base.deliveries.last.to.should == [@supporter.email]

    # Test the body of the sent email contains what we expect it to
    email.from.should == ['admin@evolve.com']
	email.to.should == ['email@example.com']
    email.subject.should == 'Welcome to Evolve!'
  end
end