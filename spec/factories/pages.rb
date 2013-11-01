FactoryGirl.define do
  sequence(:seq_title) {|n| n}
  sequence(:seq_content) {|n| "<p>#{n}</p>"}
  sequence(:seq_path) {|n| "/#{n}"}

  factory :page do
    trait :static_title do
      title 'New Page'
    end

    trait :static_path do
      path '/new_page'
    end

    trait :metadata do
      content_type 'content-article'
      description 'A New Page'
    end

    trait :published do
      published true
    end

    trait :unpublished do
      published false
    end

    trait :seq_title do
      title {generate(:seq_title)}
    end

    trait :seq_content do
      content {generate(:seq_content)}
    end

    trait :seq_path do
      path {generate(:seq_path)}
    end
  end
end
