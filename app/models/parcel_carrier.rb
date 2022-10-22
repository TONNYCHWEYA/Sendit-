class ParcelCarrier < ApplicationRecord
        rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
        
            def index
                render json: ParcelCarrier.all
            end
        
            def show 
                parcelcarrier = find_parcelcarrier
                render json: parcelcarrier
            end 
        
            def create
                parcelcarrier = ParcelCarrier.create!(parcelcarrier_params)
                render json: parcelcarrier, status: :created
            end
        
            def update
                parcelcarrier = find_parcelcarrier
                parcelcarrier.update(parcelcarrier_params)
                render json: parcelcarrier, status: :updated
            end
        
            def destroy
                parcelcarrier = find_parcelcarrier
                parcelcarrier.destroy
                head :no_content
            end
        
            private
        
            def find_parcelcarrier
                ParcelCarrier.find(params[:id])
            end
        
            def parcelcarrier_params
                params.permit(:employee_code, :first_name, :last_name)
            end
        
            def render_not_found_response
                render json: { error: 'parcelcarrier not found' }, status: :not_found
            end
        
end
