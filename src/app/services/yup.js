import * as Yup from 'yup';

export const validUserStore = () => {
  const valid = {
    name: Yup.string().required(),
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .required()
      .min(6)
  };

  return Yup.object().shape(valid);
};

export const validUserUpdate = () => {
  const valid = {
    name: Yup.string(),
    email: Yup.string().email(),
    oldPassword: Yup.string()
      .required()
      .min(6),
    password: Yup.string()
      .min(6)
      .when('oldPassword', (oldPassword, field) => {
        return oldPassword ? field.isRequired() : field;
      }),
    confirmPassword: Yup.string().when('password', (password, field) => {
      return password ? field.required().oneOf([Yup.ref('password')]) : field;
    })
  };

  return Yup.object().shape(valid);
};

// export const validUserUpdateOld = () => {
//   const name = Yup.string();
//   const email = Yup.string().email();
//   const oldPassword = Yup.string()
//     .required()
//     .min(6);
//   const password = Yup.string()
//     .min(6)
//     .when('oldPassword', (oldPassword, field) => {
//       return oldPassword ? field.isRequired() : field;
//     });

//   const confirmPassword = Yup.string().when('password', (password, field) => {
//     return password ? field.required().oneOf([Yup.ref('password')]) : field;
//   });

//   return Yup.object().shape({
//     name,
//     email,
//     oldPassword,
//     password,
//     confirmPassword
//   });
// };
