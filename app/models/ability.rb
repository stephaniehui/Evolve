class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new # guest user

    # if the user is a guest
    if user.roles.size == 0
      can :read, [Page] #for guest without roles
      can :create, [Supporter]
    end

    # defined roles
    if user.role? :admin
      can :manage, :all
    elsif user.role? :contributor
      can :manage, [Page, Event, Petition]
      can :read, [Supporter]
    end
  end
end
