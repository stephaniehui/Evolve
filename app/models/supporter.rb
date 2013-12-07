class Supporter < ActiveRecord::Base
  belongs_to :supportable, :polymorphic => true
  attr_accessible :email, :supportable_id, :supportable_type,
                  :name_first, :name_last, :phone_mobile, :address,
                  :updates_email, :updates_mobile, :volunteer
  validates_with EmailValidator, :attr => :email

  def supportable_type=(s_type)
    super(s_type.to_s.classify.constantize.base_class.to_s)
  end

  def create_success_text
    case self.supportable_type.to_s
      when 'Supporter'
        'You successfully signed up for emails from Evolve'
      when 'Petition'
        'You successfully signed the petition'
      when 'Event'
        'You successfully confirmed your attendance'
      else
        ''
    end
  end

  def create_failure_text
    case self.supportable_type.to_s
      when 'Supporter'
        'Failed to sign up for emails from Evolve'
      when 'Petition'
        'Failed to sign the petition'
      when 'Event'
        'Failed to confirm attendance'
      else
        ''
    end
  end

  def display_name
    if self.name_first and self.name_last
      "#{self.name_first} #{self.name_last}"
    else
      self.email
    end
  end

end
