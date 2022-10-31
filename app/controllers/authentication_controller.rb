class AuthenticationController < ApplicationController
    skip_before_action :authorize

    def authenticate 
        user = User.find_by(username:params[:username])
        if user && user.authenticate(params[:password])
            token = encode(user_id: user.id)
            render json: {token:token, user:user}
        else
            render json: {error:"not authenticated"}
        end
    end
end
