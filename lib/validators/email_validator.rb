class EmailValidator < ActiveModel::Validator
  def validate(record)
    email_field = options[:attr]
    record.errors[email_field] << "is not valid" unless
        record.send(email_field) =~ /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i
  end
end