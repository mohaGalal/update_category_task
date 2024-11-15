export const EMAIL_VALIDATION = {
    required :'email is required',
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message:'Email is not vaild'
    }
  }