FactoryGirl.define do
  factory :user do
    trait :static_email do
      email 'testing@man.net'
    end

    trait :static_password do
      password 'secretpass'
    end

    trait :static_name do
      name 'John Doe'
    end

    trait :seq_email do
      sequence(:email) {|n| "person#{n}@example.com" }
    end

    trait :seq_password do
      sequence(:password, 10000000) {|n| n }
    end

    trait :rand_name do
      sequence(:name) {|n| ('a'..'z').to_a.shuffle[0,8].join}
    end
  end
end
