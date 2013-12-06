class User < ActiveRecord::Base
  has_and_belongs_to_many :roles
  devise :database_authenticatable, :recoverable, :registerable, :rememberable, :trackable, :validatable

  validates_presence_of :name
  validates_with EmailValidator, :attr => :email
  validates_uniqueness_of :name, :email, :case_sensitive => false
  #after_create :assign_default_role

  attr_accessible :name, :email, :password, :password_confirmation, :remember_me, :role_ids

  #def assign_default_role
  #  self.roles << Role.find_by_name('Contributor')
  #end
  ROLES = %w[Admin Contributor]

  def roles_string
    self.roles.map{|role| role.name}.join(", ")
  end

  def role?(role)
    !!self.roles.find_by_name(role.to_s.camelize)
  end

  def add_role(roll_name)
    role = Role.find_by_name(roll_name)
    self.roles << role
  end

  private

    def setup_default_role_for_new_users
      if self.role.blank?
        self.role = 'Contributor'
      end
    end

end
