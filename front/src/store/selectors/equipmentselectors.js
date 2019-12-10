import values from "lodash/values";

export const equipmentListSelector = ({equipmentState}) => ({equipments: values(equipmentState.equipments)});

export const equipmentSelector = ({equipmentState}) => ({equipment: equipmentState.equipment});
