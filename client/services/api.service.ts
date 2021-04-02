import axios from 'axios';
import { RegisterHotelDto } from './dto/register-hotel.dto';
import { ErrorResponse } from './dto/error-response';

export const register = (data: RegisterHotelDto): Promise<ErrorResponse> => {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    if (typeof value !== 'string' && value?.length > 0) {
      value.map((val) => formData.append(key, val));
    } else {
      formData.append(key.toString(), value?.toString());
    }
  });

  return axios
    .post('/api/register', formData)
    .then((response) => response.data);
};
