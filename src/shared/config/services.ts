import { AuthService } from "../api/services/auth_service";
import { TruckService } from "../api/services/truck_service";

export const truckService = new TruckService();
export const authService = new AuthService();