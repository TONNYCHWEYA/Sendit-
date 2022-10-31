class User < ApplicationRecord
    has_secure_password
     #validates :auth_token, uniqueness: true
end
