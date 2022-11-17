Trestle.resource(:challenges) do
  menu do
    item :challenges, icon: "fa fa-star"
  end

  search do |query|
    if query
      collection.where('name ILIKE ?', "%#{@query}%")
    else
      collection
    end
  end

  table do
    column :title
    column :points
    column :created_at, align: :center
    actions
  end

  form do
    row do 
      col(sm: 3) { text_field :title }
      col(sm: 2) { number_field :points }
    end

    text_area :description
  end
end
