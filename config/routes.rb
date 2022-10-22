Rails.application.routes.draw do
  get 'location_assigned/parcel_carrier_id:integer'
  get 'location_assigned/location_id:integer'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
