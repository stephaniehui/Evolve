class Petition < Form
  # attr_accessible :title, :body
  has_many :supporters
end
