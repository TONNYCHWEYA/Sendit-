require "test_helper"

class LocationAssignedControllerTest < ActionDispatch::IntegrationTest
  test "should get parcel_carrier_id:integer" do
    get location_assigned_parcel_carrier_id:integer_url
    assert_response :success
  end

  test "should get location_id:integer" do
    get location_assigned_location_id:integer_url
    assert_response :success
  end
end
