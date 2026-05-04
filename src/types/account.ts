export interface ProfileFormData {
  fullName: string;
  email: string;
  phone: string;
  addressLine: string;
  city: string;
  postcode: string;
  country: string;
  language?: string;
}

export interface PasswordFormData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}