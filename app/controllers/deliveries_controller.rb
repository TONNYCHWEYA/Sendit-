class DeliveriesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index 
        render json: Delivery.all
    end

    def show
        delivery = find_delivery
        render json: delivery
    end

    def create
        delivery = Delivery.create!(delivery_params)
        render json: delivery, status: :created
    end

    def update
        delivery = find_delivery
        delivery.update(delivery_params)
        render json: delivery
    end

    def destroy
        delivery = find_delivery
        delivery.destroy
        head :no_content
    end

    private 

    def delivery_params
        params.permit(:recipient_name, :recipient_time)
    end

    def find_delivery
        Delivery.find(params[:id])
    end

    def render_not_found_response
        render json: { error: 'Delivery not found' }, status: :not_found
    end


end
