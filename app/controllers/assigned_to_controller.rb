class AssignedToController < ApplicationController
 rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
        
            def index
                render json: AssignedTo.all
            end
        
            def show 
                assigned = find_assigned_to
                render json: assigned
            end 
        
            def create
                assigned = AssignedTo.create!(assigned_to_params)
                render json: assigned, status: :created
            end
        
            def update
                assigned = find_assigned_to
                assigned.update(assigned_to_params)
                render json: assigned, status: :updated
            end
        
            def destroy
                assigned = find_assigned_to
                assigned.destroy
                head :no_content
            end
        
            private
        
            def find_assigned_to
                AssignedTo.find(params[:id])
            end
        
            def assigned_to_params
                params.permit(:parcel_carrier_id, :parcel_id, :time_assigned, :time_completed)
            end
        
            def render_not_found_response
                render json: { error: 'parcel carrier not found' }, status: :not_found
            end
        
end
