import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
});

interface LoginResponse {
  token: string;
}

export const login = async (username: string, password: string): Promise<LoginResponse> => {
  const response = await api.post('/login', { username, password });
  return response.data;
};

interface DepositResponse {
  message: string;
}

export const deposit = async (amount: number): Promise<DepositResponse> => {
  const response = await api.post('/deposit', { amount });
  return response.data;
};

// Outras funções de API para transferir, reverter, etc.
