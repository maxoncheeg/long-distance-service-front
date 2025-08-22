import { AuthService } from "../api/services/auth_service";
import { OrderService } from "../api/services/order_service";
import { ProfileService } from "../api/services/profile_service";
import { VehicleService } from "../api/services/vehicle_service";

export const vehicleService = new VehicleService();
export const authService = new AuthService();
export const profileService = new ProfileService();
export const orderService = new OrderService();
