import { actionChooseSeat } from "../../constant/constant";

const initialState = {
  listSeat: [],
};

export let seatReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionChooseSeat:
      let cloneListSeat = [...state.listSeat];
      let index = cloneListSeat.findIndex((item) => item === payload);

      if (index === -1) {
        cloneListSeat.push(payload);
      } else {
        cloneListSeat = cloneListSeat.filter((item) => item !== payload);
      }

      return {
        listSeat: [...cloneListSeat],
      };
    default:
      return state;
  }
};
