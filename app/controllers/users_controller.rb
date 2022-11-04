class UsersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    
    def index 
        render json: User.all
    end

    def show
        user = find_user
        render json: user
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def update
        user = find_user
        user.update(user_params)
        render json: user
    end

    def destroy
        user = find_user
        user.destroy
        head :no_content
    end


    private

    def user_params
        params.permit(:first_name, :last_name,:email_address,:phone_number,:username,:password)
    end

    def find_user
        user = User.find(params[:id])
    end

    def render_not_found_response
        render json: {error: "user not found" }, status: :not_found
    end


end
