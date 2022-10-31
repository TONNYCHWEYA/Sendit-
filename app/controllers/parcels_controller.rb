class ParcelsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        render json: Parcel.all
    end

    def show 
        parcel = find_parcel
        render json: parcel
    end 

    def create
        parcel = Parcel.create!(parcel_params)
        render json: parcel, status: :created
    end

    def update
        parcel = find_parcel
        parcel.update(parcel_params)
        render json: parcel
    end

    def destroy
        parcel = find_parcel
        parcel.destroy
        head :no_content
    end

    private

    def find_parcel
        Parcel.find(params[:id])
    end

    def parcel_params
        params.permit(:description, :recipient_name, :recipient_contact, :weight, :from, :destination, :time_dispatched)
    end

    def render_not_found_response
        render json: { error: 'parcel not found' }, status: :not_found
    end


end
