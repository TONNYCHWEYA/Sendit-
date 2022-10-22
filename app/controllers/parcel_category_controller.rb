class ParcelCategoryController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
        
    def index
        render json: ParcelCategory.all
    end

    def show 
        parcelcat = find_parcelcat
        render json: parcelcat
    end 

    def create
        parcelcat = ParcelCategory.create!(parcel_params)
        render json: parcelcat, status: :created
    end

    def update
        parcelcat = find_parcelcat
        parcel.update(parcelcat_params)
        render json: parcelcat
    end

    def destroy
        parcelcat = find_parcelcat
        parcelcat.destroy
        head :no_content
    end

    private

    def find_parcelcat
        ParcelCategory.find(params[:id])
    end

    def parcelcat_params
        params.permit(:type)
    end

    def render_not_found_response
        render json: { error: 'parcelcategory not found' }, status: :not_found
    end
end
