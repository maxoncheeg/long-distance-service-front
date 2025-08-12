import { AuthService } from "../api/services/auth_service";
import { OrderService } from "../api/services/order_service";
import { ProfileService } from "../api/services/profile_service";
import { TruckService } from "../api/services/truck_service";

export const truckService = new TruckService();
export const authService = new AuthService();
export const profileService = new ProfileService();
export const orderService = new OrderService();
