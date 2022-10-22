class Payment < ApplicationRecord
        rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
        
            def index
                render json: Payment.all
            end
        
            def show 
                payment = find_payment
                render json: payment
            end 
        
        
            private
        
            def find_parcel
                Payment.find(params[:id])
            end
    
        
            def render_not_found_response
                render json: { error: 'payments not found' }, status: :not_found
            end

end
