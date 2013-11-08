require 'spec_helper'

describe User do
  describe '#new' do
    it 'creates a new user given a name, email, and password' do
      user = FactoryGirl.create(:user, :static)
      user.should be_valid
    end
  end
end
