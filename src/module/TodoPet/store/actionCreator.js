import * as type from "./actionTypes";

export const createPet = (data) => {
  return {
    type: type.CREATE_PET,
    payload: data,
  };
};
