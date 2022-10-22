class LocationsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        render  json: Location.all
    end

    def show
        location = find_location
        render json: location
    end

    def create
        location =Location.create!(location_params)
        render json: location, status: :created
    end
    
    def update
        location = find_location
        location.update(location_params)
        render json: location
    end

    def destroy
        location = find_location
        location.destroy
        head :no_content
    end

    private

    def find_location
        Location.find(params[:id])
    end

    def location_params
        params.permit(:street_address, :longtitude, :latitude, :city)
    end

    def render_not_found_response
        render json: { error: "location not found" }, status: :not_found
    end

end
